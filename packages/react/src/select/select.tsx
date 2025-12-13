import { type SelectHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

const selectVariants = cva(
  'block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500',
  {
    variants: {
      error: {
        true: 'border-red-300 focus:border-red-500 focus:ring-red-500',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & VariantProps<typeof selectVariants> & {
  options: SelectOption[];
  placeholder?: string;
};

function Select({ options, placeholder, error, className, ...props }: SelectProps) {
  return (
    <select
      className={cn(selectVariants({ error }), className)}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;

