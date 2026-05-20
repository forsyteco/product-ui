'use client';

import BoringAvatarComponent from 'boring-avatars';
import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import * as React from 'react';

import { clsx } from 'clsx';
import styles from './avatar.module.css';

const BORING_AVATAR_COLORS = [
    "#ff0000","#0000ff"
] as const;

export type AvatarProps = React.ComponentProps<typeof BaseAvatar.Root>;

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <BaseAvatar.Root
      data-slot="avatar"
      className={clsx(styles.root, className)}
      {...props}
    />
  );
}

export type AvatarImageProps = React.ComponentPropsWithoutRef<'img'>;

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <BaseAvatar.Image
      data-slot="avatar-image"
      className={clsx(styles.image, className)}
      {...props}
    />
  );
}

type AvatarFallbackBaseProps = Omit<React.ComponentProps<typeof BaseAvatar.Fallback>, 'children'> & {
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
        <BaseAvatar.Fallback
          data-slot="avatar-fallback"
          className={clsx(
            styles.fallback,
            className
          )}
          {...rest}
        >
          {children}
        </BaseAvatar.Fallback>
      );
    }

    case 'initials': {
      const { variant, name, className, ...rest } = props;

      return (
        <BaseAvatar.Fallback
          data-slot="avatar-fallback"
          className={clsx(
            styles.fallback,
            className
          )}
          {...rest}
        >
          {getInitials(name)}
        </BaseAvatar.Fallback>
      );
    }

    case 'boring': {
      const { variant, name, className, ...rest } = props;

      return (
        <BaseAvatar.Fallback
          data-slot="avatar-fallback"
          className={clsx(styles.fallback, styles['fallback-boring'], className)}
          {...rest}
        >
          <div className={styles['boring-container']}>
            <BoringAvatarComponent
              variant="beam"
              name={name}
              className={styles['boring-avatar']}
              colors={[...BORING_AVATAR_COLORS]}
            />
            <span className={styles['boring-initials']}>
              {getInitials(name)}
            </span>
          </div>
        </BaseAvatar.Fallback>
      );
    }
  }
}

export { Avatar, AvatarFallback, AvatarImage };