import { type ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { cn } from '../utils/tailwind';

export type PopoverProps = {
  children: ReactNode;
  className?: string;
};

export type PopoverButtonProps = {
  children: ReactNode;
  className?: string;
};

export type PopoverPanelProps = {
  children: ReactNode;
  className?: string;
};

function Popover({ children, className }: PopoverProps) {
  return (
    <div className={cn('relative', className)}>
      <HeadlessPopover>
        {children}
      </HeadlessPopover>
    </div>
  );
}

export function PopoverButton({ children, className }: PopoverButtonProps) {
  return (
    <HeadlessPopover.Button
      className={cn(
        'inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
        className
      )}
    >
      {children}
    </HeadlessPopover.Button>
  );
}

export function PopoverPanel({ children, className }: PopoverPanelProps) {
  return (
    <HeadlessPopover.Panel
      className={cn(
        'absolute z-10 mt-2 w-72 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
        className
      )}
    >
      <div className="p-4">{children}</div>
    </HeadlessPopover.Panel>
  );
}

export default Popover;

