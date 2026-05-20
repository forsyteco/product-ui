import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './scroll-area.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseScrollArea.Root>) {
  const { className, ...rest } = props;
  return <BaseScrollArea.Root {...rest} className={clsx(styles.root, className)} />;
}

function Viewport(props: ComponentPropsWithoutRef<typeof BaseScrollArea.Viewport>) {
  const { className, ...rest } = props;
  return <BaseScrollArea.Viewport {...rest} className={clsx(styles.viewport, className)} />;
}

function Content(props: ComponentPropsWithoutRef<typeof BaseScrollArea.Content>) {
  const { className, ...rest } = props;
  return <BaseScrollArea.Content {...rest} className={clsx(styles.content, className)} />;
}

function Scrollbar(props: ComponentPropsWithoutRef<typeof BaseScrollArea.Scrollbar>) {
  const { className, ...rest } = props;
  return <BaseScrollArea.Scrollbar {...rest} className={clsx(styles.scrollbar, className)} />;
}

function Thumb(props: ComponentPropsWithoutRef<typeof BaseScrollArea.Thumb>) {
  const { className, ...rest } = props;
  return <BaseScrollArea.Thumb {...rest} className={clsx(styles.thumb, className)} />;
}

function Corner(props: ComponentPropsWithoutRef<typeof BaseScrollArea.Corner>) {
  const { className, ...rest } = props;
  return <BaseScrollArea.Corner {...rest} className={clsx(styles.corner, className)} />;
}

export const ScrollArea = {
  Root,
  Viewport,
  Content,
  Scrollbar,
  Thumb,
  Corner,
};
