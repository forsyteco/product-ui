import { type ReactNode } from 'react';
import { Transition as HeadlessTransition } from '@headlessui/react';
import { cn } from '../utils/cn';
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
      enter={cn(enter)}
      enterFrom={cn(enterFrom)}
      enterTo={cn(enterTo)}
      leave={cn(leave)}
      leaveFrom={cn(leaveFrom)}
      leaveTo={cn(leaveTo)}
    >
      <div className={cn(className)}>{children}</div>
    </HeadlessTransition>
  );
}

export { Transition };

