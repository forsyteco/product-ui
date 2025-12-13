import { type ReactNode } from 'react';
import { Transition as HeadlessTransition } from '@headlessui/react';
import { cn } from '../utils/tailwind';

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
  enter = 'transition ease-out duration-200',
  enterFrom = 'opacity-0',
  enterTo = 'opacity-100',
  leave = 'transition ease-in duration-150',
  leaveFrom = 'opacity-100',
  leaveTo = 'opacity-0',
}: TransitionProps) {
  return (
    <HeadlessTransition
      show={show}
      className={className}
      enter={cn(enter)}
      enterFrom={cn(enterFrom)}
      enterTo={cn(enterTo)}
      leave={cn(leave)}
      leaveFrom={cn(leaveFrom)}
      leaveTo={cn(leaveTo)}
    >
      {children}
    </HeadlessTransition>
  );
}

export default Transition;

