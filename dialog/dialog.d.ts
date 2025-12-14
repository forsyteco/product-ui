import { ReactNode } from 'react';
export type DialogProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
};
export type DialogTitleProps = {
    children: ReactNode;
    className?: string;
};
export type DialogDescriptionProps = {
    children: ReactNode;
    className?: string;
};
export type DialogPanelProps = {
    children: ReactNode;
    className?: string;
};
declare function Dialog({ open, onClose, children, className }: DialogProps): import("react").JSX.Element;
export declare function DialogPanel({ children, className }: DialogPanelProps): import("react").JSX.Element;
export declare function DialogTitle({ children, className }: DialogTitleProps): import("react").JSX.Element;
export declare function DialogDescription({ children, className }: DialogDescriptionProps): import("react").JSX.Element;
export default Dialog;
//# sourceMappingURL=dialog.d.ts.map