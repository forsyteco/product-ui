import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../utils/tailwind';

const inputVariants = cva(
  cn(
    'relative flex w-full min-w-0 items-center overflow-hidden rounded-md border border-input bg-background/80 text-base text-foreground shadow-xs transition-[color,box-shadow] md:text-sm',
    'selection:bg-primary selection:text-primary-foreground',
    '[&>input]:placeholder:text-muted-foreground',
    'focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50',
    'has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
    '[&>input]:disabled:opacity-50'
  ),
  {
    variants: {
      size: {
        default: 'h-9',
        sm: 'h-8',
        lg: 'h-10 md:text-base',
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

const slotClassName = cn(
  'flex h-full items-center justify-center text-muted-foreground',
  // icons shouldn’t shrink weirdly; content can be interactive if you want
  "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1em]"
);

const sizeToPadding = {
  default: { slot: 'px-2.5', input: 'px-3' },
  sm: { slot: 'px-2', input: 'px-2.5' },
  lg: { slot: 'px-3', input: 'px-4' },
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
    <div className={cn(inputVariants({ size }), className)}>
      {startElement ? (
        <div className={cn(slotClassName, pad.slot)}>{startElement}</div>
      ) : null}

      <input
        {...props}
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          'flex h-full w-full min-w-0 outline-none bg-transparent',
          'disabled:cursor-not-allowed',
          'read-only:cursor-not-allowed read-only:opacity-50',
          // if there’s a left slot, don’t double-pad on the left; same for right
          startElement ? 'pl-0' : pad.input,
          endElement ? 'pr-0' : pad.input,
          inputClassName
        )}
      />

      {endElement ? (
        <div className={cn(slotClassName, pad.slot)}>{endElement}</div>
      ) : null}
    </div>
  );
}

export default Input;
