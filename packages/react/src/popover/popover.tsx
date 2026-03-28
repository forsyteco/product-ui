import { type ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { Button, type ButtonProps } from '../button';
import { cn } from '../utils/cn';
import styles from './popover.module.css';

export type PopoverProps = {
  children: ReactNode;
  className?: string;
};

export type PopoverTriggerProps = ButtonProps;

export type PopoverContentProps = {
  children: ReactNode;
  className?: string;
};

function Popover({ children, className }: PopoverProps) {
  return (
    <div className={cn(styles.root, className)}>
      <HeadlessPopover>
        {children}
      </HeadlessPopover>
    </div>
  );
}

export function PopoverTrigger({ children, className, variant = 'outline', size, ...props }: PopoverTriggerProps) {
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

export function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <HeadlessPopover.Panel
      className={cn(
        styles.panel,
        className
      )}
    >
      <div className={styles.body}>{children}</div>
    </HeadlessPopover.Panel>
  );
}

export { Popover };

