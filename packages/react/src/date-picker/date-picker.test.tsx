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
  it('should render placeholder when no value is selected', () => {
    // Arrange
    render(<DatePicker placeholder="Select date" />);

    // Assert
    expect(screen.getByText('Select date')).toBeInTheDocument();
  });

  it('should render formatted date when value is provided', () => {
    // Arrange
    const value = new Date(2024, 0, 15);
    render(<DatePicker value={value} />);

    // Assert
    expect(screen.getByText(formatDate(value))).toBeInTheDocument();
  });

  it('should open the calendar when the trigger is clicked', () => {
    // Arrange
    render(<DatePicker />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: /pick a date/i }));

    // Assert
    expect(screen.getByTestId('calendar-root')).toBeInTheDocument();
  });

  it('should update when defaultValue changes in uncontrolled mode', () => {
    // Arrange
    const { rerender } = render(<DatePicker defaultValue={new Date(2024, 0, 10)} />);

    // Assert
    expect(screen.getByText(formatDate(new Date(2024, 0, 10)))).toBeInTheDocument();

    // Act
    rerender(<DatePicker defaultValue={new Date(2024, 1, 20)} />);

    // Assert
    expect(screen.getByText(formatDate(new Date(2024, 1, 20)))).toBeInTheDocument();
  });

  it('should expose popover accessibility attributes', () => {
    // Arrange
    render(<DatePicker />);
    const trigger = screen.getByRole('button', { name: /pick a date/i });

    // Assert
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    // Act
    fireEvent.click(trigger);

    // Assert
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('should call onValueChange and close calendar in controlled mode', async () => {
    // Arrange
    const onValueChange = vi.fn();
    const selectedDate = new Date(2024, 0, 15);
    render(<DatePicker value={selectedDate} onValueChange={onValueChange} />);
    fireEvent.click(screen.getByRole('button', { name: /selected date/i }));

    // Act
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

  it('should not open calendar when disabled is true', () => {
    // Arrange
    render(<DatePicker disabled />);

    // Act
    fireEvent.click(screen.getByRole('button', { name: /pick a date/i }));

    // Assert
    expect(screen.queryByTestId('calendar-root')).not.toBeInTheDocument();
  });

  it('should fall back to default formatter when custom formatDate throws', () => {
    // Arrange
    const value = new Date(2024, 2, 5);
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
