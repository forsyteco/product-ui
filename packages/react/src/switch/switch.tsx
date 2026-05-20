import { Field } from '@base-ui/react/field';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { clsx } from 'clsx';
import styles from './switch.module.css';

type SwitchSize = 'sm' | 'md' | 'lg';
const ROOT_SIZE_CLASS: Record<SwitchSize, string> = {
  sm: styles['switch-sm'],
  md: styles['switch-md'],
  lg: styles['switch-lg'],
};

const THUMB_SIZE_CLASS: Record<SwitchSize, string> = {
  sm: styles['thumb-sm'],
  md: styles['thumb-md'],
  lg: styles['thumb-lg'],
};

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
}: Readonly<SwitchProps>) {
  const isDisabled = Boolean(disabled);
  const resolvedSize = size ?? 'md';

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
          ROOT_SIZE_CLASS[resolvedSize],
          isDisabled && styles['switch-disabled']
        )}
      >
        <BaseSwitch.Thumb
          className={clsx(
            styles.thumb,
            THUMB_SIZE_CLASS[resolvedSize]
          )}
        />
      </BaseSwitch.Root>
    </Field.Root>
  );
}

export { Switch };

