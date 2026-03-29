import { ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { clsx } from 'clsx';
import styles from './breadcrumb.module.css';

export type BreadcrumbProps = React.ComponentProps<'nav'>;
export type BreadcrumbListProps = React.ComponentProps<'ol'>;
export type BreadcrumbItemProps = React.ComponentProps<'li'>;
export type BreadcrumbLinkProps = React.ComponentProps<'a'> & {
  asChild?: boolean;
};
export type BreadcrumbPageProps = React.ComponentProps<'span'>;
export type BreadcrumbSeparatorProps = React.ComponentProps<'li'>;
export type BreadcrumbEllipsisProps = React.ComponentProps<'span'>;

function Breadcrumb({ ...props }: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={clsx(
        styles.list,
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={clsx(styles.item, className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  children,
  ...props
}: BreadcrumbLinkProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      'data-slot': 'breadcrumb-link',
      className: clsx(styles.link, className, (children.props as { className?: string }).className),
      ...props,
    });
  }

  return (
    <a
      data-slot="breadcrumb-link"
      className={clsx(styles.link, className)}
      {...props}
    >
      {children}
    </a>
  );
}

function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={clsx(styles.page, className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={clsx(styles.separator, className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={clsx(styles.ellipsis, className)}
      {...props}
    >
      <MoreHorizontal className={styles['ellipsis-icon']} />
      <span className={styles['sr-only']}>More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};