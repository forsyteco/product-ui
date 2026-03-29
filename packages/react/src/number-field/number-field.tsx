import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './number-field.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseNumberField.Root>) {
  const { className, ...rest } = props;
  return <BaseNumberField.Root {...rest} className={clsx(styles.root, className)} />;
}

function Group(props: ComponentPropsWithoutRef<typeof BaseNumberField.Group>) {
  const { className, ...rest } = props;
  return <BaseNumberField.Group {...rest} className={clsx(styles.group, className)} />;
}

function Input(props: ComponentPropsWithoutRef<typeof BaseNumberField.Input>) {
  const { className, ...rest } = props;
  return <BaseNumberField.Input {...rest} className={clsx(styles.input, className)} />;
}

function Increment(props: ComponentPropsWithoutRef<typeof BaseNumberField.Increment>) {
  const { className, ...rest } = props;
  return <BaseNumberField.Increment {...rest} className={clsx(styles.button, className)} />;
}

function Decrement(props: ComponentPropsWithoutRef<typeof BaseNumberField.Decrement>) {
  const { className, ...rest } = props;
  return <BaseNumberField.Decrement {...rest} className={clsx(styles.button, className)} />;
}

export const NumberField = {
  Root,
  Group,
  Input,
  Increment,
  Decrement,
  ScrubArea: BaseNumberField.ScrubArea,
  ScrubAreaCursor: BaseNumberField.ScrubAreaCursor,
};
