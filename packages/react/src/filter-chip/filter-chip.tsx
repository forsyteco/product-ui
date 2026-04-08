import { Button as BaseButton } from '@base-ui/react/button';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

import styles from './filter-chip.module.css';

export type FilterChipProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  /** Overrides default idle (inactive) styles. */
  idleClassName?: string;
  /** Overrides default active styles. */
  activeClassName?: string;
};

/**
 * Toggleable filter pill (Forsyte brand: black when selected).
 */
export function FilterChip({
  active,
  onClick,
  children,
  className,
  idleClassName,
  activeClassName,
}: FilterChipProps) {
  const labelClass = active
    ? (activeClassName ?? styles.active)
    : (idleClassName ?? styles.idle);

  return (
    <BaseButton
      type="button"
      data-slot="filter-chip"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(styles.trigger, className)}
    >
      <span className={clsx(styles.label, labelClass)}>{children}</span>
    </BaseButton>
  );
}
