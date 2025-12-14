import { ReactNode } from 'react';
import { ButtonProps } from '../button';
export type PopoverProps = {
    children: ReactNode;
    className?: string;
};
export type PopoverButtonProps = ButtonProps;
export type PopoverPanelProps = {
    children: ReactNode;
    className?: string;
};
declare function Popover({ children, className }: PopoverProps): import("react").JSX.Element;
export declare function PopoverButton({ children, className, variant, size, ...props }: PopoverButtonProps): import("react").JSX.Element;
export declare function PopoverPanel({ children, className }: PopoverPanelProps): import("react").JSX.Element;
export default Popover;
//# sourceMappingURL=popover.d.ts.map