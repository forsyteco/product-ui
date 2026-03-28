import { type ReactNode } from 'react';
import { Transition as HeadlessTransition } from '@headlessui/react';
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
  enterFrom = styles.enterFrom,
  enterTo = styles.enterTo,
  leave = styles.leave,
  leaveFrom = styles.leaveFrom,
  leaveTo = styles.leaveTo,
}: TransitionProps) {
  return (
    <HeadlessTransition
      show={show}
      enter={clsx(enter)}
      enterFrom={clsx(enterFrom)}
      enterTo={clsx(enterTo)}
      leave={clsx(leave)}
      leaveFrom={clsx(leaveFrom)}
      leaveTo={clsx(leaveTo)}
    >
      <div className={clsx(className)}>{children}</div>
    </HeadlessTransition>
  );
}

export { Transition };

