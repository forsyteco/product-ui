import type { CSSProperties } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { SortDirection } from '../types';
import styles from './data-table.module.css';

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

  // When active, use activeForeground if provided, otherwise fall back to color (header text)
  // When inactive, use color (header text color) if provided
  const iconColor = isActive ? (activeForeground ?? color) : color;
  const iconStyle = iconColor ? { color: iconColor } : undefined;

  // Container style for active background
  const containerStyle = isActive && activeBackground
    ? { backgroundColor: activeBackground }
    : undefined;

  return (
    <span
      className={cn(
        styles.sortWrap,
        isActive && !activeBackground && styles.sortActiveDefault
      )}
      style={containerStyle}
    >
      {direction === 'asc' && (
        <ArrowUp className={cn(styles.sortIcon, !iconColor && styles.sortIconDefault)} style={iconStyle} />
      )}
      {direction === 'desc' && (
        <ArrowDown className={cn(styles.sortIcon, !iconColor && styles.sortIconDefault)} style={iconStyle} />
      )}
      {direction === null && (
        <ArrowUpDown className={cn(styles.sortIcon, !iconColor && styles.sortIconDefault, styles.sortIconInactive)} style={iconStyle} />
      )}
    </span>
  );
}

export { SortIndicator };
