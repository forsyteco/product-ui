import { ReactNode } from 'react';
export type ExpandedRowProps = Readonly<{
    id: string;
    colSpan: number;
    children: ReactNode;
    isCollapsing?: boolean;
}>;
declare function ExpandedRow({ id, colSpan, children, isCollapsing }: ExpandedRowProps): import("react").JSX.Element;
export default ExpandedRow;
//# sourceMappingURL=expanded-row.d.ts.map