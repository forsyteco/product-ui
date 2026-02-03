import { DataTableColumn } from '../types';
export type TableCellProps<TData, TValue = unknown> = Readonly<{
    column: DataTableColumn<TData, TValue>;
    row: TData;
    value: TValue;
}>;
declare function TableCell<TData, TValue = unknown>({ column, row, value, }: TableCellProps<TData, TValue>): import("react").JSX.Element;
export default TableCell;
//# sourceMappingURL=table-cell.d.ts.map