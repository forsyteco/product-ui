'use client';

import BoringAvatarComponent from 'boring-avatars';
import { Avatar as AvatarPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '../utils/cn';
import styles from './avatar.module.css';

const BORING_AVATAR_COLORS = [
    "#ff0000","#0000ff"
] as const;

export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root>;

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(styles.root, className)}
      {...props}
    />
  );
}

export type AvatarImageProps = React.ComponentPropsWithoutRef<'img'>;

function AvatarImage({ className, ...props }: AvatarImageProps) {
  // Render a real <img> so tests and consumers can rely on DOM semantics,
  // while still letting Radix control loading/fallback behavior.
  return (
    <AvatarPrimitive.Image asChild>
      <img
        data-slot="avatar-image"
        className={cn(styles.image, className)}
        {...props}
      />
    </AvatarPrimitive.Image>
  );
}

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

export type AvatarFallbackProps =
  | AvatarFallbackDefaultProps
  | AvatarFallbackInitialsProps
  | AvatarFallbackBoringProps;

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join('');
}

function AvatarFallback(props: AvatarFallbackProps) {
  switch (props.variant) {
    case undefined:
    case 'default': {
      const { variant, children, className, ...rest } = props;

      return (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={cn(
            styles.fallback,
            className
          )}
          {...rest}
        >
          {children}
        </AvatarPrimitive.Fallback>
      );
    }

    case 'initials': {
      const { variant, name, className, ...rest } = props;

      return (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={cn(
            styles.fallback,
            className
          )}
          {...rest}
        >
          {getInitials(name)}
        </AvatarPrimitive.Fallback>
      );
    }

    case 'boring': {
      const { variant, name, className, ...rest } = props;

      return (
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={cn(styles.fallbackBoring, className)}
          asChild
          {...rest}
        >
          <div className={styles.boringContainer}>
            <BoringAvatarComponent
              variant="beam"
              name={name}
              className={styles.boringAvatar}
              colors={[...BORING_AVATAR_COLORS]}
            />
            <span className={styles.boringInitials}>
              {getInitials(name)}
            </span>
          </div>
        </AvatarPrimitive.Fallback>
      );
    }
  }
}

export { Avatar, AvatarFallback, AvatarImage };