import { Toggle as BaseToggle } from '@base-ui/react/toggle';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import styles from './toggle.module.css';

export function Toggle<Value extends string = string>(props: ComponentProps<typeof BaseToggle<Value>>) {
  const { className, ...rest } = props;
  return <BaseToggle {...rest} className={clsx(styles.root, className)} />;
}
