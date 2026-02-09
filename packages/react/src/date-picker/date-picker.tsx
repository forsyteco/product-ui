import * as React from 'react';
import { Popover as HeadlessPopover, Portal } from '@headlessui/react';
import { CalendarDays } from 'lucide-react';
import { Calendar } from '../calendar';
import { Button } from '../button';
import { cn } from '../utils/tailwind';

const defaultFormatDate = (date: Date) =>
  date.toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

export type DatePickerProps = {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (value?: Date) => void;
  placeholder?: string;
  formatDate?: (date: Date) => string;
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  calendarProps?: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect' | 'defaultMonth'
  >;
};

function DatePicker({
  value,
  defaultValue,
  onValueChange,
  placeholder = 'Pick a date',
  formatDate = defaultFormatDate,
  disabled,
  className,
  buttonClassName,
  calendarProps,
}: DatePickerProps) {
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internalValue;
  React.useEffect(() => {
    if (!isControlled) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  const formattedLabel = React.useMemo(() => {
    if (!selected) return undefined;
    try {
      return formatDate(selected);
    } catch {
      return defaultFormatDate(selected);
    }
  }, [formatDate, selected]);
  const label = formattedLabel ?? placeholder;

  const handleSelect = (date?: Date) => {
    if (!isControlled) {
      setInternalValue(date);
    }
    onValueChange?.(date);
  };

  return (
    <HeadlessPopover className={cn('relative inline-flex w-full', className)}>
      {({ close, open }) => (
        <>
          <HeadlessPopover.Button
            as={Button}
            type="button"
            variant="outline"
            disabled={disabled}
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-label={selected ? `Selected date: ${label}` : placeholder}
            className={cn(
              'h-9 w-full justify-between gap-2 bg-background/80 px-3 text-left text-base font-normal',
              !selected && 'text-muted-foreground',
              buttonClassName
            )}
          >
            <span className="truncate">{label}</span>
            <CalendarDays className="size-4 text-muted-foreground" />
          </HeadlessPopover.Button>

          <Portal>
            <HeadlessPopover.Panel
              data-slot="popover-content"
              className="z-50 mt-2 w-fit rounded-md bg-popover shadow-lg ring-1 ring-border focus:outline-none"
            >
              <Calendar
                mode="single"
                selected={selected}
                onSelect={(date) => {
                  handleSelect(date);
                  close();
                }}
                defaultMonth={selected ?? defaultValue ?? new Date()}
                initialFocus
                {...calendarProps}
              />
            </HeadlessPopover.Panel>
          </Portal>
        </>
      )}
    </HeadlessPopover>
  );
}

export { DatePicker };
