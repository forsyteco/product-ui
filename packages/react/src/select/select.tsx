import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { Select as BaseSelect } from '@base-ui/react/select';
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

export type SelectProps = VariantProps<typeof selectVariants> & {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | null) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  className?: string;
};

function Select({
  options,
  placeholder,
  error,
  className,
  value,
  defaultValue,
  onValueChange,
  disabled,
  required,
  name,
}: SelectProps) {
  const computedDefaultValue =
    defaultValue ?? (value === undefined && !placeholder ? options[0]?.value : undefined);

  return (
    <BaseSelect.Root
      value={value}
      defaultValue={computedDefaultValue}
      onValueChange={(next) => {
        onValueChange?.((next as string) ?? null);
      }}
      disabled={disabled}
      required={required}
      name={name}
      items={options.map((option) => ({ label: option.label, value: option.value }))}
    >
      <div className={styles.wrapper}>
        <BaseSelect.Trigger className={clsx(selectVariants({ error }), className)}>
          <BaseSelect.Value>{placeholder ? <span>{placeholder}</span> : null}</BaseSelect.Value>
        </BaseSelect.Trigger>
        <span className={styles['icon-wrap']}>
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
      <BaseSelect.Portal>
        <BaseSelect.Positioner sideOffset={4}>
          <BaseSelect.Popup className={styles.select}>
            <BaseSelect.List>
              {options.map((option) => (
                <BaseSelect.Item key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

export { Select };

