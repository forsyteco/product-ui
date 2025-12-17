import { type InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/tailwind';

const checkboxVariants = cva(
  [
    // Base
    'relative inline-flex shrink-0 appearance-none items-center justify-center rounded border border-input bg-background text-foreground transition-colors',
    // Checked: background should be accent; tick should be accent-foreground (via currentColor)
    'checked:border-accent checked:bg-accent checked:text-accent-foreground',
    // Focus / disabled
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
    'disabled:cursor-not-allowed disabled:opacity-50',
    // Tick mark (hidden until checked)
    'after:absolute after:left-1/2 after:top-1/2 after:block after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current after:opacity-0',
    'checked:after:opacity-100',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-3 w-3 after:h-1.5 after:w-0.5',
        md: 'h-4 w-4 after:h-2 after:w-1',
        lg: 'h-5 w-5 after:h-2.5 after:w-1.5',
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
        <label htmlFor={checkboxId} className="ml-2 text-base text-foreground">
          {label}
        </label>
      )}
    </div>
  );
}

export { Checkbox };

