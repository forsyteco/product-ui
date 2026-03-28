import { type FieldsetHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
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
};

function Fieldset({ legend, children, variant, className, ...props }: FieldsetProps) {
  return (
    <fieldset
      className={cn(fieldsetVariants({ variant }), className)}
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

