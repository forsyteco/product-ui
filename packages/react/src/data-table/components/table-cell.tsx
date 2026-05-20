import type { DataTableColumn } from '../types';
import { clsx } from 'clsx';
import styles from './data-table.module.css';

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
    left: styles['align-left'],
    center: styles['align-center'],
    right: styles['align-right'],
  }[column.align || 'left'];

  const CellComponent = column.cell;

  return (
    <td
      role="gridcell"
      className={clsx(styles.cell, alignmentClass)}
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
