import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './tooltip.module.css';

function Provider(props: ComponentPropsWithoutRef<typeof BaseTooltip.Provider>) {
  return <BaseTooltip.Provider {...props} />;
}

function Root(props: ComponentPropsWithoutRef<typeof BaseTooltip.Root>) {
  return <BaseTooltip.Root {...props} />;
}

function Trigger(props: ComponentPropsWithoutRef<typeof BaseTooltip.Trigger>) {
  const { className, ...rest } = props;
  return <BaseTooltip.Trigger {...rest} className={clsx(styles.trigger, className)} />;
}

function Portal(props: ComponentPropsWithoutRef<typeof BaseTooltip.Portal>) {
  return <BaseTooltip.Portal {...props} />;
}

function Positioner(props: ComponentPropsWithoutRef<typeof BaseTooltip.Positioner>) {
  const { className, ...rest } = props;
  return <BaseTooltip.Positioner {...rest} className={clsx(styles.positioner, className)} />;
}

function Popup(props: ComponentPropsWithoutRef<typeof BaseTooltip.Popup>) {
  const { className, ...rest } = props;
  return <BaseTooltip.Popup {...rest} className={clsx(styles.popup, className)} />;
}

function Arrow(props: ComponentPropsWithoutRef<typeof BaseTooltip.Arrow>) {
  const { className, ...rest } = props;
  return <BaseTooltip.Arrow {...rest} className={clsx(styles.arrow, className)} />;
}

function Viewport(props: ComponentPropsWithoutRef<typeof BaseTooltip.Viewport>) {
  const { className, ...rest } = props;
  return <BaseTooltip.Viewport {...rest} className={clsx(styles.viewport, className)} />;
}

export const Tooltip = {
  Provider,
  Root,
  Trigger,
  Portal,
  Positioner,
  Popup,
  Arrow,
  Viewport,
  createHandle: BaseTooltip.createHandle,
  Handle: BaseTooltip.Handle,
};
