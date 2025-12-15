import { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const iconButtonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | null | undefined;
    shape?: "square" | "circle" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type IconComponent = ComponentType<{
    className?: string;
}>;
type BaseIconButtonProps = {
    icon: IconComponent;
    children?: ReactNode;
    description?: string;
    inactive?: boolean;
    loading?: boolean;
    keybindingHint?: string;
    tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
    className?: string;
    'aria-label': string;
};
type IconButtonAsButton = BaseIconButtonProps & VariantProps<typeof iconButtonVariants> & Omit<ComponentPropsWithoutRef<'button'>, keyof BaseIconButtonProps | 'as' | 'href' | 'children'> & {
    as?: 'button';
    href?: never;
};
type IconButtonAsAnchor = BaseIconButtonProps & VariantProps<typeof iconButtonVariants> & Omit<ComponentPropsWithoutRef<'a'>, keyof BaseIconButtonProps | 'as' | 'children'> & {
    as: 'a';
    href: string;
};
export type IconButtonProps = IconButtonAsButton | IconButtonAsAnchor;
declare const IconButton: import('react').ForwardRefExoticComponent<IconButtonProps & import('react').RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export { IconButton, iconButtonVariants };
export default IconButton;
//# sourceMappingURL=icon-button.d.ts.map