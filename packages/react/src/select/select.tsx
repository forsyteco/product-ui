import { type SelectHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

const selectVariants = cva(
  'block w-full rounded-md border border-input bg-background text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      error: {
        true: 'border-destructive-border focus:border-destructive focus:ring-destructive',
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

