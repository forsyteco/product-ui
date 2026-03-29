import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Listbox } from './listbox';

const options = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

describe('Listbox', () => {
  describe('when rendered with options', () => {
    it('should render the listbox component', () => {
      // Arrange
      render(<Listbox options={options} />);

      // Act
      const placeholder = screen.getByText('Select an option...');

      // Assert
      expect(placeholder).toBeInTheDocument();
    });
  });

  describe('when a value is selected', () => {
    it('should display selected value', () => {
      // Arrange
      render(<Listbox options={options} value={options[0]} />);

      // Act
      const selected = screen.getByText('Option 1');

      // Assert
      expect(selected).toBeInTheDocument();
    });
  });

  describe('when the user picks an option', () => {
    it('should call onChange when option is selected', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Listbox options={options} onChange={handleChange} />);

      // Act
      await user.click(screen.getByRole('button'));
      await user.click(screen.getByRole('option', { name: 'Option 2' }));

      // Assert
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(options[1]);
    });
  });
});
