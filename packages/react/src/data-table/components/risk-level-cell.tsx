import { cn } from '../../utils/tailwind';

export type RiskLevelCellProps = {
  /** The risk level to display */
  value: string;
};

/**
 * Returns the appropriate color classes based on the risk level.
 */
function getRiskLevelColors(level: string): string {
  switch (level.toLowerCase()) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
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
function RiskLevelCell({ value }: RiskLevelCellProps) {
  const colorClasses = getRiskLevelColors(value);
  const displayValue = capitalizeFirst(value);

  return (
    <span className={cn('rounded px-2 py-1 text-xs font-medium', colorClasses)}>
      {displayValue}
    </span>
  );
}

export default RiskLevelCell;
