import { type ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { Button, type ButtonProps } from '../button';
import { clsx } from 'clsx';
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
    <div className={clsx(styles.root, className)}>
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
      className={clsx(className)}
      {...props}
    >
      {children}
    </HeadlessPopover.Button>
  );
}

export function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <HeadlessPopover.Panel
      className={clsx(
        styles.panel,
        className
      )}
    >
      <div className={styles.body}>{children}</div>
    </HeadlessPopover.Panel>
  );
}

export { Popover };

