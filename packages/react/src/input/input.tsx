import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { clsx } from 'clsx';
import styles from './input.module.css';

const inputVariants = cva(
  styles.root,
  {
    variants: {
      size: {
        default: styles['size-default'],
        sm: styles['size-sm'],
        lg: styles['size-lg'],
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

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
  ...props
}: InputProps) {
  const pad = sizeToPadding[size ?? 'default'];

  return (
    <div className={clsx(inputVariants({ size }), className)}>
      {startElement ? (
        <div className={clsx(styles.slot, pad.slot)}>{startElement}</div>
      ) : null}

      <input
        {...props}
        ref={ref}
        type={type}
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
