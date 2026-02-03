import { SortState, FilterState } from '../types';
export type QueryParams<TData> = {
    data: TData[];
    page: number;
    pageSize: number;
    sortState?: SortState;
    filterState?: FilterState;
};
export type QueryResult<TData> = {
    data: TData[];
    totalCount: number;
    page: number;
    pageSize: number;
    totalPages: number;
};
/**
 * Simulates a server-side data query with sorting, filtering, and pagination
 */
export declare function queryData<TData extends Record<string, unknown>>({ data, page, pageSize, sortState, filterState, }: QueryParams<TData>): QueryResult<TData>;
/**
 * Hook-like helper for managing table state in stories
 */
export declare function createTableState<TData extends Record<string, unknown>>(initialData: TData[]): {
    query: (params: Omit<QueryParams<TData>, "data">) => QueryResult<TData>;
};
//# sourceMappingURL=mock-data-service.d.ts.map