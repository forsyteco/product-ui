import { Skeleton } from '../../skeleton';
import type { DataTableColumn } from '../types';
import type { RowInteractionMode } from '../constants';
import { ROW_INTERACTION } from '../constants';
import styles from './data-table.module.css';

export type SkeletonRowProps<TData> = Readonly<{
  columns: DataTableColumn<TData>[];
  rowInteraction?: RowInteractionMode;
}>;

function SkeletonRow<TData>({ columns, rowInteraction }: SkeletonRowProps<TData>) {
  return (
    <tr className={styles['skeleton-row']}>
      {rowInteraction === ROW_INTERACTION.EXPANDABLE && (
        <td className={styles['expand-cell']}>
          <Skeleton className={styles['skeleton-icon']} />
        </td>
      )}
      {rowInteraction === ROW_INTERACTION.SELECTION && (
        <td className={styles['skeleton-cell']}>
          <Skeleton className={styles['skeleton-icon']} />
        </td>
      )}
      {columns.map((column) => (
        <td
          key={column.id}
          className={styles['skeleton-cell']}
          style={{
            width: column.width,
            minWidth: column.minWidth,
          }}
        >
          <Skeleton className={styles['skeleton-line']} />
        </td>
      ))}
    </tr>
  );
}

export { SkeletonRow };
