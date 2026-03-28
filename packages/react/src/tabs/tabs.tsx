import { type ReactNode } from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { cn } from '../utils/cn';
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
    <div className={cn(styles.root, className)}>
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
        cn(
          styles.tab,
          selected
            ? styles.tabSelected
            : styles.tabUnselected,
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
    <HeadlessTab.Panels className={cn(styles.panels, className)}>
      {children}
    </HeadlessTab.Panels>
  );
}

export function TabPanel({ children, className }: TabPanelProps) {
  return (
    <HeadlessTab.Panel
      className={cn(
        styles.panel,
        className
      )}
    >
      {children}
    </HeadlessTab.Panel>
  );
}

export { Tabs };

