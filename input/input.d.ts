import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const inputVariants: (props?: ({
    size?: "sm" | "lg" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InputProps = Pick<React.ComponentProps<'input'>, 'type' | 'className' | 'placeholder' | 'id' | 'value' | 'defaultValue' | 'disabled' | 'readOnly' | 'aria-invalid' | 'aria-describedby' | 'autoFocus' | 'autoCapitalize' | 'autoComplete' | 'autoCorrect' | 'onBlur' | 'onChange' | 'onKeyDown' | 'inputMode'> & VariantProps<typeof inputVariants> & {
    ref?: React.Ref<HTMLInputElement | null>;
    startElement?: React.ReactNode;
    endElement?: React.ReactNode;
    inputClassName?: string;
};
declare function Input({ ref, className, inputClassName, type, startElement, endElement, size, ...props }: InputProps): React.JSX.Element;
export default Input;
//# sourceMappingURL=input.d.ts.map