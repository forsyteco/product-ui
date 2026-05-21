import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { clsx } from 'clsx';
import { getInputInnerClassName, inputVariants, type InputSize } from '../input/input-shell';
import inputStyles from '../input/input.module.css';
import menuStyles from '../field-select/field-select-menu.module.css';
import captionStyles from '../field-select/field-caption.module.css';
import shellStyles from '../field-select/field-control-shell.module.css';
import { ChevronIcon } from '../field-select/chevron-icon';
import { ClearIcon } from '../field-select/clear-icon';
import { resolveFieldAutofillProps } from '../utils/field-autofill-props';
import type { ComboboxOption } from './types';
import styles from './combobox.module.css';

type Ctx = {
  placeholder: string;
  disabled: boolean;
  error: boolean;
  clearable: boolean;
  size: InputSize;
  renderOption?: (
    option: ComboboxOption,
    state: { active: boolean; selected: boolean; disabled: boolean }
  ) => React.ReactNode;
};

const ComboboxCtx = React.createContext<Ctx | null>(null);

function useComboboxCtx() {
  const ctx = React.useContext(ComboboxCtx);
  if (!ctx) throw new globalThis.Error('Combobox.* must be used within <Combobox.Root>.');
  return ctx;
}

function defaultFilterFn(option: ComboboxOption, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return option.label.toLowerCase().includes(q);
}

export type ComboboxRootProps = {
  options: ComboboxOption[];

  value?: ComboboxOption | null;
  defaultValue?: ComboboxOption | null;
  onChange?: (value: ComboboxOption | null) => void;

  query?: string;
  defaultQuery?: string;
  onQueryChange?: (query: string) => void;

  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  /** @deprecated Use `error` instead */
  invalid?: boolean;
  clearable?: boolean;
  size?: InputSize;

  /** Override filtering (fuzzy etc.) */
  filterFn?: (option: ComboboxOption, query: string) => boolean;

  /** Customize option rendering */
  renderOption?: Ctx['renderOption'];

  className?: string;
  children: React.ReactNode;
};

function Root({
  options,
  value: valueProp,
  defaultValue = null,
  onChange,
  query: queryProp,
  defaultQuery = '',
  onQueryChange,
  placeholder = 'Select an option…',
  disabled = false,
  error,
  invalid,
  clearable = true,
  size = 'default',
  filterFn,
  renderOption,
  className,
  children,
}: ComboboxRootProps) {
  const isValueControlled = valueProp !== undefined;
  const isQueryControlled = queryProp !== undefined;
  const effectiveFilterFn = filterFn ?? defaultFilterFn;

  const [internalInputValue, setInternalInputValue] = React.useState(() => {
    if (defaultQuery) return defaultQuery;
    if (defaultValue?.label) return defaultValue.label;
    return '';
  });

  React.useEffect(() => {
    if (isQueryControlled || !isValueControlled) return;
    setInternalInputValue(valueProp?.label ?? '');
  }, [isQueryControlled, isValueControlled, valueProp]);

  const inputValue = isQueryControlled ? queryProp : internalInputValue;

  const hasError = error ?? invalid ?? false;

  const ctx: Ctx = React.useMemo(
    () => ({
      placeholder,
      disabled,
      error: hasError,
      clearable,
      size,
      renderOption,
    }),
    [placeholder, disabled, hasError, clearable, size, renderOption]
  );

  return (
    <ComboboxCtx.Provider value={ctx}>
      <BaseCombobox.Root<ComboboxOption>
        value={isValueControlled ? (valueProp ?? null) : undefined}
        defaultValue={!isValueControlled ? (defaultValue ?? undefined) : undefined}
        onValueChange={(next) => {
          const nextValue = (next as ComboboxOption | null) ?? null;
          onChange?.(nextValue);
          if (!isQueryControlled) {
            setInternalInputValue(nextValue?.label ?? '');
          }
        }}
        inputValue={inputValue}
        onInputValueChange={(next) => {
          if (!isQueryControlled) {
            setInternalInputValue(next);
          }
          onQueryChange?.(next);
        }}
        disabled={disabled}
        items={options}
        filter={(item, query) => effectiveFilterFn(item, query)}
        isItemEqualToValue={(a, b) => a.id === b.id}
        itemToStringLabel={(option) => option.label}
      >
        <div className={clsx(styles.root, className)}>{children}</div>
      </BaseCombobox.Root>
    </ComboboxCtx.Provider>
  );
}

function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={clsx(captionStyles.label, className)} />;
}

function Control({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = useComboboxCtx();
  const childItems = React.Children.toArray(children);
  const inputChild = childItems.find(
    (child) => React.isValidElement(child) && child.type === Input
  );
  const clearChild = childItems.find(
    (child) => React.isValidElement(child) && child.type === ClearButton
  );
  const toggleChild = childItems.find(
    (child) => React.isValidElement(child) && child.type === ToggleButton
  );

  return (
    <BaseCombobox.InputGroup
      {...props}
      className={clsx(
        inputVariants({ size: ctx.size, error: ctx.error }),
        styles.control,
        className
      )}
    >
      {inputChild}
      {clearChild ? (
        <div className={clsx(inputStyles.slot, shellStyles.adornmentSlotInteractive)}>{clearChild}</div>
      ) : null}
      {toggleChild ? (
        <div className={clsx(inputStyles.slot, inputStyles['slot-pad'], shellStyles.adornmentSlot)}>
          {toggleChild}
        </div>
      ) : null}
    </BaseCombobox.InputGroup>
  );
}

type InputProps = Omit<
  React.ComponentProps<typeof BaseCombobox.Input>,
  'placeholder'
> & {
  placeholder?: string;
  autoComplete?: string;
};

function Input({
  className,
  placeholder,
  autoComplete,
  ...props
}: InputProps) {
  const ctx = useComboboxCtx();

  return (
    <BaseCombobox.Input
      {...props}
      {...resolveFieldAutofillProps({ autoComplete })}
      placeholder={placeholder ?? ctx.placeholder}
      aria-invalid={ctx.error ? true : undefined}
      className={getInputInnerClassName({
        hasEndElement: true,
        inputClassName: className,
      })}
    />
  );
}

function ClearButton({
  className,
  'aria-label': ariaLabel,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Clear>) {
  const ctx = useComboboxCtx();

  if (!ctx.clearable) return null;

  return (
    <BaseCombobox.Clear
      {...props}
      aria-label={ariaLabel ?? 'Clear selection'}
      className={clsx(shellStyles.iconButton, className)}
    >
      <ClearIcon className={shellStyles.icon} />
    </BaseCombobox.Clear>
  );
}

function ToggleButton({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Trigger>) {
  return (
    <BaseCombobox.Trigger
      {...props}
      aria-label={props['aria-label'] ?? 'Toggle options'}
      className={clsx(shellStyles.iconButton, className)}
    >
      {children ?? <ChevronIcon className={shellStyles.icon} />}
    </BaseCombobox.Trigger>
  );
}

function Options({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof BaseCombobox.List>, 'children'> & {
  /** If omitted, renders filtered options */
  children?: React.ReactNode;
}) {
  const ctx = useComboboxCtx();
  if (ctx.disabled) return null;

  return (
    <BaseCombobox.Portal>
      <BaseCombobox.Positioner
        side="bottom"
        align="start"
        sideOffset={4}
        className={menuStyles.positioner}
      >
        <BaseCombobox.Popup className={clsx(menuStyles.popup, className)}>
          <BaseCombobox.List {...props} className={menuStyles.list}>
            <BaseCombobox.Empty className={menuStyles.empty}>Nothing found.</BaseCombobox.Empty>
            {children ?? (
              <BaseCombobox.Collection>
                {(option: ComboboxOption) => <Option key={option.id} option={option} />}
              </BaseCombobox.Collection>
            )}
          </BaseCombobox.List>
        </BaseCombobox.Popup>
      </BaseCombobox.Positioner>
    </BaseCombobox.Portal>
  );
}

function Empty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <BaseCombobox.Empty {...props} className={clsx(menuStyles.empty, className)}>
      Nothing found.
    </BaseCombobox.Empty>
  );
}

function Option({
  option,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof BaseCombobox.Item>, 'value' | 'children'> & {
  option: ComboboxOption;
  children?: React.ReactNode;
}) {
  const ctx = useComboboxCtx();

  return (
    <BaseCombobox.Item
      {...props}
      value={option}
      disabled={option.disabled}
      className={({ highlighted, selected, disabled: optDisabled }) =>
        clsx(
          menuStyles.option,
          highlighted && menuStyles['option-active'],
          selected && menuStyles['option-selected'],
          optDisabled && menuStyles['option-disabled'],
          typeof className === 'function' ? className({ highlighted, selected, disabled: optDisabled }) : className
        )
      }
    >
      {children ??
        ctx.renderOption?.(option, {
          active: false,
          selected: false,
          disabled: Boolean(option.disabled),
        }) ??
        option.label}
    </BaseCombobox.Item>
  );
}

function Hint({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(captionStyles.hint, className)} />;
}

function Error({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(captionStyles.error, className)} />;
}

export const Combobox = {
  Root,
  Label,
  Control,
  Input,
  ClearButton,
  ToggleButton,
  Options,
  Option,
  Empty,
  Hint,
  Error,
} as const;

export type { ComboboxRootProps as ComboboxProps };
