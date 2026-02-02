import { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DataTable from './data-table';
import { ROW_INTERACTION } from './constants';
import type { DataTableColumn, SortState, FilterState } from './types';
import { queryData } from './stories/mock-data-service';

type User = {
  id: string;
  name: string;
  email: string;
  status: string;
  role: string;
};

const sampleData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Active', role: 'User' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive', role: 'User' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', status: 'Active', role: 'Manager' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Inactive', role: 'User' },
  { id: '6', name: 'Diana Prince', email: 'diana@example.com', status: 'Active', role: 'Admin' },
  { id: '7', name: 'Edward Norton', email: 'edward@example.com', status: 'Active', role: 'User' },
  { id: '8', name: 'Fiona Apple', email: 'fiona@example.com', status: 'Inactive', role: 'Manager' },
  { id: '9', name: 'George Lucas', email: 'george@example.com', status: 'Active', role: 'User' },
  { id: '10', name: 'Hannah Montana', email: 'hannah@example.com', status: 'Active', role: 'User' },
  { id: '11', name: 'Ivan Petrov', email: 'ivan@example.com', status: 'Inactive', role: 'Admin' },
  { id: '12', name: 'Julia Roberts', email: 'julia@example.com', status: 'Active', role: 'Manager' },
  { id: '13', name: 'Kevin Hart', email: 'kevin@example.com', status: 'Active', role: 'User' },
  { id: '14', name: 'Laura Palmer', email: 'laura@example.com', status: 'Inactive', role: 'User' },
  { id: '15', name: 'Mike Tyson', email: 'mike@example.com', status: 'Active', role: 'Manager' },
];

const columns: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
  { id: 'email', header: 'Email', accessorKey: 'email', sortable: true },
  { id: 'status', header: 'Status', accessorKey: 'status', sortable: true, filterable: true, filterValues: ['Active', 'Inactive'] },
  { id: 'role', header: 'Role', accessorKey: 'role', sortable: true, filterable: true, filterValues: ['Admin', 'Manager', 'User'] },
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A data table component with server-side sorting, filtering, and pagination support. Supports custom cell renderers, row selection, and clickable rows.',
      },
    },
  },
  argTypes: {
    rowInteraction: {
      control: { type: 'select' },
      options: [ROW_INTERACTION.NONE, ROW_INTERACTION.SELECTION, ROW_INTERACTION.LINK],
      description: 'Row interaction mode',
      table: {
        type: { summary: "'none' | 'selection' | 'link'" },
        defaultValue: { summary: "'none'" },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading skeleton',
    },
    page: {
      control: { type: 'number' },
      description: 'Current page (1-indexed)',
    },
    pageSize: {
      control: { type: 'number' },
      description: 'Items per page',
    },
    totalCount: {
      control: { type: 'number' },
      description: 'Total number of items',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const pageSize = args.pageSize ?? 10;

    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize }),
      [page, pageSize]
    );

    return (
      <DataTable
        columns={columns}
        data={result.data}
        getRowId={(row) => row.id}
        page={page}
        pageSize={pageSize}
        totalCount={result.totalCount}
        onPageChange={setPage}
      />
    );
  },
  args: {
    pageSize: 10,
  },
};

export const Playground: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [sortState, setSortState] = useState<SortState>(null);
    const [filterState, setFilterState] = useState<FilterState>([]);
    const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());
    const pageSize = args.pageSize ?? 10;

    // Use mock service to sort, filter, and paginate data
    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize, sortState, filterState }),
      [page, pageSize, sortState, filterState]
    );

    // Reset to page 1 when filters change
    const handleFilterChange = (newFilterState: FilterState) => {
      setFilterState(newFilterState);
      setPage(1);
    };

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground space-y-1">
          <p>Status and Role columns have both sorting and filtering enabled.</p>
          <p><strong>Sort:</strong> {sortState ? `${sortState.columnId} (${sortState.direction})` : 'none'} | <strong>Filter:</strong> {filterState.length > 0 ? filterState.map(f => `${f.columnId}: ${f.values.join(', ')}`).join(' | ') : 'none'}</p>
          <p><strong>Results:</strong> {result.totalCount} of {sampleData.length} users | <strong>Selected:</strong> {selectedRowIds.size > 0 ? Array.from(selectedRowIds).join(', ') : 'none'}</p>
        </div>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
          sortState={sortState}
          onSortChange={setSortState}
          filterState={filterState}
          onFilterChange={handleFilterChange}
          rowInteraction={ROW_INTERACTION.SELECTION}
          selectedRowIds={selectedRowIds}
          onSelectionChange={setSelectedRowIds}
        />
      </div>
    );
  },
  args: {
    pageSize: 10,
  },
};
