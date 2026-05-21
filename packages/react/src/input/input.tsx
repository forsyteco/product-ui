import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { clsx } from 'clsx';
import { Input as BaseInput } from '@base-ui/react/input';

import { IconButton, type IconButtonProps } from '../icon-button';
import { resolveFieldAutofillProps } from '../utils/field-autofill-props';
import { getInputInnerClassName, InputShell, inputVariants } from './input-shell';
import styles from './input.module.css';

const defaultTrailingActionProps = {
  variant: 'ghost',
  size: 'small',
  shape: 'square',
} as const satisfies Partial<IconButtonProps>;

export type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'children' | 'size'> &
  VariantProps<typeof inputVariants> & {
    ref?: React.Ref<HTMLInputElement | null>;
    startElement?: React.ReactNode;
    /** Decorative or non-interactive trailing content (e.g. spinner). Use `trailingAction` for buttons. */
    endElement?: React.ReactNode;
    trailingAction?: IconButtonProps;
    inputClassName?: string;
  };

function Input({
  ref,
  className,
  inputClassName,
  type,
  startElement,
  endElement,
  trailingAction,
  size = 'default',
  error,
  success,
  'aria-invalid': ariaInvalid,
  disabled,
  autoComplete,
  ...props
}: InputProps) {
  const hasError = error === true;
  const endElementContent = trailingAction ? (
    <TrailingActionButton {...trailingAction} />
  ) : (
    endElement
  );
  const hasEndElement = Boolean(endElementContent);

  return (
    <InputShell
      className={className}
      size={size}
      error={hasError}
      success={success}
      startElement={startElement}
      endElement={endElementContent}
      endSlotAction={Boolean(trailingAction)}
    >
      <BaseInput
        {...props}
        {...resolveFieldAutofillProps({ autoComplete })}
        ref={ref}
        type={type}
        disabled={disabled}
        aria-invalid={hasError ? true : ariaInvalid}
        data-slot="input"
        className={getInputInnerClassName({
          hasStartElement: Boolean(startElement),
          hasEndElement,
          inputClassName,
        })}
      />
    </InputShell>
  );
}

function TrailingActionButton({
  className,
  ...trailingAction
}: IconButtonProps) {
  return (
    <IconButton
      {...defaultTrailingActionProps}
      {...trailingAction}
      className={clsx(styles['slot-action-button'], className)}
    />
  );
}

export { Input };
