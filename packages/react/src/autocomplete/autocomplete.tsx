import * as React from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { cn } from '../utils/tailwind';
import type { AutocompleteOption } from './types';

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

  isOpen: boolean;
  setIsOpen: (next: boolean) => void;

  clearable: boolean;

  minQueryLength: number;

  filterFn: (option: AutocompleteOption, query: string) => boolean;
  renderOption?: (
    option: AutocompleteOption,
    state: { active: boolean; selected: boolean; disabled: boolean }
  ) => React.ReactNode;

  loading: boolean;
  emptyBeforeThresholdText: (min: number) => string;
  emptyAfterThresholdText: string;
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

  /** Default 1 – options open on first character typed */
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

  placeholder = 'Search…',
  disabled = false,
  invalid = false,
  clearable = true,

  minQueryLength = 1,
  loading = false,

  filterFn,
  renderOption,

  emptyBeforeThresholdText = (min) => `Type ${min}+ characters…`,
  emptyAfterThresholdText = 'No results',

  className,
  children,
}: AutocompleteRootProps) {
  const [internalValue, setInternalValue] = React.useState<AutocompleteOption | null>(defaultValue);
  const value = valueProp !== undefined ? valueProp : internalValue;

  const setValue = React.useCallback(
    (next: AutocompleteOption | null) => {
      if (valueProp === undefined) setInternalValue(next);
      onChange?.(next);
    },
    [onChange, valueProp]
  );

  const [internalQuery, setInternalQuery] = React.useState(defaultQuery);
  const query = queryProp !== undefined ? queryProp : internalQuery;

  const setQuery = React.useCallback(
    (next: string) => {
      if (queryProp === undefined) setInternalQuery(next);
      onQueryChange?.(next);
    },
    [onQueryChange, queryProp]
  );

  const [isOpen, setIsOpen] = React.useState(false);

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
      minQueryLength,
      filterFn: effectiveFilterFn,
      renderOption,
      loading,
      emptyBeforeThresholdText,
      emptyAfterThresholdText,
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
      minQueryLength,
      effectiveFilterFn,
      renderOption,
      loading,
      emptyBeforeThresholdText,
      emptyAfterThresholdText,
    ]
  );

  return (
    <AutocompleteCtx.Provider value={ctx}>
      <div className={cn('relative', className)}>
        <Combobox
          by="id"
          value={value}
          onChange={(next) => setValue(next)}
          disabled={disabled}
          nullable
        >
          {children}
        </Combobox>
      </div>
    </AutocompleteCtx.Provider>
  );
}

function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={cn('mb-1 block text-sm font-medium text-foreground', className)}
    />
  );
}

function Control({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn('relative', className)} />;
}

function LeadingIcon({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const icon =
    children ?? (
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M9 3a6 6 0 1 0 3.476 10.892l3.316 3.316a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 0 0 9 3Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
          clipRule="evenodd"
        />
      </svg>
    );

  return (
    <div
      {...props}
      className={cn(
        'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground',
        className
      )}
    >
      {icon}
    </div>
  );
}

type InputProps = Omit<
  React.ComponentProps<typeof ComboboxInput>,
  'displayValue' | 'onChange'
> & {
  displayValue?: (option: AutocompleteOption | null) => string;
  onValueTextChange?: (text: string) => void;
  placeholder?: string;
};

function Input({
  className,
  displayValue,
  onValueTextChange,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const ctx = useAutocompleteCtx();

  const displayValueFn = displayValue ?? ((opt: AutocompleteOption | null) => opt?.label ?? '');
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
        'w-full rounded-md border bg-background py-2 pl-9 pr-10 text-base leading-5 text-foreground',
        'border-input focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
        ctx.invalid && 'border-destructive focus:ring-destructive',
        ctx.disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const next = e.target.value;
        ctx.setQuery(next);
        onValueTextChange?.(next);

        if (!ctx.disabled) {
          const qLen = next.trim().length;
          ctx.setIsOpen(qLen >= ctx.minQueryLength);
        }
      }}
      onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
        onFocus?.(e);
      }}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
        if (!ctx.disabled) ctx.setIsOpen(false);
        onBlur?.(e);
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
      className={cn(
        'absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground',
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
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M10 8.586 4.293 2.879A1 1 0 1 0 2.879 4.293L8.586 10l-5.707 5.707a1 1 0 1 0 1.414 1.414L10 11.414l5.707 5.707a1 1 0 0 0 1.414-1.414L11.414 10l5.707-5.707A1 1 0 0 0 15.707 2.88L10 8.586Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

function Options({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxOptions>, 'children'> & {
  children?: React.ReactNode;
}) {
  const ctx = useAutocompleteCtx();

  const qLen = ctx.query.trim().length;
  const meetsThreshold = qLen >= ctx.minQueryLength;

  if (!ctx.isOpen || ctx.disabled || !meetsThreshold) return null;

  const hasResults = ctx.filteredOptions.length > 0;

  return (
    <ComboboxOptions
      {...props}
      className={cn(
        'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-background py-1 text-base shadow-lg',
        'ring-1 ring-border focus:outline-none',
        className
      )}
    >
      {children ? (
        children
      ) : ctx.loading ? (
        <Loading />
      ) : hasResults ? (
        ctx.filteredOptions.map((opt) => <Option key={opt.id} option={opt} />)
      ) : (
        <Empty />
      )}
    </ComboboxOptions>
  );
}

function Loading({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('cursor-default select-none px-4 py-2 text-muted-foreground', className)}
    >
      Loading…
    </div>
  );
}

function Empty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = useAutocompleteCtx();
  const qLen = ctx.query.trim().length;

  return (
    <div
      {...props}
      className={cn('cursor-default select-none px-4 py-2 text-muted-foreground', className)}
    >
      {qLen < ctx.minQueryLength
        ? ctx.emptyBeforeThresholdText(ctx.minQueryLength)
        : ctx.emptyAfterThresholdText}
    </div>
  );
}

function Option({
  option,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ComboboxOption>, 'value' | 'children'> & {
  option: AutocompleteOption;
  children?: React.ReactNode;
}) {
  const ctx = useAutocompleteCtx();

  return (
    <ComboboxOption
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
          'relative select-none py-2 pl-3 pr-4',
          optDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-default',
          active ? 'bg-accent text-accent-foreground' : 'text-foreground',
          selected && 'font-medium',
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
    </ComboboxOption>
  );
}

function Hint({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn('mt-1 text-sm text-muted-foreground', className)} />;
}

function Error({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn('mt-1 text-sm text-destructive', className)} />;
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
