import { type ReactNode } from 'react';
import { Disclosure as HeadlessDisclosure } from '@headlessui/react';
import { cn } from '../utils/tailwind';

export type DisclosureProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export type DisclosureButtonProps = {
  children: ReactNode;
  className?: string;
};

export type DisclosurePanelProps = {
  children: ReactNode;
  className?: string;
};

function Disclosure({ children, defaultOpen = false, className }: DisclosureProps) {
  return (
    <div className={cn('w-full', className)}>
      <HeadlessDisclosure defaultOpen={defaultOpen}>
        {children}
      </HeadlessDisclosure>
    </div>
  );
}

export function DisclosureButton({ children, className }: DisclosureButtonProps) {
  return (
    <HeadlessDisclosure.Button
      className={cn(
        'flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75',
        className
      )}
    >
      {children}
    </HeadlessDisclosure.Button>
  );
}

export function DisclosurePanel({ children, className }: DisclosurePanelProps) {
  return (
    <HeadlessDisclosure.Panel
      className={cn('px-4 pb-2 pt-4 text-base text-gray-500', className)}
    >
      {children}
    </HeadlessDisclosure.Panel>
  );
}

export { Disclosure };

