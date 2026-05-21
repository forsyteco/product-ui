import { Select as BaseSelect } from '@base-ui/react/select';
import { clsx } from 'clsx';
import { getInputInnerClassName, inputVariants, type InputSize } from '../input/input-shell';
import inputStyles from '../input/input.module.css';
import menuStyles from '../field-select/field-select-menu.module.css';
import shellStyles from '../field-select/field-control-shell.module.css';
import { ChevronIcon } from '../field-select/chevron-icon';
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
  defaultValue?: ListboxOption | null;
  onChange?: (value: ListboxOption) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  size?: InputSize;
};

function Listbox({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select an option...',
  className,
  disabled = false,
  error = false,
  size = 'default',
}: ListboxProps) {
  const isControlled = value !== undefined;

  return (
    <BaseSelect.Root<ListboxOption>
      value={isControlled ? (value ?? null) : undefined}
      defaultValue={!isControlled ? (defaultValue ?? undefined) : undefined}
      onValueChange={(next) => {
        const resolved =
          typeof next === 'object'
            ? (next as ListboxOption)
            : options.find((option) => option.value === String(next));
        if (resolved) {
          onChange?.(resolved);
        }
      }}
      disabled={disabled}
      items={options}
      isItemEqualToValue={(a, b) => a.id === b.id}
      itemToStringLabel={(option) => option.label}
    >
      <div className={clsx(styles.root, className)}>
        <BaseSelect.Trigger
          className={clsx(inputVariants({ size, error }), shellStyles.shellButton)}
          aria-invalid={error ? true : undefined}
        >
          <BaseSelect.Value
            className={clsx(
              getInputInnerClassName({ hasEndElement: true }),
              shellStyles.shellValue
            )}
            placeholder={placeholder}
          />
          <span className={clsx(inputStyles.slot, inputStyles['slot-pad'], shellStyles.adornmentSlot)}>
            <ChevronIcon className={shellStyles.icon} />
          </span>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner
            side="bottom"
            align="start"
            sideOffset={4}
            alignItemWithTrigger={false}
            className={menuStyles.positioner}
          >
            <BaseSelect.Popup className={menuStyles.popup}>
              <BaseSelect.List className={menuStyles.list}>
                {options.map((option) => (
                  <BaseSelect.Item
                    key={option.id}
                    value={option}
                    disabled={option.disabled}
                    className={({ highlighted, selected, disabled: optionDisabled }) =>
                      clsx(
                        menuStyles.option,
                        highlighted && menuStyles['option-active'],
                        selected && menuStyles['option-selected'],
                        optionDisabled && menuStyles['option-disabled']
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
