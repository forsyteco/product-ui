import { cn } from "../../utils/tailwind";
import { StatusPill, STATUS, type Status } from "../../pill";

// Re-export STATUS and Status from the pill module so existing consumers don't break
export { STATUS, type Status };

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
export function StatusCell({ value, version }: StatusCellProps) {
  const showVersion =
    version !== false && version !== undefined && version !== "unknown";

  return (
    <div className={cn("flex flex-col gap-1")}>
      <StatusPill status={value} className="w-fit" />
      {showVersion && (
        <span className="text-xs text-muted-foreground">
          <span>Version:</span> <span>{version ?? "-"}</span>
        </span>
      )}
    </div>
  );
}
