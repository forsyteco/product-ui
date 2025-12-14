import { ReactNode } from 'react';
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
declare function Tabs({ children, defaultIndex, selectedIndex, onChange, className }: TabsProps): import("react").JSX.Element;
export declare function TabList({ children, className }: TabListProps): import("react").JSX.Element;
export declare function Tab({ children, className }: TabProps): import("react").JSX.Element;
export declare function TabPanels({ children, className }: TabPanelsProps): import("react").JSX.Element;
export declare function TabPanel({ children, className }: TabPanelProps): import("react").JSX.Element;
export default Tabs;
//# sourceMappingURL=tabs.d.ts.map