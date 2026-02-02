import { useState, useMemo } from 'react';
import { Popover as HeadlessPopover, Portal } from '@headlessui/react';
import { Filter, Search } from 'lucide-react';
import { cn } from '../../utils/tailwind';

export type FilterDropdownProps = {
  columnId: string;
  filterValues: string[];
  selectedValues: string[];
  onFilterChange: (columnId: string, values: string[]) => void;
};

function FilterDropdown({
  columnId,
  filterValues,
  selectedValues,
  onFilterChange,
}: FilterDropdownProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredValues = useMemo(() => {
    if (!searchTerm) return filterValues;
    return filterValues.filter((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
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
        >
          <Filter className="h-3 w-3 text-foreground" />
        </HeadlessPopover.Button>

        <Portal>
          <HeadlessPopover.Panel
            anchor={{ to: 'bottom end', gap: 8 }}
            className="z-50 w-56 max-h-80 flex flex-col rounded-md bg-background shadow-lg ring-1 ring-border focus:outline-none"
          >
          <div className="p-2 flex flex-col min-h-0 flex-1">
            <div className="relative mb-2 flex-shrink-0">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                role="searchbox"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
                className="w-full rounded-md border border-input bg-background py-1.5 pl-8 pr-3 text-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <button
              type="button"
              onClick={selectedValues.length > 0 ? handleClearAll : handleSelectAll}
              className="mb-2 flex-shrink-0 text-sm text-muted-foreground hover:text-foreground transition-colors relative h-5 overflow-hidden"
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
                  'absolute inset-0 inline-block transition-all duration-200',
                  selectedValues.length > 0
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                )}
              >
                Clear all
              </span>
            </button>
            <div role="listbox" className="overflow-y-auto flex-1 min-h-0">
              {filteredValues.map((value, index) => {
                const isSelected = selectedValues.includes(value);
                return (
                  <div
                    key={value}
                    role="option"
                    aria-label={value}
                    aria-selected={isSelected}
                    onClick={() => handleToggleValue(value)}
                    className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-muted"
                  >
                    <span
                      className={cn(
                        'relative inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border',
                        isSelected
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-input bg-background'
                      )}
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <span className="absolute block h-2 w-1 rotate-45 border-b-2 border-r-2 border-current" />
                      )}
                    </span>
                    <span className="text-sm">{value}</span>
                  </div>
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
