import { FieldsetHTMLAttributes, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const fieldsetVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & VariantProps<typeof fieldsetVariants> & {
    legend?: string;
    children: ReactNode;
};
declare function Fieldset({ legend, children, variant, className, ...props }: FieldsetProps): import("react").JSX.Element;
export default Fieldset;
//# sourceMappingURL=fieldset.d.ts.map