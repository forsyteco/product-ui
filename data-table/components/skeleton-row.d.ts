import { DataTableColumn } from '../types';
import { RowInteractionMode } from '../constants';
export type SkeletonRowProps<TData> = Readonly<{
    columns: DataTableColumn<TData>[];
    rowInteraction?: RowInteractionMode;
}>;
declare function SkeletonRow<TData>({ columns, rowInteraction }: SkeletonRowProps<TData>): import("react").JSX.Element;
export default SkeletonRow;
//# sourceMappingURL=skeleton-row.d.ts.map