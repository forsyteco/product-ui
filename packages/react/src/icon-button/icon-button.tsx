import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ForwardedRef,
  type ReactNode,
} from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../utils/cn'
import { Spinner } from '../spinner'
import { VisuallyHidden } from '../visually-hidden'
import styles from './icon-button.module.css'

const iconButtonVariants = cva(
  styles.root,
  {
    variants: {
      variant: {
        primary: styles.variantPrimary,
        secondary: styles.variantSecondary,
        outline: styles.variantOutline,
        ghost: styles.variantGhost,
        danger: styles.variantDanger,
      },
      shape: {
        square: styles.shapeSquare,
        circle: styles.shapeCircle,
      },
      size: {
        small: styles.sizeSmall,
        medium: styles.sizeMedium,
        large: styles.sizeLarge,
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
  small: styles.iconSmall,
  medium: styles.iconMedium,
  large: styles.iconLarge,
} as const

type IconButtonSize = NonNullable<VariantProps<typeof iconButtonVariants>['size']>

const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(function IconButton(
  props: IconButtonProps,
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
  const sharedClassName = cn(iconButtonVariants({ variant, size, shape }), inactive && styles.inactive, className)
  const screenReaderText = description ?? (typeof children === 'string' ? children : undefined)
  const content =
    loading === true ? (
      <Spinner size={18} colors={['currentColor']} />
    ) : (
      <Icon aria-hidden className={cn(styles.icon, iconClassName)} />
    )

  if (Component === 'a') {
    const { href, ...anchorProps } = rest as Omit<IconButtonAsAnchor, keyof BaseIconButtonProps>
    return (
      <a
        {...anchorProps}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        href={href}
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
      </a>
    )
  }

  const buttonProps = rest as Omit<IconButtonAsButton, keyof BaseIconButtonProps>

  return (
    <button
      {...buttonProps}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={buttonProps.type ?? 'button'}
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

