import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { clsx } from 'clsx';
import type { ComboboxOption } from './types';
import styles from './combobox.module.css';

type Ctx = {
  options: ComboboxOption[];
  filteredOptions: ComboboxOption[];
  value: ComboboxOption | null;
  setValue: (next: ComboboxOption | null) => void;

  query: string;
  setQuery: (next: string) => void;

  placeholder: string;
  disabled: boolean;
  invalid: boolean;
  clearable: boolean;
  isOpen: boolean;
  setIsOpen: (next: boolean) => void;
  filterFn: (option: ComboboxOption, query: string) => boolean;
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
  invalid?: boolean;
  clearable?: boolean;

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
  invalid = false,
  clearable = true,

  filterFn,
  renderOption,

  className,
  children,
}: ComboboxRootProps) {
  const isControlled = valueProp !== undefined;
  // selection (controlled/uncontrolled)
  const [internalValue, setInternalValue] = React.useState<ComboboxOption | null>(defaultValue);
  const value = isControlled ? valueProp : internalValue;

  const setValue = React.useCallback(
    (next: ComboboxOption | null) => {
      if (valueProp === undefined) setInternalValue(next);
      onChange?.(next);
    },
    [onChange, valueProp]
  );

  // query (controlled/uncontrolled)
  const [internalQuery, setInternalQuery] = React.useState(defaultQuery);
  const query = queryProp !== undefined ? queryProp : internalQuery;
  const [open, setOpen] = React.useState(false);

  const setQuery = React.useCallback(
    (next: string) => {
      if (queryProp === undefined) setInternalQuery(next);
      onQueryChange?.(next);
    },
    [onQueryChange, queryProp]
  );

  const effectiveFilterFn = filterFn ?? defaultFilterFn;

  React.useEffect(() => {
    if (queryProp !== undefined) return;
    if (value?.label) {
      setInternalQuery(value.label);
    } else if (!value) {
      setInternalQuery('');
    }
  }, [queryProp, value]);

  const filteredOptions = React.useMemo(() => {
    if (!query.trim()) return options;
    return options.filter((o) => effectiveFilterFn(o, query));
  }, [options, query, effectiveFilterFn]);

  const ctx: Ctx = React.useMemo(
    () => ({
      options,
      filteredOptions,
      value,
      setValue,
      query,
      setQuery,
      placeholder,
      disabled,
      invalid,
      clearable,
      isOpen: open,
      setIsOpen: setOpen,
      filterFn: effectiveFilterFn,
      renderOption,
    }),
    [
      options,
      filteredOptions,
      value,
      setValue,
      query,
      setQuery,
      placeholder,
      disabled,
      invalid,
      clearable,
      open,
      setOpen,
      effectiveFilterFn,
      renderOption,
    ]
  );

  return (
    <ComboboxCtx.Provider value={ctx}>
      <BaseCombobox.Root<ComboboxOption>
        value={isControlled ? value ?? undefined : undefined}
        defaultValue={!isControlled ? defaultValue ?? undefined : undefined}
        inputValue={query}
        onValueChange={(next) => {
          const nextValue = (next as ComboboxOption) ?? null;
          setValue(nextValue);
          if (queryProp === undefined) {
            setInternalQuery(nextValue?.label ?? '');
          }
          setOpen(false);
        }}
        onInputValueChange={(inputValue) => setQuery(inputValue)}
        open={open}
        onOpenChange={setOpen}
        disabled={disabled}
        items={options.map((option) => ({ label: option.label, value: option }))}
        itemToStringLabel={(option) => option.label}
      >
        <div className={clsx(styles.root, className)}>
          {children}
        </div>
      </BaseCombobox.Root>
    </ComboboxCtx.Provider>
  );
}

function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={clsx(styles.label, className)}
    />
  );
}

function Control({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx(styles.control, className)} />;
}

type InputProps = Omit<
  React.ComponentProps<typeof BaseCombobox.Input>,
  'displayValue' | 'onChange'
> & {
  displayValue?: (option: ComboboxOption | null) => string;
  onValueTextChange?: (text: string) => void;
  placeholder?: string;
};

function Input({
  className,
  displayValue: _displayValue,
  onValueTextChange,
  ...props
}: InputProps) {
  const ctx = useComboboxCtx();

  const placeholderValue = props.placeholder ?? ctx.placeholder;

  return (
    <BaseCombobox.Input
      {...props}
      value={ctx.query}
      placeholder={placeholderValue}
      className={clsx(
        styles.input,
        ctx.invalid && styles['input-invalid'],
        ctx.disabled && styles['input-disabled'],
        className
      )}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const next = e.target.value;
        ctx.setQuery(next);
        onValueTextChange?.(next);
        ctx.setIsOpen(true);
      }}
      onFocus={() => ctx.setIsOpen(true)}
    />
  );
}

function ClearButton({
  className,
  'aria-label': ariaLabel,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = useComboboxCtx();
  const visible = ctx.clearable && !!ctx.value && !ctx.disabled;

  if (!visible) return null;

  return (
    <button
      type="button"
      {...props}
      aria-label={ariaLabel ?? 'Clear selection'}
      className={clsx(
        styles['clear-button'],
        className
      )}
      onClick={(e) => {
        e.preventDefault();
        ctx.setValue(null);
        ctx.setQuery('');
        ctx.setIsOpen(false);
        onClick?.(e);
      }}
    >
      <svg className={styles['clear-icon']} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M10 8.586 4.293 2.879A1 1 0 1 0 2.879 4.293L8.586 10l-5.707 5.707a1 1 0 1 0 1.414 1.414L10 11.414l5.707 5.707a1 1 0 0 0 1.414-1.414L11.414 10l5.707-5.707A1 1 0 0 0 15.707 2.88L10 8.586Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

function ToggleButton({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Trigger>) {
  const ctx = useComboboxCtx();

  return (
    <BaseCombobox.Trigger
      {...props}
      aria-label={props['aria-label'] ?? 'Toggle options'}
      className={clsx(
        styles['toggle-button'],
        ctx.disabled && styles['toggle-disabled'],
        className
      )}
      onClick={onClick}
    >
      {children ?? (
        <svg className={styles['toggle-icon']} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
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

  const hasResults = ctx.filteredOptions.length > 0;

  return (
    <BaseCombobox.Portal>
      <BaseCombobox.Positioner sideOffset={4}>
        <BaseCombobox.Popup className={clsx(styles.options, className)}>
          <BaseCombobox.List {...props}>
            {children ? (
              children
            ) : hasResults ? (
              ctx.filteredOptions.map((opt) => <Option key={opt.id} option={opt} />)
            ) : (
              <Empty />
            )}
          </BaseCombobox.List>
        </BaseCombobox.Popup>
      </BaseCombobox.Positioner>
    </BaseCombobox.Portal>
  );
}

function Empty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(styles.empty, className)}
    >
      Nothing found.
    </div>
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
          styles.option,
          optDisabled ? styles['option-disabled'] : styles['option-enabled'],
          highlighted ? styles['option-active'] : styles['option-inactive'],
          selected && styles['option-selected'],
          typeof className === 'function' ? className({ highlighted, selected, disabled: optDisabled }) : className
        )
      }
    >
      {children ?? ctx.renderOption?.(option, { active: false, selected: false, disabled: Boolean(option.disabled) }) ?? option.label}
    </BaseCombobox.Item>
  );
}

function Hint({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(styles.hint, className)} />;
}

function Error({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(styles.error, className)} />;
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
