import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { clsx } from 'clsx';
import { buttonVariants, type ButtonVariantProps } from './button-variants';

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonVariantProps & {
    children?: ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, children, className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };

