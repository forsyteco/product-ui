import type { CSSProperties } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { cn } from '../../utils/tailwind';
import type { SortDirection } from '../types';

export type SortIndicatorProps = Readonly<{
  direction: SortDirection | null;
  color?: CSSProperties['color'];
}>;

function SortIndicator({ direction, color }: SortIndicatorProps) {
  const isActive = direction !== null;
  const iconStyle = color ? { color } : undefined;

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded p-1',
        isActive && 'bg-accent'
      )}
    >
      {direction === 'asc' && (
        <ArrowUp className={cn('h-3 w-3', !color && 'text-foreground')} style={iconStyle} />
      )}
      {direction === 'desc' && (
        <ArrowDown className={cn('h-3 w-3', !color && 'text-foreground')} style={iconStyle} />
      )}
      {direction === null && (
        <ArrowUpDown className={cn('h-3 w-3 opacity-50', !color && 'text-foreground')} style={iconStyle} />
      )}
    </span>
  );
}

export default SortIndicator;
