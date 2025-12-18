// page-layout.tsx
import * as React from 'react'
import { cn } from '../utils/tailwind'

/* -------------------------------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------------------------------- */

export type ContainerWidth = 'full' | 'medium' | 'large' | 'xlarge'
export type Spacing = 'none' | 'condensed' | 'normal'
export type Gap = 'none' | 'condensed' | 'normal'
export type Divider = 'none' | 'line' | 'filled'
export type PanePosition = 'start' | 'end'

/* -------------------------------------------------------------------------------------------------
 * Class maps
 * ------------------------------------------------------------------------------------------------- */

const containerWidthClass: Record<ContainerWidth, string> = {
  full: 'max-w-none',
  medium: 'max-w-3xl',
  large: 'max-w-5xl',
  xlarge: 'max-w-7xl',
}

const gutterXClass: Record<Spacing, string> = {
  none: 'px-0',
  condensed: 'px-4 sm:px-6',
  normal: 'px-4 sm:px-8',
}

const paddingYClass: Record<Spacing, string> = {
  none: 'py-0',
  condensed: 'py-3',
  normal: 'py-4',
}

const gapClass: Record<Gap, string> = {
  none: 'gap-0',
  condensed: 'gap-4',
  normal: 'gap-6',
}

const dividerClass: Record<Exclude<Divider, 'none'>, string> = {
  line: 'border-t border-border',
  filled: 'border-t border-border bg-muted/40',
}

/* -------------------------------------------------------------------------------------------------
 * Context (only what Pane needs)
 * ------------------------------------------------------------------------------------------------- */

type PageLayoutContextValue = {
  panePosition: PanePosition
}

const PageLayoutContext = React.createContext<PageLayoutContextValue | null>(null)

function usePageLayoutCtx(component: string) {
  const ctx = React.useContext(PageLayoutContext)
  if (!ctx) throw new Error(`${component} must be used within <PageLayout>.`)
  return ctx
}

/* -------------------------------------------------------------------------------------------------
 * PageLayout
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutProps = {
  children: React.ReactNode
  className?: string

  /** Container width token (max-w-*) */
  containerWidth?: ContainerWidth

  /** Horizontal gutters for the whole page */
  gutters?: Spacing

  /** Vertical spacing between top-level regions (header/body/footer/etc.) */
  spacing?: Gap

  /** Default pane position (can be overridden per-pane) */
  panePosition?: PanePosition
}

export function PageLayout({
  children,
  className,
  containerWidth = 'xlarge',
  gutters = 'normal',
  spacing = 'normal',
  panePosition = 'end',
}: PageLayoutProps) {
  const stack =
    spacing === 'none' ? null : spacing === 'condensed' ? 'space-y-4' : 'space-y-6'

  return (
    <PageLayoutContext.Provider value={{ panePosition }}>
      <div className={cn('w-full', className)}>
        <div className={cn('mx-auto w-full', containerWidthClass[containerWidth], gutterXClass[gutters], stack)}>
          {children}
        </div>
      </div>
    </PageLayoutContext.Provider>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Header / Footer
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutRegionProps = {
  children?: React.ReactNode
  className?: string
  padding?: Spacing
  divider?: Divider
  ariaLabel?: string
  ariaLabelledby?: string
}

function Region({
  as: Comp,
  children,
  className,
  padding = 'normal',
  divider = 'none',
  ariaLabel,
  ariaLabelledby,
}: PageLayoutRegionProps & { as: 'header' | 'footer' }) {
  const dividerCls = divider === 'none' ? null : dividerClass[divider]
  const filledCls = divider === 'filled' ? 'rounded-md' : null

  return (
    <Comp
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn(dividerCls, filledCls, className)}
    >
      <div className={cn(paddingYClass[padding])}>{children}</div>
    </Comp>
  )
}

export function PageLayoutHeader(props: PageLayoutRegionProps) {
  return <Region as="header" {...props} />
}

export function PageLayoutFooter(props: PageLayoutRegionProps) {
  return <Region as="footer" {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * Body (owns the 12-col grid)
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutBodyProps = {
  children: React.ReactNode
  className?: string
  gap?: Gap
}

export function PageLayoutBody({ children, className, gap = 'normal' }: PageLayoutBodyProps) {
  return <main className={cn('grid grid-cols-12 items-start', gapClass[gap], className)}>{children}</main>
}

/* -------------------------------------------------------------------------------------------------
 * Content (thin + boring)
 * - spans/breakpoints are className responsibility (e.g. "lg:col-span-8")
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutContentProps = {
  children?: React.ReactNode
  className?: string
  padding?: Spacing
}

export function PageLayoutContent({ children, className, padding = 'none' }: PageLayoutContentProps) {
  return (
    <section className={cn('col-span-12 min-w-0', paddingYClass[padding], className)}>
      {children}
    </section>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Pane (the only smart one)
 * - ordering based on pane position
 * - divider-side based on position
 * - sticky/resizable behaviors
 * - spans/breakpoints remain className responsibility
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutPaneProps = {
  children?: React.ReactNode
  className?: string
  padding?: Spacing
  divider?: Divider
  ariaLabel?: string
  ariaLabelledby?: string

  /** Overrides PageLayout default */
  position?: PanePosition

  sticky?: boolean
  resizable?: boolean

  /** CSS min-width; number treated as px */
  minWidth?: number | string

  /**
   * Tailwind top-* class used when sticky=true, applied at lg+ only.
   * Default: "top-6" -> "lg:top-6"
   */
  stickyTopClassName?: string
}

export function PageLayoutPane({
  children,
  className,
  padding = 'none',
  divider = 'none',
  ariaLabel,
  ariaLabelledby,
  position,
  sticky = false,
  resizable = false,
  minWidth,
  stickyTopClassName = 'top-6',
}: PageLayoutPaneProps) {
  const ctx = usePageLayoutCtx('PageLayoutPane')
  const panePosition = position ?? ctx.panePosition

  const order =
    panePosition === 'start'
      ? 'order-first lg:order-first'
      : 'order-last lg:order-last'

  const dividerSide =
    divider === 'line'
      ? panePosition === 'end'
        ? 'lg:border-l lg:border-border lg:pl-6'
        : 'lg:border-r lg:border-border lg:pr-6'
      : divider === 'filled'
      ? 'rounded-md bg-muted/40'
      : null

  const stickyCls = sticky ? cn('lg:sticky self-start', `lg:${stickyTopClassName}`) : null
  const resizableCls = resizable ? 'lg:resize-x lg:overflow-auto' : null

  const style =
    minWidth == null
      ? undefined
      : ({
          minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
        } as React.CSSProperties)

  return (
    <aside
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn(
        order,
        'col-span-12 min-w-0',
        paddingYClass[padding],
        dividerSide,
        stickyCls,
        resizableCls,
        className
      )}
      style={style}
    >
      {children}
    </aside>
  )
}