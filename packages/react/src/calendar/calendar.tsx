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

import { cn } from '../utils/tailwind';
import { Button, buttonVariants } from '../button';

type CalendarChevronProps = React.ComponentProps<typeof ChevronLeftIcon> & {
  orientation?: 'left' | 'right' | string;
};

function CalendarChevron({ className, orientation, ...props }: CalendarChevronProps) {
  if (orientation === 'left') {
    return <ChevronLeftIcon className={cn('size-4', className)} {...props} />;
  }

  if (orientation === 'right') {
    return <ChevronRightIcon className={cn('size-4', className)} {...props} />;
  }

  return <ChevronDownIcon className={cn('size-4', className)} {...props} />;
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
      <nav className={cn('flex items-center gap-1', className)}>
        <Button
          variant={buttonVariant}
          size="icon"
          className="size-(--cell-size) bg-transparent p-0 opacity-80 hover:bg-transparent hover:opacity-100"
          tabIndex={isPreviousDisabled ? -1 : undefined}
          disabled={isPreviousDisabled}
          aria-label={labelPrevious(previousMonth)}
          onClick={handlePreviousClick}
        >
          <ChevronLeftIcon className="size-4" />
        </Button>

        <Button
          variant={buttonVariant}
          size="icon"
          className="size-(--cell-size) bg-transparent p-0 opacity-80 hover:bg-transparent hover:opacity-100"
          tabIndex={isNextDisabled ? -1 : undefined}
          disabled={isNextDisabled}
          aria-label={labelNext(nextMonth)}
          onClick={handleNextClick}
        >
          <ChevronRightIcon className="size-4" />
        </Button>
      </nav>
    );
  }

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      data-testid="calendar-root"
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn(
          'relative flex flex-col gap-4 md:flex-row',
          defaultClassNames.months
        ),
        month: cn('flex w-full flex-col gap-4', defaultClassNames.month),
        nav: cn('absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1', defaultClassNames.nav),
        button_previous: cn(buttonVariants({ variant: buttonVariant }), 'size-(--cell-size) select-none p-0 aria-disabled:opacity-50', defaultClassNames.button_previous),
        button_next: cn(buttonVariants({ variant: buttonVariant }), 'size-(--cell-size) select-none p-0 aria-disabled:opacity-50', defaultClassNames.button_next),
        month_caption: cn(
          'flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)',
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          'flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-base font-medium',
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          'relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50',
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          'absolute inset-0 bg-popover opacity-0',
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-base'
            : 'flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-base [&>svg]:size-3.5 [&>svg]:text-muted-foreground',
          defaultClassNames.caption_label
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'select-none flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground',
          defaultClassNames.weekday
        ),
        week: cn('mt-2 flex w-full', defaultClassNames.week),
        week_number_header: cn(
          'w-(--cell-size) select-none',
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          'select-none text-[0.8rem] text-muted-foreground',
          defaultClassNames.week_number
        ),
        day: cn(
          'group/day relative flex size-(--cell-size) select-none items-center justify-center p-0 text-center text-base [&>button]:size-(--cell-size) [&>span]:size-(--cell-size)',
          defaultClassNames.day
        ),
        day_button: cn(
          'size-(--cell-size) rounded-md p-0 font-normal aria-selected:opacity-100',
          defaultClassNames.day_button
        ),
        range_start: cn(
          'rounded-l-md bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
          defaultClassNames.range_start
        ),
        range_middle: cn(
          'rounded-none bg-accent [&>button]:bg-transparent [&>button]:text-foreground [&>button]:hover:bg-transparent [&>button]:hover:text-foreground',
          defaultClassNames.range_middle
        ),
        range_end: cn(
          'rounded-r-md bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
          defaultClassNames.range_end
        ),
        selected: cn(
          '[&>button]:bg-primary [&>button]:font-medium [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
          defaultClassNames.selected
        ),
        today: cn('[&>button]:bg-accent [&>button]:text-accent-foreground', defaultClassNames.today),
        outside: cn(
          'text-muted-foreground opacity-80 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
          defaultClassNames.outside
        ),
        disabled: cn('text-muted-foreground opacity-60', defaultClassNames.disabled),
        hidden: cn('invisible flex-1', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
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
              <div className="flex size-(--cell-size) items-center justify-center text-center">
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
      className={cn(
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton, CalendarChevron }