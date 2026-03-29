import { Field } from '@base-ui/react/field';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { clsx } from 'clsx';
import styles from './switch.module.css';

type SwitchSize = 'sm' | 'md' | 'lg';

export type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: SwitchSize;
  className?: string;
};

function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  description,
  disabled = false,
  size,
  className,
}: SwitchProps) {
  const isDisabled = Boolean(disabled);

  return (
    <Field.Root className={clsx(styles.field, className)}>
      {label && (
        <Field.Label
          className={clsx(
            styles.label,
            isDisabled && styles['label-disabled']
          )}
        >
          {label}
        </Field.Label>
      )}
      {description && (
        <Field.Description
          className={clsx(
            styles.description,
            isDisabled && styles['description-disabled']
          )}
        >
          {description}
        </Field.Description>
      )}
      <BaseSwitch.Root
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(nextChecked) => onChange?.(nextChecked)}
        disabled={isDisabled}
        className={clsx(
          styles.switch,
          size === 'sm' ? styles['switch-sm'] : size === 'lg' ? styles['switch-lg'] : styles['switch-md'],
          isDisabled && styles['switch-disabled']
        )}
      >
        <BaseSwitch.Thumb
          className={clsx(
            styles.thumb,
            size === 'sm' ? styles['thumb-sm'] : size === 'lg' ? styles['thumb-lg'] : styles['thumb-md']
          )}
        />
      </BaseSwitch.Root>
    </Field.Root>
  );
}

export { Switch };

