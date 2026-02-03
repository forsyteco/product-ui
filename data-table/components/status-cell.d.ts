/**
 * Allowed status values for the StatusCell component
 */
export declare const STATUS: {
    readonly COMPLETE: "complete";
    readonly DO_NOT_ACT: "do_not_act";
    readonly FAILED: "failed";
    readonly IN_PROGRESS: "in_progress";
};
export type Status = (typeof STATUS)[keyof typeof STATUS];
export type StatusCellProps = Readonly<{
    /**
     * The status to display in the badge
     */
    value: Status;
    /**
     * Version information to display below the status
     * - false: show no version info at all
     * - undefined or "unknown": don't show version info
     * - null: show "Version: -"
     * - string: show the version value
     */
    version?: string | null | false;
}>;
/**
 * A cell component for displaying status with optional version information.
 * Shows a badge-style status with version text below when applicable.
 */
export default function StatusCell({ value, version }: StatusCellProps): import("react").JSX.Element;
//# sourceMappingURL=status-cell.d.ts.map