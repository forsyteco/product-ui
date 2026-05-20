import * as React from 'react';
import { Popover as BasePopover } from '@base-ui/react/popover';
import { CalendarDays } from 'lucide-react';
import { Calendar } from '../calendar';
import { Button } from '../button';
import { clsx } from 'clsx';
import styles from './date-picker.module.css';

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
  const popoverRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);
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

  const handleSubmitCapture = (event: React.FormEvent<HTMLDivElement>) => {
    const nativeEvent = event.nativeEvent as SubmitEvent;
    const submitter = nativeEvent.submitter as HTMLElement | null;
    const activeElement = document.activeElement as HTMLElement | null;
    const popoverElement = popoverRef.current;

    const shouldIgnoreSubmit = (element: HTMLElement | null) =>
      Boolean(
        element &&
          (popoverElement?.contains(element) ||
            element.closest('[data-calendar-submit-ignore="true"]'))
      );

    if (shouldIgnoreSubmit(submitter) || shouldIgnoreSubmit(activeElement)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div className={clsx(styles.root, className)} onSubmitCapture={handleSubmitCapture}>
      <BasePopover.Root open={open} onOpenChange={setOpen}>
        <BasePopover.Trigger
          render={
            <Button
              type="button"
              variant="default"
              disabled={disabled}
              aria-expanded={open}
              aria-haspopup="dialog"
              aria-label={selected ? `Selected date: ${label}` : placeholder}
              className={clsx(
                styles.trigger,
                !selected && styles['trigger-empty'],
                buttonClassName
              )}
            />
          }
        >
          <span className={styles['trigger-label']}>{label}</span>
          <CalendarDays className={styles['trigger-icon']} />
        </BasePopover.Trigger>

        <BasePopover.Portal>
          <BasePopover.Positioner sideOffset={8}>
            <BasePopover.Popup
              ref={popoverRef}
              data-slot="popover-content"
              data-calendar-submit-ignore="true"
              className={styles.panel}
            >
              <Calendar
                mode="single"
                selected={selected}
                onSelect={(date) => {
                  handleSelect(date);
                  setOpen(false);
                }}
                defaultMonth={selected ?? defaultValue ?? new Date()}
                initialFocus
                {...calendarProps}
              />
            </BasePopover.Popup>
          </BasePopover.Positioner>
        </BasePopover.Portal>
      </BasePopover.Root>
    </div>
  );
}

export { DatePicker };
