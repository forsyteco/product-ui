import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { cn } from '../../utils/tailwind';
import type { SortDirection } from '../types';

export type SortIndicatorProps = Readonly<{
  direction: SortDirection | null;
}>;

function SortIndicator({ direction }: SortIndicatorProps) {
  const isActive = direction !== null;

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded p-1',
        isActive && 'bg-accent'
      )}
    >
      {direction === 'asc' && (
        <ArrowUp className="h-3 w-3 text-foreground" />
      )}
      {direction === 'desc' && (
        <ArrowDown className="h-3 w-3 text-foreground" />
      )}
      {direction === null && (
        <ArrowUpDown className="h-3 w-3 text-foreground opacity-50" />
      )}
    </span>
  );
}

export default SortIndicator;
