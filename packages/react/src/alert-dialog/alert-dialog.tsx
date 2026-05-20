import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './alert-dialog.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Root>) {
  return <BaseAlertDialog.Root {...props} />;
}

function Trigger(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Trigger>) {
  const { className, ...rest } = props;
  return <BaseAlertDialog.Trigger {...rest} className={clsx(styles.trigger, className)} />;
}

function Portal(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Portal>) {
  return <BaseAlertDialog.Portal {...props} />;
}

function Backdrop(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Backdrop>) {
  const { className, ...rest } = props;
  return <BaseAlertDialog.Backdrop {...rest} className={clsx(styles.backdrop, className)} />;
}

function Popup(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Popup>) {
  const { className, ...rest } = props;
  return <BaseAlertDialog.Popup {...rest} className={clsx(styles.popup, className)} />;
}

function Title(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>) {
  const { className, ...rest } = props;
  return <BaseAlertDialog.Title {...rest} className={clsx(styles.title, className)} />;
}

function Description(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Description>) {
  const { className, ...rest } = props;
  return <BaseAlertDialog.Description {...rest} className={clsx(styles.description, className)} />;
}

function Close(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Close>) {
  const { className, ...rest } = props;
  return <BaseAlertDialog.Close {...rest} className={clsx(styles.close, className)} />;
}

function Viewport(props: ComponentPropsWithoutRef<typeof BaseAlertDialog.Viewport>) {
  const { className, ...rest } = props;
  return <BaseAlertDialog.Viewport {...rest} className={clsx(styles.viewport, className)} />;
}

export const AlertDialog = {
  Root,
  Trigger,
  Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close,
  Viewport,
};

export const createAlertDialogHandle = BaseAlertDialog.createHandle;
export const AlertDialogHandle = BaseAlertDialog.Handle;
