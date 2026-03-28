import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import styles from './button.module.css';

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode;
  };

export const buttonVariants = cva(
  styles.root,
  {
    variants: {
      variant: {
        primary: styles.variantPrimary,
        secondary: styles.variantSecondary,
        accent: styles.variantAccent,
        outline: styles.variantOutline,
        ghost: styles.variantGhost,
        destructive: styles.variantDestructive,
      },
      size: {
        sm: styles.sizeSm,
        md: styles.sizeMd,
        lg: styles.sizeLg,
        icon: styles.sizeIcon,
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

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

