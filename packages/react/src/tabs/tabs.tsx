import { createContext, useContext, useMemo, useRef, type ReactNode } from 'react';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';
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
  value?: string | number;
};

export type TabPanelsProps = {
  children: ReactNode;
  className?: string;
};

export type TabPanelProps = {
  children: ReactNode;
  className?: string;
  value?: string | number;
};

type TabsValue = string | number;
type TabsRegistrationContextValue = {
  nextTabValue: () => number;
  nextPanelValue: () => number;
};

const TabsRegistrationContext = createContext<TabsRegistrationContextValue | null>(null);

function useTabValue(provided?: TabsValue) {
  const ctx = useContext(TabsRegistrationContext);
  const valueRef = useRef<TabsValue | undefined>(provided);
  if (valueRef.current === undefined && ctx) {
    valueRef.current = ctx.nextTabValue();
  }
  return valueRef.current ?? 0;
}

function usePanelValue(provided?: TabsValue) {
  const ctx = useContext(TabsRegistrationContext);
  const valueRef = useRef<TabsValue | undefined>(provided);
  if (valueRef.current === undefined && ctx) {
    valueRef.current = ctx.nextPanelValue();
  }
  return valueRef.current ?? 0;
}

function Tabs({ children, defaultIndex, selectedIndex, onChange, className }: TabsProps) {
  const registrationContext = useMemo<TabsRegistrationContextValue>(() => {
    let tabCounter = 0;
    let panelCounter = 0;
    return {
      nextTabValue: () => tabCounter++,
      nextPanelValue: () => panelCounter++,
    };
  }, []);

  return (
    <BaseTabs.Root
      defaultValue={defaultIndex}
      value={selectedIndex}
      onValueChange={(value) => onChange?.(Number(value))}
      className={clsx(styles.root, className)}
    >
      <TabsRegistrationContext.Provider value={registrationContext}>
        {children}
      </TabsRegistrationContext.Provider>
    </BaseTabs.Root>
  );
}

export function TabList({ children, className }: TabListProps) {
  return (
    <BaseTabs.List
      className={clsx(
        styles.list,
        className
      )}
    >
      {children}
    </BaseTabs.List>
  );
}

export function Tab({ children, className, value }: TabProps) {
  const resolvedValue = useTabValue(value);
  return (
    <BaseTabs.Tab
      value={resolvedValue}
      className={({ active }) =>
        clsx(
          styles.tab,
          active
            ? styles['tab-selected']
            : styles['tab-unselected'],
          className
        )
      }
    >
      {children}
    </BaseTabs.Tab>
  );
}

export function TabPanels({ children, className }: TabPanelsProps) {
  return (
    <div className={clsx(styles.panels, className)}>
      {children}
    </div>
  );
}

export function TabPanel({ children, className, value }: TabPanelProps) {
  const resolvedValue = usePanelValue(value);
  return (
    <BaseTabs.Panel
      value={resolvedValue}
      className={clsx(
        styles.panel,
        className
      )}
    >
      {children}
    </BaseTabs.Panel>
  );
}

export { Tabs };

