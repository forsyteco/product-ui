import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './checkbox-group.module.css';

export function CheckboxGroup(props: ComponentPropsWithoutRef<typeof BaseCheckboxGroup>) {
  const { className, ...rest } = props;
  return <BaseCheckboxGroup {...rest} className={clsx(styles.root, className)} />;
}
