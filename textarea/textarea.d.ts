import { TextareaHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const textareaVariants: (props?: ({
    error?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & VariantProps<typeof textareaVariants>;
declare function Textarea({ error, className, ...props }: TextareaProps): import("react").JSX.Element;
export default Textarea;
//# sourceMappingURL=textarea.d.ts.map