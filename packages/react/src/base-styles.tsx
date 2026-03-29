import type React from 'react';
import type { CSSProperties, ElementType, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

import styles from './base-styles.module.css';

export type BaseStylesProps = PropsWithChildren<{
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  color?: string;
}>;

export function BaseStyles({
  children,
  color,
  className,
  as: Component = 'div',
  style,
  ...rest
}: BaseStylesProps) {
  const cssVars: CSSProperties = {
    ['--BaseStyles-fgColor' as string]: color,
  };

  return (
    <Component
      className={clsx(styles.root, className)}
      data-portal-root
      style={{ ...cssVars, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
}
