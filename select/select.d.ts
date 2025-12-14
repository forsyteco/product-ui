import { SelectHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
export type SelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
declare const selectVariants: (props?: ({
    error?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & VariantProps<typeof selectVariants> & {
    options: SelectOption[];
    placeholder?: string;
};
declare function Select({ options, placeholder, error, className, ...props }: SelectProps): import("react").JSX.Element;
export default Select;
//# sourceMappingURL=select.d.ts.map