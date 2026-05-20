import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import { clsx } from 'clsx';

import styles from './input.module.css';

const inputVariants = cva(styles.root, {
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

export type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'children' | 'size'> &
  VariantProps<typeof inputVariants> & {
    ref?: React.Ref<HTMLInputElement | null>;
    startElement?: React.ReactNode;
    endElement?: React.ReactNode;
    inputClassName?: string;
  };

const sizeToPadding = {
  default: { slot: styles['slot-pad-default'], input: styles['input-pad-default'] },
  sm: { slot: styles['slot-pad-sm'], input: styles['input-pad-sm'] },
  lg: { slot: styles['slot-pad-lg'], input: styles['input-pad-lg'] },
} as const;

function Input({
  ref,
  className,
  inputClassName,
  type,
  startElement,
  endElement,
  size = 'default',
  error,
  success,
  'aria-invalid': ariaInvalid,
  disabled,
  ...props
}: InputProps) {
  const resolvedSize = size ?? 'default';
  const pad = sizeToPadding[resolvedSize];
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

      <BaseInput
        {...props}
        ref={ref}
        type={type}
        disabled={disabled}
        aria-invalid={hasError ? true : ariaInvalid}
        data-slot="input"
        className={clsx(
          styles.input,
          startElement ? styles['input-pad-none-left'] : pad.input,
          endElement ? styles['input-pad-none-right'] : pad.input,
          inputClassName
        )}
      />

      {endElement ? (
        <div className={clsx(styles.slot, pad.slot)}>{endElement}</div>
      ) : null}
    </div>
  );
}

export { Input };
