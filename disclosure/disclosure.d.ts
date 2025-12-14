import { ReactNode } from 'react';
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
declare function Disclosure({ children, defaultOpen, className }: DisclosureProps): import("react").JSX.Element;
export declare function DisclosureButton({ children, className }: DisclosureButtonProps): import("react").JSX.Element;
export declare function DisclosurePanel({ children, className }: DisclosurePanelProps): import("react").JSX.Element;
export default Disclosure;
//# sourceMappingURL=disclosure.d.ts.map