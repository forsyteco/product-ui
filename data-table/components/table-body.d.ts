import { ComponentType, ReactNode } from 'react';
import { DataTableColumn, ExpandedRowContentProps } from '../types';
import { RowInteractionMode } from '../constants';
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
    expandedRowId?: string | null;
    expandedData?: TExpandedData | null;
    isLoadingExpanded?: boolean;
    onExpandRow?: (row: TData, rowId: string) => void;
    expandedRowContent?: ComponentType<ExpandedRowContentProps<TData, TExpandedData>>;
}>;
declare function TableBody<TData, TExpandedData = unknown>({ columns, data, getRowId, loading, emptyState, rowInteraction, selectedRowIds, onRowClick, onRowSelectionChange, pageSize, expandedRowId, expandedData, isLoadingExpanded, onExpandRow, expandedRowContent: ExpandedRowContent, }: TableBodyProps<TData, TExpandedData>): import("react").JSX.Element;
export default TableBody;
//# sourceMappingURL=table-body.d.ts.map