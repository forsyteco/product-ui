import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { clsx } from 'clsx';

import styles from './input.module.css';

export const inputVariants = cva(styles.root, {
  variants: {
    size: {
      default: styles['size-default'],
      sm: styles['size-sm'],
      lg: styles['size-lg'],
    },
    error: {
      true: styles['root--error'],
      false: '',
    },
    success: {
      true: styles['root--success'],
      false: '',
    },
  },
  defaultVariants: {
    size: 'default',
    error: false,
    success: false,
  },
});

export type InputSize = NonNullable<VariantProps<typeof inputVariants>['size']>;

export const inputSizePadding = {
  default: { slot: styles['slot-pad-default'], input: styles['input-pad-default'] },
  sm: { slot: styles['slot-pad-sm'], input: styles['input-pad-sm'] },
  lg: { slot: styles['slot-pad-lg'], input: styles['input-pad-lg'] },
} as const;

export function getInputInnerClassName({
  size = 'default',
  hasStartElement,
  hasEndElement,
  inputClassName,
}: {
  size?: InputSize;
  hasStartElement?: boolean;
  hasEndElement?: boolean;
  inputClassName?: string;
}) {
  const pad = inputSizePadding[size ?? 'default'];
  return clsx(
    styles.input,
    hasStartElement ? styles['input-pad-none-left'] : pad.input,
    hasEndElement ? styles['input-pad-none-right'] : pad.input,
    inputClassName
  );
}

export type InputShellProps = VariantProps<typeof inputVariants> & {
  className?: string;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  children: React.ReactNode;
};

export function InputShell({
  className,
  startElement,
  endElement,
  size = 'default',
  error,
  success,
  children,
}: InputShellProps) {
  const resolvedSize = size ?? 'default';
  const pad = inputSizePadding[resolvedSize];
  const hasError = error === true;
  const hasSuccess = success === true && !hasError;

  return (
    <div
      className={clsx(
        inputVariants({ size: resolvedSize, error: hasError, success: hasSuccess }),
        className
      )}
    >
      {startElement ? (
        <div className={clsx(styles.slot, pad.slot)}>{startElement}</div>
      ) : null}
      {children}
      {endElement ? (
        <div className={clsx(styles.slot, pad.slot)}>{endElement}</div>
      ) : null}
    </div>
  );
}
