import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Input as BaseInput } from '@base-ui/react/input';

import { getInputInnerClassName, InputShell, inputVariants } from './input-shell';

export type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'children' | 'size'> &
  VariantProps<typeof inputVariants> & {
    ref?: React.Ref<HTMLInputElement | null>;
    startElement?: React.ReactNode;
    endElement?: React.ReactNode;
    inputClassName?: string;
  };

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
  const hasError = error === true;

  return (
    <InputShell
      className={className}
      size={resolvedSize}
      error={hasError}
      success={success}
      startElement={startElement}
      endElement={endElement}
    >
      <BaseInput
        {...props}
        ref={ref}
        type={type}
        disabled={disabled}
        aria-invalid={hasError ? true : ariaInvalid}
        data-slot="input"
        className={getInputInnerClassName({
          size: resolvedSize,
          hasStartElement: Boolean(startElement),
          hasEndElement: Boolean(endElement),
          inputClassName,
        })}
      />
    </InputShell>
  );
}

export { Input };
