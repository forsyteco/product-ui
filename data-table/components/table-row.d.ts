import { ReactNode } from 'react';
import { RowInteractionMode } from '../constants';
export type TableRowProps<TData> = Readonly<{
    row: TData;
    rowId: string;
    rowInteraction?: RowInteractionMode;
    isSelected?: boolean;
    onRowClick?: (row: TData) => void;
    onSelectionChange?: (rowId: string, selected: boolean) => void;
    children: ReactNode;
    isExpanded?: boolean;
    onExpandRow?: (row: TData, rowId: string) => void;
    expandedContentId?: string;
}>;
declare function TableRow<TData>({ row, rowId, rowInteraction, isSelected, onRowClick, onSelectionChange, children, isExpanded, onExpandRow, expandedContentId, }: TableRowProps<TData>): import("react").JSX.Element;
export default TableRow;
//# sourceMappingURL=table-row.d.ts.map