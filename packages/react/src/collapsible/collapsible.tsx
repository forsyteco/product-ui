import { type ReactNode } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { clsx } from 'clsx';
import styles from './collapsible.module.css';

export type CollapsibleProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export type CollapsibleTriggerProps = {
  children: ReactNode;
  className?: string;
};

export type CollapsiblePanelProps = {
  children: ReactNode;
  className?: string;
};

function CollapsibleRoot({ children, defaultOpen = false, className }: CollapsibleProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <Collapsible.Root defaultOpen={defaultOpen}>
        {children}
      </Collapsible.Root>
    </div>
  );
}

export function CollapsibleTrigger({ children, className }: CollapsibleTriggerProps) {
  return (
    <Collapsible.Trigger
      className={clsx(
        styles.trigger,
        className
      )}
    >
      {children}
    </Collapsible.Trigger>
  );
}

export function CollapsiblePanel({ children, className }: CollapsiblePanelProps) {
  return (
    <Collapsible.Panel
      className={clsx(styles.panel, className)}
    >
      {children}
    </Collapsible.Panel>
  );
}

export { CollapsibleRoot as Collapsible };
