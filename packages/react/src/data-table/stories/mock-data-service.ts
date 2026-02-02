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
 * Simulates a server-side data query with sorting, filtering, and pagination
 */
export function queryData<TData extends Record<string, unknown>>({
  data,
  page,
  pageSize,
  sortState,
  filterState,
}: QueryParams<TData>): QueryResult<TData> {
  let result = [...data];

  // Apply filters
  if (filterState && filterState.length > 0) {
    result = result.filter((row) => {
      return filterState.every((filter) => {
        if (filter.values.length === 0) return true;
        const rowValue = String(row[filter.columnId] ?? '');
        return filter.values.includes(rowValue);
      });
    });
  }

  // Apply sorting
  if (sortState) {
    const { columnId, direction } = sortState;
    result = result.sort((a, b) => {
      const aValue = a[columnId];
      const bValue = b[columnId];

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
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return direction === 'asc' ? comparison : -comparison;
    });
  }

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
