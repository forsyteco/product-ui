import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import DataTable from './data-table';
import { ROW_INTERACTION } from './constants';
import type { DataTableColumn, FilterState, CellRendererProps } from './types';

// Mock data types
type TestData = { id: string; name: string; email: string; status: string };

// Mock data
const mockColumns: DataTableColumn<TestData>[] = [
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

const mockData: TestData[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
];

// Default props factory
const createDefaultProps = (overrides?: Partial<Parameters<typeof DataTable<TestData>>[0]>) => ({
  columns: mockColumns,
  data: mockData,
  getRowId: (row: TestData) => row.id,
  page: 1,
  pageSize: 10,
  totalCount: 2,
  onPageChange: vi.fn(),
  ...overrides,
});

describe('DataTable', () => {
  describe('Basic Rendering', () => {
    it('renders table with columns and data', () => {
      render(<DataTable {...createDefaultProps()} />);

      const table = screen.getByRole('grid');
      expect(table).toBeInTheDocument();

      // Check data is rendered
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    });

    it('renders column headers', () => {
      render(<DataTable {...createDefaultProps()} />);

      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Status')).toBeInTheDocument();
    });

    it('renders custom cell component when provided', () => {
      const CustomCell = ({ value, row }: CellRendererProps<TestData, string>) => (
        <span data-testid="custom-cell">
          {value} - {row.id}
        </span>
      );

      const columnsWithCustomCell: DataTableColumn<TestData>[] = [
        {
          id: 'name',
          header: 'Name',
          accessorKey: 'name',
          cell: CustomCell as DataTableColumn<TestData>['cell'],
        },
        { id: 'email', header: 'Email', accessorKey: 'email' },
      ];

      render(<DataTable {...createDefaultProps({ columns: columnsWithCustomCell })} />);

      const customCells = screen.getAllByTestId('custom-cell');
      expect(customCells).toHaveLength(2);
      expect(customCells[0]).toHaveTextContent('John Doe - 1');
      expect(customCells[1]).toHaveTextContent('Jane Smith - 2');
    });
  });

  describe('Loading State', () => {
    it('renders skeleton rows when loading is true', () => {
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      const table = screen.getByRole('grid');
      expect(table).toBeInTheDocument();

      // Should not render actual data when loading
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    });

    it('table has aria-busy="true" when loading', () => {
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      const table = screen.getByRole('grid');
      expect(table).toHaveAttribute('aria-busy', 'true');
    });

    it('does not render data rows when loading', () => {
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      expect(screen.queryByText('john@example.com')).not.toBeInTheDocument();
      expect(screen.queryByText('jane@example.com')).not.toBeInTheDocument();
    });
  });

  describe('Empty State', () => {
    it('renders empty state when data is empty array', () => {
      render(<DataTable {...createDefaultProps({ data: [], totalCount: 0 })} />);

      // Should show some form of empty state indication
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    });

    it('renders custom emptyState prop content when provided', () => {
      const customEmptyState = <div data-testid="custom-empty">No data available</div>;

      render(
        <DataTable {...createDefaultProps({ data: [], totalCount: 0, emptyState: customEmptyState })} />
      );

      expect(screen.getByTestId('custom-empty')).toBeInTheDocument();
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });
  });

  describe('Row Interaction - NONE (default)', () => {
    it('rows are not clickable by default', () => {
      const { container } = render(<DataTable {...createDefaultProps()} />);

      // Find data rows (not header row)
      const rows = container.querySelectorAll('tbody tr, [role="row"]');
      rows.forEach((row) => {
        // Rows should not have cursor-pointer class when interaction is NONE
        expect(row).not.toHaveClass('cursor-pointer');
      });
    });

    it('does not call onRowClick when row is clicked with NONE interaction', async () => {
      const user = userEvent.setup();
      const onRowClick = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.NONE,
            onRowClick,
          })}
        />
      );

      const johnRow = screen.getByText('John Doe').closest('tr, [role="row"]');
      if (johnRow) {
        await user.click(johnRow);
      }

      expect(onRowClick).not.toHaveBeenCalled();
    });
  });

  describe('Row Interaction - SELECTION', () => {
    it('renders selection checkboxes in header and each row', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set<string>(),
            onSelectionChange: vi.fn(),
          })}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      // 1 header checkbox + 2 row checkboxes
      expect(checkboxes.length).toBeGreaterThanOrEqual(3);
    });

    it('calls onSelectionChange with new Set when row checkbox is clicked', async () => {
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set<string>(),
            onSelectionChange,
          })}
        />
      );

      // Find row checkboxes (not the header checkbox)
      const checkboxes = screen.getAllByRole('checkbox');
      // Click the first row checkbox (index 1, as 0 is header)
      await user.click(checkboxes[1]);

      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet).toBeInstanceOf(Set);
      expect(calledWithSet.has('1')).toBe(true);
    });

    it('header checkbox selects all rows', async () => {
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set<string>(),
            onSelectionChange,
          })}
        />
      );

      // Header checkbox should be the first one
      const headerCheckbox = screen.getAllByRole('checkbox')[0];
      await user.click(headerCheckbox);

      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet).toBeInstanceOf(Set);
      expect(calledWithSet.size).toBe(2);
      expect(calledWithSet.has('1')).toBe(true);
      expect(calledWithSet.has('2')).toBe(true);
    });

    it('checkboxes have proper aria-labels', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set<string>(),
            onSelectionChange: vi.fn(),
          })}
        />
      );

      // Check for header checkbox aria-label
      const headerCheckbox = screen.getByLabelText(/select all/i);
      expect(headerCheckbox).toBeInTheDocument();

      // Check for row checkbox aria-labels
      const rowCheckboxes = screen.getAllByLabelText(/select row/i);
      expect(rowCheckboxes.length).toBeGreaterThanOrEqual(2);
    });

    it('shows checked state for selected rows', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1']),
            onSelectionChange: vi.fn(),
          })}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      // The checkbox for row with id '1' should be checked
      const checkedCheckboxes = checkboxes.filter(
        (cb) => (cb as HTMLInputElement).checked
      );
      expect(checkedCheckboxes.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Row Interaction - LINK', () => {
    it('rows have cursor-pointer class', () => {
      const { container } = render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.LINK,
            onRowClick: vi.fn(),
          })}
        />
      );

      // Find data rows containing the actual data
      const johnRow = screen.getByText('John Doe').closest('tr, [role="row"]');
      expect(johnRow).toHaveClass('cursor-pointer');
    });

    it('calls onRowClick with row data when row is clicked', async () => {
      const user = userEvent.setup();
      const onRowClick = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.LINK,
            onRowClick,
          })}
        />
      );

      const johnRow = screen.getByText('John Doe').closest('tr, [role="row"]');
      if (johnRow) {
        await user.click(johnRow);
      }

      expect(onRowClick).toHaveBeenCalledTimes(1);
      expect(onRowClick).toHaveBeenCalledWith(mockData[0]);
    });
  });

  describe('Sorting', () => {
    it('shows sort indicator for sortable columns', () => {
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange: vi.fn(),
          })}
        />
      );

      // The Name column header should have a sort indicator
      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      expect(nameHeader).toBeInTheDocument();
    });

    it('calls onSortChange when sortable column header is clicked', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            sortState: null,
            onSortChange,
          })}
        />
      );

      // Click on the Name header (which is sortable)
      const nameHeader = screen.getByText('Name');
      await user.click(nameHeader);

      expect(onSortChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).toHaveBeenCalledWith({ columnId: 'name', direction: 'asc' });
    });

    it('toggles sort direction on subsequent clicks (asc -> desc -> null)', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      // Start with ascending sort
      const { rerender } = render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange,
          })}
        />
      );

      const nameHeader = screen.getByText('Name');

      // Click should toggle to desc
      await user.click(nameHeader);
      expect(onSortChange).toHaveBeenLastCalledWith({ columnId: 'name', direction: 'desc' });

      // Rerender with desc state and click again
      rerender(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'desc' },
            onSortChange,
          })}
        />
      );

      await user.click(nameHeader);
      expect(onSortChange).toHaveBeenLastCalledWith(null);
    });

    it('non-sortable columns do not have sort indicator or trigger sort', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            sortState: null,
            onSortChange,
          })}
        />
      );

      // Email column is not sortable
      const emailHeader = screen.getByText('Email');
      await user.click(emailHeader);

      // Should not trigger sort for non-sortable column
      expect(onSortChange).not.toHaveBeenCalled();
    });
  });

  describe('Filtering', () => {
    it('shows filter button for filterable columns', () => {
      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      // Status column is filterable
      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      expect(statusHeader).toBeInTheDocument();

      // Should have a filter button
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });
      expect(filterButton).toBeInTheDocument();
    });

    it('opens filter dropdown when filter button is clicked', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      // Should show filter values in dropdown (use listbox to scope the search)
      const dropdown = screen.getByRole('listbox');
      expect(within(dropdown).getByText('Active')).toBeInTheDocument();
      expect(within(dropdown).getByText('Inactive')).toBeInTheDocument();
    });

    it('shows filter values in dropdown', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      // Both filter values should be visible
      const dropdown = screen.getByRole('listbox') ?? screen.getByRole('menu');
      expect(within(dropdown).getByText('Active')).toBeInTheDocument();
      expect(within(dropdown).getByText('Inactive')).toBeInTheDocument();
    });

    it('calls onFilterChange when filter value is selected', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange,
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      // Click on a filter value (use exact match to avoid matching "Inactive")
      const dropdown = screen.getByRole('listbox');
      const activeOption = within(dropdown).getByRole('option', { name: 'Active' });
      await user.click(activeOption);

      expect(onFilterChange).toHaveBeenCalledTimes(1);
      const filterArg = onFilterChange.mock.calls[0][0] as FilterState;
      expect(filterArg).toContainEqual({
        columnId: 'status',
        values: expect.arrayContaining(['Active']),
      });
    });

    it('filter dropdown has search input', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      // Should have a search input in the filter dropdown
      const searchInput = screen.getByRole('searchbox') ?? screen.getByPlaceholderText(/search/i);
      expect(searchInput).toBeInTheDocument();
    });

    it('filter dropdown renders in a portal to escape table overflow', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      // The dropdown should be rendered in a portal (at document.body level, not inside the table)
      const dropdown = screen.getByRole('listbox');
      const table = screen.getByRole('grid');

      // The dropdown should NOT be a descendant of the table
      expect(table.contains(dropdown)).toBe(false);
    });

    it('search input stays fixed at top while filter list scrolls', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      // The search input should NOT be inside the scrollable listbox
      const searchInput = screen.getByRole('searchbox');
      const listbox = screen.getByRole('listbox');

      // Search input should not be a descendant of the listbox
      expect(listbox.contains(searchInput)).toBe(false);

      // The listbox should have the scrollable styles, not the search container
      expect(listbox).toHaveClass('overflow-y-auto');
    });

    it('filter list has scrollable container for many items', async () => {
      const user = userEvent.setup();

      // Create columns with many filter values
      const columnsWithManyFilters: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name' },
        {
          id: 'status',
          header: 'Status',
          accessorKey: 'status',
          filterable: true,
          filterValues: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10']
        },
      ];

      render(
        <DataTable
          columns={columnsWithManyFilters}
          data={mockData}
          getRowId={(row) => row.id}
          page={1}
          pageSize={10}
          totalCount={mockData.length}
          onPageChange={vi.fn()}
          filterState={[]}
          onFilterChange={vi.fn()}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      // The listbox should have overflow-y-auto for scrolling
      const listbox = screen.getByRole('listbox');
      expect(listbox).toHaveClass('overflow-y-auto');

      // The listbox should use flexbox pattern for constrained scrolling
      // (flex-1 min-h-0 allows it to shrink within a max-height parent)
      expect(listbox).toHaveClass('flex-1');
      expect(listbox).toHaveClass('min-h-0');
    });

    it('shows "Select all" button when no filters are selected', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /clear all/i })).not.toBeInTheDocument();
    });

    it('clicking "Select all" selects all filter values', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange,
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      const selectAllButton = screen.getByRole('button', { name: /select all/i });
      await user.click(selectAllButton);

      // Should call onFilterChange with all filter values
      expect(onFilterChange).toHaveBeenCalledWith([
        { columnId: 'status', values: ['Active', 'Inactive'] },
      ]);
    });

    it('shows "Clear all" button when filters are selected', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [{ columnId: 'status', values: ['Active'] }],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      expect(screen.getByRole('button', { name: /clear all/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /select all/i })).not.toBeInTheDocument();
    });

    it('clicking "Clear all" clears all filter values', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [{ columnId: 'status', values: ['Active', 'Inactive'] }],
            onFilterChange,
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });

      await user.click(filterButton);

      const clearAllButton = screen.getByRole('button', { name: /clear all/i });
      await user.click(clearAllButton);

      // Should call onFilterChange with empty values for this column
      expect(onFilterChange).toHaveBeenCalledWith([]);
    });
  });

  describe('Pagination', () => {
    it('shows "Page X of Y" text', () => {
      render(
        <DataTable
          {...createDefaultProps({
            page: 1,
            pageSize: 10,
            totalCount: 25,
          })}
        />
      );

      // Should show pagination info text (25 items / 10 per page = 3 pages)
      expect(screen.getByText(/page 1 of 3/i)).toBeInTheDocument();
    });

    it('calls onPageChange when next button is clicked', async () => {
      const user = userEvent.setup();
      const onPageChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            page: 1,
            pageSize: 10,
            totalCount: 25,
            onPageChange,
          })}
        />
      );

      const nextButton = screen.getByRole('button', { name: /next/i });
      await user.click(nextButton);

      expect(onPageChange).toHaveBeenCalledTimes(1);
      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('calls onPageChange when previous button is clicked', async () => {
      const user = userEvent.setup();
      const onPageChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            page: 2,
            pageSize: 10,
            totalCount: 25,
            onPageChange,
          })}
        />
      );

      const prevButton = screen.getByRole('button', { name: /previous/i });
      await user.click(prevButton);

      expect(onPageChange).toHaveBeenCalledTimes(1);
      expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it('disables previous button on first page', () => {
      render(
        <DataTable
          {...createDefaultProps({
            page: 1,
            pageSize: 10,
            totalCount: 25,
          })}
        />
      );

      const prevButton = screen.getByRole('button', { name: /previous/i });
      expect(prevButton).toBeDisabled();
    });

    it('disables next button on last page', () => {
      render(
        <DataTable
          {...createDefaultProps({
            page: 3,
            pageSize: 10,
            totalCount: 25,
          })}
        />
      );

      const nextButton = screen.getByRole('button', { name: /next/i });
      expect(nextButton).toBeDisabled();
    });

    it('pagination has proper aria-label', () => {
      render(
        <DataTable
          {...createDefaultProps({
            page: 1,
            pageSize: 10,
            totalCount: 25,
          })}
        />
      );

      const paginationNav = screen.getByRole('navigation', { name: /pagination/i });
      expect(paginationNav).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('table has role="grid"', () => {
      render(<DataTable {...createDefaultProps()} />);

      const table = screen.getByRole('grid');
      expect(table).toBeInTheDocument();
    });

    it('sortable headers have aria-sort attribute', () => {
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
    });

    it('aria-sort changes to descending when sorted desc', () => {
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'desc' },
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      expect(nameHeader).toHaveAttribute('aria-sort', 'descending');
    });

    it('non-sorted sortable columns have aria-sort="none"', () => {
      render(
        <DataTable
          {...createDefaultProps({
            sortState: null,
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      expect(nameHeader).toHaveAttribute('aria-sort', 'none');
    });

    it('selection checkboxes have aria-labels', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set<string>(),
            onSelectionChange: vi.fn(),
          })}
        />
      );

      expect(screen.getByLabelText(/select all/i)).toBeInTheDocument();
      expect(screen.getAllByLabelText(/select row/i).length).toBeGreaterThanOrEqual(2);
    });

    it('filter buttons have aria-labels', () => {
      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      const filterButton = within(statusHeader as HTMLElement).getByRole('button', {
        name: /filter/i,
      });
      expect(filterButton).toHaveAccessibleName();
    });

    it('pagination nav has role="navigation" and aria-label="Pagination"', () => {
      render(
        <DataTable
          {...createDefaultProps({
            page: 1,
            pageSize: 10,
            totalCount: 25,
          })}
        />
      );

      const nav = screen.getByRole('navigation', { name: /pagination/i });
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveAttribute('aria-label', expect.stringMatching(/pagination/i));
    });

    it('table has aria-busy="false" when not loading', () => {
      render(<DataTable {...createDefaultProps({ loading: false })} />);

      const table = screen.getByRole('grid');
      expect(table).toHaveAttribute('aria-busy', 'false');
    });
  });

  describe('Column Configuration', () => {
    it('applies column width when provided', () => {
      const columnsWithWidth: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name', width: '200px' },
        { id: 'email', header: 'Email', accessorKey: 'email' },
      ];

      const { container } = render(
        <DataTable {...createDefaultProps({ columns: columnsWithWidth })} />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      expect(nameHeader).toHaveStyle({ width: '200px' });
    });

    it('applies text alignment when provided', () => {
      const columnsWithAlign: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name', align: 'center' },
        { id: 'email', header: 'Email', accessorKey: 'email', align: 'right' },
      ];

      render(<DataTable {...createDefaultProps({ columns: columnsWithAlign })} />);

      // Cells should have appropriate text alignment classes
      const nameCells = screen.getAllByText(/John Doe|Jane Smith/);
      nameCells.forEach((cell) => {
        const td = cell.closest('td, [role="gridcell"]');
        expect(td).toHaveClass('text-center');
      });
    });

    it('uses accessorFn when provided instead of accessorKey', () => {
      const columnsWithAccessorFn: DataTableColumn<TestData>[] = [
        {
          id: 'fullInfo',
          header: 'Full Info',
          accessorFn: (row) => `${row.name} (${row.email})`,
        },
      ];

      render(<DataTable {...createDefaultProps({ columns: columnsWithAccessorFn })} />);

      expect(screen.getByText('John Doe (john@example.com)')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith (jane@example.com)')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles single page of data (no pagination needed)', () => {
      render(
        <DataTable
          {...createDefaultProps({
            page: 1,
            pageSize: 10,
            totalCount: 2,
          })}
        />
      );

      const prevButton = screen.getByRole('button', { name: /previous/i });
      const nextButton = screen.getByRole('button', { name: /next/i });

      expect(prevButton).toBeDisabled();
      expect(nextButton).toBeDisabled();
    });

    it('handles custom className prop', () => {
      const { container } = render(
        <DataTable {...createDefaultProps({ className: 'custom-table-class' })} />
      );

      const tableContainer = container.firstChild;
      expect(tableContainer).toHaveClass('custom-table-class');
    });

    it('handles ReactNode as column header', () => {
      const columnsWithReactNodeHeader: DataTableColumn<TestData>[] = [
        {
          id: 'name',
          header: <span data-testid="custom-header">Custom Name Header</span>,
          accessorKey: 'name',
        },
      ];

      render(<DataTable {...createDefaultProps({ columns: columnsWithReactNodeHeader })} />);

      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
      expect(screen.getByText('Custom Name Header')).toBeInTheDocument();
    });

    it('deselects row when clicking already selected row checkbox', async () => {
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1']),
            onSelectionChange,
          })}
        />
      );

      // Find the checked checkbox (for row 1)
      const checkboxes = screen.getAllByRole('checkbox');
      const row1Checkbox = checkboxes.find(
        (cb) => (cb as HTMLInputElement).checked && cb !== checkboxes[0]
      );

      if (row1Checkbox) {
        await user.click(row1Checkbox);
      }

      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet.has('1')).toBe(false);
    });

    it('header checkbox deselects all when all rows are selected', async () => {
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1', '2']),
            onSelectionChange,
          })}
        />
      );

      const headerCheckbox = screen.getAllByRole('checkbox')[0];
      await user.click(headerCheckbox);

      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet.size).toBe(0);
    });
  });

  describe('Expandable Rows', () => {
    // Types for expanded row data
    type ExpandedRowData = { details: string; metadata: { count: number } };

    // Mock expanded row content component for testing
    const MockExpandedRowContent = ({
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
        {data && (
          <span data-testid="expanded-data">{data.details}</span>
        )}
      </div>
    );

    // Helper to create a controlled Promise for testing async behavior
    const createDeferredPromise = <T,>() => {
      let resolve: (value: T) => void;
      let reject: (reason?: unknown) => void;
      const promise = new Promise<T>((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve: resolve!, reject: reject! };
    };

    it('renders chevron icon in left column when rowInteraction is EXPANDABLE', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData: vi.fn(),
          })}
        />
      );

      // Find chevron buttons (one per row, not in header)
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      expect(chevronButtons).toHaveLength(2); // One for each row
    });

    it('chevron points right (collapsed state) by default', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData: vi.fn(),
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // All chevrons should have aria-expanded="false" by default
      chevronButtons.forEach((button) => {
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('clicking a row expands it and chevron points down', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the first row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // Chevron should now indicate expanded state
      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'true');
    });

    it('expanded content component is rendered when row is expanded', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test details', metadata: { count: 5 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Initially, no expanded content should be visible
      expect(screen.queryByTestId('expanded-content')).not.toBeInTheDocument();

      // Click on the first row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // Expanded content should now be visible
      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });
    });

    it('getExpandedRowData is called with row and rowId when row is expanded', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the first row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // getExpandedRowData should be called with the row data and rowId
      expect(getExpandedRowData).toHaveBeenCalledTimes(1);
      expect(getExpandedRowData).toHaveBeenCalledWith(mockData[0], '1');
    });

    it('expandedRowContent receives loading=true and data=null initially', async () => {
      const user = userEvent.setup();
      const { promise, resolve } = createDeferredPromise<ExpandedRowData>();
      const getExpandedRowData = vi.fn().mockReturnValue(promise);

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the first row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // Initially, content should show loading state
      await waitFor(() => {
        expect(screen.getByTestId('expanded-loading')).toHaveTextContent('true');
      });
      expect(screen.queryByTestId('expanded-data')).not.toBeInTheDocument();

      // Resolve the promise to clean up
      await act(async () => {
        resolve({ details: 'Resolved data', metadata: { count: 10 } });
      });
    });

    it('expandedRowContent receives loading=false and actual data after Promise resolves', async () => {
      const user = userEvent.setup();
      const { promise, resolve } = createDeferredPromise<ExpandedRowData>();
      const getExpandedRowData = vi.fn().mockReturnValue(promise);

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the first row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // Wait for loading state
      await waitFor(() => {
        expect(screen.getByTestId('expanded-loading')).toHaveTextContent('true');
      });

      // Resolve the promise
      await act(async () => {
        resolve({ details: 'Loaded data content', metadata: { count: 42 } });
      });

      // After resolution, should show data and loading=false
      await waitFor(() => {
        expect(screen.getByTestId('expanded-loading')).toHaveTextContent('false');
        expect(screen.getByTestId('expanded-data')).toHaveTextContent('Loaded data content');
      });
    });

    it('clicking an expanded row collapses it', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the first row's chevron button to expand
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // Wait for expanded content to appear
      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      // Click the same chevron again to collapse
      await user.click(chevronButtons[0]);

      // Expanded content should be hidden
      await waitFor(() => {
        expect(screen.queryByTestId('expanded-content')).not.toBeInTheDocument();
      });

      // Chevron should indicate collapsed state
      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'false');
    });

    it('clicking a different row collapses the current and expands the new one', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockImplementation((row: TestData) =>
        Promise.resolve({ details: `Details for ${row.name}`, metadata: { count: 1 } })
      );

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Expand the first row
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('John Doe');
      });

      // First row should be expanded
      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'true');
      expect(chevronButtons[1]).toHaveAttribute('aria-expanded', 'false');

      // Click the second row's chevron
      await user.click(chevronButtons[1]);

      // Second row should now be expanded, first row should be collapsed
      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('Jane Smith');
      });

      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'false');
      expect(chevronButtons[1]).toHaveAttribute('aria-expanded', 'true');
    });

    it('only one row can be expanded at a time', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockImplementation((row: TestData) =>
        Promise.resolve({ details: `Details for ${row.name}`, metadata: { count: 1 } })
      );

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Expand the first row
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      // Expand the second row
      await user.click(chevronButtons[1]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('Jane Smith');
      });

      // Should only have one expanded content element
      const expandedContents = screen.getAllByTestId('expanded-content');
      expect(expandedContents).toHaveLength(1);
    });

    it('expanded content has proper aria attributes', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the first row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      // The expanded content row should have proper ARIA attributes
      const expandedContent = screen.getByTestId('expanded-content');
      const expandedRow = expandedContent.closest('tr, [role="row"]');

      // Should have aria-labelledby or aria-describedby referencing the parent row
      // or the expanded region should have role="region"
      expect(expandedRow).toBeInTheDocument();

      // The chevron button should have aria-controls pointing to the expanded content
      expect(chevronButtons[0]).toHaveAttribute('aria-controls');
    });

    it('chevron has aria-expanded attribute that reflects state', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Initially collapsed
      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'false');
      expect(chevronButtons[1]).toHaveAttribute('aria-expanded', 'false');

      // Expand first row
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'true');
      });
      expect(chevronButtons[1]).toHaveAttribute('aria-expanded', 'false');

      // Collapse first row
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('expanded content spans full table width', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the first row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      // The expanded content should be in a cell that spans all columns
      const expandedContent = screen.getByTestId('expanded-content');
      const expandedCell = expandedContent.closest('td, [role="gridcell"]');

      // Should have colspan attribute equal to total columns (3 data columns + 1 chevron column = 4)
      expect(expandedCell).toHaveAttribute('colspan');
    });

    it('does not render checkboxes when rowInteraction is EXPANDABLE', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData: vi.fn(),
          })}
        />
      );

      // Should not have any checkboxes
      const checkboxes = screen.queryAllByRole('checkbox');
      expect(checkboxes).toHaveLength(0);
    });

    it('rows are not clickable as links when rowInteraction is EXPANDABLE', async () => {
      const user = userEvent.setup();
      const onRowClick = vi.fn();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
            onRowClick, // This should not be called when interaction is EXPANDABLE
          })}
        />
      );

      // Click on a data cell (not the chevron)
      const johnCell = screen.getByText('John Doe');
      await user.click(johnCell);

      // onRowClick should not be called for EXPANDABLE interaction
      expect(onRowClick).not.toHaveBeenCalled();
    });

    it('passes correct rowId to expandedRowContent', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the second row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[1]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-id')).toHaveTextContent('2');
      });
    });

    it('passes correct row data to expandedRowContent', async () => {
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.EXPANDABLE,
            expandedRowContent: MockExpandedRowContent,
            getExpandedRowData,
          })}
        />
      );

      // Click on the second row's chevron button
      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[1]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('Jane Smith');
      });
    });
  });
});
