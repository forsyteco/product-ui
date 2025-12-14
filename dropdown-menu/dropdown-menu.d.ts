import { ReactNode } from 'react';
import { ButtonProps } from '../button';
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
declare function DropdownMenu({ trigger, children, className, align }: DropdownMenuProps): import("react").JSX.Element;
export declare function DropdownMenuItem({ children, onClick, disabled, className }: DropdownMenuItemProps): import("react").JSX.Element;
export declare function DropdownMenuButton({ children, className, ...props }: DropdownMenuButtonProps & ButtonProps): import("react").JSX.Element;
export default DropdownMenu;
//# sourceMappingURL=dropdown-menu.d.ts.map