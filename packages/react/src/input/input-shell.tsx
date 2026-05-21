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

export function getInputInnerClassName({
  hasStartElement,
  hasEndElement,
  inputClassName,
}: {
  hasStartElement?: boolean;
  hasEndElement?: boolean;
  inputClassName?: string;
}) {
  return clsx(
    styles.input,
    styles['input-pad'],
    hasStartElement && styles['input-pad-none-left'],
    hasEndElement && styles['input-pad-none-right'],
    inputClassName
  );
}

export type InputShellProps = VariantProps<typeof inputVariants> & {
  className?: string;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  endSlotAction?: boolean;
  children: React.ReactNode;
};

export function InputShell({
  className,
  startElement,
  endElement,
  endSlotAction = false,
  size = 'default',
  error,
  success,
  children,
}: InputShellProps) {
  const hasError = error === true;
  const hasSuccess = success === true && !hasError;

  return (
    <div
      className={clsx(
        inputVariants({ size, error: hasError, success: hasSuccess }),
        className
      )}
    >
      {startElement ? <div className={clsx(styles.slot, styles['slot-pad'])}>{startElement}</div> : null}
      {children}
      {endElement ? (
        <div
          className={clsx(
            styles.slot,
            endSlotAction ? styles['slot-action'] : styles['slot-pad']
          )}
        >
          {endElement}
        </div>
      ) : null}
    </div>
  );
}
