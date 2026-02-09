import { Skeleton } from '../../skeleton';
import type { DataTableColumn } from '../types';
import type { RowInteractionMode } from '../constants';
import { ROW_INTERACTION } from '../constants';

export type SkeletonRowProps<TData> = Readonly<{
  columns: DataTableColumn<TData>[];
  rowInteraction?: RowInteractionMode;
}>;

function SkeletonRow<TData>({ columns, rowInteraction }: SkeletonRowProps<TData>) {
  return (
    <tr className="border-b border-border last:border-b-0">
      {rowInteraction === ROW_INTERACTION.EXPANDABLE && (
        <td className="w-10 px-4 py-3">
          <Skeleton className="h-4 w-4" />
        </td>
      )}
      {rowInteraction === ROW_INTERACTION.SELECTION && (
        <td className="px-4 py-3">
          <Skeleton className="h-4 w-4" />
        </td>
      )}
      {columns.map((column) => (
        <td
          key={column.id}
          className="px-4 py-3"
          style={{
            width: column.width,
            minWidth: column.minWidth,
          }}
        >
          <Skeleton className="h-4 w-full" />
        </td>
      ))}
    </tr>
  );
}

export { SkeletonRow };
