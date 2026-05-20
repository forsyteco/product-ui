import { Form as BaseForm } from '@base-ui/react/form';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import styles from './form.module.css';

export function Form(props: ComponentProps<typeof BaseForm>) {
  const { className, ...rest } = props;
  return <BaseForm {...rest} className={clsx(styles.root, className)} />;
}
