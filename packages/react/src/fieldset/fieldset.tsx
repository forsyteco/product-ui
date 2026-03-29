import { type FieldsetHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import styles from './fieldset.module.css';

const fieldsetVariants = cva(
  styles.root,
  {
    variants: {
      variant: {
        default: '',
        error: styles.error,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & VariantProps<typeof fieldsetVariants> & {
  legend?: string;
  children: ReactNode;
  error?: boolean;
};

function Fieldset({ legend, children, variant, error = false, className, ...props }: FieldsetProps) {
  const resolvedVariant = error ? 'error' : variant;

  return (
    <fieldset
      className={clsx(fieldsetVariants({ variant: resolvedVariant }), className)}
      {...props}
    >
      {legend && (
        <legend className={styles.legend}>
          {legend}
        </legend>
      )}
      {children}
    </fieldset>
  );
}

export { Fieldset };

