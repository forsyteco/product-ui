import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import DataTable from './data-table';
import { ROW_INTERACTION } from './constants';
import type { DataTableColumn, FilterState, CellRendererProps } from './types';
import {
  type TestData,
  type ExpandedRowData,
  mockData,
  MockExpandedRowContent,
  createDeferredPromise,
  openStatusFilterDropdown,
  getFilterButton,
  createDefaultProps,
} from './data-table.test-utils';

describe('DataTable', () => {
  describe('Basic Rendering', () => {
    it('renders table with columns and data', () => {
      render(<DataTable {...createDefaultProps()} />);

      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();

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

      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();

      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    });

    it('table has aria-busy="true" when loading', () => {
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      const table = screen.getByRole('table');
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

      const rows = container.querySelectorAll('tbody tr, [role="row"]');
      rows.forEach((row) => {
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
    const selectionProps = {
      rowInteraction: ROW_INTERACTION.SELECTION,
      selectedRowIds: new Set<string>(),
      onSelectionChange: vi.fn(),
    };

    it('renders selection checkboxes in header and each row', () => {
      render(<DataTable {...createDefaultProps(selectionProps)} />);

      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes.length).toBeGreaterThanOrEqual(3);
    });

    it('calls onSelectionChange with new Set when row checkbox is clicked', async () => {
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            ...selectionProps,
            onSelectionChange,
          })}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
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
            ...selectionProps,
            onSelectionChange,
          })}
        />
      );

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
      render(<DataTable {...createDefaultProps(selectionProps)} />);

      const headerCheckbox = screen.getByLabelText(/select all/i);
      expect(headerCheckbox).toBeInTheDocument();

      const rowCheckboxes = screen.getAllByLabelText(/select row/i);
      expect(rowCheckboxes.length).toBeGreaterThanOrEqual(2);
    });

    it('shows checked state for selected rows', () => {
      render(
        <DataTable
          {...createDefaultProps({
            ...selectionProps,
            selectedRowIds: new Set(['1']),
          })}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      const checkedCheckboxes = checkboxes.filter((cb) => cb.checked);
      expect(checkedCheckboxes.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Row Interaction - LINK', () => {
    it('rows have cursor-pointer class', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.LINK,
            onRowClick: vi.fn(),
          })}
        />
      );

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
    const sortProps = {
      sortState: null as { columnId: string; direction: 'asc' | 'desc' } | null,
      onSortChange: vi.fn(),
    };

    it('shows sort indicator for sortable columns', () => {
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      expect(nameHeader).toBeInTheDocument();
    });

    it('calls onSortChange when sortable column header is clicked', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      render(<DataTable {...createDefaultProps({ ...sortProps, onSortChange })} />);

      const nameHeader = screen.getByText('Name');
      await user.click(nameHeader);

      expect(onSortChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).toHaveBeenCalledWith({ columnId: 'name', direction: 'asc' });
    });

    it('toggles sort direction on subsequent clicks (asc -> desc -> null)', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      const { rerender } = render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange,
          })}
        />
      );

      const nameHeader = screen.getByText('Name');

      await user.click(nameHeader);
      expect(onSortChange).toHaveBeenLastCalledWith({ columnId: 'name', direction: 'desc' });

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

      render(<DataTable {...createDefaultProps({ ...sortProps, onSortChange })} />);

      const emailHeader = screen.getByText('Email');
      await user.click(emailHeader);

      expect(onSortChange).not.toHaveBeenCalled();
    });
  });

  describe('Filter and Sort Independence', () => {
    const sortableAndFilterableColumns: DataTableColumn<TestData>[] = [
      { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
      { id: 'email', header: 'Email', accessorKey: 'email' },
      {
        id: 'status',
        header: 'Status',
        accessorKey: 'status',
        sortable: true,
        filterable: true,
        filterValues: ['Active', 'Inactive'],
      },
    ];

    it('does not call onSortChange when filter value is selected', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            columns: sortableAndFilterableColumns,
            sortState: null,
            onSortChange,
            filterState: [],
            onFilterChange,
          })}
        />
      );

      // Open filter dropdown and select a value
      await openStatusFilterDropdown(user);
      const activeCheckbox = screen.getByLabelText('Active');
      await user.click(activeCheckbox);

      // Filter should have been called
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      // Sort should NOT have been called
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('does not call onSortChange when filter value is deselected', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            columns: sortableAndFilterableColumns,
            sortState: { columnId: 'status', direction: 'asc' },
            onSortChange,
            filterState: [{ columnId: 'status', values: ['Active'] }],
            onFilterChange,
          })}
        />
      );

      // Open filter dropdown and deselect a value
      await openStatusFilterDropdown(user);
      const activeCheckbox = screen.getByLabelText('Active');
      await user.click(activeCheckbox);

      // Filter should have been called
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      // Sort should NOT have been called
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('does not call onSortChange when clicking the filter button on a sortable column', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            columns: sortableAndFilterableColumns,
            sortState: null,
            onSortChange,
            filterState: [],
            onFilterChange,
          })}
        />
      );

      // Click the filter button
      const filterButton = getFilterButton('Status');
      await user.click(filterButton);

      // Sort should NOT have been called just from opening the filter
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('does not call onFilterChange when clicking sortable column header to sort', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            columns: sortableAndFilterableColumns,
            sortState: null,
            onSortChange,
            filterState: [],
            onFilterChange,
          })}
        />
      );

      // Click the column header text to trigger sort
      const statusHeader = screen.getByText('Status');
      await user.click(statusHeader);

      // Sort should have been called
      expect(onSortChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).toHaveBeenCalledWith({ columnId: 'status', direction: 'asc' });
      // Filter should NOT have been called
      expect(onFilterChange).not.toHaveBeenCalled();
    });

    it('does not call onSortChange when using Select all in filter dropdown', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            columns: sortableAndFilterableColumns,
            sortState: null,
            onSortChange,
            filterState: [],
            onFilterChange,
          })}
        />
      );

      await openStatusFilterDropdown(user);
      const selectAllButton = screen.getByRole('button', { name: /select all/i });
      await user.click(selectAllButton);

      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('does not call onSortChange when using Clear all in filter dropdown', async () => {
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            columns: sortableAndFilterableColumns,
            sortState: null,
            onSortChange,
            filterState: [{ columnId: 'status', values: ['Active', 'Inactive'] }],
            onFilterChange,
          })}
        />
      );

      await openStatusFilterDropdown(user);
      const clearAllButton = screen.getByRole('button', { name: /clear all/i });
      await user.click(clearAllButton);

      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });
  });

  describe('Filtering', () => {
    const filterProps: { filterState: FilterState; onFilterChange: ReturnType<typeof vi.fn> } = {
      filterState: [],
      onFilterChange: vi.fn(),
    };

    it('shows filter button for filterable columns', () => {
      render(<DataTable {...createDefaultProps(filterProps)} />);

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      expect(statusHeader).toBeInTheDocument();

      const filterButton = getFilterButton('Status');
      expect(filterButton).toBeInTheDocument();
    });

    it('opens filter dropdown when filter button is clicked', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);
      expect(within(dropdown).getByText('Active')).toBeInTheDocument();
      expect(within(dropdown).getByText('Inactive')).toBeInTheDocument();
    });

    it('shows filter values in dropdown', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);
      expect(within(dropdown).getByText('Active')).toBeInTheDocument();
      expect(within(dropdown).getByText('Inactive')).toBeInTheDocument();
    });

    it('calls onFilterChange when filter value is selected', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      render(<DataTable {...createDefaultProps({ ...filterProps, onFilterChange })} />);

      await openStatusFilterDropdown(user);
      const activeCheckbox = screen.getByLabelText('Active');
      await user.click(activeCheckbox);

      expect(onFilterChange).toHaveBeenCalledTimes(1);
      const filterArg: FilterState = onFilterChange.mock.calls[0][0];
      expect(filterArg).toContainEqual({
        columnId: 'status',
        values: expect.arrayContaining(['Active']),
      });
    });

    it('filter dropdown has search input', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      await openStatusFilterDropdown(user);

      const searchInput = screen.getByRole('searchbox') ?? screen.getByPlaceholderText(/search/i);
      expect(searchInput).toBeInTheDocument();
    });

    it('filter dropdown renders in a portal to escape table overflow', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);
      const table = screen.getByRole('table');

      expect(table.contains(dropdown)).toBe(false);
    });

    it('search input stays fixed at top while filter list scrolls', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      await openStatusFilterDropdown(user);

      const searchInput = screen.getByRole('searchbox');
      const filterOptions = screen.getByTestId('filter-options');

      expect(filterOptions.contains(searchInput)).toBe(false);
      expect(filterOptions).toHaveClass('overflow-y-auto');
    });

    it('filter list has scrollable container for many items', async () => {
      const user = userEvent.setup();

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
          {...createDefaultProps({
            columns: columnsWithManyFilters,
            ...filterProps,
          })}
        />
      );

      const dropdown = await openStatusFilterDropdown(user);

      expect(dropdown).toHaveClass('overflow-y-auto');
      expect(dropdown).toHaveClass('flex-1');
      expect(dropdown).toHaveClass('min-h-0');
    });

    it('shows "Select all" button when no filters are selected', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      await openStatusFilterDropdown(user);

      expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /clear all/i })).not.toBeInTheDocument();
    });

    it('clicking "Select all" selects all filter values', async () => {
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      render(<DataTable {...createDefaultProps({ ...filterProps, onFilterChange })} />);

      await openStatusFilterDropdown(user);

      const selectAllButton = screen.getByRole('button', { name: /select all/i });
      await user.click(selectAllButton);

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

      await openStatusFilterDropdown(user);

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

      await openStatusFilterDropdown(user);

      const clearAllButton = screen.getByRole('button', { name: /clear all/i });
      await user.click(clearAllButton);

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
    it('table uses native table semantics', () => {
      render(<DataTable {...createDefaultProps()} />);

      const table = screen.getByRole('table');
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

    it('filter buttons have aria-labels', async () => {
      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const filterButton = getFilterButton('Status');
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

      const table = screen.getByRole('table');
      expect(table).toHaveAttribute('aria-busy', 'false');
    });
  });

  describe('Column Configuration', () => {
    it('applies column width when provided', () => {
      const columnsWithWidth: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name', width: '200px' },
        { id: 'email', header: 'Email', accessorKey: 'email' },
      ];

      render(<DataTable {...createDefaultProps({ columns: columnsWithWidth })} />);

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      expect(nameHeader).toHaveStyle({ width: '200px' });
    });

    it('applies text alignment when provided', () => {
      const columnsWithAlign: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name', align: 'center' },
        { id: 'email', header: 'Email', accessorKey: 'email', align: 'right' },
      ];

      render(<DataTable {...createDefaultProps({ columns: columnsWithAlign })} />);

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

      const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
      const row1Checkbox = checkboxes.find((cb) => cb.checked && cb !== checkboxes[0]);

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
    const expandableProps = {
      rowInteraction: ROW_INTERACTION.EXPANDABLE,
      expandedRowContent: MockExpandedRowContent,
      getExpandedRowData: vi.fn().mockResolvedValue({ details: 'test', metadata: { count: 1 } }),
    };

    it('renders chevron icon in left column when rowInteraction is EXPANDABLE', () => {
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      expect(chevronButtons).toHaveLength(2);
    });

    it('chevron points right (collapsed state) by default', () => {
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      chevronButtons.forEach((button) => {
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('clicking a row expands it and chevron points down', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'true');
    });

    it('expanded content component is rendered when row is expanded', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      expect(screen.queryByTestId('expanded-content')).not.toBeInTheDocument();

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

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
            ...expandableProps,
            getExpandedRowData,
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

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
            ...expandableProps,
            getExpandedRowData,
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-loading')).toHaveTextContent('true');
      });
      expect(screen.queryByTestId('expanded-data')).not.toBeInTheDocument();

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
            ...expandableProps,
            getExpandedRowData,
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-loading')).toHaveTextContent('true');
      });

      await act(async () => {
        resolve({ details: 'Loaded data content', metadata: { count: 42 } });
      });

      await waitFor(() => {
        expect(screen.getByTestId('expanded-loading')).toHaveTextContent('false');
        expect(screen.getByTestId('expanded-data')).toHaveTextContent('Loaded data content');
      });
    });

    it('clicking an expanded row collapses it', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.queryByTestId('expanded-content')).not.toBeInTheDocument();
      });

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
            ...expandableProps,
            getExpandedRowData,
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('John Doe');
      });

      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'true');
      expect(chevronButtons[1]).toHaveAttribute('aria-expanded', 'false');

      await user.click(chevronButtons[1]);

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
            ...expandableProps,
            getExpandedRowData,
          })}
        />
      );

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      await user.click(chevronButtons[1]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('Jane Smith');
      });

      const expandedContents = screen.getAllByTestId('expanded-content');
      expect(expandedContents).toHaveLength(1);
    });

    it('expanded content has proper aria attributes', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      const expandedContent = screen.getByTestId('expanded-content');
      const expandedRow = expandedContent.closest('tr, [role="row"]');

      expect(expandedRow).toBeInTheDocument();
      expect(chevronButtons[0]).toHaveAttribute('aria-controls');
    });

    it('chevron has aria-expanded attribute that reflects state', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'false');
      expect(chevronButtons[1]).toHaveAttribute('aria-expanded', 'false');

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'true');
      });
      expect(chevronButtons[1]).toHaveAttribute('aria-expanded', 'false');

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('expanded content spans full table width', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      const expandedContent = screen.getByTestId('expanded-content');
      const expandedCell = expandedContent.closest('td, [role="gridcell"]');

      expect(expandedCell).toHaveAttribute('colspan');
    });

    it('does not render checkboxes when rowInteraction is EXPANDABLE', () => {
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const checkboxes = screen.queryAllByRole('checkbox');
      expect(checkboxes).toHaveLength(0);
    });

    it('rows are not clickable as links when rowInteraction is EXPANDABLE', async () => {
      const user = userEvent.setup();
      const onRowClick = vi.fn();

      render(
        <DataTable
          {...createDefaultProps({
            ...expandableProps,
            onRowClick,
          })}
        />
      );

      const johnCell = screen.getByText('John Doe');
      await user.click(johnCell);

      expect(onRowClick).not.toHaveBeenCalled();
    });

    it('passes correct rowId to expandedRowContent', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[1]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-id')).toHaveTextContent('2');
      });
    });

    it('passes correct row data to expandedRowContent', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[1]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('Jane Smith');
      });
    });

    it('expand button has yellow background (bg-accent) when row is expanded', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      expect(chevronButtons[0]).not.toHaveClass('bg-accent');

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveClass('bg-accent');
      });
    });

    it('expand button loses yellow background when row is collapsed', async () => {
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveClass('bg-accent');
      });

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).not.toHaveClass('bg-accent');
      });
    });
  });
});
