import { type InputHTMLAttributes, type CSSProperties } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import styles from './checkbox.module.css';

const checkboxVariants = cva(
  styles.root,
  {
    variants: {
      size: {
        sm: styles.sizeSm,
        md: styles.sizeMd,
        lg: styles.sizeLg,
      },
      // Variant for default checked styling (can be disabled when using custom colors)
      useDefaultCheckedStyle: {
        true: styles.useDefaultCheckedStyle,
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      useDefaultCheckedStyle: true,
    },
  }
);

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & VariantProps<typeof checkboxVariants> & {
  label?: string;
  /** Custom background color when checked */
  checkedBackground?: CSSProperties['backgroundColor'];
  /** Custom foreground/tick color when checked */
  checkedForeground?: CSSProperties['color'];
};

function Checkbox({ label, size, className, id, checked, checkedBackground, checkedForeground, ...props }: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  // Use custom colors if provided
  const hasCustomColors = checkedBackground || checkedForeground;
  const customStyle: CSSProperties | undefined = checked && hasCustomColors
    ? {
        ...(checkedBackground && { backgroundColor: checkedBackground, borderColor: checkedBackground }),
        ...(checkedForeground && { color: checkedForeground }),
      }
    : undefined;

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        className={clsx(checkboxVariants({ size, useDefaultCheckedStyle: !hasCustomColors }), className)}
        style={customStyle}
        {...props}
      />
      {label && (
        <label htmlFor={checkboxId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
}

export { Checkbox };

