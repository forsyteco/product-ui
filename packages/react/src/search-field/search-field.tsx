import { SearchIcon, XIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { IconButton } from '../icon-button';
import { Input, type InputProps } from '../input';
import styles from './search-field.module.css';

const DEFAULT_START = <SearchIcon className={styles.icon} />;

export type SearchFieldProps = Omit<InputProps, 'startElement' | 'endElement'> & {
  /** When true, shows a clear control when value is non-empty after trim. */
  clearable?: boolean;
  onClear?: () => void;
  startElement?: ReactNode;
  endElement?: ReactNode;
};

/**
 * Search input using the `Input` start/end slots (icon + optional clear).
 */
export function SearchField({
  value,
  onChange,
  clearable = false,
  onClear,
  startElement = DEFAULT_START,
  endElement: endElementProp,
  type = 'text',
  ...rest
}: SearchFieldProps) {
  const trimmed = typeof value === 'string' ? value.trim() : '';
  const showClear = Boolean(clearable && trimmed && onClear);

  const endElement: ReactNode = (() => {
    if (endElementProp !== undefined) return endElementProp;
    if (!showClear) return null;
    return (
      <IconButton
        icon={XIcon}
        aria-label="Clear search"
        variant="ghost"
        size="small"
        shape="circle"
        onClick={onClear}
        type="button"
      />
    );
  })();

  return (
    <Input
      data-slot="search-field"
      type={type}
      value={value}
      onChange={onChange}
      startElement={startElement}
      endElement={endElement}
      {...rest}
    />
  );
}
