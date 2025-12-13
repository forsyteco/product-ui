import { type InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const checkboxVariants = cva(
  'rounded border-gray-300 text-blue-600 focus:ring-blue-500',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & VariantProps<typeof checkboxVariants> & {
  label?: string;
};

function Checkbox({ label, size, className, id, ...props }: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={checkboxId}
        className={cn(checkboxVariants({ size }), className)}
        {...props}
      />
      {label && (
        <label htmlFor={checkboxId} className="ml-2 text-sm text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
}

export default Checkbox;

