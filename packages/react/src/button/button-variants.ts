import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-accent-foreground hover:opacity-90',
        secondary: 'bg-primary text-primary-foreground hover:opacity-90',
        accent: 'bg-accent text-accent-foreground hover:opacity-90',
        outline: 'border border-border bg-background text-foreground hover:bg-muted',
        ghost: 'text-foreground hover:bg-muted',
        destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
      },
      size: {
        sm: 'px-3 py-1.5 text-base',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-base',
        icon: 'h-9 w-9 p-0',
        small: 'h-8 w-8 text-sm',
        medium: 'h-9 w-9 text-base',
        large: 'h-10 w-10 text-lg',
      },
      shape: {
        square: 'rounded-md',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'square',
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const iconSizes = {
  small: 'h-4 w-4',
  medium: 'h-5 w-5',
  large: 'h-6 w-6',
} as const;

export type IconOnlyButtonSize = keyof typeof iconSizes;

export function normalizeButtonVariant(
  variant: ButtonVariantProps['variant'] | 'danger' | undefined
): NonNullable<ButtonVariantProps['variant']> {
  if (variant === 'danger') {
    return 'destructive';
  }

  return variant ?? 'primary';
}
