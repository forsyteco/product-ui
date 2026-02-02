import { Fragment, type ComponentType, type ReactNode, useState, useEffect, useRef } from 'react';
import type { DataTableColumn, ExpandedRowContentProps } from '../types';
import type { RowInteractionMode } from '../constants';
import { ROW_INTERACTION } from '../constants';
import TableRow from './table-row';
import TableCell from './table-cell';
import SkeletonRow from './skeleton-row';
import EmptyState from './empty-state';
import ExpandedRow from './expanded-row';

export type TableBodyProps<TData, TExpandedData = unknown> = {
  columns: DataTableColumn<TData>[];
  data: TData[];
  getRowId: (row: TData) => string;
  loading?: boolean;
  emptyState?: ReactNode;
  rowInteraction?: RowInteractionMode;
  selectedRowIds?: Set<string>;
  onRowClick?: (row: TData) => void;
  onRowSelectionChange?: (rowId: string, selected: boolean) => void;
  pageSize: number;
  // Expandable row props
  expandedRowId?: string | null;
  expandedData?: TExpandedData | null;
  isLoadingExpanded?: boolean;
  onExpandRow?: (row: TData, rowId: string) => void;
  expandedRowContent?: ComponentType<ExpandedRowContentProps<TData, TExpandedData>>;
};

function TableBody<TData, TExpandedData = unknown>({
  columns,
  data,
  getRowId,
  loading = false,
  emptyState,
  rowInteraction = ROW_INTERACTION.NONE,
  selectedRowIds = new Set(),
  onRowClick,
  onRowSelectionChange,
  pageSize,
  expandedRowId,
  expandedData,
  isLoadingExpanded = false,
  onExpandRow,
  expandedRowContent: ExpandedRowContent,
}: TableBodyProps<TData, TExpandedData>) {
  const isSelectable = rowInteraction === ROW_INTERACTION.SELECTION;
  const isExpandable = rowInteraction === ROW_INTERACTION.EXPANDABLE;
  const colSpan = columns.length + (isSelectable ? 1 : 0) + (isExpandable ? 1 : 0);

  // Track the collapsing row for exit animation
  const [collapsingRowId, setCollapsingRowId] = useState<string | null>(null);
  const [collapsingRowData, setCollapsingRowData] = useState<TData | null>(null);
  const prevExpandedRowId = useRef<string | null>(null);

  useEffect(() => {
    // When expanded row changes, trigger collapse animation for previous row
    if (prevExpandedRowId.current && prevExpandedRowId.current !== expandedRowId) {
      const prevRow = data.find((row) => getRowId(row) === prevExpandedRowId.current);
      if (prevRow) {
        setCollapsingRowId(prevExpandedRowId.current);
        setCollapsingRowData(prevRow);
        // Clear after animation completes
        const timer = setTimeout(() => {
          setCollapsingRowId(null);
          setCollapsingRowData(null);
        }, 300);
        return () => clearTimeout(timer);
      }
    }
    prevExpandedRowId.current = expandedRowId ?? null;
  }, [expandedRowId, data, getRowId]);

  if (loading) {
    return (
      <tbody>
        {Array.from({ length: Math.min(pageSize, 5) }).map((_, index) => (
          <SkeletonRow
            key={`skeleton-${index}`}
            columns={columns}
            rowInteraction={rowInteraction}
          />
        ))}
      </tbody>
    );
  }

  if (data.length === 0) {
    return (
      <tbody>
        <EmptyState colSpan={colSpan}>{emptyState}</EmptyState>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((row) => {
        const rowId = getRowId(row);
        const isExpanded = expandedRowId === rowId;
        const expandedContentId = `expanded-content-${rowId}`;

        return (
          <Fragment key={rowId}>
            <TableRow
              row={row}
              rowId={rowId}
              rowInteraction={rowInteraction}
              isSelected={selectedRowIds.has(rowId)}
              onRowClick={onRowClick}
              onSelectionChange={onRowSelectionChange}
              isExpanded={isExpanded}
              onExpandRow={onExpandRow}
              expandedContentId={expandedContentId}
            >
              {columns.map((column) => {
                const value = column.accessorFn
                  ? column.accessorFn(row)
                  : column.accessorKey
                    ? (row as Record<string, unknown>)[column.accessorKey]
                    : undefined;

                return (
                  <TableCell
                    key={column.id}
                    column={column}
                    row={row}
                    value={value}
                  />
                );
              })}
            </TableRow>
            {isExpanded && ExpandedRowContent && (
              <ExpandedRow
                id={expandedContentId}
                colSpan={colSpan}
              >
                <ExpandedRowContent
                  row={row}
                  rowId={rowId}
                  data={expandedData ?? null}
                  loading={isLoadingExpanded}
                />
              </ExpandedRow>
            )}
            {collapsingRowId === rowId && collapsingRowData && ExpandedRowContent && (
              <ExpandedRow
                id={`expanded-content-${rowId}-collapsing`}
                colSpan={colSpan}
                isCollapsing
              >
                <ExpandedRowContent
                  row={collapsingRowData}
                  rowId={rowId}
                  data={null}
                  loading={false}
                />
              </ExpandedRow>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
}

export default TableBody;
