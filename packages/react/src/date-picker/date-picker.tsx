'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import { Popover as BasePopover } from '@base-ui/react/popover';
import type { Matcher } from 'react-day-picker';
import { CalendarIcon } from '../icons/icons';
import { Button, type IconOnlyButtonSize } from '../button';
import { Calendar } from '../calendar';
import captionStyles from '../field-select/field-caption.module.css';
import { ClearIcon } from '../field-select/clear-icon';
import { Input } from '../input';
import type { TextInputProps } from '../input/input.types';
import { VisuallyHidden } from '../visually-hidden';
import { buildDisabledMatchers, getDisabledDateError } from './date-constraints';
import { normalizeSelectedDate } from './date-input';
import styles from './date-picker.module.css';
import { mergeIds } from './merge-ids';
import { useDatePickerInput } from './use-date-picker-input';

const CALENDAR_BUTTON_SIZE: Record<NonNullable<TextInputProps['size']>, IconOnlyButtonSize> = {
  sm: 'sm',
  default: 'md',
  lg: 'lg',
};

export type DatePickerProps = {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (value?: Date) => void;
  placeholder?: string;
  /** dayjs format string used for typed input and display */
  inputFormat?: string;
  /** Optional formatter when inputFormat is not suitable for display */
  formatDate?: (date: Date) => string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  clearable?: boolean;
  /** Allow compact digit entry such as `15012024` on commit */
  allowCompactInput?: boolean;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Matcher | Matcher[];
  error?: TextInputProps['error'];
  errorMessage?: React.ReactNode;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  size?: TextInputProps['size'];
  className?: string;
  inputClassName?: string;
  name?: string;
  id?: string;
  'aria-describedby'?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  calendarProps?: Omit<
    React.ComponentProps<typeof Calendar>,
    'mode' | 'selected' | 'onSelect' | 'defaultMonth'
  >;
};

function DatePicker({
  value,
  defaultValue,
  onValueChange,
  placeholder,
  inputFormat = 'DD/MM/YYYY',
  formatDate,
  disabled,
  readOnly = false,
  required = false,
  clearable = false,
  allowCompactInput = false,
  minDate,
  maxDate,
  disabledDates,
  error,
  errorMessage,
  label,
  hint,
  size = 'default',
  className,
  inputClassName,
  name,
  id,
  'aria-describedby': ariaDescribedBy,
  onBlur,
  calendarProps,
}: DatePickerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const errorId = React.useId();
  const hintId = React.useId();
  const generatedInputId = React.useId();
  const inputId = id ?? generatedInputId;
  const calendarTriggerId = React.useId();
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const selected = isControlled ? value : internalValue;

  const disabledMatchers = React.useMemo(
    () =>
      buildDisabledMatchers({
        minDate,
        maxDate,
        disabledDates,
        calendarDisabled: calendarProps?.disabled,
      }),
    [calendarProps?.disabled, disabledDates, maxDate, minDate]
  );

  const validateDate = React.useCallback(
    (date: Date) =>
      getDisabledDateError(
        date,
        {
          minDate,
          maxDate,
          disabledDates,
          calendarDisabled: calendarProps?.disabled,
        },
        inputFormat
      ),
    [calendarProps?.disabled, disabledDates, inputFormat, maxDate, minDate]
  );

  const setSelectedDate = React.useCallback(
    (nextValue?: Date) => {
      if (!isControlled) {
        setInternalValue(nextValue);
      }
      onValueChange?.(nextValue);
    },
    [isControlled, onValueChange]
  );

  const {
    inputValue,
    validationError,
    handleInputChange,
    handlePaste,
    commitInputValue,
    clearValue,
  } = useDatePickerInput({
    value: selected,
    inputFormat,
    formatValue: formatDate,
    onValueChange: setSelectedDate,
    clearInputWhenValueIsEmpty: isControlled,
    required,
    allowCompactInput,
    validateDate,
  });

  const displayedError = errorMessage ?? validationError;
  const hasError = Boolean(error) || Boolean(displayedError);
  const canClear = clearable && !disabled && Boolean(selected ?? inputValue.trim());

  React.useEffect(() => {
    if (!isControlled) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  const handleSubmitCapture = (event: React.FormEvent<HTMLDivElement>) => {
    const nativeEvent = event.nativeEvent as SubmitEvent;
    const submitter = nativeEvent.submitter as HTMLElement | null;
    const activeElement = document.activeElement as HTMLElement | null;
    const shouldIgnoreSubmit = (element: HTMLElement | null) =>
      Boolean(
        element &&
          (popoverRef.current?.contains(element) ||
            element.closest('[data-calendar-submit-ignore="true"]'))
      );

    if (shouldIgnoreSubmit(submitter) || shouldIgnoreSubmit(activeElement)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleCalendarSelect = (date?: Date) => {
    if (!date) {
      return;
    }

    const normalizedDate = normalizeSelectedDate(date);
    const constraintError = validateDate(normalizedDate);
    if (constraintError) {
      return;
    }

    setSelectedDate(normalizedDate);
    setOpen(false);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      commitInputValue(event.currentTarget.value);
      return;
    }

    if (event.key === 'ArrowDown' || (event.altKey && event.key === 'ArrowDown')) {
      event.preventDefault();
      setOpen(true);
    }
  };

  const mergedCalendarProps = {
    ...calendarProps,
    disabled: disabledMatchers.length > 0 ? disabledMatchers : calendarProps?.disabled,
    startMonth: calendarProps?.startMonth ?? minDate,
    endMonth: calendarProps?.endMonth ?? maxDate,
  };

  return (
    <div
      ref={containerRef}
      className={clsx(styles.root, className)}
      onSubmitCapture={handleSubmitCapture}
    >
      {label ? (
        <label htmlFor={inputId} className={captionStyles.label}>
          {label}
        </label>
      ) : null}
      <BasePopover.Root open={open} onOpenChange={setOpen} triggerId={calendarTriggerId} modal="trap-focus">
        <div className={styles.control}>
          <Input
            id={inputId}
            name={name}
            value={inputValue}
            onChange={readOnly ? undefined : handleInputChange}
            onPaste={readOnly ? undefined : handlePaste}
            onBlur={(event) => {
              if (!readOnly) {
                commitInputValue(event.target.value);
              }
              onBlur?.(event);
            }}
            onKeyDown={handleInputKeyDown}
            onClick={readOnly && !disabled ? () => setOpen(true) : undefined}
            placeholder={placeholder ?? inputFormat}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            error={hasError}
            aria-describedby={mergeIds(ariaDescribedBy, hint ? hintId : undefined, displayedError ? errorId : undefined)}
            aria-invalid={hasError || undefined}
            size={size}
            className={styles.input}
            inputClassName={inputClassName}
            autoComplete="off"
            inputMode="numeric"
            trailingAction={
              canClear
                ? {
                    icon: ClearIcon,
                    'aria-label': 'Clear date',
                    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
                      event.preventDefault();
                      clearValue();
                    },
                  }
                : undefined
            }
          />

          <div className={styles['trigger-wrap']}>
            <BasePopover.Trigger
              id={calendarTriggerId}
              disabled={disabled}
              render={(triggerProps, state) => (
                <Button
                  {...triggerProps}
                  type="button"
                  icon={CalendarIcon}
                  variant="outline"
                  size={CALENDAR_BUTTON_SIZE[size ?? 'default']}
                  shape="square"
                  aria-label={state.open ? 'Close calendar' : 'Open calendar'}
                  className={clsx(styles.trigger, triggerProps.className)}
                />
              )}
            />
          </div>
        </div>

        <BasePopover.Portal>
          <BasePopover.Positioner side="bottom" align="end" sideOffset={8} className={styles.positioner}>
            <BasePopover.Popup
              ref={popoverRef}
              initialFocus={false}
              aria-label="Choose date"
              data-slot="popover-content"
              data-calendar-submit-ignore="true"
              className={styles.popover}
            >
              <VisuallyHidden>
                <BasePopover.Close>Close calendar</BasePopover.Close>
              </VisuallyHidden>
              <Calendar
                mode="single"
                selected={selected}
                onSelect={handleCalendarSelect}
                defaultMonth={selected ?? defaultValue ?? new Date()}
                initialFocus
                {...mergedCalendarProps}
                required={required}
              />
            </BasePopover.Popup>
          </BasePopover.Positioner>
        </BasePopover.Portal>
      </BasePopover.Root>

      {hint ? (
        <p id={hintId} className={captionStyles.hint}>
          {hint}
        </p>
      ) : null}
      {displayedError ? (
        <p id={errorId} role="alert" className={captionStyles.error}>
          {displayedError}
        </p>
      ) : null}
    </div>
  );
}

export { DatePicker };
