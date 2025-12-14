export type RadioGroupOption = {
    id: string | number;
    label: string;
    value: string;
    description?: string;
};
export type RadioGroupProps = {
    options: RadioGroupOption[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    disabled?: boolean;
};
export type RadioGroupOptionProps = {
    option: RadioGroupOption;
    className?: string;
};
declare function RadioGroup({ options, value, onChange, className, disabled, }: RadioGroupProps): import("react").JSX.Element;
export default RadioGroup;
//# sourceMappingURL=radio-group.d.ts.map