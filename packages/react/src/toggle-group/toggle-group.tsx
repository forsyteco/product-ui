import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import styles from './toggle-group.module.css';

export function ToggleGroup<Value extends string = string>(
  props: ComponentProps<typeof BaseToggleGroup<Value>>
) {
  const { className, ...rest } = props;
  return <BaseToggleGroup {...rest} className={clsx(styles.root, className)} />;
}
