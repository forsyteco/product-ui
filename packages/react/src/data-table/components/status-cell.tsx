import { cn } from '../../utils/tailwind';

/**
 * Allowed status values for the StatusCell component
 */
export const STATUS = {
  COMPLETE: 'complete',
  DO_NOT_ACT: 'do_not_act',
  FAILED: 'failed',
  IN_PROGRESS: 'in_progress',
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

export type StatusCellProps = {
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
};

/**
 * Returns the appropriate color classes based on the status.
 */
function getStatusColors(status: Status): string {
  switch (status) {
    case STATUS.COMPLETE:
      return 'bg-emerald-100 text-emerald-800';
    case STATUS.DO_NOT_ACT:
      return 'bg-rose-100 text-rose-800';
    case STATUS.FAILED:
      return 'bg-red-100 text-red-800';
    case STATUS.IN_PROGRESS:
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

/**
 * Formats the status value for display (converts snake_case to Sentence case).
 */
function formatStatusDisplay(status: Status): string {
  const withSpaces = status.replace(/_/g, ' ');
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

/**
 * A cell component for displaying status with optional version information.
 * Shows a badge-style status with version text below when applicable.
 */
export default function StatusCell({ value, version }: StatusCellProps) {
  const showVersion = version !== false && version !== undefined && version !== 'unknown';
  const colorClasses = getStatusColors(value);
  const displayValue = formatStatusDisplay(value);

  return (
    <div className={cn('flex flex-col gap-1')}>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded px-2 py-1 text-xs font-medium',
          colorClasses
        )}
      >
        {displayValue}
      </span>
      {showVersion && (
        <span className="text-xs text-muted-foreground">
          <span>Version:</span> <span>{version === null ? '-' : version}</span>
        </span>
      )}
    </div>
  );
}
