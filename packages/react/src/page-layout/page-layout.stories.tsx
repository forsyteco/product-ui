// page-layout.stories.tsx
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import * as React from 'react'

import {
  PageLayout,
  PageLayoutBody,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
  PageLayoutPane,
} from './page-layout'
import type { ContainerWidth, Divider, Gap, PanePosition, Spacing } from './page-layout'

type StoryArgs = {
  // Debug toggles
  renderHeader: boolean
  renderPane: boolean
  renderFooter: boolean
  headerHeight: number
  paneHeight: number
  contentHeight: number
  footerHeight: number

  // PageLayout props
  containerWidth: ContainerWidth
  gutters: Spacing
  spacing: Gap
  className?: string

  // Layout controls
  panePosition: PanePosition
  bodyGap: Gap
  paneSticky: boolean
  paneResizable: boolean
  paneMinWidth: number | string
  contentSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  paneSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

  // Header props
  headerDivider: Divider
  headerPadding: Spacing

  // Content props
  contentPadding: Spacing

  // Pane props
  panePadding: Spacing
  paneDivider: Divider

  // Footer props
  footerDivider: Divider
  footerPadding: Spacing
}

const meta: Meta<StoryArgs> = {
  title: 'Components/PageLayout',
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
  args: {
    renderHeader: true,
    renderPane: true,
    renderFooter: true,
    headerHeight: 64,
    paneHeight: 200,
    contentHeight: 400,
    footerHeight: 64,

    containerWidth: 'xlarge',
    gutters: 'normal',
    spacing: 'normal',
    className: '',

    panePosition: 'end',
    bodyGap: 'normal',
    paneSticky: false,
    paneResizable: false,
    paneMinWidth: 280,
    contentSpan: 8,
    paneSpan: 4,

    headerDivider: 'none',
    headerPadding: 'normal',

    contentPadding: 'none',

    panePadding: 'none',
    paneDivider: 'none',

    footerDivider: 'none',
    footerPadding: 'normal',
  },
  argTypes: {
    renderHeader: { control: 'boolean', table: { category: 'Debug' } },
    renderPane: { control: 'boolean', table: { category: 'Debug' } },
    renderFooter: { control: 'boolean', table: { category: 'Debug' } },
    headerHeight: { control: 'number', table: { category: 'Debug' } },
    paneHeight: { control: 'number', table: { category: 'Debug' } },
    contentHeight: { control: 'number', table: { category: 'Debug' } },
    footerHeight: { control: 'number', table: { category: 'Debug' } },

    containerWidth: {
      control: { type: 'radio' },
      options: ['full', 'medium', 'large', 'xlarge'],
      table: { category: 'PageLayout props' },
    },
    gutters: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'PageLayout props' },
    },
    spacing: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'PageLayout props' },
    },
    className: { control: 'text', table: { category: 'PageLayout props' } },

    panePosition: {
      control: { type: 'radio' },
      options: ['start', 'end'],
      table: { category: 'Layout' },
    },
    bodyGap: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Layout' },
    },
    paneSticky: { control: 'boolean', table: { category: 'Layout' } },
    paneResizable: { control: 'boolean', table: { category: 'Layout' } },
    paneMinWidth: { control: 'text', table: { category: 'Layout' } },
    contentSpan: {
      control: { type: 'range', min: 1, max: 12, step: 1 },
      table: { category: 'Layout' },
    },
    paneSpan: {
      control: { type: 'range', min: 1, max: 12, step: 1 },
      table: { category: 'Layout' },
    },

    headerDivider: {
      control: { type: 'radio' },
      options: ['none', 'line', 'filled'],
      table: { category: 'Header' },
    },
    headerPadding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Header' },
    },

    contentPadding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Content' },
    },

    panePadding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Pane' },
    },
    paneDivider: {
      control: { type: 'radio' },
      options: ['none', 'line', 'filled'],
      table: { category: 'Pane' },
    },

    footerDivider: {
      control: { type: 'radio' },
      options: ['none', 'line', 'filled'],
      table: { category: 'Footer' },
    },
    footerPadding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Footer' },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<StoryArgs>

const Placeholder = ({ height, label }: { height: number; label: string }) => (
  <div
    className="rounded-md border border-dashed border-muted-foreground/50 bg-muted/20 text-muted-foreground"
    style={{ minHeight: height }}
  >
    <div className="p-3 text-sm">{label}</div>
  </div>
)

const Template: StoryFn<StoryArgs> = (args: StoryArgs) => {
  const showPane = args.renderPane
  const contentSpanClass = `lg:col-span-${args.contentSpan}`
  const paneSpanClass = `lg:col-span-${args.paneSpan}`

  return (
    <PageLayout
      containerWidth={args.containerWidth}
      gutters={args.gutters}
      spacing={args.spacing}
      className={args.className}
      panePosition={args.panePosition}
    >
      {args.renderHeader ? (
        <PageLayoutHeader divider={args.headerDivider} padding={args.headerPadding}>
          <Placeholder height={args.headerHeight} label="Header" />
        </PageLayoutHeader>
      ) : null}

      <PageLayoutBody gap={args.bodyGap}>
        <PageLayoutContent padding={args.contentPadding} className={contentSpanClass}>
          <Placeholder height={args.contentHeight} label="Content" />
        </PageLayoutContent>

        {showPane ? (
          <PageLayoutPane
            padding={args.panePadding}
            divider={args.paneDivider}
            ariaLabel="Page pane"
            sticky={args.paneSticky}
            resizable={args.paneResizable}
            minWidth={args.paneMinWidth}
            className={paneSpanClass}
          >
            <Placeholder height={args.paneHeight} label="Pane" />
          </PageLayoutPane>
        ) : null}
      </PageLayoutBody>

      {args.renderFooter ? (
        <PageLayoutFooter divider={args.footerDivider} padding={args.footerPadding}>
          <Placeholder height={args.footerHeight} label="Footer" />
        </PageLayoutFooter>
      ) : null}
    </PageLayout>
  )
}

export const Default: Story = {
  args: meta.args,
  render: Template,
}

export const Playground: Story = {
  args: {
    ...meta.args,
    containerWidth: 'large',
    spacing: 'condensed',
    bodyGap: 'condensed',
    headerDivider: 'line',
    panePosition: 'start',
    paneSticky: true,
    contentHeight: 800
  },
  render: (args: StoryArgs) => {
    const showPane = args.renderPane
    const contentSpanClass = `lg:col-span-${args.contentSpan}`
    const paneSpanClass = `lg:col-span-${args.paneSpan}`

    return (
      <div className="space-y-6">
        <div className="rounded-md border border-dashed border-muted-foreground/40 bg-muted/30 p-3 text-sm text-muted-foreground">
          Borders and notes are added to make the layout edges obvious. Use this to see
          how header, content, pane, and footer align in the 12-column grid.
        </div>

        <PageLayout
          containerWidth={args.containerWidth}
          gutters={args.gutters}
          spacing={args.spacing}
          className={`bg-background/40 ${args.className ?? ''}`}
          panePosition={args.panePosition}
        >
          {args.renderHeader ? (
            <PageLayoutHeader
              divider={args.headerDivider}
              padding={args.headerPadding}
              className="rounded-lg border-2 border-sky-500/80 bg-sky-50/80 shadow-sm"
            >
              <div className="flex items-center justify-between" style={{ minHeight: args.headerHeight }}>
                <div className="text-sm font-semibold text-sky-900">Header</div>
                <div className="rounded-full bg-sky-500/90 px-2.5 py-0.5 text-xs font-medium text-white shadow">
                  Page width &amp; padding
                </div>
              </div>
            </PageLayoutHeader>
          ) : null}

          <PageLayoutBody gap={args.bodyGap}>
            <PageLayoutContent
              padding={args.contentPadding}
              className={`rounded-lg border-2 border-indigo-500/80 bg-indigo-50/70 shadow-sm ${contentSpanClass}`}
            >
              <div className="flex items-start justify-between gap-3" style={{ minHeight: args.contentHeight }}>
                <div>
                  <div className="text-sm font-semibold text-indigo-900">Content</div>
                  <p className="mt-2 text-sm text-indigo-900/80">
                    Controlled by <code className="rounded bg-indigo-100 px-1 py-0.5">contentSpan</code>.
                  </p>
                </div>
                <span className="rounded-full bg-indigo-500/90 px-2.5 py-0.5 text-xs font-medium text-white shadow">
                  lg: {args.contentSpan}/12
                </span>
              </div>
            </PageLayoutContent>

            {showPane ? (
              <PageLayoutPane
                padding={args.panePadding}
                divider={args.paneDivider}
                className={`rounded-lg border-2 border-amber-500/80 bg-amber-50/70 shadow-sm ${paneSpanClass}`}
                ariaLabel="Pane with guides"
                sticky={args.paneSticky}
                resizable={args.paneResizable}
                minWidth={args.paneMinWidth}
              >
              <div style={{ minHeight: args.paneHeight }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-amber-900">Pane</div>
                    <p className="mt-2 text-sm text-amber-900/80">
                      Controlled by <code className="rounded bg-amber-100 px-1 py-0.5">paneSpan</code>.
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-500/90 px-2.5 py-0.5 text-xs font-medium text-white shadow">
                    lg: {args.paneSpan}/12
                  </span>
                </div>
                </div>
              </PageLayoutPane>
            ) : null}
          </PageLayoutBody>

          {args.renderFooter ? (
            <PageLayoutFooter
              divider={args.footerDivider}
              padding={args.footerPadding}
              className="rounded-lg border-2 border-purple-500/80 bg-purple-50/80 shadow-sm"
            >
              <div className="flex items-center justify-between" style={{ minHeight: args.footerHeight }}>
                <div className="text-sm font-semibold text-purple-900">Footer</div>
                <div className="rounded-full bg-purple-500/90 px-2.5 py-0.5 text-xs font-medium text-white shadow">
                  Stays aligned with content width
                </div>
              </div>
            </PageLayoutFooter>
          ) : null}
        </PageLayout>
      </div>
    )
  },
}