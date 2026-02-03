import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite'
import * as React from 'react'

import {
  PageLayout,
  PageLayoutBody,
  PageLayoutContent,
  PageLayoutHeader,
  PageLayoutFooter,
  PageLayoutPane,
} from './page-layout'
import type {
  ContainerWidth,
  Divider,
  Gap,
  PanePosition,
  Spacing,
} from './page-layout'

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
  padding: Spacing
  rowGap: Gap
  columnGap: Gap
  className?: string
  // Header props
  headerDivider: Divider
  headerPadding: Spacing
  // Content props
  contentWidth: ContainerWidth
  contentPadding: Spacing
  // Pane props
  panePosition: PanePosition
  paneWidth: ContainerWidth
  paneMinWidth: number
  paneSticky: boolean
  paneResizable: boolean
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
    padding: 'normal',
    rowGap: 'normal',
    columnGap: 'normal',
    headerDivider: 'none',
    headerPadding: 'normal',
    contentWidth: 'full',
    contentPadding: 'none',
    panePosition: 'end',
    paneWidth: 'large',
    paneMinWidth: 280,
    paneSticky: false,
    paneResizable: false,
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
    padding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'PageLayout props' },
    },
    rowGap: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'PageLayout props' },
    },
    columnGap: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'PageLayout props' },
    },
    className: { control: 'text', table: { category: 'PageLayout props' } },

    headerDivider: {
      control: { type: 'radio' },
      options: ['none', 'line', 'filled'],
      table: { category: 'Header props' },
    },
    headerPadding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Header props' },
    },

    contentWidth: {
      control: { type: 'radio' },
      options: ['full', 'medium', 'large', 'xlarge'],
      table: { category: 'Content props' },
    },
    contentPadding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Content props' },
    },

    panePosition: {
      control: { type: 'radio' },
      options: ['start', 'end'],
      table: { category: 'Pane props' },
    },
    paneWidth: {
      control: { type: 'radio' },
      options: ['full', 'medium', 'large', 'xlarge'],
      table: { category: 'Pane props' },
    },
    paneMinWidth: {
      control: { type: 'number' },
      table: { category: 'Pane props' },
    },
    paneSticky: { control: 'boolean', table: { category: 'Pane props' } },
    paneResizable: { control: 'boolean', table: { category: 'Pane props' } },
    panePadding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Pane props' },
    },
    paneDivider: {
      control: { type: 'radio' },
      options: ['none', 'line', 'filled'],
      table: { category: 'Pane props' },
    },

    footerDivider: {
      control: { type: 'radio' },
      options: ['none', 'line', 'filled'],
      table: { category: 'Footer props' },
    },
    footerPadding: {
      control: { type: 'radio' },
      options: ['none', 'condensed', 'normal'],
      table: { category: 'Footer props' },
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

const Template: StoryFn<StoryArgs> = (args) => {
  return (
    <PageLayout
      containerWidth={args.containerWidth}
      padding={args.padding}
      rowGap={args.rowGap}
      columnGap={args.columnGap}
      className={args.className}
    >
      {args.renderHeader ? (
        <PageLayoutHeader divider={args.headerDivider} padding={args.headerPadding}>
          <Placeholder height={args.headerHeight} label="Header" />
        </PageLayoutHeader>
      ) : null}

      <PageLayoutBody>
        <PageLayoutContent width={args.contentWidth} padding={args.contentPadding} className="lg:col-span-8">
          <Placeholder height={args.contentHeight} label="Content" />
        </PageLayoutContent>

        {args.renderPane ? (
          <PageLayoutPane
            position={args.panePosition}
            width={args.paneWidth}
            minWidth={args.paneMinWidth}
            sticky={args.paneSticky}
            resizable={args.paneResizable}
            padding={args.panePadding}
            divider={args.paneDivider}
            className="lg:col-span-4"
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
    rowGap: 'condensed',
    columnGap: 'condensed',
    headerDivider: 'line',
    panePosition: 'start',
    paneSticky: true,
  },
  render: Template,
}
