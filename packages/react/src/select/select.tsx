import { type SelectHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import styles from './select.module.css';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

const selectVariants = cva(
  styles.select,
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

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & VariantProps<typeof selectVariants> & {
  options: SelectOption[];
  placeholder?: string;
};

function Select({ options, placeholder, error, className, ...props }: SelectProps) {
  return (
    <div className={styles.wrapper}>
      <select
        className={clsx(selectVariants({ error }), className)}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <span className={styles.iconWrap}>
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>
  );
}

export { Select };

