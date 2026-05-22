import * as React from 'react';
import { clsx } from 'clsx';

import { Button, type IconOnlyButtonSize } from '../button';
import { findCountryOption } from '../country/find-country-option';
import { CountryFlag } from '../country/country-flag';
import { CountryOptionLabel } from '../country/country-option-label';
import { resolveCountryCode } from '../country/resolve-country-code';
import type { InputSize } from '../input/input-shell';
import { Combobox, useComboboxContext } from './combobox';
import type { ComboboxRootProps } from './combobox';
import type { ComboboxOption } from './types';
import styles from './country-combobox.module.css';

const REQUIRED_ERROR = 'Country is required';
const INVALID_ERROR = 'Select a country from the list';

export type CountryComboboxOption = ComboboxOption & {
  /** ISO 3166-1 alpha-2 code, lowercase (e.g. `gb`). Inferred from label or 2-letter id/value when omitted. */
  isoCode?: string;
};

export type CountryComboboxProps = Omit<ComboboxRootProps, 'options' | 'renderOption' | 'children'> & {
  options: CountryComboboxOption[];
  label?: React.ReactNode;
  hint?: React.ReactNode;
  errorMessage?: React.ReactNode;
  /** When true, empty input shows a validation error on blur. */
  required?: boolean;
  /** Renders a quick-select button beside the field (e.g. UK flag). */
  quickSelect?: CountryComboboxOption;
  /** Replaces the default options list (e.g. server-driven / infinite scroll). */
  listBoxContent?: React.ReactNode;
  /** Called when the combobox input receives focus. */
  onInputFocus?: () => void;
};

const QUICK_SELECT_BUTTON_SIZE: Record<InputSize, IconOnlyButtonSize> = {
  sm: 'sm',
  default: 'md',
  lg: 'lg',
};

function createQuickSelectFlagIcon(isoCode: string) {
  function QuickSelectFlagIcon({ className }: { className?: string }) {
    return <CountryFlag isoCode={isoCode} className={className} />;
  }

  return QuickSelectFlagIcon;
}

function renderCountryOption(option: CountryComboboxOption) {
  return <CountryOptionLabel option={option} />;
}

function useSelectedCountryFlag() {
  const { selectedValue, inputValue } = useComboboxContext();

  if (!selectedValue) {
    return null;
  }

  const showFlag = inputValue === selectedValue.label || inputValue.trim() === '';
  if (!showFlag) {
    return null;
  }

  const isoCode = resolveCountryCode(selectedValue as CountryComboboxOption);
  if (!isoCode) {
    return null;
  }

  return <CountryFlag isoCode={isoCode} />;
}

function CountryComboboxControl({
  options,
  required = false,
  onValidationError,
  preserveValidationOnNextChangeRef,
  onInputFocus,
}: {
  options: CountryComboboxOption[];
  required?: boolean;
  onValidationError: (message?: string) => void;
  preserveValidationOnNextChangeRef: React.MutableRefObject<boolean>;
  onInputFocus?: () => void;
}) {
  const { inputValue, selectedValue, selectValue } = useComboboxContext();

  const commitInputValue = React.useCallback(() => {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      if (required) {
        onValidationError(REQUIRED_ERROR);
        preserveValidationOnNextChangeRef.current = true;
        selectValue(null);
        return;
      }

      onValidationError(undefined);
      selectValue(null);
      return;
    }

    const match = findCountryOption(trimmed, options);
    if (match) {
      onValidationError(undefined);
      selectValue(match);
      return;
    }

    onValidationError(INVALID_ERROR);
    if (selectedValue) {
      preserveValidationOnNextChangeRef.current = true;
      selectValue(selectedValue);
      return;
    }

    preserveValidationOnNextChangeRef.current = true;
    selectValue(null);
  }, [
    inputValue,
    onValidationError,
    options,
    preserveValidationOnNextChangeRef,
    required,
    selectValue,
    selectedValue,
  ]);

  const handleBlur = () => {
    commitInputValue();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      commitInputValue();
    }
  };

  const flag = useSelectedCountryFlag();

  const handleFocus = () => {
    onInputFocus?.();
  };

  return (
    <Combobox.Control leadingVisual={flag}>
      <Combobox.Input onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyDown} />
      <Combobox.ToggleButton />
    </Combobox.Control>
  );
}

function CountryComboboxQuickSelectButton({
  option,
  disabled,
  size,
}: {
  option: CountryComboboxOption;
  disabled?: boolean;
  size: InputSize;
}) {
  const { selectValue } = useComboboxContext();
  const isoCode = resolveCountryCode(option);

  if (!isoCode) {
    return null;
  }

  return (
    <Button
      type="button"
      icon={createQuickSelectFlagIcon(isoCode)}
      variant="outline"
      size={QUICK_SELECT_BUTTON_SIZE[size]}
      shape="square"
      disabled={disabled}
      aria-label={`Select ${option.label}`}
      className={styles.quickSelect}
      onClick={() => selectValue(option)}
    />
  );
}

function CountryCombobox({
  options,
  label,
  hint,
  errorMessage,
  required = false,
  quickSelect,
  listBoxContent,
  onInputFocus,
  className,
  disabled,
  size = 'default',
  error,
  onChange,
  onQueryChange,
  ...rootProps
}: CountryComboboxProps) {
  const [validationError, setValidationError] = React.useState<string>();
  const preserveValidationOnNextChangeRef = React.useRef(false);
  const displayedError = errorMessage ?? validationError;
  const hasError = Boolean(error) || Boolean(displayedError);

  const handleValidationError = React.useCallback((message?: string) => {
    setValidationError(message);
  }, []);

  const handleChange = React.useCallback(
    (value: ComboboxOption | null) => {
      if (preserveValidationOnNextChangeRef.current) {
        preserveValidationOnNextChangeRef.current = false;
      } else {
        setValidationError(undefined);
      }
      onChange?.(value);
    },
    [onChange]
  );

  const handleQueryChange = React.useCallback(
    (query: string) => {
      setValidationError(undefined);
      onQueryChange?.(query);
    },
    [onQueryChange]
  );

  const controlProps = {
    options,
    required,
    onValidationError: handleValidationError,
    preserveValidationOnNextChangeRef,
    onInputFocus,
  };

  const control = quickSelect ? (
    <div className={styles.controlRow}>
      <div className={styles.combobox}>
        <CountryComboboxControl {...controlProps} />
      </div>
      <CountryComboboxQuickSelectButton option={quickSelect} disabled={disabled} size={size} />
    </div>
  ) : (
    <CountryComboboxControl {...controlProps} />
  );

  return (
    <Combobox.Root
      {...rootProps}
      options={options}
      disabled={disabled}
      size={size}
      error={hasError}
      onChange={handleChange}
      onQueryChange={handleQueryChange}
      className={className}
      renderOption={(option) => renderCountryOption(option as CountryComboboxOption)}
    >
      {label ? <Combobox.Label>{label}</Combobox.Label> : null}
      {control}
      {listBoxContent ?? <Combobox.Options />}
      {hint ? <Combobox.Hint>{hint}</Combobox.Hint> : null}
      {displayedError ? <Combobox.Error role="alert">{displayedError}</Combobox.Error> : null}
    </Combobox.Root>
  );
}

export { CountryCombobox, renderCountryOption, useSelectedCountryFlag };
