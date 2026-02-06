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

    it('when a filter value is selected, does not trigger onSortChange', async () => {
      // Arrange
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

      // Act
      await openStatusFilterDropdown(user);
      const activeCheckbox = screen.getByLabelText('Active');
      await user.click(activeCheckbox);

      // Assert
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('when a filter value is deselected, does not trigger onSortChange', async () => {
      // Arrange
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

      // Act
      await openStatusFilterDropdown(user);
      const activeCheckbox = screen.getByLabelText('Active');
      await user.click(activeCheckbox);

      // Assert
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('when the filter button is clicked on a sortable column, does not trigger onSortChange', async () => {
      // Arrange
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

      // Act
      const filterButton = getFilterButton('Status');
      await user.click(filterButton);

      // Assert
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('when the column header is clicked to sort, does not trigger onFilterChange', async () => {
      // Arrange
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

      // Act
      const statusHeader = screen.getByText('Status');
      await user.click(statusHeader);

      // Assert
      expect(onSortChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).toHaveBeenCalledWith({ columnId: 'status', direction: 'asc' });
      expect(onFilterChange).not.toHaveBeenCalled();
    });

    it('when Select all is clicked in the filter dropdown, does not trigger onSortChange', async () => {
      // Arrange
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

      // Act
      await openStatusFilterDropdown(user);
      const selectAllButton = screen.getByRole('button', { name: /select all/i });
      await user.click(selectAllButton);

      // Assert
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('when Clear all is clicked in the filter dropdown, does not trigger onSortChange', async () => {
      // Arrange
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

      // Act
      await openStatusFilterDropdown(user);
      const clearAllButton = screen.getByRole('button', { name: /clear all/i });
      await user.click(clearAllButton);

      // Assert
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

  describe('Color Configuration', () => {
    it('applies custom header background color when provided', () => {
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { headerBackground: '#ff0000' },
          })}
        />
      );

      const headerRow = screen.getByRole('row', { name: /name/i });
      expect(headerRow).toHaveStyle({ backgroundColor: '#ff0000' });
    });

    it('applies custom header text color when provided', () => {
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { headerText: '#00ff00' },
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th');
      expect(nameHeader).toHaveStyle({ color: '#00ff00' });
    });

    it('applies custom row background color when provided', () => {
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { rowBackground: '#0000ff' },
          })}
        />
      );

      const johnRow = screen.getByText('John Doe').closest('tr');
      expect(johnRow).toHaveStyle({ backgroundColor: '#0000ff' });
    });

    it('applies custom border color when provided', () => {
      const { container } = render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { borderColor: '#purple' },
          })}
        />
      );

      const tableContainer = container.firstChild;
      expect(tableContainer).toHaveStyle({ borderColor: '#purple' });
    });

    it('applies custom pagination background color when provided', () => {
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { paginationBackground: '#cccccc' },
          })}
        />
      );

      const pagination = screen.getByRole('navigation', { name: /pagination/i });
      expect(pagination).toHaveStyle({ backgroundColor: '#cccccc' });
    });

    it('applies custom pagination text color when provided', () => {
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { paginationText: '#333333' },
          })}
        />
      );

      const pagination = screen.getByRole('navigation', { name: /pagination/i });
      expect(pagination).toHaveStyle({ color: '#333333' });
    });

    it('applies custom selected row background color when row is selected', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1']),
            onSelectionChange: vi.fn(),
            colorConfig: { selectedRowBackground: '#ffff00' },
          })}
        />
      );

      const johnRow = screen.getByText('John Doe').closest('tr');
      expect(johnRow).toHaveStyle({ backgroundColor: '#ffff00' });
    });

    it('does not apply selected row background to unselected rows', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1']),
            onSelectionChange: vi.fn(),
            colorConfig: {
              rowBackground: '#ffffff',
              selectedRowBackground: '#ffff00',
            },
          })}
        />
      );

      const janeRow = screen.getByText('Jane Smith').closest('tr');
      expect(janeRow).toHaveStyle({ backgroundColor: '#ffffff' });
    });

    it('applies multiple color configurations together', () => {
      const { container } = render(
        <DataTable
          {...createDefaultProps({
            colorConfig: {
              headerBackground: '#111111',
              headerText: '#222222',
              rowBackground: '#333333',
              borderColor: '#444444',
              paginationBackground: '#555555',
              paginationText: '#666666',
            },
          })}
        />
      );

      const headerRow = screen.getByRole('row', { name: /name/i });
      expect(headerRow).toHaveStyle({ backgroundColor: '#111111' });

      const nameHeader = screen.getByText('Name').closest('th');
      expect(nameHeader).toHaveStyle({ color: '#222222' });

      const johnRow = screen.getByText('John Doe').closest('tr');
      expect(johnRow).toHaveStyle({ backgroundColor: '#333333' });

      const tableContainer = container.firstChild;
      expect(tableContainer).toHaveStyle({ borderColor: '#444444' });

      const pagination = screen.getByRole('navigation', { name: /pagination/i });
      expect(pagination).toHaveStyle({ backgroundColor: '#555555' });
      expect(pagination).toHaveStyle({ color: '#666666' });
    });

    it('applies default color config when colorConfig is not provided', () => {
      render(<DataTable {...createDefaultProps()} />);

      // Header should have default black background
      const headerRow = screen.getByRole('row', { name: /name/i });
      expect(headerRow).toHaveStyle({ backgroundColor: '#000000' });

      // Header text should be white
      const nameHeader = screen.getByText('Name').closest('th');
      expect(nameHeader).toHaveStyle({ color: '#ffffff' });

      // Row should have default white background
      const johnRow = screen.getByText('John Doe').closest('tr');
      expect(johnRow).toHaveStyle({ backgroundColor: '#ffffff' });

      // Pagination should have default colors
      const pagination = screen.getByRole('navigation', { name: /pagination/i });
      expect(pagination).toHaveStyle({ backgroundColor: '#ffffff' });
      expect(pagination).toHaveStyle({ color: '#000000' });
    });

    it('applies default border color when colorConfig is not provided', () => {
      const { container } = render(<DataTable {...createDefaultProps()} />);

      const tableContainer = container.firstChild;
      expect(tableContainer).toHaveStyle({ borderColor: '#cbd5e1' });
    });

    it('applies default selected row background when colorConfig is not provided', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1']),
            onSelectionChange: vi.fn(),
          })}
        />
      );

      const johnRow = screen.getByText('John Doe').closest('tr');
      expect(johnRow).toHaveStyle({ backgroundColor: '#fef9c3' });
    });

    it('applies default active icon colors when colorConfig is not provided', () => {
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th');
      const sortIcon = nameHeader?.querySelector('svg');
      const sortIndicator = sortIcon?.parentElement;

      // Default yellow background
      expect(sortIndicator).toHaveStyle({ backgroundColor: '#ffde13' });
      // Default black foreground
      expect(sortIcon).toHaveStyle({ color: '#000000' });
    });

    it('overrides specific default colors when partial colorConfig is provided', () => {
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { headerBackground: '#ff0000' },
          })}
        />
      );

      // Header has custom color (overridden)
      const headerRow = screen.getByRole('row', { name: /name/i });
      expect(headerRow).toHaveStyle({ backgroundColor: '#ff0000' });

      // Row should use default white background (not overridden)
      const johnRow = screen.getByText('John Doe').closest('tr');
      expect(johnRow).toHaveStyle({ backgroundColor: '#ffffff' });
    });

    it('applies custom active background color to sort icon when sorted', () => {
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange: vi.fn(),
            colorConfig: { headerIconActiveBackground: '#0000ff' },
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th');
      // The sort indicator is the span that contains the SVG icon
      const sortIcon = nameHeader?.querySelector('svg');
      const sortIndicator = sortIcon?.parentElement;
      expect(sortIndicator).toHaveStyle({ backgroundColor: '#0000ff' });
    });

    it('applies custom active foreground color to sort icon when sorted', () => {
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange: vi.fn(),
            colorConfig: { headerIconActiveForeground: '#ffffff' },
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th');
      const sortIcon = nameHeader?.querySelector('svg');
      expect(sortIcon).toHaveStyle({ color: '#ffffff' });
    });

    it('applies custom active background color to filter icon when filters are applied', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [{ columnId: 'status', values: ['Active'] }],
            onFilterChange: vi.fn(),
            colorConfig: { headerIconActiveBackground: '#ff00ff' },
          })}
        />
      );

      const filterButton = getFilterButton('Status');
      expect(filterButton).toHaveStyle({ backgroundColor: '#ff00ff' });
    });

    it('applies custom active foreground color to filter icon when filters are applied', () => {
      render(
        <DataTable
          {...createDefaultProps({
            filterState: [{ columnId: 'status', values: ['Active'] }],
            onFilterChange: vi.fn(),
            colorConfig: { headerIconActiveForeground: '#00ffff' },
          })}
        />
      );

      const filterButton = getFilterButton('Status');
      const filterIcon = filterButton.querySelector('svg');
      expect(filterIcon).toHaveStyle({ color: '#00ffff' });
    });

    it('applies custom active colors to header checkbox when checked', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1', '2']),
            onSelectionChange: vi.fn(),
            colorConfig: {
              headerIconActiveBackground: '#123456',
              headerIconActiveForeground: '#fedcba',
            },
          })}
        />
      );

      const headerCheckbox = screen.getByLabelText(/select all/i);
      expect(headerCheckbox).toHaveStyle({ backgroundColor: '#123456' });
      expect(headerCheckbox).toHaveStyle({ color: '#fedcba' });
    });

    it('applies custom active colors to row checkbox when checked', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1']),
            onSelectionChange: vi.fn(),
            colorConfig: {
              headerIconActiveBackground: '#abcdef',
              headerIconActiveForeground: '#654321',
            },
          })}
        />
      );

      const rowCheckboxes = screen.getAllByLabelText(/select row/i) as HTMLInputElement[];
      const checkedCheckbox = rowCheckboxes.find((cb) => cb.checked);
      expect(checkedCheckbox).toHaveStyle({ backgroundColor: '#abcdef' });
      expect(checkedCheckbox).toHaveStyle({ color: '#654321' });
    });

    it('applies custom active colors to filter dropdown checkboxes when checked', async () => {
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [{ columnId: 'status', values: ['Active'] }],
            onFilterChange: vi.fn(),
            colorConfig: {
              headerIconActiveBackground: '#112233',
              headerIconActiveForeground: '#445566',
            },
          })}
        />
      );

      await openStatusFilterDropdown(user);

      const activeCheckbox = screen.getByLabelText('Active') as HTMLInputElement;
      expect(activeCheckbox.checked).toBe(true);
      expect(activeCheckbox).toHaveStyle({ backgroundColor: '#112233' });
      expect(activeCheckbox).toHaveStyle({ color: '#445566' });
    });

    it('does not apply active colors to unchecked checkboxes', () => {
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set(['1']),
            onSelectionChange: vi.fn(),
            colorConfig: {
              headerIconActiveBackground: '#abcdef',
              headerIconActiveForeground: '#654321',
            },
          })}
        />
      );

      const rowCheckboxes = screen.getAllByLabelText(/select row/i) as HTMLInputElement[];
      const uncheckedCheckbox = rowCheckboxes.find((cb) => !cb.checked);
      // Unchecked checkbox should not have inline styles
      expect(uncheckedCheckbox?.getAttribute('style')).toBeNull();
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
