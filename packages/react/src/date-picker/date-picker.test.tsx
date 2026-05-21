import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from './date-picker';

const formatDate = (date: Date) =>
  date.toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

describe('DatePicker', () => {
  describe('when no value is selected', () => {
    it('should render the placeholder', () => {
      // Arrange
      // Act
      render(<DatePicker placeholder="Select date" />);

      // Assert
      expect(screen.getByText('Select date')).toBeInTheDocument();
    });
  });

  describe('when a value is provided', () => {
    it('should render the formatted date', () => {
      // Arrange
      const value = new Date(2024, 0, 15);

      // Act
      render(<DatePicker value={value} />);

      // Assert
      expect(screen.getByText(formatDate(value))).toBeInTheDocument();
    });
  });

  describe('when the trigger is clicked', () => {
    it('should open the calendar', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker />);

      // Act
      await user.click(screen.getByRole('button', { name: /pick a date/i }));

      // Assert
      expect(screen.getByTestId('calendar-root')).toBeInTheDocument();
    });
  });

  describe('when defaultValue changes in uncontrolled mode', () => {
    it('should update the displayed date', () => {
      // Arrange
      const { rerender } = render(<DatePicker defaultValue={new Date(2024, 0, 10)} />);

      // Assert
      expect(screen.getByText(formatDate(new Date(2024, 0, 10)))).toBeInTheDocument();

      // Act
      rerender(<DatePicker defaultValue={new Date(2024, 1, 20)} />);

      // Assert
      expect(screen.getByText(formatDate(new Date(2024, 1, 20)))).toBeInTheDocument();
    });
  });

  describe('when checking accessibility attributes', () => {
    it('should expose popover semantics on the trigger', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker />);
      const trigger = screen.getByRole('button', { name: /pick a date/i });

      // Assert
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      // Act
      await user.click(trigger);

      // Assert
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });
});
