import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { clsx } from 'clsx';
import styles from './input.module.css';

const inputVariants = cva(
  styles.root,
  {
    variants: {
      size: {
        default: styles.sizeDefault,
        sm: styles.sizeSm,
        lg: styles.sizeLg,
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export type InputProps = Pick<
  React.ComponentProps<'input'>,
  | 'type'
  | 'className'
  | 'placeholder'
  | 'id'
  | 'value'
  | 'defaultValue'
  | 'disabled'
  | 'readOnly'
  | 'aria-invalid'
  | 'aria-describedby'
  | 'autoFocus'
  | 'autoCapitalize'
  | 'autoComplete'
  | 'autoCorrect'
  | 'onBlur'
  | 'onChange'
  | 'onKeyDown'
  | 'inputMode'
> &
  VariantProps<typeof inputVariants> & {
    ref?: React.Ref<HTMLInputElement | null>;
    startElement?: React.ReactNode;
    endElement?: React.ReactNode;
    inputClassName?: string;
  };

const sizeToPadding = {
  default: { slot: styles.slotPadDefault, input: styles.inputPadDefault },
  sm: { slot: styles.slotPadSm, input: styles.inputPadSm },
  lg: { slot: styles.slotPadLg, input: styles.inputPadLg },
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
          startElement ? styles.inputPadNoneLeft : pad.input,
          endElement ? styles.inputPadNoneRight : pad.input,
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
