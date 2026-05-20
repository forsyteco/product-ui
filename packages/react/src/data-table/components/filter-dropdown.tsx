import { useState, useMemo, type CSSProperties } from 'react';
import { Popover as BasePopover } from '@base-ui/react/popover';
import { Filter, Search } from 'lucide-react';
import { clsx } from 'clsx';
import { Input } from '../../input';
import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import styles from './data-table.module.css';

/**
 * Formats a filter value for display (converts snake_case to Sentence case).
 */
function formatFilterLabel(value: string): string {
  const withSpaces = value.replaceAll('_', ' ');
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

export type FilterDropdownProps = Readonly<{
  columnId: string;
  filterValues: string[];
  selectedValues: string[];
  onFilterChange: (columnId: string, values: string[]) => void;
  /** Show "Select all" option (default: true) */
  showSelectAll?: boolean;
  /** Icon color when inactive (matches header text) */
  iconColor?: CSSProperties['color'];
  /** Background color when active/has filters */
  activeBackground?: CSSProperties['backgroundColor'];
  /** Icon color when active/has filters */
  activeForeground?: CSSProperties['color'];
}>;

function FilterDropdown({
  columnId,
  filterValues,
  selectedValues,
  onFilterChange,
  showSelectAll = true,
  iconColor,
  activeBackground,
  activeForeground,
}: FilterDropdownProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredValues = useMemo(() => {
    if (!searchTerm) return filterValues;
    const lowerSearch = searchTerm.toLowerCase();
    return filterValues.filter((value) =>
      value.toLowerCase().includes(lowerSearch) ||
      formatFilterLabel(value).toLowerCase().includes(lowerSearch)
    );
  }, [filterValues, searchTerm]);

  const handleToggleValue = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onFilterChange(columnId, newValues);
  };

  const handleClearAll = () => {
    onFilterChange(columnId, []);
  };

  const handleSelectAll = () => {
    onFilterChange(columnId, [...filterValues]);
  };

  const isActive = selectedValues.length > 0;

  // When active, use activeForeground if provided, otherwise fall back to iconColor (header text)
  // When inactive, use iconColor (header text color) if provided
  const currentIconColor = isActive ? (activeForeground ?? iconColor) : iconColor;

  // Container style for active background
  const buttonStyle = isActive && activeBackground
    ? { backgroundColor: activeBackground }
    : undefined;

  return (
    <div className={styles['filter-root']}>
      <BasePopover.Root>
        <BasePopover.Trigger
          aria-label={`Filter ${columnId}`}
          className={clsx(
            styles['filter-button'],
            isActive && !activeBackground && styles['filter-button-active-default']
          )}
          style={buttonStyle}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <Filter
            className={clsx(styles['filter-icon'], !currentIconColor && styles['sort-icon-default'])}
            style={currentIconColor ? { color: currentIconColor } : undefined}
          />
        </BasePopover.Trigger>

        <BasePopover.Portal>
          <BasePopover.Positioner align="end" sideOffset={8}>
            <BasePopover.Popup
              className={styles['filter-panel']}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className={styles['filter-panel-inner']}>
                <div className={styles['filter-search-wrap']}>
                  <Input
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                    size="sm"
                    startElement={<Search className={styles['filter-icon']} />}
                  />
                </div>
                {showSelectAll ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={selectedValues.length > 0 ? handleClearAll : handleSelectAll}
                    className={styles['filter-select-all']}
                  >
                    <span
                      aria-hidden={selectedValues.length > 0}
                      className={clsx(
                        styles['filter-primary-text'],
                        'inline-block transition-all duration-200',
                        selectedValues.length > 0
                          ? styles['filter-primary-text-hidden']
                          : styles['filter-primary-text-shown']
                      )}
                    >
                      Select all
                    </span>
                    <span
                      aria-hidden={selectedValues.length === 0}
                      className={clsx(
                        styles['filter-secondary-text'],
                        selectedValues.length > 0
                          ? styles['filter-secondary-shown']
                          : styles['filter-secondary-hidden']
                      )}
                    >
                      Clear all
                    </span>
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearAll}
                    disabled={selectedValues.length === 0}
                    className={styles['filter-clear-fixed']}
                  >
                    Clear all
                  </Button>
                )}
                <div data-testid="filter-options" className={styles['filter-options']}>
                  {filteredValues.map((value) => {
                    const isSelected = selectedValues.includes(value);
                    const displayLabel = formatFilterLabel(value);
                    return (
                      <label
                        key={value}
                        className={styles['filter-option-label']}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Checkbox
                          checked={isSelected}
                          onChange={() => handleToggleValue(value)}
                          onClick={(e) => e.stopPropagation()}
                          label={displayLabel}
                          checkedBackground={activeBackground}
                          checkedForeground={activeForeground}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </BasePopover.Popup>
          </BasePopover.Positioner>
        </BasePopover.Portal>
      </BasePopover.Root>
    </div>
  );
}

export { FilterDropdown };
