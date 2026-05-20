import { Field as BaseField } from '@base-ui/react/field';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './field.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseField.Root>) {
  const { className, ...rest } = props;
  return <BaseField.Root {...rest} className={clsx(styles.root, className)} />;
}

function Label(props: ComponentPropsWithoutRef<typeof BaseField.Label>) {
  const { className, ...rest } = props;
  return <BaseField.Label {...rest} className={clsx(styles.label, className)} />;
}

function Description(props: ComponentPropsWithoutRef<typeof BaseField.Description>) {
  const { className, ...rest } = props;
  return <BaseField.Description {...rest} className={clsx(styles.description, className)} />;
}

function Error(props: ComponentPropsWithoutRef<typeof BaseField.Error>) {
  const { className, ...rest } = props;
  return <BaseField.Error {...rest} className={clsx(styles.error, className)} />;
}

function Control(props: ComponentPropsWithoutRef<typeof BaseField.Control>) {
  const { className, ...rest } = props;
  return <BaseField.Control {...rest} className={clsx(styles.control, className)} />;
}

function Item(props: ComponentPropsWithoutRef<typeof BaseField.Item>) {
  const { className, ...rest } = props;
  return <BaseField.Item {...rest} className={clsx(styles.item, className)} />;
}

function Validity(props: ComponentPropsWithoutRef<typeof BaseField.Validity>) {
  return <BaseField.Validity {...props} />;
}

export const Field = {
  Root,
  Label,
  Description,
  Error,
  Control,
  Item,
  Validity,
};
