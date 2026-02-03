export type DateCellProps = Readonly<{
    /** The date to display */
    value: Date | string;
    /** Optional format string to override default (uses dayjs format tokens) */
    dateFormat?: string;
}>;
/**
 * A cell renderer component that displays a formatted date with relative time.
 *
 * Top line: Formatted date (default: DD/MM/YYYY British format)
 * Bottom line: Relative time with clock icon (e.g., "today", "yesterday", "5 days ago", "in 3 days")
 */
declare function DateCell({ value, dateFormat }: DateCellProps): import("react").JSX.Element;
export default DateCell;
//# sourceMappingURL=date-cell.d.ts.map