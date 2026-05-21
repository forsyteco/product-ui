import { forwardRef, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

import styles from './label.module.css';

export const labelVariants = cva(styles.root, {
  variants: {
    variant: {
      primary: styles['variant-primary'],
      secondary: styles['variant-secondary'],
      outline: styles['variant-outline'],
      ghost: styles['variant-ghost'],
    },
    size: {
      default: styles['size-default'],
      sm: styles['size-sm'],
      lg: styles['size-lg'],
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'default',
  },
});

export type LabelProps = Omit<React.ComponentProps<'span'>, 'children'> &
  VariantProps<typeof labelVariants> & {
    children?: ReactNode;
  };

const Label = forwardRef<HTMLSpanElement, LabelProps>(function Label(
  { variant = 'outline', size = 'default', className, children, ...props },
  ref
) {
  return (
    <span
      ref={ref}
      data-slot="label"
      data-variant={variant ?? 'outline'}
      className={clsx(labelVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
});

Label.displayName = 'Label';

export { Label };
