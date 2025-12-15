import { type ReactNode } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import { cn } from '../utils/tailwind';

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
      <div className={cn('relative z-50', className)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {children}
        </div>
      </div>
    </HeadlessDialog>
  );
}

export function DialogPanel({ children, className }: DialogPanelProps) {
  return (
    <HeadlessDialog.Panel
      className={cn(
        'w-full max-w-md rounded-lg bg-white p-6 shadow-xl',
        className
      )}
    >
      {children}
    </HeadlessDialog.Panel>
  );
}

export function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <HeadlessDialog.Title className={cn('text-lg font-medium text-gray-900', className)}>
      {children}
    </HeadlessDialog.Title>
  );
}

export function DialogDescription({ children, className }: DialogDescriptionProps) {
  return (
    <HeadlessDialog.Description className={cn('mt-2 text-base text-gray-600', className)}>
      {children}
    </HeadlessDialog.Description>
  );
}

export default Dialog;

