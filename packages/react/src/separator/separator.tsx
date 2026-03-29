import { Separator as BaseSeparator } from '@base-ui/react/separator';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './separator.module.css';

export function Separator(props: ComponentPropsWithoutRef<typeof BaseSeparator>) {
  const { className, ...rest } = props;
  return <BaseSeparator {...rest} className={clsx(styles.root, className)} />;
}
