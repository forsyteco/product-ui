import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './accordion.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseAccordion.Root>) {
  const { className, ...rest } = props;
  return <BaseAccordion.Root {...rest} className={clsx(styles.root, className)} />;
}

function Item(props: ComponentPropsWithoutRef<typeof BaseAccordion.Item>) {
  const { className, ...rest } = props;
  return <BaseAccordion.Item {...rest} className={clsx(styles.item, className)} />;
}

function Header(props: ComponentPropsWithoutRef<typeof BaseAccordion.Header>) {
  const { className, ...rest } = props;
  return <BaseAccordion.Header {...rest} className={clsx(styles.header, className)} />;
}

function Trigger(props: ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>) {
  const { className, ...rest } = props;
  return <BaseAccordion.Trigger {...rest} className={clsx(styles.trigger, className)} />;
}

function Panel(props: ComponentPropsWithoutRef<typeof BaseAccordion.Panel>) {
  const { className, ...rest } = props;
  return <BaseAccordion.Panel {...rest} className={clsx(styles.panel, className)} />;
}

export const Accordion = {
  Root,
  Item,
  Header,
  Trigger,
  Panel,
};
