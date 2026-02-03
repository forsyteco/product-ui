export type RiskLevelCellProps = Readonly<{
    /** The risk level to display */
    value: string;
}>;
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
declare function RiskLevelCell({ value }: RiskLevelCellProps): import("react").JSX.Element;
export default RiskLevelCell;
//# sourceMappingURL=risk-level-cell.d.ts.map