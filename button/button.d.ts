import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
export type ButtonProps = ComponentPropsWithoutRef<'button'> & VariantProps<typeof buttonVariants> & {
    children?: ReactNode;
};
export declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const Button: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "destructive" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & {
    children?: ReactNode;
} & import('react').RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=button.d.ts.map