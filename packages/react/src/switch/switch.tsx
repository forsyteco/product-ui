import { Field, Label, Description, Switch as HeadlessSwitch } from '@headlessui/react';
import { cn } from '../utils/cn';
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
    <Field className={cn(styles.field, className)}>
      {label && (
        <Label
          className={cn(
            styles.label,
            isDisabled && styles.labelDisabled
          )}
        >
          {label}
        </Label>
      )}
      {description && (
        <Description
          className={cn(
            styles.description,
            isDisabled && styles.descriptionDisabled
          )}
        >
          {description}
        </Description>
      )}
      <HeadlessSwitch
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
        className={cn(
          styles.switch,
          size === 'sm' ? styles.switchSm : size === 'lg' ? styles.switchLg : styles.switchMd,
          isDisabled && styles.switchDisabled
        )}
      >
        <span
          className={cn(
            styles.thumb,
            size === 'sm' ? styles.thumbSm : size === 'lg' ? styles.thumbLg : styles.thumbMd
          )}
        />
      </HeadlessSwitch>
    </Field>
  );
}

export { Switch };

