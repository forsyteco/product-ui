import { type ReactElement, type ReactNode } from 'react';
import { Menu } from '@base-ui/react/menu';
import { Button, type ButtonProps } from '../button';
import { clsx } from 'clsx';
import styles from './dropdown-menu.module.css';

export type DropdownMenuProps = {
  trigger: ReactElement;
  children: ReactNode;
  className?: string;
  align?: 'left' | 'right';
};

export type DropdownMenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export type DropdownMenuButtonProps = {
  children: ReactNode;
  className?: string;
};

function DropdownMenu({ trigger, children, className, align = 'right' }: DropdownMenuProps) {
  return (
    <Menu.Root>
      <div className={clsx(styles.root, className)}>
        <Menu.Trigger render={trigger as ReactElement<Record<string, unknown>>} />
        <Menu.Portal>
          <Menu.Positioner sideOffset={8}>
            <Menu.Popup
              className={clsx(
                styles['menu-items'],
                align === 'left' ? styles['align-left'] : styles['align-right']
              )}
            >
              <div className={styles['menu-body']}>{children}</div>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </div>
    </Menu.Root>
  );
}

export function DropdownMenuItem({ children, onClick, disabled, className }: DropdownMenuItemProps) {
  return (
    <Menu.Item
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
      className={({ highlighted }) =>
        clsx(
          highlighted ? styles['item-active'] : styles['item-inactive']
        )
      }
    />
  );
}

export function DropdownMenuButton({ children, className, ...props }: DropdownMenuButtonProps & ButtonProps) {
  return (
    <Button variant="default" className={clsx(styles.button, className)} {...props}>
      {children}
    </Button>
  );
}

export { DropdownMenu };

