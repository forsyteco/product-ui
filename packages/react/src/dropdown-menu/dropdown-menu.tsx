import { Fragment, type ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
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
            'absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
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
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={cn(
            'block w-full px-4 py-2 text-left text-sm',
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
}

export function DropdownMenuButton({ children, className }: DropdownMenuButtonProps) {
  return (
    <Menu.Button
      className={cn(
        'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
        className
      )}
    >
      {children}
    </Menu.Button>
  );
}

export default DropdownMenu;

