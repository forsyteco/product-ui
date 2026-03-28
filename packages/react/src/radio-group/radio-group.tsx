import { type ReactNode } from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import { clsx } from 'clsx';
import styles from './radio-group.module.css';

export type RadioGroupOption = {
  id: string | number;
  label: string;
  value: string;
  description?: string;
};

export type RadioGroupProps = {
  options: RadioGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

export type RadioGroupOptionProps = {
  option: RadioGroupOption;
  className?: string;
};

function RadioGroup({
  options,
  value,
  onChange,
  className,
  disabled = false,
}: RadioGroupProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <HeadlessRadioGroup value={value} onChange={onChange} disabled={disabled}>
        {options.map((option) => (
          <HeadlessRadioGroup.Option
            key={option.id}
            value={option.value}
            className={({ checked, disabled: optionDisabled }) =>
              clsx(
                styles.option,
                checked && styles.optionChecked,
                (disabled || optionDisabled) && styles.optionDisabled
              )
            }
          >
            {({ checked }) => (
              <div className={styles.row}>
                <div className={styles.labelWrap}>
                  <div className={styles.text}>
                    <HeadlessRadioGroup.Label as="p" className={clsx(styles.label, checked && styles.labelChecked)}>
                      {option.label}
                    </HeadlessRadioGroup.Label>
                    {option.description && (
                      <HeadlessRadioGroup.Description
                        as="span"
                        className={clsx(styles.description, checked && styles.descriptionChecked)}
                      >
                        {option.description}
                      </HeadlessRadioGroup.Description>
                    )}
                  </div>
                </div>
                {checked && (
                  <div className={styles.iconWrap}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a1 1 0 00-1.714-1.029L9 9.586 7.857 8.162a1 1 0 00-1.714 1.029l2 3a1 1 0 001.514.143l4-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            )}
          </HeadlessRadioGroup.Option>
        ))}
      </HeadlessRadioGroup>
    </div>
  );
}

export { RadioGroup };

