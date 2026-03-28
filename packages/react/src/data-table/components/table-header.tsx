import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import type { DataTableColumn, SortState, FilterState, SortDirection, DataTableColorConfig } from '../types';
import { ROW_INTERACTION, type RowInteractionMode } from '../constants';
import { SortIndicator } from './sort-indicator';
import { FilterDropdown } from './filter-dropdown';
import { Checkbox } from '../../checkbox';
import styles from './data-table.module.css';

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
  colorConfig?: DataTableColorConfig;
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
  colorConfig,
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

  const headerRowStyle = colorConfig?.headerBackground
    ? { backgroundColor: colorConfig.headerBackground }
    : undefined;

  const headerCellStyle = colorConfig?.headerText
    ? { color: colorConfig.headerText }
    : undefined;

  return (
    <thead>
      <tr className={styles.headerRow} style={headerRowStyle}>
        {isExpandable && (
          <th className={styles.headerCellExpand} aria-label="Expand" style={headerCellStyle} />
        )}
        {isSelectable && (
          <th className={styles.headerCellSelect} style={headerCellStyle}>
            <Checkbox
              checked={allSelected}
              onChange={handleSelectAll}
              aria-label="Select all rows"
              className={styles.headerCheckbox}
              checkedBackground={colorConfig?.headerIconActiveBackground}
              checkedForeground={colorConfig?.headerIconActiveForeground}
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
              className={clsx(
                styles.headerCell,
                column.sortable && styles.headerCellSortable
              )}
              style={{
                width: column.width,
                minWidth: column.minWidth,
                ...headerCellStyle,
              }}
              onClick={() => handleSort(column)}
            >
              <div className={styles.headerCellInner}>
                <span>{column.header as ReactNode}</span>
                {column.sortable && (
                  <SortIndicator
                    direction={sortDirection}
                    color={colorConfig?.headerText}
                    activeBackground={colorConfig?.headerIconActiveBackground}
                    activeForeground={colorConfig?.headerIconActiveForeground}
                  />
                )}
                {column.filterable && column.filterValues && onFilterChange && (
                  <FilterDropdown
                    columnId={column.id}
                    filterValues={column.filterValues}
                    selectedValues={getColumnFilterValues(column.id)}
                    onFilterChange={handleFilterChange}
                    showSelectAll={column.filterSelectAll !== false}
                    iconColor={colorConfig?.headerText}
                    activeBackground={colorConfig?.headerIconActiveBackground}
                    activeForeground={colorConfig?.headerIconActiveForeground}
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

export { TableHeader };
