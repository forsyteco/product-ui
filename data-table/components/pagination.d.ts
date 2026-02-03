export type PaginationProps = Readonly<{
    page: number;
    pageSize: number;
    totalCount: number;
    onPageChange: (page: number) => void;
    className?: string;
}>;
declare function Pagination({ page, pageSize, totalCount, onPageChange, className, }: PaginationProps): import("react").JSX.Element;
export default Pagination;
//# sourceMappingURL=pagination.d.ts.map