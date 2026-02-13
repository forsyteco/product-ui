import { Fragment, type ComponentType, type ReactNode, useState, useEffect, useRef } from 'react';
import type { DataTableColumn, ExpandedRowContentProps, DataTableColorConfig } from '../types';
import type { RowInteractionMode } from '../constants';
import { ROW_INTERACTION } from '../constants';
import { TableRow } from './table-row';
import { TableCell } from './table-cell';
import { SkeletonRow } from './skeleton-row';
import { EmptyState } from './empty-state';
import { ExpandedRow } from './expanded-row';

export type TableBodyProps<TData, TExpandedData = unknown> = Readonly<{
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
  colorConfig?: DataTableColorConfig;
}>;

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
  colorConfig,
}: TableBodyProps<TData, TExpandedData>) {
  const isSelectable = rowInteraction === ROW_INTERACTION.SELECTION;
  const isExpandable = rowInteraction === ROW_INTERACTION.EXPANDABLE;
  const colSpan = columns.length + (isSelectable ? 1 : 0) + (isExpandable ? 1 : 0);

  // Track the collapsing row for exit animation
  const [collapsingRowId, setCollapsingRowId] = useState<string | null>(null);
  const [collapsingExpandedData, setCollapsingExpandedData] = useState<TExpandedData | null>(null);
  const [prevExpandedRowId, setPrevExpandedRowId] = useState<string | null>(null);
  const expandedDataRef = useRef<TExpandedData | null>(null);

  // Keep a snapshot of the latest expanded data so we can preserve content during collapse
  if (expandedData != null) {
    expandedDataRef.current = expandedData;
  }

  // Detect expandedRowId change during render so the collapsing row is set
  // before children render — this keeps the same ExpandedRow instance mounted
  // and avoids the content disappearing before the collapse animation starts.
  if (expandedRowId !== prevExpandedRowId) {
    setPrevExpandedRowId(expandedRowId ?? null);
    if (prevExpandedRowId) {
      setCollapsingRowId(prevExpandedRowId);
      setCollapsingExpandedData(expandedDataRef.current);
      expandedDataRef.current = null;
    }
  }

  // Remove the collapsing row from the DOM after the animation completes
  useEffect(() => {
    if (collapsingRowId) {
      const timer = setTimeout(() => {
        setCollapsingRowId(null);
        setCollapsingExpandedData(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [collapsingRowId]);

  if (loading) {
    return (
      <tbody>
        {Array.from({ length: Math.min(pageSize, 5) }, (_, i) => `skeleton-row-${i}`).map((skeletonId) => (
          <SkeletonRow
            key={skeletonId}
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
        const isCollapsingRow = collapsingRowId === rowId;
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
              colorConfig={colorConfig}
            >
              {columns.map((column) => {
                const getValue = () => {
                  if (column.accessorFn) return column.accessorFn(row);
                  if (column.accessorKey) return (row as Record<string, unknown>)[column.accessorKey];
                  return undefined;
                };
                const value = getValue();

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
            {(isExpanded || isCollapsingRow) && ExpandedRowContent && (
              <ExpandedRow
                id={expandedContentId}
                colSpan={colSpan}
                isCollapsing={isCollapsingRow && !isExpanded}
              >
                <ExpandedRowContent
                  row={row}
                  rowId={rowId}
                  data={isExpanded ? (expandedData ?? null) : (collapsingExpandedData ?? null)}
                  loading={isExpanded ? isLoadingExpanded : false}
                />
              </ExpandedRow>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
}

export { TableBody };
