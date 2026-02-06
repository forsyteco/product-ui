import type { ComponentType, ReactNode, CSSProperties } from 'react';

/**
 * Sorting direction type
 */
export type SortDirection = 'asc' | 'desc';

/**
 * Sort state passed to parent
 */
export type SortState = {
  columnId: string;
  direction: SortDirection;
} | null;

/**
 * Filter state for a single column
 */
export type ColumnFilterState = {
  columnId: string;
  values: string[];
};

/**
 * Filter state passed to parent
 */
export type FilterState = ColumnFilterState[];

/**
 * Color configuration for DataTable styling
 */
export type DataTableColorConfig = {
  /** Background color for the header row */
  headerBackground?: CSSProperties['backgroundColor'];
  /** Text color for header cells */
  headerText?: CSSProperties['color'];
  /** Background color for data rows */
  rowBackground?: CSSProperties['backgroundColor'];
  /** Background color for selected rows */
  selectedRowBackground?: CSSProperties['backgroundColor'];
  /** Border color for the table container and cells */
  borderColor?: CSSProperties['borderColor'];
  /** Background color for the pagination area */
  paginationBackground?: CSSProperties['backgroundColor'];
  /** Text color for pagination */
  paginationText?: CSSProperties['color'];
};

/**
 * Props passed to custom cell renderer components
 */
export type CellRendererProps<TData, TValue = unknown> = {
  /** The cell value */
  value: TValue;
  /** The entire row data */
  row: TData;
};

/**
 * Column definition for DataTable
 */
export type DataTableColumn<TData, TValue = unknown> = {
  /** Unique identifier for the column */
  id: string;
  /** Header text or custom header component */
  header: string | ReactNode;
  /** Accessor key to get value from row data */
  accessorKey?: keyof TData & string;
  /** Accessor function for computed columns */
  accessorFn?: (row: TData) => TValue;
  /** Enable sorting for this column (default: false) */
  sortable?: boolean;
  /** Enable filtering for this column (default: false) */
  filterable?: boolean;
  /** Distinct values for filter dropdown (required if filterable is true) */
  filterValues?: string[];
  /** Custom cell renderer component */
  cell?: ComponentType<CellRendererProps<TData, TValue>>;
  /** Column width (CSS value, e.g., '200px', '20%') */
  width?: string;
  /** Minimum column width */
  minWidth?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
};

/**
 * Props passed to expanded row content components
 */
export type ExpandedRowContentProps<TData, TExpandedData = unknown> = {
  /** The row data */
  row: TData;
  /** The row ID */
  rowId: string;
  /** The expanded data loaded from getExpandedRowData (null while loading) */
  data: TExpandedData | null;
  /** Whether the expanded data is currently loading */
  loading: boolean;
};

/**
 * DataTable component props
 */
export type DataTableProps<TData, TExpandedData = unknown> = Readonly<{
  /** Column definitions */
  columns: DataTableColumn<TData>[];
  /** Row data array */
  data: TData[];
  /** Unique key accessor for each row */
  getRowId: (row: TData) => string;

  // === Row Interaction ===
  /** Row interaction mode: SELECTION, LINK, EXPANDABLE, or NONE (default: NONE) */
  rowInteraction?: import('./constants').RowInteractionMode;
  /** Callback when row is clicked (only used when rowInteraction is LINK) */
  onRowClick?: (row: TData) => void;
  /** Selected row IDs (only used when rowInteraction is SELECTION) */
  selectedRowIds?: Set<string>;
  /** Callback when selection changes (only used when rowInteraction is SELECTION) */
  onSelectionChange?: (selectedIds: Set<string>) => void;

  // === Expandable Rows ===
  /** Component to render expanded row content (only used when rowInteraction is EXPANDABLE) */
  expandedRowContent?: ComponentType<ExpandedRowContentProps<TData, TExpandedData>>;
  /** Async function to load expanded row data (only used when rowInteraction is EXPANDABLE) */
  getExpandedRowData?: (row: TData, rowId: string) => Promise<TExpandedData>;

  // === Server-side Pagination ===
  /** Current page (1-indexed) */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of items across all pages */
  totalCount: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;

  // === Server-side Sorting ===
  /** Current sort state */
  sortState?: SortState;
  /** Callback when sort changes */
  onSortChange?: (sort: SortState) => void;

  // === Server-side Filtering ===
  /** Current filter state */
  filterState?: FilterState;
  /** Callback when filter changes */
  onFilterChange?: (filters: FilterState) => void;

  // === UI States ===
  /** Show loading skeleton */
  loading?: boolean;
  /** Custom empty state content */
  emptyState?: ReactNode;

  // === Styling ===
  /** Additional class name for the table container */
  className?: string;
  /** Color configuration for customizing table colors */
  colorConfig?: DataTableColorConfig;
}>;
