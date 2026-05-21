import * as React from 'react';

import {
  formatDateInput,
  parsePastedDateInput,
  parseStrictDateInput,
  resolveDateInput,
  type ResolveDateInputOptions,
} from './date-input';

type UseDatePickerInputOptions = {
  value?: Date;
  inputFormat: string;
  formatValue?: (date: Date) => string;
  onValueChange?: (value?: Date) => void;
  clearInputWhenValueIsEmpty?: boolean;
  required?: boolean;
  allowCompactInput?: boolean;
  validateDate?: ResolveDateInputOptions['validateDate'];
};

export function useDatePickerInput({
  value,
  inputFormat,
  formatValue,
  onValueChange,
  clearInputWhenValueIsEmpty = false,
  required = false,
  allowCompactInput = false,
  validateDate,
}: UseDatePickerInputOptions) {
  const formatDisplayValue = React.useCallback(
    (date: Date) => (formatValue ? formatValue(date) : formatDateInput(date, inputFormat)),
    [formatValue, inputFormat]
  );

  const resolveOptions = React.useMemo<ResolveDateInputOptions>(
    () => ({
      allowCompactInput,
      validateDate,
    }),
    [allowCompactInput, validateDate]
  );

  const [inputValue, setInputValue] = React.useState(() => formatDateInput(value, inputFormat));
  const [validationError, setValidationError] = React.useState<string>();

  React.useEffect(() => {
    if (value !== undefined) {
      setInputValue(formatDisplayValue(value));
      setValidationError(undefined);
      return;
    }

    if (clearInputWhenValueIsEmpty) {
      setInputValue('');
      setValidationError(undefined);
    }
  }, [clearInputWhenValueIsEmpty, formatDisplayValue, value]);

  const commitInputValue = React.useCallback(
    (rawValue: string) => {
      const trimmed = rawValue.trim();

      if (!trimmed) {
        if (required) {
          setValidationError('Date is required');
          onValueChange?.(undefined);
          setInputValue('');
          return;
        }

        setValidationError(undefined);
        onValueChange?.(undefined);
        setInputValue('');
        return;
      }

      const result = resolveDateInput(trimmed, inputFormat, resolveOptions);

      if (result.valid) {
        setValidationError(undefined);

        if (result.date) {
          onValueChange?.(result.date);
          setInputValue(formatDisplayValue(result.date));
          return;
        }

        onValueChange?.(undefined);
        return;
      }

      setValidationError(result.error);
      onValueChange?.(undefined);
      setInputValue(rawValue);
    },
    [formatDisplayValue, inputFormat, onValueChange, required, resolveOptions]
  );

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value;
      setInputValue(nextValue);
      setValidationError(undefined);

      if (!nextValue.trim()) {
        onValueChange?.(undefined);
        return;
      }

      const strictDate = parseStrictDateInput(nextValue, inputFormat);
      if (strictDate && !validateDate?.(strictDate)) {
        onValueChange?.(strictDate);
      }
    },
    [inputFormat, onValueChange, validateDate]
  );

  const handlePaste = React.useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      const pastedValue = parsePastedDateInput(event.clipboardData.getData('text'), inputFormat);

      if (!pastedValue) {
        return;
      }

      event.preventDefault();
      setInputValue(pastedValue);
      setValidationError(undefined);

      const result = resolveDateInput(pastedValue, inputFormat, resolveOptions);
      if (result.valid && result.date) {
        onValueChange?.(result.date);
        setInputValue(formatDisplayValue(result.date));
      }
    },
    [formatDisplayValue, inputFormat, onValueChange, resolveOptions]
  );

  const clearValue = React.useCallback(() => {
    setValidationError(undefined);
    setInputValue('');
    onValueChange?.(undefined);
  }, [onValueChange]);

  return {
    inputValue,
    validationError,
    handleInputChange,
    handlePaste,
    commitInputValue,
    clearValue,
  };
}
