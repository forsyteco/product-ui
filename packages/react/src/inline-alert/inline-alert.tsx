import { Button as BaseButton } from '@base-ui/react/button';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

import styles from './inline-alert.module.css';

export type InlineAlertProps = {
  message: ReactNode;
  onRetry?: () => void;
  onDismiss?: () => void;
  retryLabel?: string;
  dismissLabel?: string;
  className?: string;
  /** @default polite */
  'aria-live'?: 'polite' | 'assertive' | 'off';
  role?: 'status' | 'alert';
  'data-testid'?: string;
};

/**
 * Non-blocking inline message with optional Retry / Dismiss (e.g. optimistic failures).
 */
export function InlineAlert({
  message,
  onRetry,
  onDismiss,
  retryLabel = 'Retry',
  dismissLabel = 'Dismiss',
  className,
  'aria-live': ariaLive = 'polite',
  role = 'status',
  'data-testid': dataTestId,
}: InlineAlertProps) {
  const showActions = onRetry != null || onDismiss != null;

  return (
    <div
      data-slot="inline-alert"
      className={clsx(styles.root, className)}
      role={role}
      aria-live={ariaLive}
      data-testid={dataTestId}
    >
      <div className={styles.message}>{message}</div>
      {showActions ? (
        <div className={styles.actions}>
          {onRetry ? (
            <BaseButton type="button" onClick={onRetry} className={styles.action}>
              {retryLabel}
            </BaseButton>
          ) : null}
          {onDismiss ? (
            <BaseButton type="button" onClick={onDismiss} className={styles.action}>
              {dismissLabel}
            </BaseButton>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
