import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ForwardedRef,
  type MouseEventHandler,
  type ReactNode,
} from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { clsx } from 'clsx';
import { Spinner } from '../spinner'
import { VisuallyHidden } from '../visually-hidden'
import styles from './icon-button.module.css'

const iconButtonVariants = cva(
  styles.root,
  {
    variants: {
      variant: {
        primary: styles['variant-primary'],
        default: styles['variant-default'],
        ghost: styles['variant-ghost'],
        danger: styles['variant-danger'],
      },
      shape: {
        square: styles['shape-square'],
        circle: styles['shape-circle'],
      },
      size: {
        small: styles['size-small'],
        medium: styles['size-medium'],
        large: styles['size-large'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      shape: 'square',
      size: 'medium',
    },
  }
)

type IconComponent = ComponentType<{ className?: string }>

type BaseIconButtonProps = {
  icon: IconComponent
  children?: ReactNode
  description?: string
  inactive?: boolean
  loading?: boolean
  keybindingHint?: string
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'
  className?: string
  'aria-label': string
}

type IconButtonAsButton = BaseIconButtonProps &
  VariantProps<typeof iconButtonVariants> &
  Omit<ComponentPropsWithoutRef<'button'>, keyof BaseIconButtonProps | 'as' | 'href' | 'children'> & {
    as?: 'button'
    href?: never
  }

type IconButtonAsAnchor = BaseIconButtonProps &
  VariantProps<typeof iconButtonVariants> &
  Omit<ComponentPropsWithoutRef<'a'>, keyof BaseIconButtonProps | 'as' | 'children'> & {
    as: 'a'
    href: string
  }

export type IconButtonProps = IconButtonAsButton | IconButtonAsAnchor

const iconSizes = {
  small: styles['icon-small'],
  medium: styles['icon-medium'],
  large: styles['icon-large'],
} as const

type IconButtonSize = NonNullable<VariantProps<typeof iconButtonVariants>['size']>

const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(function IconButton(
  props: Readonly<IconButtonProps>,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const {
    as = 'button',
    icon: Icon,
    variant = 'primary',
    size = 'medium',
    shape = 'square',
    inactive = false,
    loading = false,
    description,
    children,
    keybindingHint,
    tooltipDirection = 's',
    className,
    'aria-label': ariaLabel,
    ...rest
  } = props

  const Component = as === 'a' ? 'a' : 'button'
  const tooltipText = description ?? ariaLabel
  const title = keybindingHint ? `${tooltipText} (${keybindingHint})` : tooltipText
  const resolvedSize: IconButtonSize = (size ?? 'medium') as IconButtonSize
  const iconClassName = iconSizes[resolvedSize]
  const sharedClassName = clsx(iconButtonVariants({ variant, size, shape }), inactive && styles.inactive, className)
  const screenReaderText = description ?? (typeof children === 'string' ? children : undefined)
  const content =
    loading === true ? (
      <Spinner size={18} colors={['currentColor']} />
    ) : (
      <Icon aria-hidden className={clsx(styles.icon, iconClassName)} />
    )

  if (Component === 'a') {
    const { href, ...anchorProps } = rest as Omit<IconButtonAsAnchor, keyof BaseIconButtonProps>
    const handleAnchorClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
      if (inactive) {
        event.preventDefault()
        event.stopPropagation()
        return
      }

      anchorProps.onClick?.(event)
    }

    return (
      <a
        {...anchorProps}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        href={inactive ? undefined : href}
        className={sharedClassName}
        aria-label={ariaLabel}
        aria-disabled={inactive || undefined}
        aria-busy={loading || undefined}
        tabIndex={inactive ? -1 : anchorProps.tabIndex}
        data-tooltip-direction={tooltipDirection}
        data-inactive={inactive || undefined}
        title={title}
        onClick={handleAnchorClick}
      >
        {content}
        {screenReaderText ? <VisuallyHidden>{screenReaderText}</VisuallyHidden> : null}
        {children && typeof children !== 'string' ? <VisuallyHidden>{children}</VisuallyHidden> : null}
      </a>
    )
  }

  const buttonProps = rest as Omit<IconButtonAsButton, keyof BaseIconButtonProps>

  return (
    <button
      {...buttonProps}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={buttonProps.type ?? 'button'}
      disabled={inactive || buttonProps.disabled}
      className={sharedClassName}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      data-tooltip-direction={tooltipDirection}
      data-inactive={inactive || undefined}
      title={title}
    >
      {content}
      {screenReaderText ? <VisuallyHidden>{screenReaderText}</VisuallyHidden> : null}
      {children && typeof children !== 'string' ? <VisuallyHidden>{children}</VisuallyHidden> : null}
    </button>
  )
})

export { IconButton, iconButtonVariants }

