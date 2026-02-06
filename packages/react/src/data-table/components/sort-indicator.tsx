import type { CSSProperties } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { cn } from '../../utils/tailwind';
import type { SortDirection } from '../types';

export type SortIndicatorProps = Readonly<{
  direction: SortDirection | null;
  /** Icon color when inactive (matches header text) */
  color?: CSSProperties['color'];
  /** Background color when active/sorted */
  activeBackground?: CSSProperties['backgroundColor'];
  /** Icon color when active/sorted */
  activeForeground?: CSSProperties['color'];
}>;

function SortIndicator({ direction, color, activeBackground, activeForeground }: SortIndicatorProps) {
  const isActive = direction !== null;

  // When active, use activeForeground if provided, otherwise fall back to default
  // When inactive, use color (header text color) if provided
  const iconColor = isActive ? activeForeground : color;
  const iconStyle = iconColor ? { color: iconColor } : undefined;

  // Container style for active background
  const containerStyle = isActive && activeBackground
    ? { backgroundColor: activeBackground }
    : undefined;

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded p-1',
        isActive && !activeBackground && 'bg-accent'
      )}
      style={containerStyle}
    >
      {direction === 'asc' && (
        <ArrowUp className={cn('h-3 w-3', !iconColor && 'text-foreground')} style={iconStyle} />
      )}
      {direction === 'desc' && (
        <ArrowDown className={cn('h-3 w-3', !iconColor && 'text-foreground')} style={iconStyle} />
      )}
      {direction === null && (
        <ArrowUpDown className={cn('h-3 w-3 opacity-50', !iconColor && 'text-foreground')} style={iconStyle} />
      )}
    </span>
  );
}

export default SortIndicator;
