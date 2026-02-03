/**
 * Test utilities for DataTable tests
 */

import { vi } from 'vitest';
import { screen, within } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';
import type { DataTableColumn } from './types';

// Test data types
export type TestData = { id: string; name: string; email: string; status: string };

// Test fixtures
export const mockColumns: DataTableColumn<TestData>[] = [
  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
  { id: 'email', header: 'Email', accessorKey: 'email' },
  {
    id: 'status',
    header: 'Status',
    accessorKey: 'status',
    filterable: true,
    filterValues: ['Active', 'Inactive'],
  },
];

export const mockData: TestData[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
];

// Types for expanded row testing
export type ExpandedRowData = { details: string; metadata: { count: number } };

// Mock expanded row content component for testing
export const MockExpandedRowContent = ({
  row,
  rowId,
  data,
  loading,
}: {
  row: TestData;
  rowId: string;
  data: ExpandedRowData | null;
  loading: boolean;
}) => (
  <div data-testid="expanded-content">
    <span data-testid="expanded-row-id">{rowId}</span>
    <span data-testid="expanded-row-name">{row.name}</span>
    <span data-testid="expanded-loading">{loading.toString()}</span>
    {data && <span data-testid="expanded-data">{data.details}</span>}
  </div>
);

// Helper to create a controlled Promise for testing async behavior
export const createDeferredPromise = <T,>() => {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
};

/**
 * Opens the filter dropdown for the Status column and returns the dropdown element
 */
export async function openStatusFilterDropdown(user: UserEvent) {
  const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]')!;
  const filterButton = within(statusHeader).getByRole('button', {
    name: /filter/i,
  });
  await user.click(filterButton);
  return screen.getByTestId('filter-options');
}

/**
 * Gets the filter button for a column
 */
export function getFilterButton(columnName: string) {
  const header = screen.getByText(columnName).closest('th, [role="columnheader"]')!;
  return within(header).getByRole('button', { name: /filter/i });
}

/**
 * Creates default props for DataTable tests
 */
export function createDefaultProps(
  overrides?: Record<string, unknown>
) {
  return {
    columns: mockColumns,
    data: mockData,
    getRowId: (row: TestData) => row.id,
    page: 1,
    pageSize: 10,
    totalCount: 2,
    onPageChange: vi.fn(),
    ...overrides,
  };
}
