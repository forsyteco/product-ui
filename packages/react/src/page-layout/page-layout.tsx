import * as React from 'react'
import { clsx } from 'clsx';
import styles from './page-layout.module.css'

/* -------------------------------------------------------------------------------------------------
 * Tokens → layout classes
 * ------------------------------------------------------------------------------------------------- */

export type ContainerWidth = 'full' | 'medium' | 'large' | 'xlarge'
export type Spacing = 'none' | 'condensed' | 'normal'
export type Gap = 'none' | 'condensed' | 'normal'
export type Divider = 'none' | 'line' | 'filled'
export type PanePosition = 'start' | 'end'

const containerWidthClass: Record<ContainerWidth, string> = {
  full: styles.maxwNone,
  medium: styles.maxw3xl,
  large: styles.maxw5xl,
  xlarge: styles.maxw7xl,
}

const paddingClass: Record<Spacing, string> = {
  none: styles.padNone,
  condensed: styles.padCondensed,
  normal: styles.padNormal,
}

const gapXClass: Record<Gap, string> = {
  none: styles.gapXNone,
  condensed: styles.gapXCondensed,
  normal: styles.gapXNormal,
}

const gapXValue: Record<Gap, string> = {
  none: '0px',
  condensed: '1rem', // tailwind gap-4
  normal: '1.5rem', // tailwind gap-6
}

const gapYClass: Record<Gap, string> = {
  none: styles.gapYNone,
  condensed: styles.gapYCondensed,
  normal: styles.gapYNormal,
}

const gapYValue: Record<Gap, string> = {
  none: '0px',
  condensed: '1rem',
  normal: '1.5rem',
}

const dividerElClass: Record<Exclude<Divider, 'none'>, string> = {
  line: styles.dividerLine,
  filled: styles.dividerFilled,
}

/* -------------------------------------------------------------------------------------------------
 * Context
 * ------------------------------------------------------------------------------------------------- */

type PageLayoutContextValue = {
  containerWidth: ContainerWidth
  padding: Spacing
  rowGap: Gap
  columnGap: Gap
}

const PageLayoutContext = React.createContext<PageLayoutContextValue | null>(null)

function usePageLayoutContext() {
  const ctx = React.useContext(PageLayoutContext)
  if (!ctx) throw new Error('PageLayout.* must be used inside <PageLayout>.')
  return ctx
}

/* -------------------------------------------------------------------------------------------------
 * PageLayout root
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutProps = {
  containerWidth?: ContainerWidth
  padding?: Spacing
  columnGap?: Gap
  rowGap?: Gap
  className?: string
  children: React.ReactNode
}

export function PageLayout({
  containerWidth = 'xlarge',
  padding = 'normal',
  columnGap = 'normal',
  rowGap = 'normal',
  className,
  children,
}: PageLayoutProps) {
  return (
    <PageLayoutContext.Provider value={{ containerWidth, padding, columnGap, rowGap }}>
      <div className={clsx(styles.wFull, className)}>{children}</div>
    </PageLayoutContext.Provider>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Shared a11y props
 * ------------------------------------------------------------------------------------------------- */

type A11yProps = {
  ariaLabel?: string
  ariaLabelledby?: string
}

/* -------------------------------------------------------------------------------------------------
 * Section (container + padding wrapper)
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutSectionProps = React.ComponentPropsWithoutRef<'section'> & {
  containerWidth?: ContainerWidth
  padding?: Spacing
}

export function PageLayoutSection({
  containerWidth: cw,
  padding: p,
  className,
  ...rest
}: PageLayoutSectionProps) {
  const ctx = usePageLayoutContext()
  const resolvedWidth = cw ?? ctx.containerWidth
  const resolvedPadding = p ?? ctx.padding

  return (
    <section
      className={clsx(
        styles.mxAuto,
        styles.wFull,
        containerWidthClass[resolvedWidth],
        paddingClass[resolvedPadding],
        className
      )}
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Header / Footer
 * - Divider is "sugar"; for responsive dividers use className (e.g., "md:border-t")
 * ------------------------------------------------------------------------------------------------- */

type HeaderFooterProps = A11yProps &
  Omit<React.ComponentPropsWithoutRef<'header'>, 'aria-label'> & {
    padding?: Spacing
    divider?: Divider
  }

function DividerBar({ divider }: { divider: Divider }) {
  if (divider === 'none') return null
  return <div className={clsx(styles.dividerBar, dividerElClass[divider])} aria-hidden="true" />
}

export function PageLayoutHeader({
  ariaLabel,
  ariaLabelledby,
  padding,
  divider = 'none',
  className,
  children,
  ...rest
}: HeaderFooterProps) {
  const ctx = usePageLayoutContext()
  const p = padding ?? ctx.padding

  return (
    <header
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={clsx(styles.headerFooterBase, containerWidthClass[ctx.containerWidth], paddingClass[p], className)}
      {...rest}
    >
      <DividerBar divider={divider} />
      {children}
    </header>
  )
}

export function PageLayoutFooter({
  ariaLabel,
  ariaLabelledby,
  padding,
  divider = 'none',
  className,
  children,
  ...rest
}: HeaderFooterProps) {
  const ctx = usePageLayoutContext()
  const p = padding ?? ctx.padding

  return (
    <footer
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={clsx(styles.headerFooterBase, containerWidthClass[ctx.containerWidth], paddingClass[p], className)}
      {...rest}
    >
      <DividerBar divider={divider} />
      {children}
    </footer>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Body
 * - 12-col grid wrapper. Content + Pane(s) are expected inside.
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutBodyProps = React.ComponentPropsWithoutRef<'div'> & {
  containerWidth?: ContainerWidth
  padding?: Spacing
  columnGap?: Gap
  rowGap?: Gap
}

export function PageLayoutBody({
  containerWidth,
  padding,
  columnGap,
  rowGap,
  className,
  style,
  ...rest
}: PageLayoutBodyProps) {
  const ctx = usePageLayoutContext()
  const cw = containerWidth ?? ctx.containerWidth
  const p = padding ?? ctx.padding
  const cg = columnGap ?? ctx.columnGap
  const rg = rowGap ?? ctx.rowGap
  const mergedStyle = {
    rowGap: gapYValue[rg],
    columnGap: gapXValue[cg],
    ...style,
  }

  return (
    <div
      className={clsx(
        styles.mxAuto,
        styles.wFull,
        containerWidthClass[cw],
        paddingClass[p],
        styles.grid12,
        gapXClass[cg],
        gapYClass[rg],
        className
      )}
      style={mergedStyle}
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Content (polymorphic)
 * ------------------------------------------------------------------------------------------------- */

type PolymorphicProps<E extends React.ElementType, P> = P &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P | 'as'> & {
    as?: E
  }

export type PageLayoutContentOwnProps = A11yProps & {
  /** Useful when Content is used outside Body; inside Body you typically use col-span classes */
  width?: ContainerWidth
  /** Default is 'none' because Body already applies padding */
  padding?: Spacing
  className?: string
}

export function PageLayoutContent<E extends React.ElementType = 'main'>(
  props: PolymorphicProps<E, PageLayoutContentOwnProps>
) {
  const { as, ariaLabel, ariaLabelledby, width, padding, className, ...rest } = props
  const ctx = usePageLayoutContext()
  const Component = (as ?? 'main') as React.ElementType

  const cw = width ?? ctx.containerWidth
  const p = padding ?? 'none'

  return (
    <Component
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={clsx(
        styles.colSpan12,
        styles.minW0,
        styles.wFull,
        containerWidthClass[cw],
        p === 'none' ? '' : paddingClass[p],
        className
      )}
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Pane (sticky + optional resizable)
 * - No responsive prop modelling; use classes to control spans/visibility.
 * ------------------------------------------------------------------------------------------------- */

export type PageLayoutPaneProps = A11yProps &
  Omit<React.ComponentPropsWithoutRef<'aside'>, 'children'> & {
    position?: PanePosition
    width?: ContainerWidth
    minWidth?: number
    resizable?: boolean
    widthStorageKey?: string
    sticky?: boolean
    offsetHeader?: number | string
    padding?: Spacing
    divider?: Divider
    className?: string
    children: React.ReactNode
  }

export const PageLayoutPane = React.forwardRef<HTMLDivElement, PageLayoutPaneProps>(
  (
    {
      ariaLabel,
      ariaLabelledby,
      position = 'end',
      width,
      minWidth = 280,
      resizable = false,
      widthStorageKey,
      sticky = false,
      offsetHeader = 0,
      padding,
      divider = 'none',
      className,
      children,
      ...asideProps
    },
    ref
  ) => {
    const ctx = usePageLayoutContext()
    const cw = width ?? ctx.containerWidth
    const p = padding ?? 'none'

    const [paneWidth, setPaneWidth] = React.useState<number | null>(null)
    const dragRef = React.useRef<{ startX: number; startW: number } | null>(null)

    // Load persisted width
    React.useEffect(() => {
      if (!resizable || !widthStorageKey) return
      try {
        const raw = window.localStorage.getItem(widthStorageKey)
        if (!raw) return
        const n = Number(raw)
        if (Number.isFinite(n) && n >= minWidth) setPaneWidth(n)
      } catch {
        // ignore
      }
    }, [resizable, widthStorageKey, minWidth])

    // Persist width
    React.useEffect(() => {
      if (!resizable || !widthStorageKey || paneWidth == null) return
      try {
        window.localStorage.setItem(widthStorageKey, String(paneWidth))
      } catch {
        // ignore
      }
    }, [resizable, widthStorageKey, paneWidth])

    const stickyStyle: React.CSSProperties | undefined = sticky
      ? {
          position: 'sticky',
          top: typeof offsetHeader === 'number' ? `${offsetHeader}px` : offsetHeader,
          alignSelf: 'start',
        }
      : undefined

    const widthStyle: React.CSSProperties | undefined =
      resizable && paneWidth != null
        ? { width: `${paneWidth}px`, minWidth: `${minWidth}px` }
        : { minWidth: `${minWidth}px` }

    const onPointerDown = (e: React.PointerEvent) => {
      if (!resizable) return
      const el = (ref as React.RefObject<HTMLDivElement>)?.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      dragRef.current = { startX: e.clientX, startW: rect.width }
      ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
      e.preventDefault()
    }

    const onPointerMove = (e: React.PointerEvent) => {
      if (!resizable) return
      const drag = dragRef.current
      if (!drag) return

      const delta = e.clientX - drag.startX
      const next = position === 'end' ? drag.startW - delta : drag.startW + delta
      setPaneWidth(Math.max(minWidth, Math.round(next)))
    }

    const onPointerUp = () => {
      dragRef.current = null
    }

    // Default grid behaviour inside Body:
    // - mobile: full width
    // - lg+: 4/12 columns
    // Consumers override spans with className (e.g., "lg:col-span-3")
    const gridPos = position === 'start' ? styles.paneStart : styles.paneEnd

    return (
      <div
        ref={ref}
        className={clsx(
          gridPos,
          styles.relative,
          styles.minW0,
          styles.wFull,
          containerWidthClass[cw],
          p === 'none' ? '' : paddingClass[p],
          className
        )}
        style={{ ...stickyStyle, ...widthStyle }}
      >
        <DividerBar divider={divider} />

        <aside
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          className={styles.aside}
          {...asideProps}
        >
          {children}
        </aside>

        {resizable ? (
          <div
            role="separator"
            aria-orientation="vertical"
            className={clsx(
              styles.resizer,
              position === 'end' ? styles.resizerEnd : styles.resizerStart
            )}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          />
        ) : null}
      </div>
    )
  }
)
PageLayoutPane.displayName = 'PageLayoutPane'