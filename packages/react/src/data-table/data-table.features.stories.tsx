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
  { id: '16', name: 'Nancy Drew', email: 'nancy@example.com', status: 'Active', role: 'User' },
  { id: '17', name: 'Oscar Wilde', email: 'oscar@example.com', status: 'Inactive', role: 'Admin' },
  { id: '18', name: 'Paula Abdul', email: 'paula@example.com', status: 'Active', role: 'Manager' },
  { id: '19', name: 'Quinn Hughes', email: 'quinn@example.com', status: 'Active', role: 'User' },
  { id: '20', name: 'Rachel Green', email: 'rachel@example.com', status: 'Inactive', role: 'User' },
  { id: '21', name: 'Steve Rogers', email: 'steve@example.com', status: 'Active', role: 'Admin' },
  { id: '22', name: 'Tina Turner', email: 'tina@example.com', status: 'Active', role: 'Manager' },
  { id: '23', name: 'Uma Thurman', email: 'uma@example.com', status: 'Inactive', role: 'User' },
  { id: '24', name: 'Victor Hugo', email: 'victor@example.com', status: 'Active', role: 'User' },
  { id: '25', name: 'Wendy Darling', email: 'wendy@example.com', status: 'Active', role: 'Manager' },
];

const columns: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
  { id: 'email', header: 'Email', accessorKey: 'email', sortable: true },
  { id: 'status', header: 'Status', accessorKey: 'status', filterable: true, filterValues: ['Active', 'Inactive'] },
  { id: 'role', header: 'Role', accessorKey: 'role', filterable: true, filterValues: ['Admin', 'Manager', 'User'] },
];

const meta = {
  title: 'Components/DataTable/Features',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    pageSize: {
      control: { type: 'number' },
      description: 'Items per page',
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sorting: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [sortState, setSortState] = useState<SortState>({ columnId: 'name', direction: 'asc' });
    const pageSize = args.pageSize ?? 10;

    // Use mock service to sort and paginate data
    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize, sortState }),
      [page, pageSize, sortState]
    );

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Click on "Name" or "Email" column headers to sort. Current sort: {sortState ? `${sortState.columnId} (${sortState.direction})` : 'none'}
        </p>
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
        />
      </div>
    );
  },
  args: {
    pageSize: 10,
  },
};

export const Filtering: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [filterState, setFilterState] = useState<FilterState>([]);
    const pageSize = args.pageSize ?? 10;

    // Use mock service to filter and paginate data
    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize, filterState }),
      [page, pageSize, filterState]
    );

    // Reset to page 1 when filters change
    const handleFilterChange = (newFilterState: FilterState) => {
      setFilterState(newFilterState);
      setPage(1);
    };

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Click on the filter icon in "Status" or "Role" columns to filter.
          Active filters: {filterState.length > 0 ? filterState.map(f => `${f.columnId}: ${f.values.join(', ')}`).join(' | ') : 'none'}
          {filterState.length > 0 && ` (showing ${result.totalCount} of ${sampleData.length} users)`}
        </p>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
          filterState={filterState}
          onFilterChange={handleFilterChange}
        />
      </div>
    );
  },
  args: {
    pageSize: 10,
  },
};

export const RowSelection: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set(['1', '3']));
    const pageSize = args.pageSize ?? 10;

    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize }),
      [page, pageSize]
    );

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Select rows using checkboxes. Selected: {Array.from(selectedRowIds).join(', ') || 'none'}
        </p>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
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

export const ClickableRows: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [clickedRow, setClickedRow] = useState<string | null>(null);
    const pageSize = args.pageSize ?? 10;

    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize }),
      [page, pageSize]
    );

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Click on any row to trigger an action. Last clicked: {clickedRow || 'none'}
        </p>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
          rowInteraction={ROW_INTERACTION.LINK}
          onRowClick={(row) => setClickedRow(`${row.name} (${row.email})`)}
        />
      </div>
    );
  },
  args: {
    pageSize: 10,
  },
};

export const Pagination: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const pageSize = args.pageSize ?? 10;

    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize }),
      [page, pageSize]
    );

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Navigate through pages. Current page: {page} of {result.totalPages}
        </p>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
        />
      </div>
    );
  },
  args: {
    pageSize: 10,
  },
};

export const Loading: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const pageSize = args.pageSize ?? 10;

    return (
      <DataTable
        columns={columns}
        data={[]}
        getRowId={(row) => row.id}
        page={page}
        pageSize={pageSize}
        totalCount={0}
        onPageChange={setPage}
        loading={true}
      />
    );
  },
  args: {
    pageSize: 10,
  },
};

export const EmptyState: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const pageSize = args.pageSize ?? 10;

    return (
      <DataTable
        columns={columns}
        data={[]}
        getRowId={(row) => row.id}
        page={page}
        pageSize={pageSize}
        totalCount={0}
        onPageChange={setPage}
        emptyState={
          <div className="text-center py-8">
            <p className="text-lg font-medium text-foreground">No users found</p>
            <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters or add a new user.</p>
          </div>
        }
      />
    );
  },
  args: {
    pageSize: 10,
  },
};

export const SortingAndFiltering: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [sortState, setSortState] = useState<SortState>({ columnId: 'name', direction: 'asc' });
    const [filterState, setFilterState] = useState<FilterState>([]);
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

    const columnsWithBoth: DataTableColumn<User>[] = [
      { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
      { id: 'email', header: 'Email', accessorKey: 'email', sortable: true },
      { id: 'status', header: 'Status', accessorKey: 'status', sortable: true, filterable: true, filterValues: ['Active', 'Inactive'] },
      { id: 'role', header: 'Role', accessorKey: 'role', sortable: true, filterable: true, filterValues: ['Admin', 'Manager', 'User'] },
    ];

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground space-y-1">
          <p><strong>Sort:</strong> {sortState ? `${sortState.columnId} (${sortState.direction})` : 'none'}</p>
          <p><strong>Filter:</strong> {filterState.length > 0 ? filterState.map(f => `${f.columnId}: ${f.values.join(', ')}`).join(' | ') : 'none'}</p>
          <p><strong>Results:</strong> {result.totalCount} of {sampleData.length} users</p>
        </div>
        <DataTable
          columns={columnsWithBoth}
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
        />
      </div>
    );
  },
  args: {
    pageSize: 10,
  },
};

// Types for expanded row content
type UserExpandedData = {
  bio: string;
  joinDate: string;
  lastLogin: string;
  projects: string[];
};

// Mock expanded row content component
const UserExpandedContent = ({
  row,
  rowId,
  data,
  loading,
}: {
  row: User;
  rowId: string;
  data: UserExpandedData | null;
  loading: boolean;
}) => {
  return (
    <div
      className="transition-opacity duration-300"
      style={{ opacity: loading ? 0.5 : 1 }}
    >
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
            <span className="text-sm text-muted-foreground">Loading details for {row.name}...</span>
          </div>
        </div>
      ) : data ? (
        <div className="space-y-4 p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{row.name}</h3>
                <p className="text-sm text-muted-foreground">{row.email} &bull; {row.role}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm"><strong>Bio:</strong> {data.bio}</p>
                <p className="text-sm"><strong>Member since:</strong> {data.joinDate}</p>
                <p className="text-sm"><strong>Last login:</strong> {data.lastLogin}</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Projects:</p>
                <div className="flex flex-wrap gap-1">
                  {data.projects.map((project) => (
                    <span
                      key={project}
                      className="inline-flex items-center rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent-foreground"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted/80"
                onClick={() => alert(`Message sent to ${row.name}`)}
              >
                Message
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground hover:bg-accent/80"
                onClick={() => alert(`Viewing profile for ${row.name} (ID: ${rowId})`)}
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

// Mock function to simulate fetching expanded row data with 300ms delay
const getExpandedUserData = (row: User, rowId: string): Promise<UserExpandedData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bio: `${row.name} is a dedicated ${row.role.toLowerCase()} who has been contributing to the team since joining. Known for their expertise in various projects and collaborative spirit.`,
        joinDate: `January ${2020 + parseInt(rowId, 10) % 5}`,
        lastLogin: row.status === 'Active' ? 'Today at 9:30 AM' : '3 days ago',
        projects: [
          'Project Alpha',
          'Dashboard Redesign',
          `${row.name.split(' ')[0]}'s Initiative`,
          'Q4 Planning',
        ].slice(0, 2 + parseInt(rowId, 10) % 3),
      });
    }, 300);
  });
};

export const ExpandableRows: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const pageSize = args.pageSize ?? 10;

    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize }),
      [page, pageSize]
    );

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground space-y-1">
          <p>Click on any row to expand and see user details.</p>
          <p>Only one row can be expanded at a time. Click again to collapse.</p>
        </div>
        <DataTable
          columns={columns}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
          rowInteraction={ROW_INTERACTION.EXPANDABLE}
          expandedRowContent={UserExpandedContent}
          getExpandedRowData={getExpandedUserData}
        />
      </div>
    );
  },
  args: {
    pageSize: 10,
  },
};

export const CustomCellRenderer: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [sortState, setSortState] = useState<SortState>(null);
    const pageSize = args.pageSize ?? 10;

    const result = useMemo(
      () => queryData({ data: sampleData, page, pageSize, sortState }),
      [page, pageSize, sortState]
    );

    const StatusBadge = ({ value }: { value: string }) => (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        {value}
      </span>
    );

    const columnsWithCustomCell: DataTableColumn<User>[] = [
      { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      { id: 'status', header: 'Status', accessorKey: 'status', cell: StatusBadge, sortable: true },
      { id: 'role', header: 'Role', accessorKey: 'role' },
    ];

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          The "Status" column uses a custom cell renderer to display badges. Sorting still works with custom renderers.
        </p>
        <DataTable
          columns={columnsWithCustomCell}
          data={result.data}
          getRowId={(row) => row.id}
          page={page}
          pageSize={pageSize}
          totalCount={result.totalCount}
          onPageChange={setPage}
          sortState={sortState}
          onSortChange={setSortState}
        />
      </div>
    );
  },
  args: {
    pageSize: 10,
  },
};
