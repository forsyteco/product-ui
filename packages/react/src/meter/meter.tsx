import { Meter as BaseMeter } from '@base-ui/react/meter';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './meter.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseMeter.Root>) {
  const { className, ...rest } = props;
  return <BaseMeter.Root {...rest} className={clsx(styles.root, className)} />;
}

function Track(props: ComponentPropsWithoutRef<typeof BaseMeter.Track>) {
  const { className, ...rest } = props;
  return <BaseMeter.Track {...rest} className={clsx(styles.track, className)} />;
}

function Indicator(props: ComponentPropsWithoutRef<typeof BaseMeter.Indicator>) {
  const { className, ...rest } = props;
  return <BaseMeter.Indicator {...rest} className={clsx(styles.indicator, className)} />;
}

function Label(props: ComponentPropsWithoutRef<typeof BaseMeter.Label>) {
  const { className, ...rest } = props;
  return <BaseMeter.Label {...rest} className={clsx(styles.label, className)} />;
}

function Value(props: ComponentPropsWithoutRef<typeof BaseMeter.Value>) {
  const { className, ...rest } = props;
  return <BaseMeter.Value {...rest} className={clsx(styles.value, className)} />;
}

export const Meter = {
  Root,
  Track,
  Indicator,
  Label,
  Value,
};
