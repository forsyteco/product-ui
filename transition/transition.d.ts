import { ReactNode } from 'react';
export type TransitionProps = {
    show?: boolean;
    children: ReactNode;
    className?: string;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
};
declare function Transition({ show, children, className, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo, }: TransitionProps): import("react").JSX.Element;
export default Transition;
//# sourceMappingURL=transition.d.ts.map