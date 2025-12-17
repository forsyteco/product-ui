import { type TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const textareaVariants = cva(
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

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & VariantProps<typeof textareaVariants>;

function Textarea({ error, className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(textareaVariants({ error }), className)}
      {...props}
    />
  );
}

export { Textarea };

