import { RiskLevelPill, RISK_LEVEL, type RiskLevel } from "../../pill";

export type RiskLevelCellProps = Readonly<{
  /** The risk level to display */
  value: string;
}>;

/**
 * Checks if a string is a valid RiskLevel.
 */
function isRiskLevel(value: string): value is RiskLevel {
  return Object.values(RISK_LEVEL).includes(value.toLowerCase() as RiskLevel);
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
 * - Unknown values: Gray badge (falls back to a plain span)
 *
 * @example
 * // In column definition:
 * { id: 'risk', header: 'Risk Level', accessorKey: 'riskLevel', cell: RiskLevelCell }
 */
export function RiskLevelCell({ value }: RiskLevelCellProps) {
  const normalized = value.toLowerCase();

  if (isRiskLevel(normalized)) {
    return <RiskLevelPill level={normalized as RiskLevel} />;
  }

  // Fallback for unknown values — gray badge matching the old behaviour
  return (
    <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800">
      {capitalizeFirst(value)}
    </span>
  );
}
