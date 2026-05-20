import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup } from './radio-group';

const options = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

describe('RadioGroup', () => {
  describe('when options are provided', () => {
    it('should render the radio group component', () => {
      // Arrange
      render(<RadioGroup options={options} />);

      // Act
      const option1 = screen.getByText('Option 1');
      const option2 = screen.getByText('Option 2');
      const option3 = screen.getByText('Option 3');

      // Assert
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
      expect(option3).toBeInTheDocument();
    });
  });

  describe('when a value is selected', () => {
    it('should display selected value', () => {
      // Arrange
      render(<RadioGroup options={options} value="option1" />);

      // Act
      const option1 = screen.getByText('Option 1').closest('[role="radio"]');

      // Assert
      expect(option1).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('when the user selects an option', () => {
    it('should call onChange when option is selected', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<RadioGroup options={options} onChange={handleChange} />);

      // Act
      await user.click(screen.getByRole('radio', { name: 'Option 2' }));

      // Assert
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith('option2');
    });
  });
});
