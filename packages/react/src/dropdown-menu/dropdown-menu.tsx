import { Fragment, type ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Button, type ButtonProps } from '../button';
import { clsx } from 'clsx';
import styles from './dropdown-menu.module.css';

export type DropdownMenuProps = {
  trigger: ReactNode;
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
    <Menu as="div" className={clsx(styles.root, className)}>
      <Menu.Button as={Fragment}>{trigger}</Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            styles['menu-items'],
            align === 'left' ? styles['align-left'] : styles['align-right']
          )}
        >
          <div className={styles['menu-body']}>{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function DropdownMenuItem({ children, onClick, disabled, className }: DropdownMenuItemProps) {
  return (
    <Menu.Item disabled={disabled}>
      {({ active }) => (
        <Button
          type="button"
          variant="ghost"
          onClick={onClick}
          disabled={disabled}
          className={clsx(
            styles.item,
            active ? styles['item-active'] : styles['item-inactive'],
            className
          )}
        >
          {children}
        </Button>
      )}
    </Menu.Item>
  );
}

export function DropdownMenuButton({ children, className, ...props }: DropdownMenuButtonProps & ButtonProps) {
  return (
    <Menu.Button
      as={Button}
      variant="default"
      className={clsx(styles.button, className)}
      {...props}
    >
      {children}
    </Menu.Button>
  );
}

export { DropdownMenu };

