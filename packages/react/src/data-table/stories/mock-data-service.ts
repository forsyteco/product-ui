/**
 * Mock data service for DataTable stories
 * Simulates server-side sorting, filtering, and pagination
 */

import type { SortState, FilterState } from '../types';

export type QueryParams<TData> = {
  data: TData[];
  page: number;
  pageSize: number;
  sortState?: SortState;
  filterState?: FilterState;
};

export type QueryResult<TData> = {
  data: TData[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

/**
 * Converts a value to a string for comparison purposes
 */
function valueToString(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

/**
 * Compares two values for sorting
 */
function compareValues(aValue: unknown, bValue: unknown, direction: 'asc' | 'desc'): number {
  // Handle null/undefined
  if (aValue == null && bValue == null) return 0;
  if (aValue == null) return direction === 'asc' ? 1 : -1;
  if (bValue == null) return direction === 'asc' ? -1 : 1;

  // Compare values
  let comparison = 0;
  if (typeof aValue === 'string' && typeof bValue === 'string') {
    comparison = aValue.localeCompare(bValue);
  } else if (typeof aValue === 'number' && typeof bValue === 'number') {
    comparison = aValue - bValue;
  } else {
    comparison = valueToString(aValue).localeCompare(valueToString(bValue));
  }

  return direction === 'asc' ? comparison : -comparison;
}

/**
 * Applies filter state to data
 */
function applyFilters<TData extends Record<string, unknown>>(
  data: TData[],
  filterState: FilterState
): TData[] {
  if (!filterState || filterState.length === 0) return data;

  return data.filter((row) => {
    return filterState.every((filter) => {
      if (filter.values.length === 0) return true;
      const rowValue = valueToString(row[filter.columnId]);
      return filter.values.includes(rowValue);
    });
  });
}

/**
 * Applies sort state to data
 */
function applySorting<TData extends Record<string, unknown>>(
  data: TData[],
  sortState: SortState
): TData[] {
  if (!sortState) return data;

  const { columnId, direction } = sortState;
  return [...data].sort((a, b) => compareValues(a[columnId], b[columnId], direction));
}

/**
 * Simulates a server-side data query with sorting, filtering, and pagination
 */
export function queryData<TData extends Record<string, unknown>>({
  data,
  page,
  pageSize,
  sortState,
  filterState,
}: QueryParams<TData>): QueryResult<TData> {
  // Apply filters
  let result = applyFilters(data, filterState ?? []);

  // Apply sorting
  result = applySorting(result, sortState ?? null);

  // Calculate pagination
  const totalCount = result.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedData = result.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedData,
    totalCount,
    page,
    pageSize,
    totalPages,
  };
}

/**
 * Hook-like helper for managing table state in stories
 */
export function createTableState<TData extends Record<string, unknown>>(
  initialData: TData[]
) {
  return {
    query: (params: Omit<QueryParams<TData>, 'data'>) =>
      queryData({ ...params, data: initialData }),
  };
}
