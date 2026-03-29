import { type ReactNode } from 'react';
import { Popover as BasePopover } from '@base-ui/react/popover';
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
    <BasePopover.Root>
      <div className={clsx(styles.root, className)}>
        {children}
      </div>
    </BasePopover.Root>
  );
}

export function PopoverTrigger({ children, className, variant = 'default', size, ...props }: PopoverTriggerProps) {
  return (
    <BasePopover.Trigger render={<Button variant={variant} size={size} className={clsx(className)} />} {...props}>
      {children}
    </BasePopover.Trigger>
  );
}

export function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner sideOffset={8}>
        <BasePopover.Popup className={clsx(styles.panel, className)}>
          <div className={styles.body}>{children}</div>
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

export { Popover };

