import { clsx } from 'clsx';
import styles from './data-table.module.css';

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
 * Returns the appropriate color classes based on the status.
 */
function getStatusColors(status: Status): string {
  switch (status) {
    case STATUS.COMPLETE:
      return styles['status-complete'];
    case STATUS.DO_NOT_ACT:
      return styles['status-do-not-act'];
    case STATUS.FAILED:
      return styles['status-failed'];
    case STATUS.IN_PROGRESS:
    default:
      return styles['status-progress'];
  }
}

/**
 * Formats the status value for display (converts snake_case to Sentence case).
 */
function formatStatusDisplay(status: Status): string {
  const withSpaces = status.replaceAll('_', ' ');
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

/**
 * A cell component for displaying status with optional version information.
 * Shows a badge-style status with version text below when applicable.
 */
export function StatusCell({ value, version }: StatusCellProps) {
  const showVersion = version !== false && version !== undefined && version !== 'unknown';
  const colorClasses = getStatusColors(value);
  const displayValue = formatStatusDisplay(value);

  return (
    <div className={styles['status-wrap']}>
      <span
        className={clsx(
          styles['status-badge'],
          colorClasses
        )}
      >
        {displayValue}
      </span>
      {showVersion && (
        <span className={styles['status-version']}>
          <span>Version:</span> <span>{version ?? '-'}</span>
        </span>
      )}
    </div>
  );
}
