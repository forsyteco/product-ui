import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '#test-utils';
import userEvent from '@testing-library/user-event';
import { CountryCombobox } from './country-combobox';
import type { CountryComboboxOption } from './country-combobox';

const options: CountryComboboxOption[] = [
  { id: 'gb', label: 'United Kingdom', value: 'gb' },
  { id: 'fr', label: 'France', value: 'fr' },
  { id: 'de', label: 'Germany', value: 'de' },
];

describe('CountryCombobox', () => {
  describe('when a country is selected', () => {
    it('should render the country flag beside the country name in the list', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <CountryCombobox
          options={options}
          placeholder="Select a country..."
        />
      );

      // Act
      await user.click(screen.getByRole('combobox'));
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });

      // Assert
      const unitedKingdomOption = screen.getByRole('option', { name: /United Kingdom/i });
      const flag = unitedKingdomOption.querySelector('img');
      expect(flag).toBeInTheDocument();
      expect(flag?.getAttribute('src')).toContain('GB');
    });

    it('should show the selected flag in the input', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <CountryCombobox
          options={options}
          value={options[0]}
          onChange={handleChange}
          placeholder="Select a country..."
        />
      );

      // Assert
      const input = screen.getByDisplayValue('United Kingdom');
      const inputFlag = input.parentElement?.querySelector('img');
      expect(inputFlag).toBeInTheDocument();
      expect(inputFlag?.getAttribute('src')).toContain('GB');
    });
  });

  describe('when the user types a search query', () => {
    it('should hide the selected flag while the query differs from the label', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <CountryCombobox
          options={options}
          value={options[0]}
          placeholder="Select a country..."
        />
      );

      // Act
      const input = screen.getByDisplayValue('United Kingdom');
      await user.clear(input);
      await user.type(input, 'Fra');

      // Assert
      expect(input.parentElement?.querySelector('img')).not.toBeInTheDocument();
    });
  });

  describe('when quick select is enabled', () => {
    it('should set the country when the quick select button is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <CountryCombobox
          options={options}
          quickSelect={options[0]}
          onChange={handleChange}
          placeholder="Select a country..."
        />
      );

      // Act
      await user.click(screen.getByRole('button', { name: /select united kingdom/i }));

      // Assert
      expect(handleChange).toHaveBeenCalledWith(options[0]);
      expect(screen.getByDisplayValue('United Kingdom')).toBeInTheDocument();
    });
  });

  describe('when the user enters an invalid country and blurs the field', () => {
    it('should show an error and revert to the previous selection', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <CountryCombobox
          options={options}
          value={options[0]}
          onChange={handleChange}
          placeholder="Select a country..."
        />
      );

      // Act
      const input = screen.getByDisplayValue('United Kingdom');
      await user.clear(input);
      await user.type(input, 'Atlantis');
      input.blur();

      // Assert
      await waitFor(() => {
        expect(screen.getByRole('alert')).toHaveTextContent('Select a country from the list');
      });
      expect(screen.getByDisplayValue('United Kingdom')).toBeInTheDocument();
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('when the field is required and left empty on blur', () => {
    it('should show a required error', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <CountryCombobox
          options={options}
          required
          placeholder="Select a country..."
        />
      );

      // Act
      const input = screen.getByRole('combobox');
      await user.click(input);
      input.blur();

      // Assert
      await waitFor(() => {
        expect(screen.getByRole('alert')).toHaveTextContent('Country is required');
      });
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('when the user types a valid ISO code and blurs the field', () => {
    it('should select the matching country', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <CountryCombobox
          options={options}
          onChange={handleChange}
          placeholder="Select a country..."
        />
      );

      // Act
      const input = screen.getByRole('combobox');
      await user.type(input, 'fr');
      await user.tab();

      // Assert
      expect(handleChange).toHaveBeenLastCalledWith(options[1]);
      expect(screen.getByDisplayValue('France')).toBeInTheDocument();
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
  });
});
