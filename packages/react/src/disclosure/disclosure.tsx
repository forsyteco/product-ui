import { type ReactNode } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { clsx } from 'clsx';
import styles from './disclosure.module.css';

export type DisclosureProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export type DisclosureButtonProps = {
  children: ReactNode;
  className?: string;
};

export type DisclosurePanelProps = {
  children: ReactNode;
  className?: string;
};

function Disclosure({ children, defaultOpen = false, className }: DisclosureProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <Collapsible.Root defaultOpen={defaultOpen}>
        {children}
      </Collapsible.Root>
    </div>
  );
}

export function DisclosureButton({ children, className }: DisclosureButtonProps) {
  return (
    <Collapsible.Trigger
      className={clsx(
        styles.button,
        className
      )}
    >
      {children}
    </Collapsible.Trigger>
  );
}

export function DisclosurePanel({ children, className }: DisclosurePanelProps) {
  return (
    <Collapsible.Panel
      className={clsx(styles.panel, className)}
    >
      {children}
    </Collapsible.Panel>
  );
}

export { Disclosure };

