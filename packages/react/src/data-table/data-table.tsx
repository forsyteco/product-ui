import { useMemo, useState, useCallback } from 'react';
import { cn } from '../utils/tailwind';
import type { DataTableProps } from './types';
import { DEFAULT_COLOR_CONFIG } from './types';
import { ROW_INTERACTION } from './constants';
import TableHeader from './components/table-header';
import TableBody from './components/table-body';
import Pagination from './components/pagination';

function DataTable<TData, TExpandedData = unknown>({
  columns,
  data,
  getRowId,
  rowInteraction = ROW_INTERACTION.NONE,
  onRowClick,
  selectedRowIds = new Set(),
  onSelectionChange,
  expandedRowContent,
  getExpandedRowData,
  page,
  pageSize,
  totalCount,
  onPageChange,
  sortState,
  onSortChange,
  filterState = [],
  onFilterChange,
  loading = false,
  emptyState,
  className,
  colorConfig: colorConfigProp,
}: DataTableProps<TData, TExpandedData>) {
  // Merge with default color config (user values override defaults)
  const colorConfig = { ...DEFAULT_COLOR_CONFIG, ...colorConfigProp };

  const allRowIds = useMemo(() => data.map(getRowId), [data, getRowId]);

  // Expandable row state
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [expandedData, setExpandedData] = useState<TExpandedData | null>(null);
  const [isLoadingExpanded, setIsLoadingExpanded] = useState(false);

  const handleExpandRow = useCallback(
    async (row: TData, rowId: string) => {
      // If clicking the same row, collapse it
      if (expandedRowId === rowId) {
        setExpandedRowId(null);
        setExpandedData(null);
        setIsLoadingExpanded(false);
        return;
      }

      // Expand the new row
      setExpandedRowId(rowId);
      setExpandedData(null);
      setIsLoadingExpanded(true);

      // Load expanded data if provided
      if (getExpandedRowData) {
        try {
          const data = await getExpandedRowData(row, rowId);
          // Only update if this row is still expanded
          setExpandedRowId((currentId) => {
            if (currentId === rowId) {
              setExpandedData(data);
              setIsLoadingExpanded(false);
            }
            return currentId;
          });
        } catch {
          // Handle error silently, keep loading state
          setIsLoadingExpanded(false);
        }
      } else {
        setIsLoadingExpanded(false);
      }
    },
    [expandedRowId, getExpandedRowData]
  );

  const handleRowSelectionChange = (rowId: string, selected: boolean) => {
    if (!onSelectionChange) return;

    const newSelectedIds = new Set(selectedRowIds);
    if (selected) {
      newSelectedIds.add(rowId);
    } else {
      newSelectedIds.delete(rowId);
    }
    onSelectionChange(newSelectedIds);
  };

  const containerStyle = colorConfig?.borderColor
    ? { borderColor: colorConfig.borderColor }
    : undefined;

  return (
    <div
      className={cn('overflow-hidden rounded-lg border border-border', className)}
      style={containerStyle}
    >
      <div className="overflow-x-auto">
        <table
          aria-busy={loading}
          className="w-full border-collapse text-sm"
        >
          <TableHeader
            columns={columns}
            sortState={sortState}
            onSortChange={onSortChange}
            filterState={filterState}
            onFilterChange={onFilterChange}
            rowInteraction={rowInteraction}
            allRowIds={allRowIds}
            selectedRowIds={selectedRowIds}
            onSelectionChange={onSelectionChange}
            colorConfig={colorConfig}
          />
          <TableBody
            columns={columns}
            data={data}
            getRowId={getRowId}
            loading={loading}
            emptyState={emptyState}
            rowInteraction={rowInteraction}
            selectedRowIds={selectedRowIds}
            onRowClick={onRowClick}
            onRowSelectionChange={handleRowSelectionChange}
            pageSize={pageSize}
            expandedRowId={expandedRowId}
            expandedData={expandedData}
            isLoadingExpanded={isLoadingExpanded}
            onExpandRow={handleExpandRow}
            expandedRowContent={expandedRowContent}
            colorConfig={colorConfig}
          />
        </table>
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalCount={totalCount}
        onPageChange={onPageChange}
        className="border-t border-border"
        colorConfig={colorConfig}
      />
    </div>
  );
}

export default DataTable;
