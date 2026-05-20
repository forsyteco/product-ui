import { Button as BaseButton } from '@base-ui/react/button';
import { clsx } from 'clsx';

import styles from './empty-state.module.css';

export type EmptyStateProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  /** @default polite */
  'aria-live'?: 'polite' | 'assertive' | 'off';
  role?: 'status';
  'data-testid'?: string;
};

/**
 * Compact empty / no-results panel with optional text action.
 */
export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  className,
  'aria-live': ariaLive = 'polite',
  role = 'status',
  'data-testid': dataTestId,
}: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={clsx(styles.root, className)}
      role={role}
      aria-live={ariaLive}
      data-testid={dataTestId}
    >
      <div className={styles.title}>{title}</div>
      {description ? <p className={styles.description}>{description}</p> : null}
      {actionLabel && onAction ? (
        <BaseButton type="button" onClick={onAction} className={styles.action}>
          {actionLabel}
        </BaseButton>
      ) : null}
    </div>
  );
}
