import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Calendar, CalendarChevron, CalendarDayButton } from './calendar';

describe('Calendar', () => {
  describe('when rendered with default props', () => {
    it('should render the calendar root', () => {
      // Arrange
      render(<Calendar />);

      // Act
      const root = screen.getByTestId('calendar-root');

      // Assert
      expect(root).toBeInTheDocument();
    });
  });

  describe('when month navigation is used', () => {
    it('should call nav handlers when navigating months', () => {
      // Arrange
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

      // Act
      fireEvent.click(prev);
      fireEvent.click(next);

      // Assert
      expect(onPrevClick).toHaveBeenCalled();
      expect(onNextClick).toHaveBeenCalled();
    });
  });

  describe('when disableNavigation is true', () => {
    it('should disable nav buttons when navigation is turned off', () => {
      // Arrange
      render(
        <Calendar
          initialMonth={new Date(2024, 0, 1)}
          disableNavigation
        />
      );

      // Act
      const prev = screen.getByLabelText(/previous month/i);
      const next = screen.getByLabelText(/next month/i);

      // Assert
      expect(prev).toBeDisabled();
      expect(next).toBeDisabled();
    });

    it('should remove disabled nav buttons from tab order', () => {
      // Arrange
      render(
        <Calendar
          initialMonth={new Date(2024, 0, 1)}
          disableNavigation
        />
      );

      // Act
      const prev = screen.getByLabelText(/previous month/i);
      const next = screen.getByLabelText(/next month/i);

      // Assert
      expect(prev).toHaveAttribute('tabindex', '-1');
      expect(next).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when captionLayout is dropdown', () => {
    it('should apply custom month formatter when using dropdown caption', () => {
      // Arrange
      render(
        <Calendar
          initialMonth={new Date(2024, 0, 1)}
          captionLayout="dropdown"
          formatters={{
            formatMonthDropdown: () => 'Mon',
          }}
        />
      );

      // Act
      const monthLabels = screen.getAllByText('Mon');

      // Assert
      expect(monthLabels.length).toBeGreaterThan(0);
    });
  });

  describe('when showWeekNumber is true', () => {
    it('should render week numbers when enabled', () => {
      // Arrange
      render(<Calendar initialMonth={new Date(2024, 0, 1)} showWeekNumber />);

      // Act
      const weekNumbers = document.querySelectorAll('.rdp-week_number');

      // Assert
      expect(weekNumbers.length).toBeGreaterThan(0);
    });
  });
});

describe('CalendarDayButton', () => {
  describe('when the focused modifier is true', () => {
    it('should focus day button when focused modifier is true', () => {
      // Arrange
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

      // Act
      const focused = document.activeElement as HTMLElement | null;

      // Assert
      expect(focused?.dataset.day).toBe(new Date('2024-01-01').toLocaleDateString());
    });
  });

  describe('when the focused modifier is false', () => {
    it('should add an accessible label to day buttons', () => {
      // Arrange
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

      // Act
      const button = screen.getByRole('button');

      // Assert
      expect(button).toHaveAttribute(
        'aria-label',
        new Date('2024-01-01').toLocaleDateString('en', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      );
    });
  });
});

describe('CalendarChevron', () => {
  describe('when orientation is not left or right', () => {
    it('should render chevron fallback for non-left/right orientations', () => {
      // Arrange
      const { container } = render(<CalendarChevron orientation="down" />);

      // Act
      const chevron = container.querySelector('.lucide-chevron-down');

      // Assert
      expect(chevron).toBeInTheDocument();
    });
  });
});
