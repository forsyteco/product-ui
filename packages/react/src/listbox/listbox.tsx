import { type ReactNode } from 'react';
import { Listbox as HeadlessListbox } from '@headlessui/react';
import { cn } from '../utils/cn';
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
      <div className={cn(styles.root, className)}>
        <HeadlessListbox.Button
          className={cn(
            styles.button,
            disabled && styles.buttonDisabled
          )}
        >
          <span className={styles.value}>
            {value?.label || placeholder}
          </span>
          <span className={styles.iconWrap}>
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
                cn(
                  styles.option,
                  active ? styles.optionActive : styles.optionInactive,
                  disabled && styles.optionDisabled
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

