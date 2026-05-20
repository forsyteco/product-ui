import { Toolbar as BaseToolbar } from '@base-ui/react/toolbar';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './toolbar.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseToolbar.Root>) {
  const { className, ...rest } = props;
  return <BaseToolbar.Root {...rest} className={clsx(styles.root, className)} />;
}

function Group(props: ComponentPropsWithoutRef<typeof BaseToolbar.Group>) {
  const { className, ...rest } = props;
  return <BaseToolbar.Group {...rest} className={clsx(styles.group, className)} />;
}

function Button(props: ComponentPropsWithoutRef<typeof BaseToolbar.Button>) {
  const { className, ...rest } = props;
  return <BaseToolbar.Button {...rest} className={clsx(styles.button, className)} />;
}

function Link(props: ComponentPropsWithoutRef<typeof BaseToolbar.Link>) {
  const { className, ...rest } = props;
  return <BaseToolbar.Link {...rest} className={clsx(styles.link, className)} />;
}

function Input(props: ComponentPropsWithoutRef<typeof BaseToolbar.Input>) {
  const { className, ...rest } = props;
  return <BaseToolbar.Input {...rest} className={clsx(styles.input, className)} />;
}

function Separator(props: ComponentPropsWithoutRef<typeof BaseToolbar.Separator>) {
  const { className, ...rest } = props;
  return <BaseToolbar.Separator {...rest} className={clsx(styles.separator, className)} />;
}

export const Toolbar = {
  Root,
  Group,
  Button,
  Link,
  Input,
  Separator,
};
