import type { CSSProperties } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { clsx } from 'clsx';
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
      className={clsx(
        styles['sort-wrap'],
        isActive && !activeBackground && styles['sort-active-default']
      )}
      style={containerStyle}
    >
      {direction === 'asc' && (
        <ArrowUp className={clsx(styles['sort-icon'], !iconColor && styles['sort-icon-default'])} style={iconStyle} />
      )}
      {direction === 'desc' && (
        <ArrowDown className={clsx(styles['sort-icon'], !iconColor && styles['sort-icon-default'])} style={iconStyle} />
      )}
      {direction === null && (
        <ArrowUpDown className={clsx(styles['sort-icon'], !iconColor && styles['sort-icon-default'], styles['sort-icon-inactive'])} style={iconStyle} />
      )}
    </span>
  );
}

export { SortIndicator };
