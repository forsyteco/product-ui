import * as React from 'react';
import {
  Combobox as HeadlessCombobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption as HeadlessComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { cn } from '../utils/cn';
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

  isOpen: boolean;
  setIsOpen: (next: boolean) => void;

  clearable: boolean;

  /** Ref to the root container; used to avoid closing on blur when focus moves inside (e.g. toggle or option). */
  rootRef: React.RefObject<HTMLDivElement | null>;

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
  // selection (controlled/uncontrolled)
  const [internalValue, setInternalValue] = React.useState<ComboboxOption | null>(defaultValue);
  const value = valueProp !== undefined ? valueProp : internalValue;

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

  const setQuery = React.useCallback(
    (next: string) => {
      if (queryProp === undefined) setInternalQuery(next);
      onQueryChange?.(next);
    },
    [onQueryChange, queryProp]
  );

  // open/close (local); only used for syncing (e.g. onClose). Visibility is controlled by Headless.
  const [isOpen, setIsOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const effectiveFilterFn = filterFn ?? defaultFilterFn;

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
      isOpen,
      setIsOpen,
      clearable,
      rootRef,
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
      isOpen,
      clearable,
      effectiveFilterFn,
      renderOption,
    ]
  );

  return (
    <ComboboxCtx.Provider value={ctx}>
      <div ref={rootRef} className={cn(styles.root, className)}>
        <HeadlessCombobox
          by="id"
          value={value}
          onChange={(next) => {
            setValue(next);
            setIsOpen(false);
          }}
          onClose={() => setIsOpen(false)}
          disabled={disabled}
          nullable
        >
          {children}
        </HeadlessCombobox>
      </div>
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
      className={cn(styles.label, className)}
    />
  );
}

function Control({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn(styles.control, className)} />;
}

type InputProps = Omit<
  React.ComponentProps<typeof ComboboxInput>,
  'displayValue' | 'onChange'
> & {
  displayValue?: (option: ComboboxOption | null) => string;
  onValueTextChange?: (text: string) => void;
  /** Defaults true for Combobox */
  openOnFocus?: boolean;
  placeholder?: string;
};

function Input({
  className,
  displayValue,
  onValueTextChange,
  onFocus,
  onBlur,
  openOnFocus = true,
  ...props
}: InputProps) {
  const ctx = useComboboxCtx();

  const displayValueFn = displayValue ?? ((opt: ComboboxOption | null) => opt?.label ?? '');
  const placeholderValue = props.placeholder ?? ctx.placeholder;
  const inputProps = {
    ...props,
    placeholder: placeholderValue,
    displayValue: displayValueFn as (item: unknown) => string,
  } as React.ComponentProps<typeof ComboboxInput>;
  return (
    <ComboboxInput
      {...inputProps}
      className={cn(
        styles.input,
        ctx.invalid && styles.inputInvalid,
        ctx.disabled && styles.inputDisabled,
        className
      )}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const next = e.target.value;
        ctx.setQuery(next);
        onValueTextChange?.(next);
        if (!ctx.disabled) ctx.setIsOpen(true);
      }}
      onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
        if (!ctx.disabled && openOnFocus) ctx.setIsOpen(true);
        onFocus?.(e);
      }}
      onBlur={onBlur}
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
      className={cn(
        styles.clearButton,
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
      <svg className={styles.clearIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
}: React.ComponentProps<typeof ComboboxButton>) {
  const ctx = useComboboxCtx();

  return (
    <ComboboxButton
      {...props}
      aria-label={props['aria-label'] ?? 'Toggle options'}
      className={cn(
        styles.toggleButton,
        ctx.disabled && styles.toggleDisabled,
        className
      )}
      onClick={onClick}
    >
      {children ?? (
        <svg className={styles.toggleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </ComboboxButton>
  );
}

function Options({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxOptions>, 'children'> & {
  /** If omitted, renders filtered options */
  children?: React.ReactNode;
}) {
  const ctx = useComboboxCtx();
  if (ctx.disabled) return null;

  const hasResults = ctx.filteredOptions.length > 0;

  return (
    <ComboboxOptions
      {...props}
      anchor="bottom start"
      className={cn(
        styles.options,
        className
      )}
    >
      {children ? (
        children
      ) : hasResults ? (
        ctx.filteredOptions.map((opt) => <Option key={opt.id} option={opt} />)
      ) : (
        <Empty />
      )}
    </ComboboxOptions>
  );
}

function Empty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(styles.empty, className)}
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
}: Omit<React.ComponentProps<typeof HeadlessComboboxOption>, 'value' | 'children'> & {
  option: ComboboxOption;
  children?: React.ReactNode;
}) {
  const ctx = useComboboxCtx();

  return (
    <HeadlessComboboxOption
      {...props}
      value={option}
      disabled={option.disabled}
      className={({
        active,
        selected,
        disabled: optDisabled,
      }: {
        active: boolean;
        selected: boolean;
        disabled: boolean;
      }) =>
        cn(
          styles.option,
          optDisabled ? styles.optionDisabled : styles.optionEnabled,
          active ? styles.optionActive : styles.optionInactive,
          selected && styles.optionSelected,
          typeof className === 'function'
            ? className({ active, selected, disabled: optDisabled })
            : className
        )
      }
    >
      {({
        active,
        selected,
        disabled: optDisabled,
      }: {
        active: boolean;
        selected: boolean;
        disabled: boolean;
      }) => {
        const content = children
          ? children
          : ctx.renderOption
            ? ctx.renderOption(option, { active, selected, disabled: optDisabled })
            : option.label;
        return <>{content}</>;
      }}
    </HeadlessComboboxOption>
  );
}

function Hint({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn(styles.hint, className)} />;
}

function Error({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn(styles.error, className)} />;
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
