import { Fragment, type ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Button, { type ButtonProps } from '../button';
import { cn } from '../utils/tailwind';

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
    <Menu as="div" className={cn('relative inline-block text-left', className)}>
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
          className={cn(
            'absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-border focus:outline-none',
            align === 'left' ? 'left-0' : 'right-0'
          )}
        >
          <div className="py-1">{children}</div>
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
          className={cn(
            'w-full justify-start rounded-none px-4 py-2 text-left disabled:cursor-not-allowed',
            active && 'bg-accent text-accent-foreground hover:bg-accent',
            !active && 'hover:bg-muted',
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
      variant="outline"
      className={cn('w-full justify-center gap-x-1.5', className)}
      {...props}
    >
      {children}
    </Menu.Button>
  );
}

export default DropdownMenu;

