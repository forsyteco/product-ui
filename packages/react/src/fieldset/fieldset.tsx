import { type FieldsetHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
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
    <BaseFieldset.Root
      className={clsx(fieldsetVariants({ variant: resolvedVariant }), className)}
      {...props}
    >
      {legend && (
        <BaseFieldset.Legend className={styles.legend}>
          {legend}
        </BaseFieldset.Legend>
      )}
      {children}
    </BaseFieldset.Root>
  );
}

export { Fieldset };

