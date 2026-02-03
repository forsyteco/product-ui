export type CountryCellProps = Readonly<{
    /** The country name to display (e.g., "United Kingdom", "France") */
    value: string;
}>;
/**
 * A cell renderer component that displays a country flag alongside the country name.
 *
 * Shows: Flag image (from Twemoji CDN) + Country name
 * Falls back to "-" if the flag image fails to load.
 *
 * @example
 * // In column definition:
 * { id: 'country', header: 'Country', accessorKey: 'country', cell: CountryCell }
 */
declare function CountryCell({ value }: CountryCellProps): import("react").JSX.Element;
export default CountryCell;
//# sourceMappingURL=country-cell.d.ts.map