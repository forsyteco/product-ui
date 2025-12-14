import { ReactNode } from 'react';
export type ListboxOption = {
    id: string | number;
    label: string;
    value: string;
    disabled?: boolean;
};
export type ListboxProps = {
    options: ListboxOption[];
    value?: ListboxOption | null;
    onChange?: (value: ListboxOption) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
};
export type ListboxButtonProps = {
    children: ReactNode;
    className?: string;
};
export type ListboxOptionsProps = {
    children: ReactNode;
    className?: string;
};
export type ListboxOptionProps = {
    option: ListboxOption;
    className?: string;
};
declare function Listbox({ options, value, onChange, placeholder, className, disabled, }: ListboxProps): import("react").JSX.Element;
export default Listbox;
//# sourceMappingURL=listbox.d.ts.map