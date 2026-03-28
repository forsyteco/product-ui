'use client';

import * as React from 'react';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import {
  DayPicker,
  getDefaultClassNames,
  labelNext,
  labelPrevious,
  type DayButton,
  type NavProps,
  useDayPicker,
} from 'react-day-picker';

import { cn } from '../utils/cn';
import { Button } from '../button';
import styles from './calendar.module.css';

type CalendarChevronProps = React.ComponentProps<typeof ChevronLeftIcon> & {
  orientation?: 'left' | 'right' | string;
};

function CalendarChevron({ className, orientation, ...props }: CalendarChevronProps) {
  if (orientation === 'left') {
    return <ChevronLeftIcon className={cn(styles.chevron, className)} {...props} />;
  }

  if (orientation === 'right') {
    return <ChevronRightIcon className={cn(styles.chevron, className)} {...props} />;
  }

  return <ChevronDownIcon className={cn(styles.chevron, className)} {...props} />;
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}) {
  const defaultClassNames = getDefaultClassNames();

  function Nav({ className }: NavProps) {
    const {
      nextMonth,
      previousMonth,
      goToMonth,
      dayPickerProps: { onPrevClick, onNextClick },
    } = useDayPicker();

    const isPreviousDisabled = !previousMonth;
    const isNextDisabled = !nextMonth;

    const handlePreviousClick = () => {
      if (!previousMonth) return;
      goToMonth(previousMonth);
      onPrevClick?.(previousMonth);
    };

    const handleNextClick = () => {
      if (!nextMonth) return;
      goToMonth(nextMonth);
      onNextClick?.(nextMonth);
    };

    return (
      <nav className={cn(styles.nav, className)}>
        <Button
          type="button"
          variant={buttonVariant}
          size="icon"
          className={styles.navButton}
          tabIndex={isPreviousDisabled ? -1 : undefined}
          disabled={isPreviousDisabled}
          aria-label={labelPrevious(previousMonth)}
          onClick={handlePreviousClick}
        >
          <ChevronLeftIcon className={styles.chevron} />
        </Button>

        <Button
          type="button"
          variant={buttonVariant}
          size="icon"
          className={styles.navButton}
          tabIndex={isNextDisabled ? -1 : undefined}
          disabled={isNextDisabled}
          aria-label={labelNext(nextMonth)}
          onClick={handleNextClick}
        >
          <ChevronRightIcon className={styles.chevron} />
        </Button>
      </nav>
    );
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        styles.rootCalendar,
        className
      )}
      data-testid="calendar-root"
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn(styles.root, defaultClassNames.root),
        months: cn(
          styles.months,
          defaultClassNames.months
        ),
        month: cn(styles.month, defaultClassNames.month),
        nav: cn(defaultClassNames.nav),
        button_previous: cn(styles.navButton, defaultClassNames.button_previous),
        button_next: cn(styles.navButton, defaultClassNames.button_next),
        month_caption: cn(
          styles.caption,
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          styles.dropdowns,
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          styles.dropdownRoot,
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          styles.dropdown,
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          styles.captionLabel,
          defaultClassNames.caption_label
        ),
        table: styles.table,
        weekdays: cn(styles.weekdays, defaultClassNames.weekdays),
        weekday: cn(
          styles.weekday,
          defaultClassNames.weekday
        ),
        week: cn(styles.week, defaultClassNames.week),
        week_number_header: cn(
          styles.weekNumberHeader,
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          styles.weekNumber,
          defaultClassNames.week_number
        ),
        day: cn(
          styles.day,
          defaultClassNames.day
        ),
        day_button: cn(
          styles.dayButton,
          defaultClassNames.day_button
        ),
        range_start: cn(
          styles.rangeStart,
          defaultClassNames.range_start
        ),
        range_middle: cn(
          styles.rangeMiddle,
          defaultClassNames.range_middle
        ),
        range_end: cn(
          styles.rangeEnd,
          defaultClassNames.range_end
        ),
        selected: cn(
          styles.selected,
          defaultClassNames.selected
        ),
        today: cn(styles.today, defaultClassNames.today),
        outside: cn(
          styles.outside,
          defaultClassNames.outside
        ),
        disabled: cn(styles.disabled, defaultClassNames.disabled),
        hidden: cn(styles.hidden, defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              data-calendar-submit-ignore="true"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: (props) => <CalendarChevron {...props} />,
        Nav,
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className={styles.weekNumberCell}>
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      data-day={day.date.toLocaleDateString()}
      aria-label={day.date.toLocaleDateString('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
      {...props}
      type="button"
      className={cn(className)}
    />
  );
}

export { Calendar, CalendarDayButton, CalendarChevron }