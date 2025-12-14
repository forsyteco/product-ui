import { ReactNode } from 'react';
export type ComboboxOption = {
    id: string | number;
    label: string;
    value: string;
};
export type ComboboxProps = {
    options: ComboboxOption[];
    value?: ComboboxOption | null;
    onChange?: (value: ComboboxOption) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
};
export type ComboboxInputProps = {
    className?: string;
};
export type ComboboxOptionsProps = {
    children: ReactNode;
    className?: string;
};
export type ComboboxOptionProps = {
    option: ComboboxOption;
    className?: string;
};
declare function Combobox({ options, value, onChange, placeholder, className, disabled, }: ComboboxProps): import("react").JSX.Element;
export default Combobox;
//# sourceMappingURL=combobox.d.ts.map