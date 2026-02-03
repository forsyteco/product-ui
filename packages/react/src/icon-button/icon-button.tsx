import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ForwardedRef,
  type ReactNode,
} from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../utils/tailwind'
import { Spinner } from '../spinner'
import { VisuallyHidden } from '../visually-hidden'

const iconButtonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-accent-foreground hover:opacity-90',
        secondary: 'bg-primary text-primary-foreground hover:opacity-90',
        outline: 'border border-border bg-background text-foreground hover:bg-muted',
        ghost: 'text-foreground hover:bg-muted',
        danger: 'bg-destructive text-destructive-foreground hover:opacity-90',
      },
      shape: {
        square: 'rounded-md',
        circle: 'rounded-full',
      },
      size: {
        small: 'h-8 w-8 text-sm',
        medium: 'h-9 w-9 text-base',
        large: 'h-10 w-10 text-lg',
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
  small: 'h-4 w-4',
  medium: 'h-5 w-5',
  large: 'h-6 w-6',
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
  const sharedClassName = cn(iconButtonVariants({ variant, size, shape }), inactive && 'opacity-60', className)
  const screenReaderText = description ?? (typeof children === 'string' ? children : undefined)
  const content =
    loading === true ? (
      <Spinner size={18} colors={['currentColor']} />
    ) : (
      <Icon aria-hidden className={cn('shrink-0', iconClassName)} />
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
export default IconButton

