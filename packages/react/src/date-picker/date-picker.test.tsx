import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  describe('when value is provided', () => {
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
    it('should open the calendar', () => {
      // Arrange
      render(<DatePicker />);

      // Act
      fireEvent.click(screen.getByRole('button', { name: /pick a date/i }));

      // Assert
      expect(screen.getByTestId('calendar-root')).toBeInTheDocument();
    });
  });

  describe('when used in uncontrolled mode with defaultValue', () => {
    it('should update when defaultValue changes', () => {
      // Arrange
      // Act
      const { rerender } = render(<DatePicker defaultValue={new Date(2024, 0, 10)} />);

      // Assert
      expect(screen.getByText(formatDate(new Date(2024, 0, 10)))).toBeInTheDocument();

      // Act
      rerender(<DatePicker defaultValue={new Date(2024, 1, 20)} />);

      // Assert
      expect(screen.getByText(formatDate(new Date(2024, 1, 20)))).toBeInTheDocument();
    });
  });

  describe('when the popover trigger is rendered', () => {
    it('should expose popover accessibility attributes before and after open', () => {
      // Arrange
      // Act
      render(<DatePicker />);

      // Assert
      const trigger = screen.getByRole('button', { name: /pick a date/i });
      expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      // Act
      fireEvent.click(trigger);

      // Assert
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('when used in controlled mode', () => {
    it('should call onValueChange and close the calendar after selecting a date', async () => {
      // Arrange
      const onValueChange = vi.fn();
      const selectedDate = new Date(2024, 0, 15);

      // Act
      render(<DatePicker value={selectedDate} onValueChange={onValueChange} />);
      fireEvent.click(screen.getByRole('button', { name: /selected date/i }));
      fireEvent.click(screen.getByRole('button', { name: /january 20.*2024/i }));

      // Assert
      const selectedFromCallback = onValueChange.mock.calls[0][0] as Date;
      expect(selectedFromCallback).toBeInstanceOf(Date);
      expect(selectedFromCallback.getFullYear()).toBe(2024);
      expect(selectedFromCallback.getMonth()).toBe(0);
      expect(selectedFromCallback.getDate()).toBe(20);
      await waitFor(() => {
        expect(screen.queryByTestId('calendar-root')).not.toBeInTheDocument();
      });
    });
  });

  describe('when disabled is true', () => {
    it('should not open the calendar when the trigger is clicked', () => {
      // Arrange
      render(<DatePicker disabled />);

      // Act
      fireEvent.click(screen.getByRole('button', { name: /pick a date/i }));

      // Assert
      expect(screen.queryByTestId('calendar-root')).not.toBeInTheDocument();
    });
  });

  describe('when formatDate throws', () => {
    it('should fall back to the default formatter', () => {
      // Arrange
      const value = new Date(2024, 2, 5);

      // Act
      render(
        <DatePicker
          value={value}
          formatDate={() => {
            throw new Error('format failure');
          }}
        />
      );

      // Assert
      expect(screen.getByText(formatDate(value))).toBeInTheDocument();
    });
  });
});
