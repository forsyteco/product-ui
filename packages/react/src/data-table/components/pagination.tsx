import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/tailwind';
import IconButton from '../../icon-button';
import type { DataTableColorConfig } from '../types';

export type PaginationProps = Readonly<{
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  className?: string;
  colorConfig?: DataTableColorConfig;
}>;

function Pagination({
  page,
  pageSize,
  totalCount,
  onPageChange,
  className,
  colorConfig,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  const paginationStyle = {
    ...(colorConfig?.paginationBackground && { backgroundColor: colorConfig.paginationBackground }),
    ...(colorConfig?.paginationText && { color: colorConfig.paginationText }),
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn('flex items-center justify-between px-4 py-3', className)}
      style={Object.keys(paginationStyle).length > 0 ? paginationStyle : undefined}
    >
      <div className="text-sm text-muted-foreground">
        Page {page} of {totalPages}
      </div>
      <div className="flex items-center gap-2">
        <IconButton
          icon={ChevronLeft}
          variant="ghost"
          size="small"
          onClick={() => onPageChange(page - 1)}
          disabled={isFirstPage}
          aria-label="Previous page"
        />
        <IconButton
          icon={ChevronRight}
          variant="ghost"
          size="small"
          onClick={() => onPageChange(page + 1)}
          disabled={isLastPage}
          aria-label="Next page"
        />
      </div>
    </nav>
  );
}

export default Pagination;
