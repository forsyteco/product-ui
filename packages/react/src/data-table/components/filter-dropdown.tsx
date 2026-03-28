import { useState, useMemo, type CSSProperties } from 'react';
import { Popover as HeadlessPopover, Portal } from '@headlessui/react';
import { Filter, Search } from 'lucide-react';
import { cn } from '../../utils/cn';
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
    <div className={styles.filterRoot}>
      <HeadlessPopover>
        <HeadlessPopover.Button
          aria-label={`Filter ${columnId}`}
          className={cn(
            styles.filterButton,
            isActive && !activeBackground && styles.filterButtonActiveDefault
          )}
          style={buttonStyle}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <Filter
            className={cn(styles.filterIcon, !currentIconColor && styles.sortIconDefault)}
            style={currentIconColor ? { color: currentIconColor } : undefined}
          />
        </HeadlessPopover.Button>

        <Portal>
          <HeadlessPopover.Panel
            anchor={{ to: 'bottom end', gap: 8 }}
            className={styles.filterPanel}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
          <div className={styles.filterPanelInner}>
            <div className={styles.filterSearchWrap}>
              <Input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                size="sm"
                startElement={<Search className={styles.filterIcon} />}
              />
            </div>
            {showSelectAll ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={selectedValues.length > 0 ? handleClearAll : handleSelectAll}
                className={styles.filterSelectAll}
              >
                <span
                  aria-hidden={selectedValues.length > 0}
                  className={cn(
                    styles.filterPrimaryText,
                    'inline-block transition-all duration-200',
                    selectedValues.length > 0
                      ? styles.filterPrimaryTextHidden
                      : styles.filterPrimaryTextShown
                  )}
                >
                  Select all
                </span>
                <span
                  aria-hidden={selectedValues.length === 0}
                  className={cn(
                    styles.filterSecondaryText,
                    selectedValues.length > 0
                      ? styles.filterSecondaryShown
                      : styles.filterSecondaryHidden
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
                className={styles.filterClearFixed}
              >
                Clear all
              </Button>
            )}
            <div data-testid="filter-options" className={styles.filterOptions}>
              {filteredValues.map((value) => {
                const isSelected = selectedValues.includes(value);
                const displayLabel = formatFilterLabel(value);
                return (
                  <label
                    key={value}
                    className={styles.filterOptionLabel}
                  >
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleToggleValue(value)}
                      label={displayLabel}
                      checkedBackground={activeBackground}
                      checkedForeground={activeForeground}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </HeadlessPopover.Panel>
        </Portal>
      </HeadlessPopover>
    </div>
  );
}

export { FilterDropdown };
