import { type ReactNode } from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { clsx } from 'clsx';
import styles from './dialog.module.css';

export type DialogProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
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

function Dialog({ open, defaultOpen, onClose, onOpenChange, children, className }: Readonly<DialogProps>) {
  return (
    <BaseDialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(next) => {
        onOpenChange?.(next);
        if (!next) onClose?.();
      }}
    >
      <BaseDialog.Portal>
        <div className={clsx(styles.root, className)}>
          <BaseDialog.Backdrop className={styles.overlay} />
          <div className={styles.container}>
            {children}
          </div>
        </div>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}

export function DialogPanel({ children, className }: Readonly<DialogPanelProps>) {
  return (
    <BaseDialog.Popup className={clsx(styles.panel, className)}>
      {children}
    </BaseDialog.Popup>
  );
}

export function DialogTitle({ children, className }: Readonly<DialogTitleProps>) {
  return (
    <BaseDialog.Title className={clsx(styles.title, className)}>
      {children}
    </BaseDialog.Title>
  );
}

export function DialogDescription({ children, className }: Readonly<DialogDescriptionProps>) {
  return (
    <BaseDialog.Description className={clsx(styles.description, className)}>
      {children}
    </BaseDialog.Description>
  );
}

export { Dialog };

