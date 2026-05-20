import { clsx } from 'clsx';
import styles from './data-table.module.css';

export type RiskLevelCellProps = Readonly<{
  /** The risk level to display */
  value: string;
}>;

/**
 * Returns the appropriate color classes based on the risk level.
 */
function getRiskLevelColors(level: string): string {
  switch (level.toLowerCase()) {
    case 'high':
      return styles['risk-high'];
    case 'medium':
      return styles['risk-medium'];
    case 'low':
      return styles['risk-low'];
    default:
      return styles['risk-unknown'];
  }
}

/**
 * Capitalizes the first letter of a string and lowercases the rest.
 */
function capitalizeFirst(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * A cell renderer component that displays a colored badge based on risk level.
 *
 * Risk levels and their colors:
 * - "high": Red badge
 * - "medium": Yellow badge
 * - "low": Green badge
 * - Unknown values: Gray badge
 *
 * @example
 * // In column definition:
 * { id: 'risk', header: 'Risk Level', accessorKey: 'riskLevel', cell: RiskLevelCell }
 */
export function RiskLevelCell({ value }: RiskLevelCellProps) {
  const colorClasses = getRiskLevelColors(value);
  const displayValue = capitalizeFirst(value);

  return (
    <span className={clsx(styles['risk-badge'], colorClasses)}>
      {displayValue}
    </span>
  );
}

