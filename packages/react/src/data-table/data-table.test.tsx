import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { DataTable } from './data-table';
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
import styles from './components/data-table.module.css';

describe('DataTable', () => {
  describe('when rendering basic table content', () => {
    it('should render the table with columns and data', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps()} />);

      const table = screen.getByRole('table');
      // Assert
      expect(table).toBeInTheDocument();

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    });

    it('should render column headers', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps()} />);

      // Assert
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Status')).toBeInTheDocument();
    });

    it('should render the custom cell component when provided', () => {
      // Arrange
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

      // Act
      render(<DataTable {...createDefaultProps({ columns: columnsWithCustomCell })} />);

      const customCells = screen.getAllByTestId('custom-cell');
      // Assert
      expect(customCells).toHaveLength(2);
      expect(customCells[0]).toHaveTextContent('John Doe - 1');
      expect(customCells[1]).toHaveTextContent('Jane Smith - 2');
    });
  });

  describe('when loading', () => {
    it('should render skeleton rows when loading is true', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      const table = screen.getByRole('table');
      // Assert
      expect(table).toBeInTheDocument();

      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    });

    it('should set aria-busy to true on the table when loading', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      const table = screen.getByRole('table');
      // Assert
      expect(table).toHaveAttribute('aria-busy', 'true');
    });

    it('should not render data rows when loading', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      // Assert
      expect(screen.queryByText('john@example.com')).not.toBeInTheDocument();
      expect(screen.queryByText('jane@example.com')).not.toBeInTheDocument();
    });
  });

  describe('when data is empty', () => {
    it('should render empty state when data is an empty array', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps({ data: [], totalCount: 0 })} />);

      // Assert
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    });

    it('should render custom emptyState prop content when provided', () => {
      // Arrange
      const customEmptyState = <div data-testid="custom-empty">No data available</div>;

      // Act
      render(
        <DataTable {...createDefaultProps({ data: [], totalCount: 0, emptyState: customEmptyState })} />
      );

      // Assert
      expect(screen.getByTestId('custom-empty')).toBeInTheDocument();
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });
  });

  describe('when row interaction is NONE', () => {
    it('should keep rows non-clickable by default', () => {
      // Arrange
      // Act
      const { container } = render(<DataTable {...createDefaultProps()} />);

      const rows = container.querySelectorAll('tbody tr, [role="row"]');
      rows.forEach((row) => {
      // Assert
        expect(row).not.toHaveClass('cursor-pointer');
      });
    });

    it('should not call onRowClick when a row is clicked with NONE interaction', async () => {
      // Arrange
      const user = userEvent.setup();
      const onRowClick = vi.fn();

      // Act
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

      // Assert
      expect(onRowClick).not.toHaveBeenCalled();
    });
  });

  describe('when row interaction is SELECTION', () => {
    const selectionProps = {
      rowInteraction: ROW_INTERACTION.SELECTION,
      selectedRowIds: new Set<string>(),
      onSelectionChange: vi.fn(),
    };

    it('should render selection checkboxes in the header and each row', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps(selectionProps)} />);

      const checkboxes = screen.getAllByRole('checkbox');
      // Assert
      expect(checkboxes.length).toBeGreaterThanOrEqual(3);
    });

    it('should call onSelectionChange with a new Set when a row checkbox is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      // Act
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

      // Assert
      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet).toBeInstanceOf(Set);
      expect(calledWithSet.has('1')).toBe(true);
    });

    it('should select all rows when the header checkbox is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      // Act
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

      // Assert
      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet).toBeInstanceOf(Set);
      expect(calledWithSet.size).toBe(2);
      expect(calledWithSet.has('1')).toBe(true);
      expect(calledWithSet.has('2')).toBe(true);
    });

    it('should expose proper aria-labels on checkboxes', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps(selectionProps)} />);

      const headerCheckbox = screen.getByLabelText(/select all/i);
      // Assert
      expect(headerCheckbox).toBeInTheDocument();

      const rowCheckboxes = screen.getAllByLabelText(/select row/i);
      expect(rowCheckboxes.length).toBeGreaterThanOrEqual(2);
    });

    it('should show checked state for selected rows', () => {
      // Arrange
      // Act
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
      // Assert
      expect(checkedCheckboxes.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('when row interaction is LINK', () => {
    it('should apply the clickable row class for LINK interaction', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.LINK,
            onRowClick: vi.fn(),
          })}
        />
      );

      const johnRow = screen.getByText('John Doe').closest('tr, [role="row"]');
      // Assert
      expect(johnRow).toHaveClass(styles['row-clickable']);
    });

    it('should call onRowClick with row data when a row is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onRowClick = vi.fn();

      // Act
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

      // Assert
      expect(onRowClick).toHaveBeenCalledTimes(1);
      expect(onRowClick).toHaveBeenCalledWith(mockData[0]);
    });

    it('should support keyboard activation on clickable rows', async () => {
      // Arrange
      const user = userEvent.setup();
      const onRowClick = vi.fn();

      // Act
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.LINK,
            onRowClick,
          })}
        />
      );

      const johnRow = screen.getByText('John Doe').closest('tr');
      expect(johnRow).toHaveAttribute('tabindex', '0');

      if (johnRow) {
        johnRow.focus();
        await user.keyboard('{Enter}');
      }

      expect(onRowClick).toHaveBeenCalledTimes(1);
      expect(onRowClick).toHaveBeenCalledWith(mockData[0]);
      // Assert
    });
  });

  describe('when sorting', () => {
    const sortProps = {
      sortState: null as { columnId: string; direction: 'asc' | 'desc' } | null,
      onSortChange: vi.fn(),
    };

    it('should show the sort indicator for sortable columns', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      // Assert
      expect(nameHeader).toBeInTheDocument();
    });

    it('should call onSortChange when a sortable column header is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      // Act
      render(<DataTable {...createDefaultProps({ ...sortProps, onSortChange })} />);

      const nameHeader = screen.getByText('Name');
      await user.click(nameHeader);

      // Assert
      expect(onSortChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).toHaveBeenCalledWith({ columnId: 'name', direction: 'asc' });
    });

    it('should toggle sort direction on subsequent clicks from asc to desc to null', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      // Act
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
      // Assert
    });

    it('should not show a sort indicator or trigger sort for non-sortable columns', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      // Act
      render(<DataTable {...createDefaultProps({ ...sortProps, onSortChange })} />);

      const emailHeader = screen.getByText('Email');
      await user.click(emailHeader);

      // Assert
      expect(onSortChange).not.toHaveBeenCalled();
    });
  });

  describe('when filters and sorting are both enabled on columns', () => {
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

    it('should not trigger onSortChange when a filter value is selected', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      // Act
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
      const activeCheckbox = screen.getByLabelText('Active');
      await user.click(activeCheckbox);

      // Assert
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('should not trigger onSortChange when a filter value is deselected', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      // Act
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

      await openStatusFilterDropdown(user);
      const activeCheckbox = screen.getByLabelText('Active');
      await user.click(activeCheckbox);

      // Assert
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('should not trigger onSortChange when the filter button is clicked on a sortable column', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      // Act
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

      const filterButton = getFilterButton('Status');
      await user.click(filterButton);

      // Assert
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('should not trigger onFilterChange when the column header is clicked to sort', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      // Act
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

      const statusHeader = screen.getByText('Status');
      await user.click(statusHeader);

      // Assert
      expect(onSortChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).toHaveBeenCalledWith({ columnId: 'status', direction: 'asc' });
      expect(onFilterChange).not.toHaveBeenCalled();
    });

    it('should not trigger onSortChange when Select all is clicked in the filter dropdown', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      // Act
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

      // Assert
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('should not trigger onSortChange when Clear all is clicked in the filter dropdown', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();
      const onFilterChange = vi.fn();

      // Act
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

      // Assert
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).not.toHaveBeenCalled();
    });
  });

  describe('when filtering', () => {
    const filterProps: { filterState: FilterState; onFilterChange: ReturnType<typeof vi.fn> } = {
      filterState: [],
      onFilterChange: vi.fn(),
    };

    it('should show the filter button for filterable columns', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps(filterProps)} />);

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');
      // Assert
      expect(statusHeader).toBeInTheDocument();

      const filterButton = getFilterButton('Status');
      expect(filterButton).toBeInTheDocument();
    });

    it('should open the filter dropdown when the filter button is clicked', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);
      // Assert
      expect(within(dropdown).getByText('Active')).toBeInTheDocument();
      expect(within(dropdown).getByText('Inactive')).toBeInTheDocument();
    });

    it('should show filter values in the dropdown', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);
      // Assert
      expect(within(dropdown).getByText('Active')).toBeInTheDocument();
      expect(within(dropdown).getByText('Inactive')).toBeInTheDocument();
    });

    it('should call onFilterChange when a filter value is selected', async () => {
      // Arrange
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      // Act
      render(<DataTable {...createDefaultProps({ ...filterProps, onFilterChange })} />);

      await openStatusFilterDropdown(user);
      const activeCheckbox = screen.getByLabelText('Active');
      await user.click(activeCheckbox);

      // Assert
      expect(onFilterChange).toHaveBeenCalledTimes(1);
      const filterArg: FilterState = onFilterChange.mock.calls[0][0];
      expect(filterArg).toContainEqual({
        columnId: 'status',
        values: expect.arrayContaining(['Active']),
      });
    });

    it('should expose a search input in the filter dropdown', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(filterProps)} />);

      await openStatusFilterDropdown(user);

      const searchInput = screen.getByRole('searchbox') ?? screen.getByPlaceholderText(/search/i);
      // Assert
      expect(searchInput).toBeInTheDocument();
    });

    it('should render the filter dropdown in a portal to escape table overflow', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);
      const table = screen.getByRole('table');

      // Assert
      expect(table.contains(dropdown)).toBe(false);
    });

    it('should keep the search input fixed at the top while the filter list scrolls', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(filterProps)} />);

      await openStatusFilterDropdown(user);

      const searchInput = screen.getByRole('searchbox');
      const filterOptions = screen.getByTestId('filter-options');

      // Assert
      expect(filterOptions.contains(searchInput)).toBe(false);
      expect(filterOptions).toHaveClass(styles['filter-options']);
    });

    it('should use a scrollable container in the filter list for many items', async () => {
      // Arrange
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

      // Act
      render(
        <DataTable
          {...createDefaultProps({
            columns: columnsWithManyFilters,
            ...filterProps,
          })}
        />
      );

      const dropdown = await openStatusFilterDropdown(user);

      // Assert
      expect(dropdown).toHaveClass(styles['filter-options']);
    });

    it('should show the "Select all" button when no filters are selected', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(filterProps)} />);

      await openStatusFilterDropdown(user);

      // Assert
      expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /clear all/i })).not.toBeInTheDocument();
    });

    it('should select all filter values when "Select all" is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      // Act
      render(<DataTable {...createDefaultProps({ ...filterProps, onFilterChange })} />);

      await openStatusFilterDropdown(user);

      const selectAllButton = screen.getByRole('button', { name: /select all/i });
      await user.click(selectAllButton);

      // Assert
      expect(onFilterChange).toHaveBeenCalledWith([
        { columnId: 'status', values: ['Active', 'Inactive'] },
      ]);
    });

    it('should show the "Clear all" button when filters are selected', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(
        <DataTable
          {...createDefaultProps({
            filterState: [{ columnId: 'status', values: ['Active'] }],
            onFilterChange: vi.fn(),
          })}
        />
      );

      await openStatusFilterDropdown(user);

      // Assert
      expect(screen.getByRole('button', { name: /clear all/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /select all/i })).not.toBeInTheDocument();
    });

    it('should clear all filter values when "Clear all" is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      // Act
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

      // Assert
      expect(onFilterChange).toHaveBeenCalledWith([]);
    });

    describe('when the filterSelectAll column option is set', () => {
      const columnsWithSelectAllDisabled: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name' },
        {
          id: 'status',
          header: 'Status',
          accessorKey: 'status',
          filterable: true,
          filterValues: ['Active', 'Inactive'],
          filterSelectAll: false,
        },
      ];

      it('should hide the "Select all" button when filterSelectAll is false', async () => {
        // Arrange
        const user = userEvent.setup();

        // Act
        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllDisabled,
              filterState: [],
              onFilterChange: vi.fn(),
            })}
          />
        );

        await openStatusFilterDropdown(user);

        // Assert
        expect(screen.queryByRole('button', { name: /select all/i })).not.toBeInTheDocument();
      });

      it('should show a static disabled "Clear all" button when filterSelectAll is false and nothing is selected', async () => {
        // Arrange
        const user = userEvent.setup();

        // Act
        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllDisabled,
              filterState: [],
              onFilterChange: vi.fn(),
            })}
          />
        );

        await openStatusFilterDropdown(user);

        const clearAllButton = screen.getByRole('button', { name: /clear all/i });
        // Assert
        expect(clearAllButton).toBeInTheDocument();
        expect(clearAllButton).toBeDisabled();
      });

      it('should enable the "Clear all" button when filterSelectAll is false and there are selections', async () => {
        // Arrange
        const user = userEvent.setup();

        // Act
        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllDisabled,
              filterState: [{ columnId: 'status', values: ['Active'] }],
              onFilterChange: vi.fn(),
            })}
          />
        );

        await openStatusFilterDropdown(user);

        const clearAllButton = screen.getByRole('button', { name: /clear all/i });
        // Assert
        expect(clearAllButton).toBeInTheDocument();
        expect(clearAllButton).not.toBeDisabled();
      });

      it('should clear selections when "Clear all" is clicked and filterSelectAll is false', async () => {
        // Arrange
        const user = userEvent.setup();
        const onFilterChange = vi.fn();

        // Act
        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllDisabled,
              filterState: [{ columnId: 'status', values: ['Active', 'Inactive'] }],
              onFilterChange,
            })}
          />
        );

        await openStatusFilterDropdown(user);

        const clearAllButton = screen.getByRole('button', { name: /clear all/i });
        await user.click(clearAllButton);

        // Assert
        expect(onFilterChange).toHaveBeenCalledWith([]);
      });

      it('should show the "Select all" button by default when filterSelectAll is not specified', async () => {
        // Arrange
        const user = userEvent.setup();

        // Act
        render(
          <DataTable
            {...createDefaultProps({
              filterState: [],
              onFilterChange: vi.fn(),
            })}
          />
        );

        await openStatusFilterDropdown(user);

        // Assert
        expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
      });

      it('should show the "Select all" button when filterSelectAll is explicitly true', async () => {
        // Arrange
        const user = userEvent.setup();

        const columnsWithSelectAllEnabled: DataTableColumn<TestData>[] = [
          { id: 'name', header: 'Name', accessorKey: 'name' },
          {
            id: 'status',
            header: 'Status',
            accessorKey: 'status',
            filterable: true,
            filterValues: ['Active', 'Inactive'],
            filterSelectAll: true,
          },
        ];

        // Act
        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllEnabled,
              filterState: [],
              onFilterChange: vi.fn(),
            })}
          />
        );

        await openStatusFilterDropdown(user);

        // Assert
        expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
      });
    });
  });

  describe('when paginating', () => {
    it('should show Page X of Y text', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            page: 1,
            pageSize: 10,
            totalCount: 25,
          })}
        />
      );

      // Assert
      expect(screen.getByText(/page 1 of 3/i)).toBeInTheDocument();
    });

    it('should call onPageChange when the next button is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onPageChange = vi.fn();

      // Act
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

      // Assert
      expect(onPageChange).toHaveBeenCalledTimes(1);
      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('should call onPageChange when the previous button is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onPageChange = vi.fn();

      // Act
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

      // Assert
      expect(onPageChange).toHaveBeenCalledTimes(1);
      expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it('should disable the previous button on the first page', () => {
      // Arrange
      // Act
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
      // Assert
      expect(prevButton).toBeDisabled();
    });

    it('should disable the next button on the last page', () => {
      // Arrange
      // Act
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
      // Assert
      expect(nextButton).toBeDisabled();
    });

    it('should expose a proper aria-label on pagination', () => {
      // Arrange
      // Act
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
      // Assert
      expect(paginationNav).toBeInTheDocument();
    });
  });

  describe('when asserting accessibility', () => {
    it('should use native table semantics', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps()} />);

      const table = screen.getByRole('table');
      // Assert
      expect(table).toBeInTheDocument();
    });

    it('should expose aria-sort on sortable headers', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'asc' },
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      // Assert
      expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
    });

    it('should set aria-sort to descending when sorted descending', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            sortState: { columnId: 'name', direction: 'desc' },
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      // Assert
      expect(nameHeader).toHaveAttribute('aria-sort', 'descending');
    });

    it('should set aria-sort to none on sortable columns that are not sorted', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            sortState: null,
            onSortChange: vi.fn(),
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      // Assert
      expect(nameHeader).toHaveAttribute('aria-sort', 'none');
    });

    it('should expose aria-labels on selection checkboxes', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            rowInteraction: ROW_INTERACTION.SELECTION,
            selectedRowIds: new Set<string>(),
            onSelectionChange: vi.fn(),
          })}
        />
      );

      // Assert
      expect(screen.getByLabelText(/select all/i)).toBeInTheDocument();
      expect(screen.getAllByLabelText(/select row/i).length).toBeGreaterThanOrEqual(2);
    });

    it('should expose an accessible name on filter buttons', async () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            filterState: [],
            onFilterChange: vi.fn(),
          })}
        />
      );

      const filterButton = getFilterButton('Status');
      // Assert
      expect(filterButton).toHaveAccessibleName();
    });

    it('should expose navigation role and Pagination aria-label on the pagination nav', () => {
      // Arrange
      // Act
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
      // Assert
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveAttribute('aria-label', expect.stringMatching(/pagination/i));
    });

    it('should set aria-busy to false on the table when not loading', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps({ loading: false })} />);

      const table = screen.getByRole('table');
      // Assert
      expect(table).toHaveAttribute('aria-busy', 'false');
    });
  });

  describe('when columns use extended configuration', () => {
    it('should apply column width when provided', () => {
      // Arrange
      const columnsWithWidth: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name', width: '200px' },
        { id: 'email', header: 'Email', accessorKey: 'email' },
      ];

      // Act
      render(<DataTable {...createDefaultProps({ columns: columnsWithWidth })} />);

      const nameHeader = screen.getByText('Name').closest('th, [role="columnheader"]');
      // Assert
      expect(nameHeader).toHaveStyle({ width: '200px' });
    });

    it('should apply text alignment when provided', () => {
      // Arrange
      const columnsWithAlign: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name', align: 'center' },
        { id: 'email', header: 'Email', accessorKey: 'email', align: 'right' },
      ];

      // Act
      render(<DataTable {...createDefaultProps({ columns: columnsWithAlign })} />);

      const nameCells = screen.getAllByText(/John Doe|Jane Smith/);
      nameCells.forEach((cell) => {
        const td = cell.closest('td, [role="gridcell"]');
      // Assert
        expect(td).toHaveClass(styles['align-center']);
      });
    });

    it('should use accessorFn when provided instead of accessorKey', () => {
      // Arrange
      const columnsWithAccessorFn: DataTableColumn<TestData>[] = [
        {
          id: 'fullInfo',
          header: 'Full Info',
          accessorFn: (row) => `${row.name} (${row.email})`,
        },
      ];

      // Act
      render(<DataTable {...createDefaultProps({ columns: columnsWithAccessorFn })} />);

      // Assert
      expect(screen.getByText('John Doe (john@example.com)')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith (jane@example.com)')).toBeInTheDocument();
    });
  });

  describe('when handling edge cases', () => {
    it('should handle a single page of data without enabling pagination navigation', () => {
      // Arrange
      // Act
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

      // Assert
      expect(prevButton).toBeDisabled();
      expect(nextButton).toBeDisabled();
    });

    it('should apply the custom className prop', () => {
      // Arrange
      // Act
      const { container } = render(
        <DataTable {...createDefaultProps({ className: 'custom-table-class' })} />
      );

      const tableContainer = container.firstChild;
      // Assert
      expect(tableContainer).toHaveClass('custom-table-class');
    });

    it('should accept a ReactNode as column header', () => {
      // Arrange
      const columnsWithReactNodeHeader: DataTableColumn<TestData>[] = [
        {
          id: 'name',
          header: <span data-testid="custom-header">Custom Name Header</span>,
          accessorKey: 'name',
        },
      ];

      // Act
      render(<DataTable {...createDefaultProps({ columns: columnsWithReactNodeHeader })} />);

      // Assert
      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
      expect(screen.getByText('Custom Name Header')).toBeInTheDocument();
    });

    it('should deselect a row when clicking an already selected row checkbox', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      // Act
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

      // Assert
      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet.has('1')).toBe(false);
    });

    it('should deselect all rows when the header checkbox is clicked while all rows are selected', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSelectionChange = vi.fn();

      // Act
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

      // Assert
      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet.size).toBe(0);
    });
  });

  describe('when color configuration is applied', () => {
    it('should apply custom header background color when provided', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { headerBackground: '#ff0000' },
          })}
        />
      );

      const headerRow = screen.getByRole('row', { name: /name/i });
      // Assert
      expect(headerRow).toHaveStyle({ backgroundColor: '#ff0000' });
    });

    it('should apply custom header text color when provided', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { headerText: '#00ff00' },
          })}
        />
      );

      const nameHeader = screen.getByText('Name').closest('th');
      // Assert
      expect(nameHeader).toHaveStyle({ color: '#00ff00' });
    });

    it('should apply custom row background color when provided', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { rowBackground: '#0000ff' },
          })}
        />
      );

      const johnRow = screen.getByText('John Doe').closest('tr');
      // Assert
      expect(johnRow).toHaveStyle({ backgroundColor: '#0000ff' });
    });

    it('should apply custom border color when provided', () => {
      // Arrange
      // Act
      const { container } = render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { borderColor: '#purple' },
          })}
        />
      );

      const tableContainer = container.firstChild;
      // Assert
      expect(tableContainer).toHaveStyle({ borderColor: '#purple' });
    });

    it('should apply custom pagination background color when provided', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { paginationBackground: '#cccccc' },
          })}
        />
      );

      const pagination = screen.getByRole('navigation', { name: /pagination/i });
      // Assert
      expect(pagination).toHaveStyle({ backgroundColor: '#cccccc' });
    });

    it('should apply custom pagination text color when provided', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { paginationText: '#333333' },
          })}
        />
      );

      const pagination = screen.getByRole('navigation', { name: /pagination/i });
      // Assert
      expect(pagination).toHaveStyle({ color: '#333333' });
    });

    it('should apply custom selected row background color when a row is selected', () => {
      // Arrange
      // Act
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
      // Assert
      expect(johnRow).toHaveStyle({ backgroundColor: '#ffff00' });
    });

    it('should not apply selected row background to unselected rows', () => {
      // Arrange
      // Act
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
      // Assert
      expect(janeRow).toHaveStyle({ backgroundColor: '#ffffff' });
    });

    it('should apply multiple color configurations together', () => {
      // Arrange
      // Act
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
      // Assert
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

    it('should apply default color config when colorConfig is not provided', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps()} />);

      // Header should have default black background
      const headerRow = screen.getByRole('row', { name: /name/i });
      // Assert
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

    it('should apply default border color when colorConfig is not provided', () => {
      // Arrange
      // Act
      const { container } = render(<DataTable {...createDefaultProps()} />);

      const tableContainer = container.firstChild;
      // Assert
      expect(tableContainer).toHaveStyle({ borderColor: '#cbd5e1' });
    });

    it('should apply default selected row background when colorConfig is not provided', () => {
      // Arrange
      // Act
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
      // Assert
      expect(johnRow).toHaveStyle({ backgroundColor: '#fef9c3' });
    });

    it('should apply default active icon colors when colorConfig is not provided', () => {
      // Arrange
      // Act
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
      // Assert
      expect(sortIndicator).toHaveStyle({ backgroundColor: '#ffde13' });
      // Default black foreground
      expect(sortIcon).toHaveStyle({ color: '#000000' });
    });

    it('should override specific default colors when partial colorConfig is provided', () => {
      // Arrange
      // Act
      render(
        <DataTable
          {...createDefaultProps({
            colorConfig: { headerBackground: '#ff0000' },
          })}
        />
      );

      // Header has custom color (overridden)
      const headerRow = screen.getByRole('row', { name: /name/i });
      // Assert
      expect(headerRow).toHaveStyle({ backgroundColor: '#ff0000' });

      // Row should use default white background (not overridden)
      const johnRow = screen.getByText('John Doe').closest('tr');
      expect(johnRow).toHaveStyle({ backgroundColor: '#ffffff' });
    });

    it('should apply custom active background color to the sort icon when sorted', () => {
      // Arrange
      // Act
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
      // Assert
      expect(sortIndicator).toHaveStyle({ backgroundColor: '#0000ff' });
    });

    it('should apply custom active foreground color to the sort icon when sorted', () => {
      // Arrange
      // Act
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
      // Assert
      expect(sortIcon).toHaveStyle({ color: '#ffffff' });
    });

    it('should apply custom active background color to the filter icon when filters are applied', () => {
      // Arrange

      // Act
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
      // Assert
      expect(filterButton).toHaveStyle({ backgroundColor: '#ff00ff' });
    });

    it('should apply custom active foreground color to the filter icon when filters are applied', () => {
      // Arrange
      // Act
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
      // Assert
      expect(filterIcon).toHaveStyle({ color: '#00ffff' });
    });

    it('should apply custom active colors to the header checkbox when checked', () => {
      // Arrange
      // Act
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
      // Assert
      expect(headerCheckbox).toHaveStyle({ backgroundColor: '#123456' });
      expect(headerCheckbox).toHaveStyle({ color: '#fedcba' });
    });

    it('should apply custom active colors to the row checkbox when checked', () => {
      // Arrange
      // Act
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
      // Assert
      expect(checkedCheckbox).toHaveStyle({ backgroundColor: '#abcdef' });
      expect(checkedCheckbox).toHaveStyle({ color: '#654321' });
    });

    it('should apply custom active colors to filter dropdown checkboxes when checked', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
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
      // Assert
      expect(activeCheckbox.checked).toBe(true);
      expect(activeCheckbox).toHaveStyle({ backgroundColor: '#112233' });
      expect(activeCheckbox).toHaveStyle({ color: '#445566' });
    });

    it('should not apply active colors to unchecked checkboxes', () => {
      // Arrange
      // Act
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
      // Assert
      expect(uncheckedCheckbox?.getAttribute('style')).toBeNull();
    });
  });

  describe('when rows are expandable', () => {
    const expandableProps = {
      rowInteraction: ROW_INTERACTION.EXPANDABLE,
      expandedRowContent: MockExpandedRowContent,
      getExpandedRowData: vi.fn().mockResolvedValue({ details: 'test', metadata: { count: 1 } }),
    };

    it('should render a chevron icon in the left column when rowInteraction is EXPANDABLE', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      // Assert
      expect(chevronButtons).toHaveLength(2);
    });

    it('should point the chevron right in the collapsed state by default', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      chevronButtons.forEach((button) => {
      // Assert
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('should expand a row and point the chevron down when the row is clicked', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // Assert
      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'true');
    });

    it('should render the expanded content component when a row is expanded', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      expect(screen.queryByTestId('expanded-content')).not.toBeInTheDocument();

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });
      // Assert
    });

    it('should call getExpandedRowData with the row and rowId when a row is expanded', async () => {
      // Arrange
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockResolvedValue({ details: 'Test', metadata: { count: 1 } });

      // Act
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

      // Assert
      expect(getExpandedRowData).toHaveBeenCalledTimes(1);
      expect(getExpandedRowData).toHaveBeenCalledWith(mockData[0], '1');
    });

    it('should pass loading true and null data to expandedRowContent initially', async () => {
      // Arrange
      const user = userEvent.setup();
      const { promise, resolve } = createDeferredPromise<ExpandedRowData>();
      const getExpandedRowData = vi.fn().mockReturnValue(promise);

      // Act
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
      // Assert
    });

    it('should pass loading false and resolved data to expandedRowContent after the Promise resolves', async () => {
      // Arrange
      const user = userEvent.setup();
      const { promise, resolve } = createDeferredPromise<ExpandedRowData>();
      const getExpandedRowData = vi.fn().mockReturnValue(promise);

      // Act
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
      // Assert
    });

    it('should collapse a row when clicking an expanded row', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
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
      // Assert
    });

    it('should collapse the current expanded row and expand another when a different row is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockImplementation((row: TestData) =>
        Promise.resolve({ details: `Details for ${row.name}`, metadata: { count: 1 } })
      );

      // Act
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
      // Assert
    });

    it('should allow only one expanded row at a time', async () => {
      // Arrange
      const user = userEvent.setup();
      const getExpandedRowData = vi.fn().mockImplementation((row: TestData) =>
        Promise.resolve({ details: `Details for ${row.name}`, metadata: { count: 1 } })
      );

      // Act
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
      // Assert
    });

    it('should expose proper aria attributes on expanded content', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // Assert
      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      const expandedContent = screen.getByTestId('expanded-content');
      const expandedRow = expandedContent.closest('tr, [role="row"]');

      expect(expandedRow).toBeInTheDocument();
      expect(chevronButtons[0]).toHaveAttribute('aria-controls');
    });

    it('should reflect expanded state in the chevron aria-expanded attribute', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
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
      // Assert
    });

    it('should span expanded content across the full table width', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      // Assert
      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      const expandedContent = screen.getByTestId('expanded-content');
      const expandedCell = expandedContent.closest('td, [role="gridcell"]');

      expect(expandedCell).toHaveAttribute('colspan');
    });

    it('should not render checkboxes when rowInteraction is EXPANDABLE', () => {
      // Arrange
      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const checkboxes = screen.queryAllByRole('checkbox');
      // Assert
      expect(checkboxes).toHaveLength(0);
    });

    it('should not invoke onRowClick for row body clicks when rowInteraction is EXPANDABLE', async () => {
      // Arrange
      const user = userEvent.setup();
      const onRowClick = vi.fn();

      // Act
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

      // Assert
      expect(onRowClick).not.toHaveBeenCalled();
    });

    it('should pass the correct rowId to expandedRowContent', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[1]);

      // Assert
      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-id')).toHaveTextContent('2');
      });
    });

    it('should pass the correct row data to expandedRowContent', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[1]);

      // Assert
      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('Jane Smith');
      });
    });

    it('should apply the expand-button-open accent style when a row is expanded', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      expect(chevronButtons[0]).not.toHaveClass(styles['expand-button-open']);

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveClass(styles['expand-button-open']);
      });
      // Assert
    });

    it('should remove the expand-button-open accent style when a row is collapsed', async () => {
      // Arrange
      const user = userEvent.setup();

      // Act
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveClass(styles['expand-button-open']);
      });

      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).not.toHaveClass(styles['expand-button-open']);
      });
      // Assert
    });
  });
});
