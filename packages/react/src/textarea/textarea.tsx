import { type TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const textareaVariants = cva(
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

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & VariantProps<typeof textareaVariants>;

function Textarea({ error, className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(textareaVariants({ error }), className)}
      {...props}
    />
  );
}

export default Textarea;

