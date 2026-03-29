import { Radio as BaseRadio } from '@base-ui/react/radio';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './radio.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseRadio.Root>) {
  const { className, ...rest } = props;
  return <BaseRadio.Root {...rest} className={clsx(styles.root, className)} />;
}

function Indicator(props: ComponentPropsWithoutRef<typeof BaseRadio.Indicator>) {
  const { className, ...rest } = props;
  return <BaseRadio.Indicator {...rest} className={clsx(styles.indicator, className)} />;
}

export const Radio = {
  Root,
  Indicator,
};
