import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const counterLabelVariants: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type CounterLabelProps = Omit<React.ComponentProps<'span'>, 'children'> & VariantProps<typeof counterLabelVariants> & {
    children?: ReactNode;
};
declare const CounterLabel: import('react').ForwardRefExoticComponent<Omit<CounterLabelProps, "ref"> & import('react').RefAttributes<HTMLSpanElement>>;
export default CounterLabel;
//# sourceMappingURL=counter-label.d.ts.map