import { type ReactElement, type ReactNode } from 'react';
import { Menu as BaseUIMenu } from '@base-ui/react/menu';
import { Button, type ButtonProps } from '../button';
import { clsx } from 'clsx';
import styles from './menu.module.css';

export type MenuProps = {
  trigger: ReactElement;
  children: ReactNode;
  className?: string;
  align?: 'left' | 'right';
};

export type MenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export type MenuButtonProps = {
  children: ReactNode;
  className?: string;
};

function Menu({ trigger, children, className, align = 'right' }: Readonly<MenuProps>) {
  return (
    <BaseUIMenu.Root>
      <div className={clsx(styles.root, className)}>
        <BaseUIMenu.Trigger render={trigger as ReactElement<Record<string, unknown>>} />
        <BaseUIMenu.Portal>
          <BaseUIMenu.Positioner sideOffset={8}>
            <BaseUIMenu.Popup
              className={clsx(
                styles.popup,
                align === 'left' ? styles['align-left'] : styles['align-right']
              )}
            >
              <div className={styles.body}>{children}</div>
            </BaseUIMenu.Popup>
          </BaseUIMenu.Positioner>
        </BaseUIMenu.Portal>
      </div>
    </BaseUIMenu.Root>
  );
}

export function MenuItem({ children, onClick, disabled, className }: Readonly<MenuItemProps>) {
  return (
    <BaseUIMenu.Item
      disabled={disabled}
      onClick={onClick}
      nativeButton
      render={
        <Button
          type="button"
          variant="ghost"
          disabled={disabled}
          className={clsx(
            styles.item,
            className
          )}
        >
          {children}
        </Button>
      }
      className={styles.itemState}
    />
  );
}

export function MenuButton({ children, className, ...props }: MenuButtonProps & ButtonProps) {
  return (
    <Button variant="default" className={clsx(styles.button, className)} {...props}>
      {children}
    </Button>
  );
}

export { Menu };
