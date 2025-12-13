import { type FieldsetHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const fieldsetVariants = cva(
  'border rounded-md p-4',
  {
    variants: {
      variant: {
        default: 'border-gray-300',
        error: 'border-red-300',
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
        <legend className="px-2 text-sm font-medium text-gray-700">
          {legend}
        </legend>
      )}
      {children}
    </fieldset>
  );
}

export default Fieldset;

