import { type ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { Button, type ButtonProps } from '../button';
import { cn } from '../utils/tailwind';

export type PopoverProps = {
  children: ReactNode;
  className?: string;
};

export type PopoverButtonProps = ButtonProps;

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

export function PopoverButton({ children, className, variant = 'outline', size, ...props }: PopoverButtonProps) {
  return (
    <HeadlessPopover.Button
      as={Button}
      variant={variant}
      size={size}
      className={cn(className)}
      {...props}
    >
      {children}
    </HeadlessPopover.Button>
  );
}

export function PopoverPanel({ children, className }: PopoverPanelProps) {
  return (
    <HeadlessPopover.Panel
      className={cn(
        'absolute z-10 mt-2 w-72 rounded-md bg-background shadow-lg ring-1 ring-border focus:outline-none',
        className
      )}
    >
      <div className="p-4">{children}</div>
    </HeadlessPopover.Panel>
  );
}

export { Popover };
export default Popover;

