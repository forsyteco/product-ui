import { Avatar as AvatarPrimitive } from 'radix-ui';
import * as React from 'react';
export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
declare function Avatar({ className, ...props }: AvatarProps): React.JSX.Element;
export type AvatarImageProps = React.ComponentPropsWithoutRef<'img'>;
declare function AvatarImage({ className, ...props }: AvatarImageProps): React.JSX.Element;
type AvatarFallbackBaseProps = Omit<React.ComponentProps<typeof AvatarPrimitive.Fallback>, 'children'> & {
    className?: string;
};
type AvatarFallbackDefaultProps = AvatarFallbackBaseProps & {
    variant?: 'default';
    children?: React.ReactNode;
};
type AvatarFallbackInitialsProps = AvatarFallbackBaseProps & {
    variant: 'initials';
    name: string;
};
type AvatarFallbackBoringProps = AvatarFallbackBaseProps & {
    variant: 'boring';
    name: string;
};
export type AvatarFallbackProps = AvatarFallbackDefaultProps | AvatarFallbackInitialsProps | AvatarFallbackBoringProps;
declare function AvatarFallback(props: AvatarFallbackProps): React.JSX.Element;
export { Avatar, AvatarFallback, AvatarImage };
export default Avatar;
//# sourceMappingURL=avatar.d.ts.map