import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './navigation-menu.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Root>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Root {...rest} className={clsx(styles.root, className)} />;
}

function List(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.List>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.List {...rest} className={clsx(styles.list, className)} />;
}

function Item(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Item>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Item {...rest} className={clsx(styles.item, className)} />;
}

function Trigger(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Trigger>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Trigger {...rest} className={clsx(styles.trigger, className)} />;
}

function Content(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Content>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Content {...rest} className={clsx(styles.content, className)} />;
}

function Link(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Link>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Link {...rest} className={clsx(styles.link, className)} />;
}

function Portal(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Portal>) {
  return <BaseNavigationMenu.Portal {...props} />;
}

function Positioner(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Positioner>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Positioner {...rest} className={clsx(styles.positioner, className)} />;
}

function Viewport(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Viewport>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Viewport {...rest} className={clsx(styles.viewport, className)} />;
}

function Popup(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Popup>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Popup {...rest} className={clsx(styles.popup, className)} />;
}

function Backdrop(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Backdrop>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Backdrop {...rest} className={clsx(styles.backdrop, className)} />;
}

function Arrow(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Arrow>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Arrow {...rest} className={clsx(styles.arrow, className)} />;
}

function Icon(props: ComponentPropsWithoutRef<typeof BaseNavigationMenu.Icon>) {
  const { className, ...rest } = props;
  return <BaseNavigationMenu.Icon {...rest} className={clsx(styles.icon, className)} />;
}

export const NavigationMenu = {
  Root,
  List,
  Item,
  Trigger,
  Content,
  Link,
  Portal,
  Positioner,
  Viewport,
  Popup,
  Backdrop,
  Arrow,
  Icon,
};
