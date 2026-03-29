import { type ReactNode } from 'react';
import { Listbox as HeadlessListbox } from '@headlessui/react';
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
    <HeadlessListbox value={value ?? undefined} onChange={onChange} disabled={disabled}>
      <div className={clsx(styles.root, className)}>
        <HeadlessListbox.Button
          className={clsx(
            styles.button,
            disabled && styles['button-disabled']
          )}
        >
          <span className={styles.value}>
            {value?.label || placeholder}
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
        </HeadlessListbox.Button>
        <HeadlessListbox.Options className={styles.options}>
          {options.map((option) => (
            <HeadlessListbox.Option
              key={option.id}
              value={option}
              disabled={option.disabled}
              className={({ active, disabled }) =>
                clsx(
                  styles.option,
                  active ? styles['option-active'] : styles['option-inactive'],
                  disabled && styles['option-disabled']
                )
              }
            >
              {option.label}
            </HeadlessListbox.Option>
          ))}
        </HeadlessListbox.Options>
      </div>
    </HeadlessListbox>
  );
}

export { Listbox };

