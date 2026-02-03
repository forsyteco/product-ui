import { DataTableColumn, SortState, FilterState } from '../types';
import { RowInteractionMode } from '../constants';
export type TableHeaderProps<TData> = Readonly<{
    columns: DataTableColumn<TData>[];
    sortState?: SortState;
    onSortChange?: (sort: SortState) => void;
    filterState?: FilterState;
    onFilterChange?: (filters: FilterState) => void;
    rowInteraction?: RowInteractionMode;
    allRowIds: string[];
    selectedRowIds?: Set<string>;
    onSelectionChange?: (selectedIds: Set<string>) => void;
}>;
declare function TableHeader<TData>({ columns, sortState, onSortChange, filterState, onFilterChange, rowInteraction, allRowIds, selectedRowIds, onSelectionChange, }: TableHeaderProps<TData>): import("react").JSX.Element;
export default TableHeader;
//# sourceMappingURL=table-header.d.ts.map