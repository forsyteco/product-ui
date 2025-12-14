import { VariantProps } from 'class-variance-authority';
declare const switchVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SwitchProps = Omit<VariantProps<typeof switchVariants>, 'disabled'> & {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    description?: string;
    disabled?: boolean;
    className?: string;
};
declare function Switch({ checked, onChange, label, description, disabled, size, className, }: SwitchProps): import("react").JSX.Element;
export default Switch;
//# sourceMappingURL=switch.d.ts.map