import { InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const checkboxVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & VariantProps<typeof checkboxVariants> & {
    label?: string;
};
declare function Checkbox({ label, size, className, id, ...props }: CheckboxProps): import("react").JSX.Element;
export default Checkbox;
//# sourceMappingURL=checkbox.d.ts.map