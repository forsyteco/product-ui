import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '#test-utils';
import userEvent from '@testing-library/user-event';
import { Calendar, CalendarChevron, CalendarDayButton } from './calendar';

describe('Calendar', () => {
  describe('when rendered with default props', () => {
    it('should render the calendar root', () => {
      // Arrange
      // Act
      render(<Calendar />);

      // Assert
      expect(screen.getByTestId('calendar-root')).toBeInTheDocument();
    });
  });

  describe('when navigating months', () => {
    it('should call prev and next handlers', async () => {
      // Arrange
      const user = userEvent.setup();
      const onPrevClick = vi.fn();
      const onNextClick = vi.fn();
      render(
        <Calendar
          initialMonth={new Date(2024, 0, 1)}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
      );

      // Act
      await user.click(screen.getByLabelText(/previous month/i));
      await user.click(screen.getByLabelText(/next month/i));

      // Assert
      expect(onPrevClick).toHaveBeenCalled();
      expect(onNextClick).toHaveBeenCalled();
    });
  });

  describe('when disableNavigation is true', () => {
    it('should disable nav buttons', () => {
      // Arrange
      // Act
      render(
        <Calendar
          initialMonth={new Date(2024, 0, 1)}
          disableNavigation
        />
      );

      // Assert
      expect(screen.getByLabelText(/previous month/i)).toBeDisabled();
      expect(screen.getByLabelText(/next month/i)).toBeDisabled();
    });

    it('should remove disabled nav buttons from tab order', () => {
      // Arrange
      // Act
      render(
        <Calendar
          initialMonth={new Date(2024, 0, 1)}
          disableNavigation
        />
      );

      // Assert
      expect(screen.getByLabelText(/previous month/i)).toHaveAttribute('tabindex', '-1');
      expect(screen.getByLabelText(/next month/i)).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using dropdown caption layout', () => {
    it('should apply a custom month formatter', () => {
      // Arrange
      // Act
      render(
        <Calendar
          initialMonth={new Date(2024, 0, 1)}
          captionLayout="dropdown"
          formatters={{
            formatMonthDropdown: () => 'Mon',
          }}
        />
      );

      // Assert
      expect(screen.getAllByText('Mon').length).toBeGreaterThan(0);
    });
  });

  describe('when showWeekNumber is true', () => {
    it('should render week numbers', () => {
      // Arrange
      // Act
      render(<Calendar initialMonth={new Date(2024, 0, 1)} showWeekNumber />);

      // Assert
      expect(document.querySelectorAll('.rdp-week_number').length).toBeGreaterThan(0);
    });
  });
});

describe('CalendarDayButton', () => {
  describe('when the focused modifier is true', () => {
    it('should focus the day button', () => {
      // Arrange
      // Act
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

      // Assert
      const focused = document.activeElement as HTMLElement | null;
      expect(focused?.dataset.day).toBe(new Date('2024-01-01').toLocaleDateString());
    });
  });

  describe('when rendered for a day', () => {
    it('should expose an accessible label', () => {
      // Arrange
      // Act
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

      // Assert
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
  });
});

describe('CalendarChevron', () => {
  describe('when orientation is down', () => {
    it('should render the down chevron icon', () => {
      // Arrange
      // Act
      const { container } = render(<CalendarChevron orientation="down" />);

      // Assert
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });
});
