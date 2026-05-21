'use client';

import * as React from 'react';
import { clsx } from 'clsx';
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

import { Button, buttonVariants } from '../button';
import { normalizeButtonVariant } from '../button/button-variants';
import styles from './calendar.module.css';

type CalendarChevronProps = React.ComponentProps<typeof ChevronLeftIcon> & {
  orientation?: 'left' | 'right' | string;
};

function CalendarChevron({ className, orientation, ...props }: CalendarChevronProps) {
  if (orientation === 'left') {
    return <ChevronLeftIcon className={clsx(styles.chevronIcon, className)} {...props} />;
  }

  if (orientation === 'right') {
    return <ChevronRightIcon className={clsx(styles.chevronIcon, className)} {...props} />;
  }

  return <ChevronDownIcon className={clsx(styles.chevronIcon, className)} {...props} />;
}

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();
  const normalizedButtonVariant = normalizeButtonVariant(buttonVariant);

  function Nav({ className: navClassName }: NavProps) {
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
      <nav className={clsx(styles.nav, navClassName)}>
        <Button
          type="button"
          variant={normalizedButtonVariant}
          size="icon"
          className={styles.navButton}
          tabIndex={isPreviousDisabled ? -1 : undefined}
          disabled={isPreviousDisabled}
          aria-label={labelPrevious(previousMonth)}
          onClick={handlePreviousClick}
        >
          <ChevronLeftIcon className={styles.chevronIcon} />
        </Button>

        <Button
          type="button"
          variant={normalizedButtonVariant}
          size="icon"
          className={styles.navButton}
          tabIndex={isNextDisabled ? -1 : undefined}
          disabled={isNextDisabled}
          aria-label={labelNext(nextMonth)}
          onClick={handleNextClick}
        >
          <ChevronRightIcon className={styles.chevronIcon} />
        </Button>
      </nav>
    );
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={clsx(styles.calendar, className)}
      data-testid="calendar-root"
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: clsx(styles.dayPickerRoot, defaultClassNames.root),
        months: clsx(styles.months, defaultClassNames.months),
        month: clsx(styles.month, defaultClassNames.month),
        nav: clsx(styles.nav, defaultClassNames.nav),
        button_previous: clsx(
          buttonVariants({ variant: normalizedButtonVariant }),
          styles.navControl,
          defaultClassNames.button_previous
        ),
        button_next: clsx(
          buttonVariants({ variant: normalizedButtonVariant }),
          styles.navControl,
          defaultClassNames.button_next
        ),
        month_caption: clsx(styles.monthCaption, defaultClassNames.month_caption),
        dropdowns: clsx(styles.dropdowns, defaultClassNames.dropdowns),
        dropdown_root: clsx(styles.dropdownRoot, defaultClassNames.dropdown_root),
        dropdown: clsx(styles.dropdown, defaultClassNames.dropdown),
        caption_label: clsx(
          styles.captionLabel,
          captionLayout === 'label' ? styles.captionLabelLabel : styles.captionLabelDropdown,
          defaultClassNames.caption_label
        ),
        table: clsx(styles.table, defaultClassNames.table),
        weekdays: clsx(styles.weekdays, defaultClassNames.weekdays),
        weekday: clsx(styles.weekday, defaultClassNames.weekday),
        week: clsx(styles.week, defaultClassNames.week),
        week_number_header: clsx(styles.weekNumberHeader, defaultClassNames.week_number_header),
        week_number: clsx(styles.weekNumber, defaultClassNames.week_number),
        day: clsx(styles.day, defaultClassNames.day),
        day_button: clsx(styles.dayButton, defaultClassNames.day_button),
        range_start: clsx(styles.rangeStart, defaultClassNames.range_start),
        range_middle: clsx(styles.rangeMiddle, defaultClassNames.range_middle),
        range_end: clsx(styles.rangeEnd, defaultClassNames.range_end),
        selected: clsx(styles.selected, defaultClassNames.selected),
        today: clsx(styles.today, defaultClassNames.today),
        outside: clsx(styles.outside, defaultClassNames.outside),
        disabled: clsx(styles.disabled, defaultClassNames.disabled),
        hidden: clsx(styles.hidden, defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className: rootClassName, rootRef, ...rootProps }) => {
          return (
            <div
              data-slot="calendar"
              data-calendar-submit-ignore="true"
              ref={rootRef}
              className={clsx(rootClassName)}
              {...rootProps}
            />
          );
        },
        Chevron: (chevronProps) => <CalendarChevron {...chevronProps} />,
        Nav,
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...weekNumberProps }) => {
          return (
            <td {...weekNumberProps}>
              <div className={styles.weekNumberCell}>{children}</div>
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

export { Calendar, CalendarDayButton, CalendarChevron };
