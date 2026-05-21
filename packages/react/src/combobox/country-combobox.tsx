import * as React from 'react';
import { CountryFlag } from '../country/country-flag';
import { CountryOptionLabel } from '../country/country-option-label';
import { resolveCountryCode } from '../country/resolve-country-code';
import { Combobox, useComboboxContext } from './combobox';
import type { ComboboxRootProps } from './combobox';
import type { ComboboxOption } from './types';

export type CountryComboboxOption = ComboboxOption & {
  /** ISO 3166-1 alpha-2 code. Inferred from label or 2-letter id/value when omitted. */
  isoCode?: string;
};

export type CountryComboboxProps = Omit<ComboboxRootProps, 'options' | 'renderOption'> & {
  options: CountryComboboxOption[];
  label?: React.ReactNode;
  hint?: React.ReactNode;
  errorMessage?: React.ReactNode;
};

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

function CountryComboboxControl() {
  const flag = useSelectedCountryFlag();

  return (
    <Combobox.Control leadingVisual={flag}>
      <Combobox.Input />
      <Combobox.ClearButton />
      <Combobox.ToggleButton />
    </Combobox.Control>
  );
}

function CountryCombobox({
  options,
  label,
  hint,
  errorMessage,
  className,
  children,
  ...rootProps
}: CountryComboboxProps) {
  return (
    <Combobox.Root
      {...rootProps}
      options={options}
      className={className}
      renderOption={(option) => renderCountryOption(option as CountryComboboxOption)}
    >
      {label ? <Combobox.Label>{label}</Combobox.Label> : null}
      <CountryComboboxControl />
      <Combobox.Options />
      {hint ? <Combobox.Hint>{hint}</Combobox.Hint> : null}
      {errorMessage ? <Combobox.Error>{errorMessage}</Combobox.Error> : null}
      {children}
    </Combobox.Root>
  );
}

export { CountryCombobox, renderCountryOption, useSelectedCountryFlag };
