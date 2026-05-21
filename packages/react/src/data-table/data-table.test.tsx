import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, waitFor } from '#test-utils';
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

describe('DataTable', () => {
  describe('when rendering with default props', () => {
    it('should render the table with columns and data', () => {
      // Arrange
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
      render(<DataTable {...createDefaultProps()} />);


      // Assert
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Status')).toBeInTheDocument();
    });

    it('should render custom cell component when provided', () => {
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

      render(<DataTable {...createDefaultProps({ columns: columnsWithCustomCell })} />);

      const customCells = screen.getAllByTestId('custom-cell');

      // Assert
      expect(customCells).toHaveLength(2);
      expect(customCells[0]).toHaveTextContent('John Doe - 1');
      expect(customCells[1]).toHaveTextContent('Jane Smith - 2');
    });
  });

  describe('when loading is true', () => {
    it('should render skeleton rows when loading is true', () => {
      // Arrange
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      const table = screen.getByRole('table');

      // Assert
      expect(table).toBeInTheDocument();

      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    });

    it('should set aria-busy to true on the table when loading', () => {
      // Arrange
      render(<DataTable {...createDefaultProps({ loading: true })} />);

      const table = screen.getByRole('table');

      // Assert
      expect(table).toHaveAttribute('aria-busy', 'true');
    });

    it('should not render data rows when loading', () => {
      // Arrange
      render(<DataTable {...createDefaultProps({ loading: true })} />);


      // Assert
      expect(screen.queryByText('john@example.com')).not.toBeInTheDocument();
      expect(screen.queryByText('jane@example.com')).not.toBeInTheDocument();
    });
  });

  describe('when data is empty', () => {
    it('should render empty state when data is empty array', () => {
      // Arrange
      render(<DataTable {...createDefaultProps({ data: [], totalCount: 0 })} />);


      // Assert
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    });

    it('should render custom emptyState prop content when provided', () => {
      // Arrange
      const customEmptyState = <div data-testid="custom-empty">No data available</div>;

      render(
        <DataTable {...createDefaultProps({ data: [], totalCount: 0, emptyState: customEmptyState })} />
      );


      // Assert
      expect(screen.getByTestId('custom-empty')).toBeInTheDocument();
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });
  });

  describe('when row interaction is NONE', () => {
    it('should not make rows clickable by default', () => {
      // Arrange
      const { container } = render(<DataTable {...createDefaultProps()} />);

      const rows = container.querySelectorAll('tbody tr, [role="row"]');

      // Assert
      rows.forEach((row) => {
        expect(row).not.toHaveClass('cursor-pointer');
      });
    });

    it('should not call onRowClick when row is clicked with NONE interaction', async () => {
      // Arrange
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

      // Act
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

    it('should render selection checkboxes in header and each row', () => {
      // Arrange
      render(<DataTable {...createDefaultProps(selectionProps)} />);

      const checkboxes = screen.getAllByRole('checkbox');

      // Assert
      expect(checkboxes.length).toBeGreaterThanOrEqual(3);
    });

    it('should call onSelectionChange with new Set when row checkbox is clicked', async () => {
      // Arrange
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

      // Act
      await user.click(checkboxes[1]);


      // Assert
      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet).toBeInstanceOf(Set);
      expect(calledWithSet.has('1')).toBe(true);
    });

    it('should select all rows when header checkbox is clicked', async () => {
      // Arrange
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

      // Act
      await user.click(headerCheckbox);


      // Assert
      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet).toBeInstanceOf(Set);
      expect(calledWithSet.size).toBe(2);
      expect(calledWithSet.has('1')).toBe(true);
      expect(calledWithSet.has('2')).toBe(true);
    });

    it('should have proper aria-labels on checkboxes', () => {
      // Arrange
      render(<DataTable {...createDefaultProps(selectionProps)} />);

      const headerCheckbox = screen.getByLabelText(/select all/i);

      // Assert
      expect(headerCheckbox).toBeInTheDocument();

      const rowCheckboxes = screen.getAllByLabelText(/select row/i);
      expect(rowCheckboxes.length).toBeGreaterThanOrEqual(2);
    });

    it('should show checked state for selected rows', () => {
      // Arrange
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
    it('should add cursor-pointer class to rows', () => {
      // Arrange
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
      expect(johnRow).toHaveClass('cursor-pointer');
    });

    it('should call onRowClick with row data when row is clicked', async () => {
      // Arrange
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

      // Act
      if (johnRow) {
        await user.click(johnRow);
      }

      // Assert
      expect(onRowClick).toHaveBeenCalledTimes(1);
      expect(onRowClick).toHaveBeenCalledWith(mockData[0]);
    });
  });

  describe('when sorting columns', () => {
    const sortProps = {
      sortState: null as { columnId: string; direction: 'asc' | 'desc' } | null,
      onSortChange: vi.fn(),
    };

    it('should show sort indicator for sortable columns', () => {
      // Arrange
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

    it('should call onSortChange when sortable column header is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      render(<DataTable {...createDefaultProps({ ...sortProps, onSortChange })} />);

      const nameHeader = screen.getByText('Name');

      // Act
      await user.click(nameHeader);


      // Assert
      expect(onSortChange).toHaveBeenCalledTimes(1);
      expect(onSortChange).toHaveBeenCalledWith({ columnId: 'name', direction: 'asc' });
    });

    it('should toggle sort direction on subsequent clicks (asc -> desc -> null)', async () => {
      // Arrange
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


      // Act
      await user.click(nameHeader);

      // Assert
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

    it('should not have sort indicator or trigger sort on non-sortable columns', async () => {
      // Arrange
      const user = userEvent.setup();
      const onSortChange = vi.fn();

      render(<DataTable {...createDefaultProps({ ...sortProps, onSortChange })} />);

      const emailHeader = screen.getByText('Email');

      // Act
      await user.click(emailHeader);


      // Assert
      expect(onSortChange).not.toHaveBeenCalled();
    });
  });

  describe('when filtering and sorting independently', () => {
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

    it('should not trigger onSortChange when a filter value is deselected', async () => {
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

    it('should not trigger onSortChange when the filter button is clicked on a sortable column', async () => {
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

      const filterButton = getFilterButton('Status');

      // Act
      await user.click(filterButton);


      // Assert
      expect(onSortChange).not.toHaveBeenCalled();
    });

    it('should not trigger onFilterChange when the column header is clicked to sort', async () => {
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

      const statusHeader = screen.getByText('Status');

      // Act
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

    it('should not trigger onSortChange when Clear all is clicked in the filter dropdown', async () => {
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

  describe('when filtering columns', () => {
    const filterProps: { filterState: FilterState; onFilterChange: ReturnType<typeof vi.fn> } = {
      filterState: [],
      onFilterChange: vi.fn(),
    };

    it('should show filter button for filterable columns', () => {
      // Arrange
      render(<DataTable {...createDefaultProps(filterProps)} />);

      const statusHeader = screen.getByText('Status').closest('th, [role="columnheader"]');

      // Assert
      expect(statusHeader).toBeInTheDocument();

      const filterButton = getFilterButton('Status');
      expect(filterButton).toBeInTheDocument();
    });

    it('should open filter dropdown when filter button is clicked', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);

      // Assert
      expect(within(dropdown).getByText('Active')).toBeInTheDocument();
      expect(within(dropdown).getByText('Inactive')).toBeInTheDocument();
    });

    it('should show filter values in dropdown', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);

      // Assert
      expect(within(dropdown).getByText('Active')).toBeInTheDocument();
      expect(within(dropdown).getByText('Inactive')).toBeInTheDocument();
    });

    it('should call onFilterChange when filter value is selected', async () => {
      // Arrange
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      render(<DataTable {...createDefaultProps({ ...filterProps, onFilterChange })} />);


      // Act
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

    it('should show search input in filter dropdown', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);


      // Act
      await openStatusFilterDropdown(user);

      const searchInput = screen.getByRole('searchbox') ?? screen.getByPlaceholderText(/search/i);

      // Assert
      expect(searchInput).toBeInTheDocument();
    });

    it('should render filter dropdown in a portal to escape table overflow', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);

      const dropdown = await openStatusFilterDropdown(user);
      const table = screen.getByRole('table');


      // Assert
      expect(table.contains(dropdown)).toBe(false);
    });

    it('should keep search input fixed at top while filter list scrolls', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);


      // Act
      await openStatusFilterDropdown(user);

      const searchInput = screen.getByRole('searchbox');
      const filterOptions = screen.getByTestId('filter-options');


      // Assert
      expect(filterOptions.contains(searchInput)).toBe(false);
      expect(filterOptions).toHaveClass('overflow-y-auto');
    });

    it('should have scrollable container for filter list with many items', async () => {
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
      expect(dropdown).toHaveClass('overflow-y-auto');
      expect(dropdown).toHaveClass('flex-1');
      expect(dropdown).toHaveClass('min-h-0');
    });

    it('should show Select all button when no filters are selected', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(filterProps)} />);


      // Act
      await openStatusFilterDropdown(user);


      // Assert
      expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /clear all/i })).not.toBeInTheDocument();
    });

    it('should select all filter values when Select all is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onFilterChange = vi.fn();

      render(<DataTable {...createDefaultProps({ ...filterProps, onFilterChange })} />);


      // Act
      await openStatusFilterDropdown(user);

      const selectAllButton = screen.getByRole('button', { name: /select all/i });
      await user.click(selectAllButton);


      // Assert
      expect(onFilterChange).toHaveBeenCalledWith([
        { columnId: 'status', values: ['Active', 'Inactive'] },
      ]);
    });

    it('should show Clear all button when filters are selected', async () => {
      // Arrange
      const user = userEvent.setup();

      render(
        <DataTable
          {...createDefaultProps({
            filterState: [{ columnId: 'status', values: ['Active'] }],
            onFilterChange: vi.fn(),
          })}
        />
      );


      // Act
      await openStatusFilterDropdown(user);


      // Assert
      expect(screen.getByRole('button', { name: /clear all/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /select all/i })).not.toBeInTheDocument();
    });

    it('should clear all filter values when Clear all is clicked', async () => {
      // Arrange
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


      // Act
      await openStatusFilterDropdown(user);

      const clearAllButton = screen.getByRole('button', { name: /clear all/i });
      await user.click(clearAllButton);


      // Assert
      expect(onFilterChange).toHaveBeenCalledWith([]);
    });

    describe('when filterSelectAll is configured', () => {
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

      it('should hide Select all button when filterSelectAll is false', async () => {
        // Arrange
        const user = userEvent.setup();

        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllDisabled,
              filterState: [],
              onFilterChange: vi.fn(),
            })}
          />
        );

        // Act
        await openStatusFilterDropdown(user);

        // Assert
        expect(screen.queryByRole('button', { name: /select all/i })).not.toBeInTheDocument();
      });

      it('should show static disabled Clear all button when filterSelectAll is false and no selections', async () => {
        // Arrange
        const user = userEvent.setup();

        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllDisabled,
              filterState: [],
              onFilterChange: vi.fn(),
            })}
          />
        );

        // Act
        await openStatusFilterDropdown(user);

        const clearAllButton = screen.getByRole('button', { name: /clear all/i });

        // Assert
        expect(clearAllButton).toBeInTheDocument();
        expect(clearAllButton).toBeDisabled();
      });

      it('should enable Clear all button when filterSelectAll is false and has selections', async () => {
        // Arrange
        const user = userEvent.setup();

        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllDisabled,
              filterState: [{ columnId: 'status', values: ['Active'] }],
              onFilterChange: vi.fn(),
            })}
          />
        );

        // Act
        await openStatusFilterDropdown(user);

        const clearAllButton = screen.getByRole('button', { name: /clear all/i });

        // Assert
        expect(clearAllButton).toBeInTheDocument();
        expect(clearAllButton).not.toBeDisabled();
      });

      it('should clear selections when Clear all is clicked and filterSelectAll is false', async () => {
        // Arrange
        const user = userEvent.setup();
        const onFilterChange = vi.fn();

        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllDisabled,
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
        expect(onFilterChange).toHaveBeenCalledWith([]);
      });

      it('should show Select all button by default when filterSelectAll is not specified', async () => {
        // Arrange
        const user = userEvent.setup();

        render(
          <DataTable
            {...createDefaultProps({
              filterState: [],
              onFilterChange: vi.fn(),
            })}
          />
        );

        // Act
        await openStatusFilterDropdown(user);

        // Assert
        expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
      });

      it('should show Select all button when filterSelectAll is explicitly true', async () => {
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

        render(
          <DataTable
            {...createDefaultProps({
              columns: columnsWithSelectAllEnabled,
              filterState: [],
              onFilterChange: vi.fn(),
            })}
          />
        );

        // Act
        await openStatusFilterDropdown(user);

        // Assert
        expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument();
      });
    });
  });

  describe('when paginating', () => {
    it('should show Page X of Y text', () => {
      // Arrange
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

    it('should call onPageChange when next button is clicked', async () => {
      // Arrange
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

      // Act
      await user.click(nextButton);


      // Assert
      expect(onPageChange).toHaveBeenCalledTimes(1);
      expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('should call onPageChange when previous button is clicked', async () => {
      // Arrange
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

      // Act
      await user.click(prevButton);


      // Assert
      expect(onPageChange).toHaveBeenCalledTimes(1);
      expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it('should disable previous button on first page', () => {
      // Arrange
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

    it('should disable next button on last page', () => {
      // Arrange
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

    it('should have proper aria-label on pagination', () => {
      // Arrange
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

  describe('when checking accessibility', () => {
    it('should use native table semantics', () => {
      // Arrange
      render(<DataTable {...createDefaultProps()} />);

      const table = screen.getByRole('table');

      // Assert
      expect(table).toBeInTheDocument();
    });

    it('should have aria-sort attribute on sortable headers', () => {
      // Arrange
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

    it('should set aria-sort to descending when sorted desc', () => {
      // Arrange
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

    it('should set aria-sort to none on non-sorted sortable columns', () => {
      // Arrange
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

    it('should have aria-labels on selection checkboxes', () => {
      // Arrange
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

    it('should have aria-labels on filter buttons', async () => {
      // Arrange
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

    it('should have role navigation and aria-label Pagination on pagination nav', () => {
      // Arrange
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

    it('should set aria-busy to false on table when not loading', () => {
      // Arrange
      render(<DataTable {...createDefaultProps({ loading: false })} />);

      const table = screen.getByRole('table');

      // Assert
      expect(table).toHaveAttribute('aria-busy', 'false');
    });
  });

  describe('when columns are configured', () => {
    it('should apply column width when provided', () => {
      // Arrange
      const columnsWithWidth: DataTableColumn<TestData>[] = [
        { id: 'name', header: 'Name', accessorKey: 'name', width: '200px' },
        { id: 'email', header: 'Email', accessorKey: 'email' },
      ];

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

      render(<DataTable {...createDefaultProps({ columns: columnsWithAlign })} />);

      const nameCells = screen.getAllByText(/John Doe|Jane Smith/);

      // Assert
      nameCells.forEach((cell) => {
        const td = cell.closest('td, [role="gridcell"]');
        expect(td).toHaveClass('text-center');
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

      render(<DataTable {...createDefaultProps({ columns: columnsWithAccessorFn })} />);


      // Assert
      expect(screen.getByText('John Doe (john@example.com)')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith (jane@example.com)')).toBeInTheDocument();
    });
  });

  describe('when handling edge cases', () => {
    it('should handle single page of data without pagination', () => {
      // Arrange
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

    it('should apply custom className prop', () => {
      // Arrange
      const { container } = render(
        <DataTable {...createDefaultProps({ className: 'custom-table-class' })} />
      );

      const tableContainer = container.firstChild;

      // Assert
      expect(tableContainer).toHaveClass('custom-table-class');
    });

    it('should render ReactNode as column header', () => {
      // Arrange
      const columnsWithReactNodeHeader: DataTableColumn<TestData>[] = [
        {
          id: 'name',
          header: <span data-testid="custom-header">Custom Name Header</span>,
          accessorKey: 'name',
        },
      ];

      render(<DataTable {...createDefaultProps({ columns: columnsWithReactNodeHeader })} />);


      // Assert
      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
      expect(screen.getByText('Custom Name Header')).toBeInTheDocument();
    });

    it('should deselect row when clicking already selected row checkbox', async () => {
      // Arrange
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

      // Act
      if (row1Checkbox) {
        await user.click(row1Checkbox);
      }

      // Assert
      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet.has('1')).toBe(false);
    });

    it('should deselect all rows when header checkbox is clicked and all rows are selected', async () => {
      // Arrange
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

      // Act
      await user.click(headerCheckbox);


      // Assert
      expect(onSelectionChange).toHaveBeenCalledTimes(1);
      const calledWithSet = onSelectionChange.mock.calls[0][0];
      expect(calledWithSet.size).toBe(0);
    });
  });

  describe('when color configuration is provided', () => {
    it('should apply custom header background color when provided', () => {
      // Arrange
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

    it('should apply custom selected row background color when row is selected', () => {
      // Arrange
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
      const { container } = render(<DataTable {...createDefaultProps()} />);

      const tableContainer = container.firstChild;

      // Assert
      expect(tableContainer).toHaveStyle({ borderColor: '#cbd5e1' });
    });

    it('should apply default selected row background when colorConfig is not provided', () => {
      // Arrange
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

    it('should apply custom active background color to sort icon when sorted', () => {
      // Arrange
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

    it('should apply custom active foreground color to sort icon when sorted', () => {
      // Arrange
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

    it('should apply custom active background color to filter icon when filters are applied', async () => {
      // Arrange
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

      // Assert
      expect(filterButton).toHaveStyle({ backgroundColor: '#ff00ff' });
    });

    it('should apply custom active foreground color to filter icon when filters are applied', () => {
      // Arrange
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

    it('should apply custom active colors to header checkbox when checked', () => {
      // Arrange
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

    it('should apply custom active colors to row checkbox when checked', () => {
      // Arrange
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


      // Act
      await openStatusFilterDropdown(user);

      const activeCheckbox = screen.getByLabelText('Active') as HTMLInputElement;

      // Assert
      expect(activeCheckbox.checked).toBe(true);
      expect(activeCheckbox).toHaveStyle({ backgroundColor: '#112233' });
      expect(activeCheckbox).toHaveStyle({ color: '#445566' });
    });

    it('should not apply active colors to unchecked checkboxes', () => {
      // Arrange
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

    it('should render chevron icon in left column when rowInteraction is EXPANDABLE', () => {
      // Arrange
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Assert
      expect(chevronButtons).toHaveLength(2);
    });

    it('should point chevron right in collapsed state by default', () => {
      // Arrange
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Assert
      chevronButtons.forEach((button) => {
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('should expand row and point chevron down when clicked', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Act
      await user.click(chevronButtons[0]);


      // Assert
      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'true');
    });

    it('should render expanded content component when row is expanded', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);


      // Assert
      expect(screen.queryByTestId('expanded-content')).not.toBeInTheDocument();

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Act
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });
    });

    it('should call getExpandedRowData with row and rowId when row is expanded', async () => {
      // Arrange
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

      // Act
      await user.click(chevronButtons[0]);


      // Assert
      expect(getExpandedRowData).toHaveBeenCalledTimes(1);
      expect(getExpandedRowData).toHaveBeenCalledWith(mockData[0], '1');
    });

    it('should pass loading true and data null to expandedRowContent initially', async () => {
      // Arrange
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

      // Act
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-loading')).toHaveTextContent('true');
      });
      expect(screen.queryByTestId('expanded-data')).not.toBeInTheDocument();

      await act(async () => {
        resolve({ details: 'Resolved data', metadata: { count: 10 } });
      });
    });

    it('should pass loading false and actual data to expandedRowContent after Promise resolves', async () => {
      // Arrange
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

      // Act
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

    it('should collapse row when expanded row is clicked', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Act
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

    it('should collapse current row and expand new row when different row is clicked', async () => {
      // Arrange
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


      // Act
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

    it('should allow only one row to be expanded at a time', async () => {
      // Arrange
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


      // Act
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

    it('should have proper aria attributes on expanded content', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Act
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      const expandedContent = screen.getByTestId('expanded-content');
      const expandedRow = expandedContent.closest('tr, [role="row"]');

      expect(expandedRow).toBeInTheDocument();
      expect(chevronButtons[0]).toHaveAttribute('aria-controls');
    });

    it('should reflect state in chevron aria-expanded attribute', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });


      // Assert
      expect(chevronButtons[0]).toHaveAttribute('aria-expanded', 'false');
      expect(chevronButtons[1]).toHaveAttribute('aria-expanded', 'false');


      // Act
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

    it('should span expanded content across full table width', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Act
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-content')).toBeInTheDocument();
      });

      const expandedContent = screen.getByTestId('expanded-content');
      const expandedCell = expandedContent.closest('td, [role="gridcell"]');

      expect(expandedCell).toHaveAttribute('colspan');
    });

    it('should not render checkboxes when rowInteraction is EXPANDABLE', () => {
      // Arrange
      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const checkboxes = screen.queryAllByRole('checkbox');

      // Assert
      expect(checkboxes).toHaveLength(0);
    });

    it('should not make rows clickable as links when rowInteraction is EXPANDABLE', async () => {
      // Arrange
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

      // Act
      await user.click(johnCell);


      // Assert
      expect(onRowClick).not.toHaveBeenCalled();
    });

    it('should pass correct rowId to expandedRowContent', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Act
      await user.click(chevronButtons[1]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-id')).toHaveTextContent('2');
      });
    });

    it('should pass correct row data to expandedRowContent', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Act
      await user.click(chevronButtons[1]);

      await waitFor(() => {
        expect(screen.getByTestId('expanded-row-name')).toHaveTextContent('Jane Smith');
      });
    });

    it('should have yellow background on expand button when row is expanded', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });


      // Assert
      expect(chevronButtons[0]).not.toHaveClass('bg-accent');


      // Act
      await user.click(chevronButtons[0]);

      await waitFor(() => {
        expect(chevronButtons[0]).toHaveClass('bg-accent');
      });
    });

    it('should remove yellow background from expand button when row is collapsed', async () => {
      // Arrange
      const user = userEvent.setup();

      render(<DataTable {...createDefaultProps(expandableProps)} />);

      const chevronButtons = screen.getAllByRole('button', { name: /expand/i });

      // Act
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
