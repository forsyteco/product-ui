import { type ReactNode } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import { clsx } from 'clsx';
import styles from './dialog.module.css';

export type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export type DialogTitleProps = {
  children: ReactNode;
  className?: string;
};

export type DialogDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export type DialogPanelProps = {
  children: ReactNode;
  className?: string;
};

function Dialog({ open, onClose, children, className }: DialogProps) {
  return (
    <HeadlessDialog open={open} onClose={onClose}>
      <div className={clsx(styles.root, className)}>
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.container}>
          {children}
        </div>
      </div>
    </HeadlessDialog>
  );
}

export function DialogPanel({ children, className }: DialogPanelProps) {
  return (
    <HeadlessDialog.Panel
      className={clsx(
        styles.panel,
        className
      )}
    >
      {children}
    </HeadlessDialog.Panel>
  );
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <HeadlessDialog.Title className={clsx(styles.title, className)}>
      {children}
    </HeadlessDialog.Title>
  );
}

export function DialogDescription({ children, className }: DialogDescriptionProps) {
  return (
    <HeadlessDialog.Description className={clsx(styles.description, className)}>
      {children}
    </HeadlessDialog.Description>
  );
}

export { Dialog };

