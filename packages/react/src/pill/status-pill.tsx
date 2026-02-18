import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/tailwind";

/**
 * Allowed status values for the StatusPill component.
 */
export const STATUS = {
  COMPLETE: "complete",
  DO_NOT_ACT: "do_not_act",
  FAILED: "failed",
  IN_PROGRESS: "in_progress",
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

export type StatusPillProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children"
> & {
  /** The status to display */
  status: Status;
};

/**
 * Returns the appropriate color classes based on the status.
 */
function getStatusColors(status: Status): string {
  switch (status) {
    case STATUS.COMPLETE:
      return "bg-emerald-100 text-emerald-800";
    case STATUS.DO_NOT_ACT:
      return "bg-rose-100 text-rose-800";
    case STATUS.FAILED:
      return "bg-red-100 text-red-800";
    case STATUS.IN_PROGRESS:
    default:
      return "bg-gray-100 text-gray-800";
  }
}

/**
 * Formats the status value for display (converts snake_case to Sentence case).
 */
function formatStatusDisplay(status: Status): string {
  const withSpaces = status.replaceAll("_", " ");
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

/**
 * An opinionated pill component for displaying status values.
 *
 * Supports four statuses with baked-in colors:
 * - `"complete"` — Emerald/Green
 * - `"do_not_act"` — Rose
 * - `"failed"` — Red
 * - `"in_progress"` — Gray
 *
 * @example
 * <StatusPill status="complete" />
 * <StatusPill status="in_progress" />
 * <StatusPill status="failed" />
 * <StatusPill status="do_not_act" />
 */
const StatusPill = forwardRef<HTMLSpanElement, StatusPillProps>(
  function StatusPill({ status, className, ...props }, ref) {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded px-2 py-1 text-xs font-medium",
          getStatusColors(status),
          className,
        )}
        {...props}
      >
        {formatStatusDisplay(status)}
      </span>
    );
  },
);

export { StatusPill };
