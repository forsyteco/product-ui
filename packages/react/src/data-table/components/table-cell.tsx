import type { DataTableColumn } from '../types';
import { cn } from '../../utils/tailwind';

export type TableCellProps<TData, TValue = unknown> = Readonly<{
  column: DataTableColumn<TData, TValue>;
  row: TData;
  value: TValue;
}>;

function TableCell<TData, TValue = unknown>({
  column,
  row,
  value,
}: TableCellProps<TData, TValue>) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[column.align || 'left'];

  const CellComponent = column.cell;

  return (
    <td
      role="gridcell"
      className={cn('px-4 py-3', alignmentClass)}
      style={{
        width: column.width,
        minWidth: column.minWidth,
      }}
    >
      {CellComponent ? (
        <CellComponent value={value} row={row} />
      ) : (
        String(value ?? '')
      )}
    </td>
  );
}

export { TableCell };
