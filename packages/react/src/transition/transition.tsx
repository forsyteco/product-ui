import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './transition.module.css';

export type TransitionProps = {
  show?: boolean;
  children: ReactNode;
  className?: string;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
};

function Transition({
  show,
  children,
  className,
  enter = styles.enter,
  enterFrom = styles['enter-from'],
  enterTo = styles['enter-to'],
  leave = styles.leave,
  leaveFrom = styles['leave-from'],
  leaveTo = styles['leave-to'],
}: TransitionProps) {
  if (!show) return null;

  return (
    <div
      className={clsx(
        enter,
        enterFrom,
        enterTo,
        leave,
        leaveFrom,
        leaveTo,
        className
      )}
    >
      {children}
    </div>
  );
}

export { Transition };

