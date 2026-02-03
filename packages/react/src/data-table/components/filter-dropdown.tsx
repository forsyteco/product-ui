import { useState, useMemo } from 'react';
import { Popover as HeadlessPopover, Portal } from '@headlessui/react';
import { Filter, Search } from 'lucide-react';
import { cn } from '../../utils/tailwind';
import Input from '../../input';
import Button from '../../button';
import Checkbox from '../../checkbox';

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
}>;

function FilterDropdown({
  columnId,
  filterValues,
  selectedValues,
  onFilterChange,
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

  return (
    <div className="relative inline-block">
      <HeadlessPopover>
        <HeadlessPopover.Button
          aria-label={`Filter ${columnId}`}
          className={cn(
            'inline-flex items-center justify-center rounded p-1',
            selectedValues.length > 0 && 'bg-accent'
          )}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <Filter className="h-3 w-3 text-foreground" />
        </HeadlessPopover.Button>

        <Portal>
          <HeadlessPopover.Panel
            anchor={{ to: 'bottom end', gap: 8 }}
            className="z-50 w-56 max-h-80 flex flex-col rounded-md bg-background shadow-lg ring-1 ring-border focus:outline-none"
          >
          <div className="p-2 flex flex-col min-h-0 flex-1">
            <div className="mb-2 flex-shrink-0">
              <Input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                size="sm"
                startElement={<Search className="h-4 w-4" />}
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={selectedValues.length > 0 ? handleClearAll : handleSelectAll}
              className="mb-2 flex-shrink-0 justify-center px-0 text-muted-foreground hover:text-foreground relative h-5 overflow-hidden"
            >
              <span
                aria-hidden={selectedValues.length > 0}
                className={cn(
                  'inline-block transition-all duration-200',
                  selectedValues.length > 0
                    ? '-translate-y-full opacity-0'
                    : 'translate-y-0 opacity-100'
                )}
              >
                Select all
              </span>
              <span
                aria-hidden={selectedValues.length === 0}
                className={cn(
                  'absolute inset-0 flex items-center justify-center transition-all duration-200',
                  selectedValues.length > 0
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                )}
              >
                Clear all
              </span>
            </Button>
            <div data-testid="filter-options" className="overflow-y-auto flex-1 min-h-0">
              {filteredValues.map((value) => {
                const isSelected = selectedValues.includes(value);
                const displayLabel = formatFilterLabel(value);
                return (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center rounded px-2 py-1.5 hover:bg-muted"
                  >
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleToggleValue(value)}
                      label={displayLabel}
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

export default FilterDropdown;
