import { Field, Label, Description, Switch as HeadlessSwitch } from '@headlessui/react';
import { clsx } from 'clsx';
import styles from './switch.module.css';

type SwitchSize = 'sm' | 'md' | 'lg';

export type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: SwitchSize;
  className?: string;
};

function Switch({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  size,
  className,
}: SwitchProps) {
  const isDisabled = Boolean(disabled);

  return (
    <Field className={clsx(styles.field, className)}>
      {label && (
        <Label
          className={clsx(
            styles.label,
            isDisabled && styles['label-disabled']
          )}
        >
          {label}
        </Label>
      )}
      {description && (
        <Description
          className={clsx(
            styles.description,
            isDisabled && styles['description-disabled']
          )}
        >
          {description}
        </Description>
      )}
      <HeadlessSwitch
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
        className={clsx(
          styles.switch,
          size === 'sm' ? styles['switch-sm'] : size === 'lg' ? styles['switch-lg'] : styles['switch-md'],
          isDisabled && styles['switch-disabled']
        )}
      >
        <span
          className={clsx(
            styles.thumb,
            size === 'sm' ? styles['thumb-sm'] : size === 'lg' ? styles['thumb-lg'] : styles['thumb-md']
          )}
        />
      </HeadlessSwitch>
    </Field>
  );
}

export { Switch };

