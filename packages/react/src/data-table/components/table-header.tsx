import type { ReactNode } from 'react';
import { cn } from '../../utils/tailwind';
import type { DataTableColumn, SortState, FilterState, SortDirection } from '../types';
import { ROW_INTERACTION, type RowInteractionMode } from '../constants';
import SortIndicator from './sort-indicator';
import FilterDropdown from './filter-dropdown';
import Checkbox from '../../checkbox';

export type TableHeaderProps<TData> = Readonly<{
  columns: DataTableColumn<TData>[];
  sortState?: SortState;
  onSortChange?: (sort: SortState) => void;
  filterState?: FilterState;
  onFilterChange?: (filters: FilterState) => void;
  rowInteraction?: RowInteractionMode;
  allRowIds: string[];
  selectedRowIds?: Set<string>;
  onSelectionChange?: (selectedIds: Set<string>) => void;
}>;

function TableHeader<TData>({
  columns,
  sortState,
  onSortChange,
  filterState = [],
  onFilterChange,
  rowInteraction,
  allRowIds,
  selectedRowIds = new Set(),
  onSelectionChange,
}: TableHeaderProps<TData>) {
  const isSelectable = rowInteraction === ROW_INTERACTION.SELECTION;
  const isExpandable = rowInteraction === ROW_INTERACTION.EXPANDABLE;
  const allSelected = allRowIds.length > 0 && allRowIds.every((id) => selectedRowIds.has(id));

  const handleSelectAll = () => {
    if (onSelectionChange) {
      if (allSelected) {
        onSelectionChange(new Set());
      } else {
        onSelectionChange(new Set(allRowIds));
      }
    }
  };

  const handleSort = (column: DataTableColumn<TData>) => {
    if (!column.sortable || !onSortChange) return;

    const currentDirection: SortDirection | null =
      sortState?.columnId === column.id ? sortState.direction : null;

    let newDirection: SortDirection | null;
    if (currentDirection === null) {
      newDirection = 'asc';
    } else if (currentDirection === 'asc') {
      newDirection = 'desc';
    } else {
      newDirection = null;
    }

    if (newDirection === null) {
      onSortChange(null);
    } else {
      onSortChange({ columnId: column.id, direction: newDirection });
    }
  };

  const handleFilterChange = (columnId: string, values: string[]) => {
    if (!onFilterChange) return;

    const existingFilters = filterState.filter((f) => f.columnId !== columnId);
    if (values.length > 0) {
      onFilterChange([...existingFilters, { columnId, values }]);
    } else {
      onFilterChange(existingFilters);
    }
  };

  const getColumnFilterValues = (columnId: string): string[] => {
    const filter = filterState.find((f) => f.columnId === columnId);
    return filter?.values || [];
  };

  const getAriaSort = (column: DataTableColumn<TData>): 'ascending' | 'descending' | 'none' | undefined => {
    if (!column.sortable) return undefined;
    if (sortState?.columnId === column.id) {
      return sortState.direction === 'asc' ? 'ascending' : 'descending';
    }
    return 'none';
  };

  return (
    <thead>
      <tr className="bg-muted border-b border-border">
        {isExpandable && (
          <th className="w-10 px-4 py-3" aria-label="Expand" />
        )}
        {isSelectable && (
          <th className="px-4 py-3 text-left">
            <Checkbox
              checked={allSelected}
              onChange={handleSelectAll}
              aria-label="Select all rows"
              className="h-3 w-3"
            />
          </th>
        )}
        {columns.map((column) => {
          const sortDirection: SortDirection | null =
            sortState?.columnId === column.id ? sortState.direction : null;

          return (
            <th
              key={column.id}
              role="columnheader"
              aria-sort={getAriaSort(column)}
              className={cn(
                'px-4 py-3 text-left font-semibold text-foreground',
                column.sortable && 'cursor-pointer select-none'
              )}
              style={{
                width: column.width,
                minWidth: column.minWidth,
              }}
              onClick={() => handleSort(column)}
            >
              <div className="flex items-center gap-2">
                <span>{column.header as ReactNode}</span>
                {column.sortable && (
                  <SortIndicator direction={sortDirection} />
                )}
                {column.filterable && column.filterValues && onFilterChange && (
                  <FilterDropdown
                    columnId={column.id}
                    filterValues={column.filterValues}
                    selectedValues={getColumnFilterValues(column.id)}
                    onFilterChange={handleFilterChange}
                    showSelectAll={column.filterSelectAll !== false}
                  />
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
