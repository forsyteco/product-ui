import { Progress as BaseProgress } from '@base-ui/react/progress';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './progress.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseProgress.Root>) {
  const { className, ...rest } = props;
  return <BaseProgress.Root {...rest} className={clsx(styles.root, className)} />;
}

function Track(props: ComponentPropsWithoutRef<typeof BaseProgress.Track>) {
  const { className, ...rest } = props;
  return <BaseProgress.Track {...rest} className={clsx(styles.track, className)} />;
}

function Indicator(props: ComponentPropsWithoutRef<typeof BaseProgress.Indicator>) {
  const { className, ...rest } = props;
  return <BaseProgress.Indicator {...rest} className={clsx(styles.indicator, className)} />;
}

function Label(props: ComponentPropsWithoutRef<typeof BaseProgress.Label>) {
  const { className, ...rest } = props;
  return <BaseProgress.Label {...rest} className={clsx(styles.label, className)} />;
}

function Value(props: ComponentPropsWithoutRef<typeof BaseProgress.Value>) {
  const { className, ...rest } = props;
  return <BaseProgress.Value {...rest} className={clsx(styles.value, className)} />;
}

export const Progress = {
  Root,
  Track,
  Indicator,
  Label,
  Value,
};
