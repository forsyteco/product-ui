import { type ReactNode } from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { cn } from '../utils/tailwind';

export type TabsProps = {
  children: ReactNode;
  defaultIndex?: number;
  selectedIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
};

export type TabListProps = {
  children: ReactNode;
  className?: string;
};

export type TabProps = {
  children: ReactNode;
  className?: string;
};

export type TabPanelsProps = {
  children: ReactNode;
  className?: string;
};

export type TabPanelProps = {
  children: ReactNode;
  className?: string;
};

function Tabs({ children, defaultIndex, selectedIndex, onChange, className }: TabsProps) {
  return (
    <div className={cn('w-full', className)}>
      <HeadlessTab.Group
        defaultIndex={defaultIndex}
        selectedIndex={selectedIndex}
        onChange={onChange}
      >
        {children}
      </HeadlessTab.Group>
    </div>
  );
}

export function TabList({ children, className }: TabListProps) {
  return (
    <HeadlessTab.List
      className={cn(
        'flex space-x-1 rounded-xl bg-gray-100 p-1',
        className
      )}
    >
      {children}
    </HeadlessTab.List>
  );
}

export function Tab({ children, className }: TabProps) {
  return (
    <HeadlessTab
      className={({ selected }) =>
        cn(
          'w-full rounded-lg py-2.5 text-base font-medium leading-5',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          selected
            ? 'bg-white text-gray-900 shadow'
            : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-900',
          className
        )
      }
    >
      {children}
    </HeadlessTab>
  );
}

export function TabPanels({ children, className }: TabPanelsProps) {
  return (
    <HeadlessTab.Panels className={cn('mt-2', className)}>
      {children}
    </HeadlessTab.Panels>
  );
}

export function TabPanel({ children, className }: TabPanelProps) {
  return (
    <HeadlessTab.Panel
      className={cn(
        'rounded-xl bg-white p-3',
        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        className
      )}
    >
      {children}
    </HeadlessTab.Panel>
  );
}

export { Tabs };

