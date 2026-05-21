import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { clsx } from 'clsx';

import { SearchIcon } from '../icons/icons';
import { getInputInnerClassName, inputVariants, type InputSize } from '../input/input-shell';
import inputStyles from '../input/input.module.css';
import menuStyles from '../field-select/field-select-menu.module.css';
import captionStyles from '../field-select/field-caption.module.css';
import shellStyles from '../field-select/field-control-shell.module.css';
import {
  LeadingVisual,
  TrailingVisual,
  TrailingAction,
  resolveFieldControlSlot,
} from '../field-select/field-control-visuals';
import { ClearIcon } from '../field-select/clear-icon';
import { resolveFieldAutofillProps } from '../utils/field-autofill-props';
import type { AutocompleteOption } from './types';
import styles from '../combobox/combobox.module.css';

type Ctx = {
  inputId: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  clearable: boolean;
  size: InputSize;
  selectedValue: AutocompleteOption | null;
  inputValue: string;
  minQueryLength: number;
  loading: boolean;
  emptyBeforeThresholdText: (min: number) => string;
  emptyAfterThresholdText: string;
  selectValue: (value: AutocompleteOption | null) => void;
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
  error?: boolean;
  /** @deprecated Use `error` instead */
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
  placeholder = 'Search…',
  disabled = false,
  error,
  invalid,
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
  const inputId = React.useId();
  const isValueControlled = valueProp !== undefined;
  const isQueryControlled = queryProp !== undefined;
  const effectiveFilterFn = filterFn ?? defaultFilterFn;

  const [internalInputValue, setInternalInputValue] = React.useState(() => {
    if (defaultQuery) return defaultQuery;
    if (defaultValue?.label) return defaultValue.label;
    return '';
  });
  const [internalValue, setInternalValue] = React.useState<AutocompleteOption | null>(defaultValue ?? null);

  React.useEffect(() => {
    if (isQueryControlled || !isValueControlled) return;
    setInternalInputValue(valueProp?.label ?? '');
  }, [isQueryControlled, isValueControlled, valueProp]);

  const inputValue = isQueryControlled ? queryProp : internalInputValue;
  const selectedValue = isValueControlled ? (valueProp ?? null) : internalValue;
  const hasError = error ?? invalid ?? false;

  const selectValue = React.useCallback(
    (nextValue: AutocompleteOption | null) => {
      if (!isValueControlled) {
        setInternalValue(nextValue);
      }
      onChange?.(nextValue);
      if (!isQueryControlled) {
        setInternalInputValue(nextValue?.label ?? '');
      }
    },
    [isQueryControlled, isValueControlled, onChange]
  );

  const ctx: Ctx = React.useMemo(
    () => ({
      inputId,
      placeholder,
      disabled,
      error: hasError,
      clearable,
      size: 'default',
      selectedValue,
      inputValue,
      minQueryLength,
      loading,
      emptyBeforeThresholdText,
      emptyAfterThresholdText,
      selectValue,
      renderOption,
    }),
    [
      inputId,
      placeholder,
      disabled,
      hasError,
      clearable,
      selectedValue,
      inputValue,
      minQueryLength,
      loading,
      emptyBeforeThresholdText,
      emptyAfterThresholdText,
      selectValue,
      renderOption,
    ]
  );

  return (
    <AutocompleteCtx.Provider value={ctx}>
      <BaseCombobox.Root<AutocompleteOption>
        value={isValueControlled ? (valueProp ?? null) : internalValue}
        defaultValue={undefined}
        onValueChange={(next) => {
          selectValue((next as AutocompleteOption | null) ?? null);
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
    </AutocompleteCtx.Provider>
  );
}

function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { inputId } = useAutocompleteCtx();
  return <label htmlFor={inputId} {...props} className={clsx(captionStyles.label, className)} />;
}

function Control({
  className,
  children,
  leadingVisual,
  trailingVisual,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  leadingVisual?: React.ReactNode;
  trailingVisual?: React.ReactNode;
}) {
  const ctx = useAutocompleteCtx();
  const childItems = React.Children.toArray(children);
  const resolvedLeadingVisual = resolveFieldControlSlot(leadingVisual, childItems, LeadingVisual);
  const resolvedTrailingVisual = resolveFieldControlSlot(trailingVisual, childItems, TrailingVisual);
  const inputChild = childItems.find((child) => React.isValidElement(child) && child.type === Input);
  const clearChild = childItems.find((child) => React.isValidElement(child) && child.type === ClearButton);

  return (
    <BaseCombobox.InputGroup
      {...props}
      className={clsx(inputVariants({ size: ctx.size, error: ctx.error }), styles.control, className)}
    >
      {resolvedLeadingVisual ? (
        <div className={clsx(inputStyles.slot, inputStyles['slot-pad'], shellStyles.leadingVisual)}>
          {resolvedLeadingVisual}
        </div>
      ) : null}
      {inputChild && React.isValidElement(inputChild)
        ? React.cloneElement(inputChild, {
            hasLeadingVisual: Boolean(resolvedLeadingVisual),
          } as Partial<InputProps>)
        : null}
      {clearChild ? (
        <div className={clsx(inputStyles.slot, shellStyles.trailingAction)}>{clearChild}</div>
      ) : null}
      {resolvedTrailingVisual ? (
        <div className={clsx(inputStyles.slot, inputStyles['slot-pad'], shellStyles.trailingVisual)}>
          {resolvedTrailingVisual}
        </div>
      ) : null}
    </BaseCombobox.InputGroup>
  );
}

type InputProps = Omit<React.ComponentProps<typeof BaseCombobox.Input>, 'placeholder' | 'className'> & {
  placeholder?: string;
  autoComplete?: string;
  hasLeadingVisual?: boolean;
  className?: string;
};

function Input({
  className,
  placeholder,
  autoComplete,
  hasLeadingVisual = false,
  ...props
}: InputProps) {
  const ctx = useAutocompleteCtx();

  return (
    <BaseCombobox.Input
      {...props}
      id={ctx.inputId}
      {...resolveFieldAutofillProps({ autoComplete })}
      placeholder={placeholder ?? ctx.placeholder}
      aria-invalid={ctx.error ? true : undefined}
      className={getInputInnerClassName({
        hasLeadingVisual,
        hasTrailingVisual: ctx.clearable,
        inputClassName: className ?? undefined,
      })}
    />
  );
}

function LeadingIcon({ className }: { className?: string }) {
  return (
    <LeadingVisual>
      <SearchIcon className={clsx(shellStyles.icon, className)} />
    </LeadingVisual>
  );
}

function ClearButton({
  className,
  'aria-label': ariaLabel,
  ...props
}: React.ComponentProps<typeof BaseCombobox.Clear>) {
  const ctx = useAutocompleteCtx();
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

function Options({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof BaseCombobox.List>, 'children'> & {
  children?: React.ReactNode;
}) {
  const ctx = useAutocompleteCtx();
  const queryLength = ctx.inputValue.trim().length;

  if (ctx.disabled || queryLength < ctx.minQueryLength) {
    return null;
  }

  return (
    <BaseCombobox.Portal>
      <BaseCombobox.Positioner side="bottom" align="start" sideOffset={4} className={menuStyles.positioner}>
        <BaseCombobox.Popup className={clsx(menuStyles.popup, className)}>
          <BaseCombobox.List {...props} className={menuStyles.list}>
            <BaseCombobox.Empty className={menuStyles.empty}>
              {ctx.emptyAfterThresholdText}
            </BaseCombobox.Empty>
            {children ??
              (ctx.loading ? (
                <Loading />
              ) : (
                <BaseCombobox.Collection>
                  {(option: AutocompleteOption) => <Option key={option.id} option={option} />}
                </BaseCombobox.Collection>
              ))}
          </BaseCombobox.List>
        </BaseCombobox.Popup>
      </BaseCombobox.Positioner>
    </BaseCombobox.Portal>
  );
}

function Loading({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx(menuStyles.empty, className)}>
      Loading…
    </div>
  );
}

function Empty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = useAutocompleteCtx();
  const queryLength = ctx.inputValue.trim().length;

  return (
    <div {...props} className={clsx(menuStyles.empty, className)}>
      {queryLength < ctx.minQueryLength
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
      className={({ highlighted, selected, disabled: optDisabled }) =>
        clsx(
          menuStyles.option,
          highlighted && menuStyles['option-active'],
          selected && menuStyles['option-selected'],
          optDisabled && menuStyles['option-disabled'],
          typeof className === 'function' ? className({ highlighted, selected, disabled: optDisabled }) : className
        )
      }
      render={(itemProps, state) => (
        <div {...itemProps}>
          {children ??
            ctx.renderOption?.(option, {
              active: state.highlighted,
              selected: state.selected,
              disabled: state.disabled,
            }) ??
            option.label}
        </div>
      )}
    />
  );
}

function Hint({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(captionStyles.hint, className)} />;
}

function Error({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={clsx(captionStyles.error, className)} />;
}

export const Autocomplete = {
  Root,
  Label,
  Control,
  LeadingIcon,
  LeadingVisual,
  TrailingVisual,
  TrailingAction,
  Input,
  ClearButton,
  Options,
  Option,
  Empty,
  Loading,
  Hint,
  Error,
} as const;
