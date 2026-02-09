import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import type { InputProps } from '../input';
import { Input } from '../input';

export type CurrencyInputProps = Omit<
  InputProps,
  'type' | 'value' | 'defaultValue' | 'onChange' | 'inputMode'
> & {
  value?: number;
  onValueChange?: (value?: number) => void;
  decimalScale?: number;
  locale?: string;
  min?: number;
  max?: number;
  currencySymbol?: string;
};

const DEFAULT_DECIMAL_SCALE = 2;

const stripCommas = (value: string) => value.replace(/,/g, '');

function formatCurrencyInputNumber(
  amount?: number,
  locale = 'en-GB',
  decimalScale = DEFAULT_DECIMAL_SCALE,
  minFractionDigits = 0
) {
  if (amount === undefined || amount === null) return '';

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: decimalScale,
  }).format(amount);
}

function formatCurrencyInputString(
  value: string,
  locale = 'en-GB',
  decimalScale = DEFAULT_DECIMAL_SCALE
) {
  const sanitized = stripCommas(value);
  if (sanitized === '') return '';

  const hasDecimal = sanitized.includes('.');
  const [integerRaw, decimalRaw = ''] = sanitized.split('.');

  const integerDigits = integerRaw.replace(/\D/g, '');
  const formattedInteger = integerDigits
    ? new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(
        Number(integerDigits)
      )
    : '';

  if (!hasDecimal) return formattedInteger;

  const decimalDigits = decimalRaw.replace(/\D/g, '').slice(0, decimalScale);
  if (formattedInteger === '' && decimalDigits === '') return '.';

  const integerPart = formattedInteger === '' ? '0' : formattedInteger;
  return `${integerPart}.${decimalDigits}`;
}

function parseNumber(value?: number | string) {
  if (value === undefined || value === null || value === '') return undefined;
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function decimalCount(rawValue: string, decimalScale: number) {
  if (!rawValue.includes('.')) return 0;
  return Math.min(rawValue.split('.')[1]?.length ?? 0, decimalScale);
}

function normalizeRaw(rawInput: string, decimalScale: number) {
  const sanitized = stripCommas(rawInput);
  const decimals = decimalCount(sanitized, decimalScale);

  if (sanitized === '' || sanitized === '.') {
    return { sanitized, parsed: undefined, decimals: 0 };
  }

  const parsed = Number(sanitized);
  return { sanitized, parsed: Number.isNaN(parsed) ? undefined : parsed, decimals };
}

export function CurrencyInput({
  value,
  onValueChange,
  decimalScale = DEFAULT_DECIMAL_SCALE,
  locale = 'en-GB',
  min,
  max,
  currencySymbol = '£',
  startElement,
  onBlur,
  ...props
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const lastValueRef = useRef<number | undefined>(value);
  const fractionDigitsRef = useRef(0);

  useEffect(() => {
    if (isEditing) return;

    const valueChanged = lastValueRef.current !== value;
    if (valueChanged) {
      fractionDigitsRef.current = 0;
    }

    const minFractionDigits =
      fractionDigitsRef.current > 0
        ? Math.min(fractionDigitsRef.current, decimalScale)
        : 0;

    const nextDisplay = formatCurrencyInputNumber(
      value,
      locale,
      decimalScale,
      minFractionDigits
    );
    if (nextDisplay !== displayValue) {
      setDisplayValue(nextDisplay);
    }
    lastValueRef.current = value;
  }, [decimalScale, displayValue, isEditing, locale, value]);

  function clampValue(nextValue: number) {
    const minValue = parseNumber(min);
    const maxValue = parseNumber(max);

    const withMin = minValue === undefined ? nextValue : Math.max(nextValue, minValue);
    return maxValue === undefined ? withMin : Math.min(withMin, maxValue);
  }

  return (
    <Input
      {...props}
      type="text"
      inputMode="decimal"
      startElement={startElement ?? (currencySymbol ? <span>{currencySymbol}</span> : undefined)}
      value={displayValue}
      onBlur={(event) => {
        setIsEditing(false);
        const { parsed, decimals } = normalizeRaw(displayValue, decimalScale);

        if (parsed === undefined) {
          setDisplayValue('');
          fractionDigitsRef.current = 0;
          onValueChange?.(undefined);
          onBlur?.(event);
          return;
        }

        const clamped = clampValue(parsed);
        const minFractionDigits = decimals;
        fractionDigitsRef.current = minFractionDigits;
        setDisplayValue(
          formatCurrencyInputNumber(clamped, locale, decimalScale, minFractionDigits)
        );
        onValueChange?.(clamped);
        onBlur?.(event);
      }}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setIsEditing(true);
        const nextDisplay = formatCurrencyInputString(
          event.target.value,
          locale,
          decimalScale
        );
        setDisplayValue(nextDisplay);

        const { parsed, decimals } = normalizeRaw(nextDisplay, decimalScale);
        if (parsed === undefined) {
          fractionDigitsRef.current = 0;
          onValueChange?.(undefined);
          return;
        }

        const clamped = clampValue(parsed);
        fractionDigitsRef.current = decimals;
        lastValueRef.current = clamped;
        onValueChange?.(clamped);
      }}
    />
  );
}
