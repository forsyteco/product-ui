import { type ReactNode } from 'react';
import { Disclosure as HeadlessDisclosure } from '@headlessui/react';
import { cn } from '../utils/cn';
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
    <div className={cn(styles.root, className)}>
      <HeadlessDisclosure defaultOpen={defaultOpen}>
        {children}
      </HeadlessDisclosure>
    </div>
  );
}

export function DisclosureButton({ children, className }: DisclosureButtonProps) {
  return (
    <HeadlessDisclosure.Button
      className={cn(
        styles.button,
        className
      )}
    >
      {children}
    </HeadlessDisclosure.Button>
  );
}

export function DisclosurePanel({ children, className }: DisclosurePanelProps) {
  return (
    <HeadlessDisclosure.Panel
      className={cn(styles.panel, className)}
    >
      {children}
    </HeadlessDisclosure.Panel>
  );
}

export { Disclosure };

