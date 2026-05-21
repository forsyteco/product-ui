import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CountryCombobox } from './country-combobox';
import type { CountryComboboxOption } from './country-combobox';

const options: CountryComboboxOption[] = [
  { id: 'gb', label: 'United Kingdom', value: 'gb', isoCode: 'GB' },
  { id: 'fr', label: 'France', value: 'fr', isoCode: 'FR' },
  { id: 'de', label: 'Germany', value: 'de', isoCode: 'DE' },
];

describe('CountryCombobox', () => {
  describe('when a country is selected', () => {
    it('should render the Twemoji flag beside the country name in the list', async () => {
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
      expect(flag).toHaveAttribute('src', expect.stringContaining('twemoji'));
      expect(flag).toHaveAttribute('src', expect.stringContaining('1f1ec-1f1e7'));
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
      expect(inputFlag).toHaveAttribute('src', expect.stringContaining('1f1ec-1f1e7'));
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
});
