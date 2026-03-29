import { Menubar as BaseMenubar } from '@base-ui/react/menubar';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './menubar.module.css';

export function Menubar(props: ComponentPropsWithoutRef<typeof BaseMenubar>) {
  const { className, ...rest } = props;
  return <BaseMenubar {...rest} className={clsx(styles.root, className)} />;
}
