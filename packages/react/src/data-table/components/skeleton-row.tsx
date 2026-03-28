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
    <tr className={styles.skeletonRow}>
      {rowInteraction === ROW_INTERACTION.EXPANDABLE && (
        <td className={styles.expandCell}>
          <Skeleton className={styles.skeletonIcon} />
        </td>
      )}
      {rowInteraction === ROW_INTERACTION.SELECTION && (
        <td className={styles.skeletonCell}>
          <Skeleton className={styles.skeletonIcon} />
        </td>
      )}
      {columns.map((column) => (
        <td
          key={column.id}
          className={styles.skeletonCell}
          style={{
            width: column.width,
            minWidth: column.minWidth,
          }}
        >
          <Skeleton className={styles.skeletonLine} />
        </td>
      ))}
    </tr>
  );
}

export { SkeletonRow };
