import * as React from 'react';

import { clsx } from 'clsx';
import styles from './card.module.css';

export type CardProps = React.ComponentProps<'div'>;
export type CardHeaderProps = React.ComponentProps<'div'>;
export type CardTitleProps = React.ComponentProps<'div'>;
export type CardDescriptionProps = React.ComponentProps<'div'>;
export type CardActionProps = React.ComponentProps<'div'>;
export type CardContentProps = React.ComponentProps<'div'>;
export type CardFooterProps = React.ComponentProps<'div'>;

function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={clsx(
        styles.card,
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={clsx(
        styles.header,
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={clsx(styles.title, className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={clsx(styles.description, className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={clsx(
        styles.action,
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={clsx(styles.content, className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={clsx(styles.footer, className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
