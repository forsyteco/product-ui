import { Drawer as BaseDrawer } from '@base-ui/react/drawer';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './drawer.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseDrawer.Root>) {
  return <BaseDrawer.Root {...props} />;
}

function Trigger(props: ComponentPropsWithoutRef<typeof BaseDrawer.Trigger>) {
  const { className, ...rest } = props;
  return <BaseDrawer.Trigger {...rest} className={clsx(styles.trigger, className)} />;
}

function Portal(props: ComponentPropsWithoutRef<typeof BaseDrawer.Portal>) {
  return <BaseDrawer.Portal {...props} />;
}

function Backdrop(props: ComponentPropsWithoutRef<typeof BaseDrawer.Backdrop>) {
  const { className, ...rest } = props;
  return <BaseDrawer.Backdrop {...rest} className={clsx(styles.backdrop, className)} />;
}

function Popup(props: ComponentPropsWithoutRef<typeof BaseDrawer.Popup>) {
  const { className, ...rest } = props;
  return <BaseDrawer.Popup {...rest} className={clsx(styles.popup, className)} />;
}

function Title(props: ComponentPropsWithoutRef<typeof BaseDrawer.Title>) {
  const { className, ...rest } = props;
  return <BaseDrawer.Title {...rest} className={clsx(styles.title, className)} />;
}

function Description(props: ComponentPropsWithoutRef<typeof BaseDrawer.Description>) {
  const { className, ...rest } = props;
  return <BaseDrawer.Description {...rest} className={clsx(styles.description, className)} />;
}

function Close(props: ComponentPropsWithoutRef<typeof BaseDrawer.Close>) {
  const { className, ...rest } = props;
  return <BaseDrawer.Close {...rest} className={clsx(styles.close, className)} />;
}

function Content(props: ComponentPropsWithoutRef<typeof BaseDrawer.Content>) {
  const { className, ...rest } = props;
  return <BaseDrawer.Content {...rest} className={clsx(styles.content, className)} />;
}

function Viewport(props: ComponentPropsWithoutRef<typeof BaseDrawer.Viewport>) {
  const { className, ...rest } = props;
  return <BaseDrawer.Viewport {...rest} className={clsx(styles.viewport, className)} />;
}

export const Drawer = {
  Root,
  Trigger,
  Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close,
  Content,
  Viewport,
  Provider: BaseDrawer.Provider,
  Indent: BaseDrawer.Indent,
  IndentBackground: BaseDrawer.IndentBackground,
  SwipeArea: BaseDrawer.SwipeArea,
};
