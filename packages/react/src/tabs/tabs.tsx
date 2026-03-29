import { type ReactNode } from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { clsx } from 'clsx';
import styles from './tabs.module.css';

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
    <div className={clsx(styles.root, className)}>
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
      className={clsx(
        styles.list,
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
        clsx(
          styles.tab,
          selected
            ? styles['tab-selected']
            : styles['tab-unselected'],
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
    <HeadlessTab.Panels className={clsx(styles.panels, className)}>
      {children}
    </HeadlessTab.Panels>
  );
}

export function TabPanel({ children, className }: TabPanelProps) {
  return (
    <HeadlessTab.Panel
      className={clsx(
        styles.panel,
        className
      )}
    >
      {children}
    </HeadlessTab.Panel>
  );
}

export { Tabs };

