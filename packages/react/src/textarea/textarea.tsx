import { type TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import styles from './textarea.module.css';

const textareaVariants = cva(
  styles.root,
  {
    variants: {
      error: {
        true: styles.error,
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
      className={clsx(textareaVariants({ error }), className)}
      {...props}
    />
  );
}

export { Textarea };

