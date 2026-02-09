import { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from './data-table';
import { ROW_INTERACTION } from './constants';
import type { SortState, FilterState } from './types';
import { queryData } from './stories/mock-data-service';
import { sampleUsers, userColumnsWithSortAndFilter } from './stories/fixtures';

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

type StoryArgs = Readonly<{ pageSize?: number }>;

function DefaultStory({ pageSize: argPageSize }: StoryArgs) {
  const [page, setPage] = useState(1);
  const pageSize = argPageSize ?? 10;

  const result = useMemo(
    () => queryData({ data: sampleUsers, page, pageSize }),
    [page, pageSize]
  );

  return (
    <DataTable
      columns={userColumnsWithSortAndFilter}
      data={result.data}
      getRowId={(row) => row.id}
      page={page}
      pageSize={pageSize}
      totalCount={result.totalCount}
      onPageChange={setPage}
    />
  );
}

export const Default: Story = {
  render: (args) => <DefaultStory pageSize={args.pageSize} />,
  args: {
    pageSize: 10,
  },
};

function PlaygroundStory({ pageSize: argPageSize }: StoryArgs) {
  const [page, setPage] = useState(1);
  const [sortState, setSortState] = useState<SortState>(null);
  const [filterState, setFilterState] = useState<FilterState>([]);
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());
  const pageSize = argPageSize ?? 10;

  const result = useMemo(
    () => queryData({ data: sampleUsers, page, pageSize, sortState, filterState }),
    [page, pageSize, sortState, filterState]
  );

  const handleFilterChange = (newFilterState: FilterState) => {
    setFilterState(newFilterState);
    setPage(1);
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground space-y-1">
        <p>Status and Role columns have both sorting and filtering enabled.</p>
        <p><strong>Sort:</strong> {sortState ? `${sortState.columnId} (${sortState.direction})` : 'none'} | <strong>Filter:</strong> {filterState.length > 0 ? filterState.map(f => `${f.columnId}: ${f.values.join(', ')}`).join(' | ') : 'none'}</p>
        <p><strong>Results:</strong> {result.totalCount} of {sampleUsers.length} users | <strong>Selected:</strong> {selectedRowIds.size > 0 ? Array.from(selectedRowIds).join(', ') : 'none'}</p>
      </div>
      <DataTable
        columns={userColumnsWithSortAndFilter}
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
}

export const Playground: Story = {
  render: (args) => <PlaygroundStory pageSize={args.pageSize} />,
  args: {
    pageSize: 10,
  },
};
