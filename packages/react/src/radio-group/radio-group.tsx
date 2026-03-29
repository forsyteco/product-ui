import { type ReactNode } from 'react';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import { Radio } from '@base-ui/react/radio';
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
      <BaseRadioGroup value={value} onValueChange={(next) => onChange?.(String(next))} disabled={disabled}>
        {options.map((option) => (
          <Radio.Root
            key={option.id}
            value={option.value}
            disabled={disabled}
            className={({ checked, disabled: optionDisabled }) =>
              clsx(
                styles.option,
                checked && styles['option-checked'],
                (disabled || optionDisabled) && styles['option-disabled']
              )
            }
          >
            <div className={styles.row}>
              <div className={styles['label-wrap']}>
                <div className={styles.text}>
                  <p className={styles.label}>
                    {option.label}
                  </p>
                  {option.description && (
                    <span className={styles.description}>
                      {option.description}
                    </span>
                  )}
                </div>
              </div>
              <Radio.Indicator className={styles['icon-wrap']}>
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a1 1 0 00-1.714-1.029L9 9.586 7.857 8.162a1 1 0 00-1.714 1.029l2 3a1 1 0 001.514.143l4-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </Radio.Indicator>
            </div>
          </Radio.Root>
        ))}
      </BaseRadioGroup>
    </div>
  );
}

export { RadioGroup };

