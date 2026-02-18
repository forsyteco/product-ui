import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/tailwind";

/**
 * Allowed risk levels for the RiskLevelPill component.
 */
export const RISK_LEVEL = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
} as const;

export type RiskLevel = (typeof RISK_LEVEL)[keyof typeof RISK_LEVEL];

export type RiskLevelPillProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children"
> & {
  /** The risk level to display */
  level: RiskLevel;
};

/**
 * Returns the appropriate color classes based on the risk level.
 */
function getRiskLevelColors(level: RiskLevel): string {
  switch (level) {
    case RISK_LEVEL.HIGH:
      return "bg-red-100 text-red-800";
    case RISK_LEVEL.MEDIUM:
      return "bg-yellow-100 text-yellow-800";
    case RISK_LEVEL.LOW:
      return "bg-green-100 text-green-800";
  }
}

/**
 * Returns the display label for a risk level.
 */
function getRiskLevelLabel(level: RiskLevel): string {
  switch (level) {
    case RISK_LEVEL.HIGH:
      return "High";
    case RISK_LEVEL.MEDIUM:
      return "Medium";
    case RISK_LEVEL.LOW:
      return "Low";
  }
}

/**
 * An opinionated pill component for displaying risk levels.
 *
 * Supports three levels with baked-in colors:
 * - `"low"` — Green
 * - `"medium"` — Yellow/Amber
 * - `"high"` — Red
 *
 * @example
 * <RiskLevelPill level="high" />
 * <RiskLevelPill level="medium" />
 * <RiskLevelPill level="low" />
 */
const RiskLevelPill = forwardRef<HTMLSpanElement, RiskLevelPillProps>(
  function RiskLevelPill({ level, className, ...props }, ref) {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded px-2 py-1 text-xs font-medium",
          getRiskLevelColors(level),
          className,
        )}
        {...props}
      >
        {getRiskLevelLabel(level)}
      </span>
    );
  },
);

export { RiskLevelPill };
