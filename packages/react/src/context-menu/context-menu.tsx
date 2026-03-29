import { type ReactNode } from 'react';
import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu';
import { Button } from '../button';
import { clsx } from 'clsx';
import styles from './context-menu.module.css';

function Root(props: React.ComponentPropsWithoutRef<typeof BaseContextMenu.Root>) {
  return <BaseContextMenu.Root {...props} />;
}

function Trigger(props: React.ComponentPropsWithoutRef<typeof BaseContextMenu.Trigger>) {
  const { className, ...rest } = props;
  return <BaseContextMenu.Trigger {...rest} className={clsx(styles.trigger, className)} />;
}

function Portal(props: React.ComponentPropsWithoutRef<typeof BaseContextMenu.Portal>) {
  return <BaseContextMenu.Portal {...props} />;
}

function Positioner(props: React.ComponentPropsWithoutRef<typeof BaseContextMenu.Positioner>) {
  const { className, ...rest } = props;
  return <BaseContextMenu.Positioner {...rest} className={clsx(styles.positioner, className)} />;
}

function Popup(props: React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup>) {
  const { className, ...rest } = props;
  return <BaseContextMenu.Popup {...rest} className={clsx(styles.popup, className)} />;
}

export type ContextMenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export function ContextMenuItem({ children, onClick, disabled, className }: Readonly<ContextMenuItemProps>) {
  return (
    <BaseContextMenu.Item
      disabled={disabled}
      onClick={onClick}
      nativeButton
      render={
        <Button
          type="button"
          variant="ghost"
          disabled={disabled}
          className={clsx(styles.item, className)}
        >
          {children}
        </Button>
      }
      className={styles.itemState}
    />
  );
}

export const ContextMenu = {
  Root,
  Trigger,
  Portal,
  Positioner,
  Popup,
  Item: ContextMenuItem,
};
