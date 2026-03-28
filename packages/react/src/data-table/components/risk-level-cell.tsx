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
      return styles.riskHigh;
    case 'medium':
      return styles.riskMedium;
    case 'low':
      return styles.riskLow;
    default:
      return styles.riskUnknown;
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
    <span className={clsx(styles.riskBadge, colorClasses)}>
      {displayValue}
    </span>
  );
}

