import { type InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const inputVariants = cva(
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

export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

function Input({ error, className, ...props }: InputProps) {
  return (
    <input
      className={cn(inputVariants({ error }), className)}
      {...props}
    />
  );
}

export default Input;

