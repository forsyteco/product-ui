'use client';

import { Toaster, type ToasterProps } from 'sonner';
import styles from './toast.module.css';

export type ToastProps = ToasterProps;

export const Toast = ({ ...props }: ToastProps) => {
  return (
    <Toaster
      theme="system"
      className={styles.toaster}
      position="top-center"
      offset={{
        top: 'calc(16px + env(safe-area-inset-top))',
        bottom: 'calc(16px + env(safe-area-inset-bottom))',
        left: 'calc(16px + env(safe-area-inset-left))',
        right: 'calc(16px + env(safe-area-inset-right))',
      }}
      mobileOffset={{
        top: 'calc(8px + env(safe-area-inset-top))',
        bottom: 'calc(8px + env(safe-area-inset-bottom))',
        left: 'calc(8px + env(safe-area-inset-left))',
        right: 'calc(8px + env(safe-area-inset-right))',
      }}
      toastOptions={{
        classNames: {
          toast: styles.toast,
          description: styles.description,
          actionButton: styles['action-button'],
          cancelButton: styles['cancel-button'],
        },
      }}
      {...props}
    />
  );
};
