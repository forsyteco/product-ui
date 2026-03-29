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

import { clsx } from 'clsx';
import { Button } from '../button';
import styles from './calendar.module.css';

type CalendarChevronProps = React.ComponentProps<typeof ChevronLeftIcon> & {
  orientation?: 'left' | 'right' | string;
};

function CalendarChevron({ className, orientation, ...props }: CalendarChevronProps) {
  if (orientation === 'left') {
    return <ChevronLeftIcon className={clsx(styles.chevron, className)} {...props} />;
  }

  if (orientation === 'right') {
    return <ChevronRightIcon className={clsx(styles.chevron, className)} {...props} />;
  }

  return <ChevronDownIcon className={clsx(styles.chevron, className)} {...props} />;
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
      <nav className={clsx(styles.nav, className)}>
        <Button
          type="button"
          variant={buttonVariant}
          size="icon"
          className={styles['nav-button']}
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
          className={styles['nav-button']}
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
      className={clsx(
        styles['root-calendar'],
        className
      )}
      data-testid="calendar-root"
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: clsx(styles.root, defaultClassNames.root),
        months: clsx(
          styles.months,
          defaultClassNames.months
        ),
        month: clsx(styles.month, defaultClassNames.month),
        nav: clsx(defaultClassNames.nav),
        button_previous: clsx(styles['nav-button'], defaultClassNames.button_previous),
        button_next: clsx(styles['nav-button'], defaultClassNames.button_next),
        month_caption: clsx(
          styles.caption,
          defaultClassNames.month_caption
        ),
        dropdowns: clsx(
          styles.dropdowns,
          defaultClassNames.dropdowns
        ),
        dropdown_root: clsx(
          styles['dropdown-root'],
          defaultClassNames.dropdown_root
        ),
        dropdown: clsx(
          styles.dropdown,
          defaultClassNames.dropdown
        ),
        caption_label: clsx(
          styles['caption-label'],
          defaultClassNames.caption_label
        ),
        table: styles.table,
        weekdays: clsx(styles.weekdays, defaultClassNames.weekdays),
        weekday: clsx(
          styles.weekday,
          defaultClassNames.weekday
        ),
        week: clsx(styles.week, defaultClassNames.week),
        week_number_header: clsx(
          styles['week-number-header'],
          defaultClassNames.week_number_header
        ),
        week_number: clsx(
          styles['week-number'],
          defaultClassNames.week_number
        ),
        day: clsx(
          styles.day,
          defaultClassNames.day
        ),
        day_button: clsx(
          styles['day-button'],
          defaultClassNames.day_button
        ),
        range_start: clsx(
          styles['range-start'],
          defaultClassNames.range_start
        ),
        range_middle: clsx(
          styles['range-middle'],
          defaultClassNames.range_middle
        ),
        range_end: clsx(
          styles['range-end'],
          defaultClassNames.range_end
        ),
        selected: clsx(
          styles.selected,
          defaultClassNames.selected
        ),
        today: clsx(styles.today, defaultClassNames.today),
        outside: clsx(
          styles.outside,
          defaultClassNames.outside
        ),
        disabled: clsx(styles.disabled, defaultClassNames.disabled),
        hidden: clsx(styles.hidden, defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              data-calendar-submit-ignore="true"
              ref={rootRef}
              className={clsx(className)}
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
              <div className={styles['week-number-cell']}>
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
      className={clsx(className)}
    />
  );
}

export { Calendar, CalendarDayButton, CalendarChevron }