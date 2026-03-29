import { Slider as BaseSlider } from '@base-ui/react/slider';
import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './slider.module.css';

function Root(props: ComponentPropsWithoutRef<typeof BaseSlider.Root>) {
  const { className, ...rest } = props;
  return <BaseSlider.Root {...rest} className={clsx(styles.root, className)} />;
}

function Control(props: ComponentPropsWithoutRef<typeof BaseSlider.Control>) {
  const { className, ...rest } = props;
  return <BaseSlider.Control {...rest} className={clsx(styles.control, className)} />;
}

function Track(props: ComponentPropsWithoutRef<typeof BaseSlider.Track>) {
  const { className, ...rest } = props;
  return <BaseSlider.Track {...rest} className={clsx(styles.track, className)} />;
}

function Thumb(props: ComponentPropsWithoutRef<typeof BaseSlider.Thumb>) {
  const { className, ...rest } = props;
  return <BaseSlider.Thumb {...rest} className={clsx(styles.thumb, className)} />;
}

function Indicator(props: ComponentPropsWithoutRef<typeof BaseSlider.Indicator>) {
  const { className, ...rest } = props;
  return <BaseSlider.Indicator {...rest} className={clsx(styles.indicator, className)} />;
}

function Label(props: ComponentPropsWithoutRef<typeof BaseSlider.Label>) {
  const { className, ...rest } = props;
  return <BaseSlider.Label {...rest} className={clsx(styles.label, className)} />;
}

function Value(props: ComponentPropsWithoutRef<typeof BaseSlider.Value>) {
  const { className, ...rest } = props;
  return <BaseSlider.Value {...rest} className={clsx(styles.value, className)} />;
}

export const Slider = {
  Root,
  Control,
  Track,
  Thumb,
  Indicator,
  Label,
  Value,
};
