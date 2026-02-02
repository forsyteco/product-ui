import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/tailwind';

export type PaginationProps = {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  className?: string;
};

function Pagination({
  page,
  pageSize,
  totalCount,
  onPageChange,
  className,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn('flex items-center justify-between px-4 py-3', className)}
    >
      <div className="text-sm text-muted-foreground">
        Page {page} of {totalPages}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={isFirstPage}
          aria-label="Previous page"
          className={cn(
            'p-1 text-muted-foreground transition-colors',
            isFirstPage ? 'cursor-not-allowed opacity-30' : 'hover:text-foreground'
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={isLastPage}
          aria-label="Next page"
          className={cn(
            'p-1 text-muted-foreground transition-colors',
            isLastPage ? 'cursor-not-allowed opacity-30' : 'hover:text-foreground'
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}

export default Pagination;
