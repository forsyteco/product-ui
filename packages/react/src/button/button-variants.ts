import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

import styles from './button.module.css';

function variantClass(
  appearance: string,
  recipe: 'fill-darken' | 'fill-lighten' | 'surface-tint'
) {
  return clsx(styles[appearance], styles[recipe]);
}

export const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      primary: variantClass('variant-primary', 'fill-darken'),
      accent: variantClass('variant-accent', 'fill-darken'),
      secondary: variantClass('variant-secondary', 'fill-lighten'),
      outline: variantClass('variant-outline', 'surface-tint'),
      ghost: variantClass('variant-ghost', 'surface-tint'),
      destructive: variantClass('variant-destructive', 'fill-darken'),
    },
    size: {
      sm: styles['size-sm'],
      md: styles['size-md'],
      lg: styles['size-lg'],
      icon: styles['size-icon'],
      small: styles['size-small'],
      medium: styles['size-medium'],
      large: styles['size-large'],
    },
    shape: {
      square: styles['shape-square'],
      circle: styles['shape-circle'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    shape: 'square',
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const iconSizes = {
  small: styles['icon-small'],
  medium: styles['icon-medium'],
  large: styles['icon-large'],
} as const;

export type IconOnlyButtonSize = keyof typeof iconSizes;

export function normalizeButtonVariant(
  variant: ButtonVariantProps['variant'] | 'danger' | null | undefined
): NonNullable<ButtonVariantProps['variant']> {
  if (variant === 'danger') {
    return 'destructive';
  }

  return variant ?? 'primary';
}
