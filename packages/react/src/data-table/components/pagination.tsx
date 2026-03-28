import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { IconButton } from '../../icon-button';
import type { DataTableColorConfig } from '../types';
import styles from './data-table.module.css';

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
      className={clsx(styles.paginationNav, className)}
      style={Object.keys(paginationStyle).length > 0 ? paginationStyle : undefined}
    >
      <div className={styles.paginationText}>
        Page {page} of {totalPages}
      </div>
      <div className={styles.paginationControls}>
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

export { Pagination };
