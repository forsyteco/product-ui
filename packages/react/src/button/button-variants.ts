import { cva, type VariantProps } from 'class-variance-authority';
import styles from './button.module.css';

export const buttonVariants = cva(
  styles.root,
  {
    variants: {
      variant: {
        primary: styles['variant-primary'],
        default: styles['variant-default'],
        ghost: styles['variant-ghost'],
        danger: styles['variant-danger'],
      },
      size: {
        sm: styles['size-sm'],
        md: styles['size-md'],
        lg: styles['size-lg'],
        icon: styles['size-icon'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
