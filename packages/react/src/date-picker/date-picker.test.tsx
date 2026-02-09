import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { DatePicker } from './date-picker';

const formatDate = (date: Date) =>
  date.toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

describe('DatePicker', () => {
  it('renders placeholder when no value is selected', () => {
    render(<DatePicker placeholder="Select date" />);
    expect(screen.getByText('Select date')).toBeInTheDocument();
  });

  it('renders formatted date when value is provided', () => {
    const value = new Date(2024, 0, 15);
    render(<DatePicker value={value} />);
    expect(screen.getByText(formatDate(value))).toBeInTheDocument();
  });

  it('opens the calendar when the trigger is clicked', () => {
    render(<DatePicker />);
    fireEvent.click(screen.getByRole('button', { name: /pick a date/i }));
    expect(screen.getByTestId('calendar-root')).toBeInTheDocument();
  });

  it('updates when defaultValue changes in uncontrolled mode', () => {
    const { rerender } = render(<DatePicker defaultValue={new Date(2024, 0, 10)} />);
    expect(screen.getByText(formatDate(new Date(2024, 0, 10)))).toBeInTheDocument();

    rerender(<DatePicker defaultValue={new Date(2024, 1, 20)} />);
    expect(screen.getByText(formatDate(new Date(2024, 1, 20)))).toBeInTheDocument();
  });

  it('exposes popover accessibility attributes', () => {
    render(<DatePicker />);
    const trigger = screen.getByRole('button', { name: /pick a date/i });
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });
});
