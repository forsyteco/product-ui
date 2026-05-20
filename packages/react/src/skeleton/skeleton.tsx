import { clsx } from 'clsx';
import styles from './skeleton.module.css';

export type SkeletonProps = React.ComponentProps<'div'>;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <span
      data-slot="skeleton"
      className={clsx(
        styles.root,
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };