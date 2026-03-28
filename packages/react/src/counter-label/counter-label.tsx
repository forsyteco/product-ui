import { forwardRef, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils/cn';
import { VisuallyHidden } from '../visually-hidden';
import styles from './counter-label.module.css';

const counterLabelVariants = cva(
  styles.root,
  {
    variants: {
      variant: {
        primary: styles.variantPrimary,
        secondary: styles.variantSecondary,
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  }
);

export type CounterLabelProps = Omit<React.ComponentProps<'span'>, 'children'> &
  VariantProps<typeof counterLabelVariants> & {
    children?: ReactNode;
  };

const CounterLabel = forwardRef<HTMLSpanElement, CounterLabelProps>(function CounterLabel(
  { variant, className, children, ...props },
  ref
) {
  // Match the old ":empty { display:none }" behavior, and avoid rendering a screen-reader label for empty content.
  if (children === undefined || children === null || children === '') {
    return null;
  }

  return (
    <>
      <span
        ref={ref}
        aria-hidden="true"
        data-slot="counter-label"
        data-variant={variant ?? 'secondary'}
        className={cn(counterLabelVariants({ variant }), className)}
        {...props}
      >
        {children}
      </span>
      <VisuallyHidden>&nbsp;({children})</VisuallyHidden>
    </>
  );
});

CounterLabel.displayName = 'CounterLabel';

export { CounterLabel };