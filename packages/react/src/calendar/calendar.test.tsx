import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Calendar, CalendarChevron, CalendarDayButton } from './calendar';

describe('Calendar', () => {
  it('renders the calendar root', () => {
    render(<Calendar />);
    const root = screen.getByTestId('calendar-root');
    expect(root).toBeInTheDocument();
  });

  it('calls nav handlers when navigating months', () => {
    const onPrevClick = vi.fn();
    const onNextClick = vi.fn();
    render(
      <Calendar
        initialMonth={new Date(2024, 0, 1)}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    );

    const prev = screen.getByLabelText(/previous month/i);
    const next = screen.getByLabelText(/next month/i);

    fireEvent.click(prev);
    fireEvent.click(next);

    expect(onPrevClick).toHaveBeenCalled();
    expect(onNextClick).toHaveBeenCalled();
  });

  it('disables nav buttons when navigation is turned off', () => {
    render(
      <Calendar
        initialMonth={new Date(2024, 0, 1)}
        disableNavigation
      />
    );

    const prev = screen.getByLabelText(/previous month/i);
    const next = screen.getByLabelText(/next month/i);

    expect(prev).toBeDisabled();
    expect(next).toBeDisabled();
  });

  it('removes disabled nav buttons from tab order', () => {
    render(
      <Calendar
        initialMonth={new Date(2024, 0, 1)}
        disableNavigation
      />
    );

    const prev = screen.getByLabelText(/previous month/i);
    const next = screen.getByLabelText(/next month/i);

    expect(prev).toHaveAttribute('tabindex', '-1');
    expect(next).toHaveAttribute('tabindex', '-1');
  });

  it('applies custom month formatter when using dropdown caption', () => {
    render(
      <Calendar
        initialMonth={new Date(2024, 0, 1)}
        captionLayout="dropdown"
        formatters={{
          formatMonthDropdown: () => 'Mon',
        }}
      />
    );

    expect(screen.getAllByText('Mon').length).toBeGreaterThan(0);
  });

  it('renders week numbers when enabled', () => {
    render(<Calendar initialMonth={new Date(2024, 0, 1)} showWeekNumber />);
    const weekNumbers = document.querySelectorAll('.rdp-week_number');
    expect(weekNumbers.length).toBeGreaterThan(0);
  });

  it('focuses day button when focused modifier is true', () => {
    render(
      <CalendarDayButton
        day={{
          date: new Date('2024-01-01'),
          displayIndex: 0,
          displayMonth: new Date('2024-01-01'),
        }}
        modifiers={{ focused: true }}
      />
    );

    const focused = document.activeElement as HTMLElement | null;
    expect(focused?.dataset.day).toBe(new Date('2024-01-01').toLocaleDateString());
  });

  it('adds an accessible label to day buttons', () => {
    render(
      <CalendarDayButton
        day={{
          date: new Date('2024-01-01'),
          displayIndex: 0,
          displayMonth: new Date('2024-01-01'),
        }}
        modifiers={{ focused: false }}
      />
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      new Date('2024-01-01').toLocaleDateString('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  });

  it('renders chevron fallback for non-left/right orientations', () => {
    const { container } = render(<CalendarChevron orientation="down" />);
    expect(container.querySelector('.lucide-chevron-down')).toBeInTheDocument();
  });
});


