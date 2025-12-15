import { type FieldsetHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const fieldsetVariants = cva(
  'border rounded-md p-4 bg-background',
  {
    variants: {
      variant: {
        default: 'border-border',
        error: 'border-destructive-border',
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
        <legend className="px-2 text-base font-medium text-foreground">
          {legend}
        </legend>
      )}
      {children}
    </fieldset>
  );
}

export default Fieldset;

