import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import styles from './checkbox.module.css';

const checkboxVariants = cva(
  styles.root,
  {
    variants: {
      size: {
        sm: styles['size-sm'],
        md: styles['size-md'],
        lg: styles['size-lg'],
      },
      // Variant for default checked styling (can be disabled when using custom colors)
      useDefaultCheckedStyle: {
        true: styles['use-default-checked-style'],
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      useDefaultCheckedStyle: true,
    },
  }
);

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> &
VariantProps<typeof checkboxVariants> & {
  label?: string;
  /** Custom background color when checked */
  checkedBackground?: React.CSSProperties['backgroundColor'];
  /** Custom foreground/tick color when checked */
  checkedForeground?: React.CSSProperties['color'];
  onChange?: (checked: boolean) => void;
};

function Checkbox({
  label,
  size,
  className,
  id,
  checked,
  defaultChecked,
  checkedBackground,
  checkedForeground,
  onChange,
  ...props
}: CheckboxProps) {
  const reactId = React.useId();
  const checkboxId = id || `checkbox-${reactId}`;

  // Use custom colors if provided
  const hasCustomColors = checkedBackground || checkedForeground;
  const isChecked = checked ?? defaultChecked;
  const customStyle: React.CSSProperties | undefined = isChecked && hasCustomColors
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
        defaultChecked={defaultChecked}
        className={clsx(checkboxVariants({ size, useDefaultCheckedStyle: !hasCustomColors }), className)}
        style={customStyle}
        onChange={(event) => onChange?.(event.target.checked)}
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

