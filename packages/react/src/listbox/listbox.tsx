import { type ReactNode } from 'react';
import { Select as BaseSelect } from '@base-ui/react/select';
import { clsx } from 'clsx';
import styles from './listbox.module.css';

export type ListboxOption = {
  id: string | number;
  label: string;
  value: string;
  disabled?: boolean;
};

export type ListboxProps = {
  options: ListboxOption[];
  value?: ListboxOption | null;
  onChange?: (value: ListboxOption) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export type ListboxButtonProps = {
  children: ReactNode;
  className?: string;
};

export type ListboxOptionsProps = {
  children: ReactNode;
  className?: string;
};

export type ListboxOptionProps = {
  option: ListboxOption;
  className?: string;
};

function Listbox({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  className,
  disabled = false,
}: ListboxProps) {
  return (
    <BaseSelect.Root<ListboxOption>
      value={value ?? undefined}
      onValueChange={(next) => {
        const resolved = typeof next === 'object'
          ? (next as ListboxOption)
          : options.find((option) => option.value === String(next));
        if (resolved) {
          onChange?.(resolved);
        }
      }}
      disabled={disabled}
      items={options.map((option) => ({ label: option.label, value: option }))}
      itemToStringLabel={(option) => option.label}
    >
      <div className={clsx(styles.root, className)}>
        <BaseSelect.Trigger
          className={clsx(
            styles.button,
            disabled && styles['button-disabled']
          )}
        >
          <span className={styles.value}>
            {value?.label ?? placeholder}
          </span>
          <span className={styles['icon-wrap']}>
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner>
            <BaseSelect.Popup className={styles.options}>
              <BaseSelect.List>
          {options.map((option) => (
            <BaseSelect.Item
              key={option.id}
              value={option}
              disabled={option.disabled}
              className={({ highlighted, disabled: optionDisabled }) =>
                clsx(
                  styles.option,
                  highlighted ? styles['option-active'] : styles['option-inactive'],
                  optionDisabled && styles['option-disabled']
                )
              }
            >
              {option.label}
            </BaseSelect.Item>
          ))}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </div>
    </BaseSelect.Root>
  );
}

export { Listbox };

