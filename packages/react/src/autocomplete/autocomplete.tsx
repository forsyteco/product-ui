import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { clsx } from 'clsx';
import type { AutocompleteOption } from './types';
import styles from './autocomplete.module.css';

type Ctx = {
  options: AutocompleteOption[];
  filteredOptions: AutocompleteOption[];
  value: AutocompleteOption | null;
  setValue: (next: AutocompleteOption | null) => void;
  query: string;
  setQuery: (next: string) => void;
  placeholder: string;
  disabled: boolean;
  invalid: boolean;
  clearable: boolean;
  isOpen: boolean;
  setIsOpen: (next: boolean) => void;
  minQueryLength: number;
  loading: boolean;
  emptyBeforeThresholdText: (min: number) => string;
  emptyAfterThresholdText: string;
  renderOption?: (
    option: AutocompleteOption,
    state: { active: boolean; selected: boolean; disabled: boolean }
  ) => React.ReactNode;
};

const AutocompleteCtx = React.createContext<Ctx | null>(null);

function useAutocompleteCtx() {
  const ctx = React.useContext(AutocompleteCtx);
  if (!ctx) throw new globalThis.Error('Autocomplete.* must be used within <Autocomplete.Root>.');
  return ctx;
}

function defaultFilterFn(option: AutocompleteOption, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return option.label.toLowerCase().includes(q);
}

export type AutocompleteRootProps = {
  options: AutocompleteOption[];
  value?: AutocompleteOption | null;
  defaultValue?: AutocompleteOption | null;
  onChange?: (value: AutocompleteOption | null) => void;
  query?: string;
  defaultQuery?: string;
  onQueryChange?: (query: string) => void;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  clearable?: boolean;
  minQueryLength?: number;
  loading?: boolean;
  filterFn?: (option: AutocompleteOption, query: string) => boolean;
  renderOption?: Ctx['renderOption'];
  emptyBeforeThresholdText?: (min: number) => string;
  emptyAfterThresholdText?: string;
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
  placeholder = 'Search...',
  disabled = false,
  invalid = false,
  clearable = true,
  minQueryLength = 1,
  loading = false,
  filterFn,
  renderOption,
  emptyBeforeThresholdText = (min) => `Type ${min}+ characters...`,
  emptyAfterThresholdText = 'No results',
  className,
  children,
}: AutocompleteRootProps) {
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = React.useState<AutocompleteOption | null>(defaultValue);
  const value = isControlled ? valueProp : internalValue;

  const setValue = React.useCallback(
    (next: AutocompleteOption | null) => {
      if (valueProp === undefined) setInternalValue(next);
      onChange?.(next);
    },
    [onChange, valueProp]
  );

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

  const ctx = React.useMemo(
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
      minQueryLength,
      loading,
      emptyBeforeThresholdText,
      emptyAfterThresholdText,
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
      minQueryLength,
      loading,
      emptyBeforeThresholdText,
      emptyAfterThresholdText,
      renderOption,
    ]
  );

  return (
    <AutocompleteCtx.Provider value={ctx}>
      <BaseCombobox.Root<AutocompleteOption>
        value={isControlled ? value ?? undefined : undefined}
        defaultValue={!isControlled ? defaultValue ?? undefined : undefined}
        inputValue={query}
        onValueChange={(next) => {
          const nextValue = (next as AutocompleteOption) ?? null;
          setValue(nextValue);
          if (queryProp === undefined && nextValue?.label) {
            setInternalQuery(nextValue.label);
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
        <div className={clsx(styles.root, className)}>{children}</div>
      </BaseCombobox.Root>
    </AutocompleteCtx.Provider>
  );
}

function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={clsx(styles.label, className)} />;
}

function Control({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx(styles.control, className)} />;
}

function LeadingIcon({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx(styles['leading-icon'], className)}>
      {children ?? (
        <svg className={styles['leading-icon-svg']} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M9 3a6 6 0 1 0 3.476 10.892l3.316 3.316a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 0 0 9 3Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
}

type InputProps = React.ComponentProps<typeof BaseCombobox.Input> & {
  onValueTextChange?: (text: string) => void;
};

function Input({ className, onValueTextChange, ...props }: InputProps) {
  const ctx = useAutocompleteCtx();

  return (
    <BaseCombobox.Input
      {...props}
      value={ctx.query}
      placeholder={props.placeholder ?? ctx.placeholder}
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
        ctx.setIsOpen(next.trim().length >= ctx.minQueryLength);
      }}
      onFocus={() => {
        if (!ctx.disabled) {
          ctx.setIsOpen(ctx.query.trim().length >= ctx.minQueryLength);
        }
      }}
    />
  );
}

function ClearButton({
  className,
  'aria-label': ariaLabel,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = useAutocompleteCtx();
  const visible = ctx.clearable && !!ctx.value && !ctx.disabled;

  if (!visible) return null;

  return (
    <button
      type="button"
      {...props}
      aria-label={ariaLabel ?? 'Clear selection'}
      className={clsx(styles['clear-button'], className)}
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

function Options({ className, children, ...props }: Omit<React.ComponentProps<typeof BaseCombobox.List>, 'children'> & { children?: React.ReactNode }) {
  const ctx = useAutocompleteCtx();
  const qLen = ctx.query.trim().length;
  const meetsThreshold = qLen >= ctx.minQueryLength;
  if (ctx.disabled || !meetsThreshold || !ctx.isOpen) return null;

  const hasResults = ctx.filteredOptions.length > 0;

  return (
    <BaseCombobox.Portal>
      <BaseCombobox.Positioner sideOffset={4}>
        <BaseCombobox.Popup className={clsx(styles.options, className)}>
          <BaseCombobox.List {...props}>
            {children ? (
              children
            ) : ctx.loading ? (
              <Loading />
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

function Loading({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx(styles.loading, className)}>Loading…</div>;
}

function Empty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = useAutocompleteCtx();
  const qLen = ctx.query.trim().length;
  return (
    <div {...props} className={clsx(styles.empty, className)}>
      {qLen < ctx.minQueryLength ? ctx.emptyBeforeThresholdText(ctx.minQueryLength) : ctx.emptyAfterThresholdText}
    </div>
  );
}

function Option({
  option,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof BaseCombobox.Item>, 'value' | 'children'> & {
  option: AutocompleteOption;
  children?: React.ReactNode;
}) {
  const ctx = useAutocompleteCtx();

  return (
    <BaseCombobox.Item
      {...props}
      value={option}
      disabled={option.disabled}
      className={({ highlighted, selected, disabled }) =>
        clsx(
          styles.option,
          disabled ? styles['option-disabled'] : styles['option-enabled'],
          highlighted ? styles['option-active'] : styles['option-inactive'],
          selected && styles['option-selected'],
          typeof className === 'function' ? className({ highlighted, selected, disabled }) : className
        )
      }
    >
      {children ?? ctx.renderOption?.(option, { active: false, selected: false, disabled: Boolean(option.disabled) }) ?? option.label}
    </BaseCombobox.Item>
  );
}

function Hint({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(styles.hint, className)} />;
}

function Error({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(styles.error, className)} />;
}

export const Autocomplete = {
  Root,
  Label,
  Control,
  LeadingIcon,
  Input,
  ClearButton,
  Options,
  Option,
  Empty,
  Loading,
  Hint,
  Error,
} as const;
