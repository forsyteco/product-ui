// page-layout.features.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'

import {
  PageLayout,
  PageLayoutBody,
  PageLayoutContent,
  PageLayoutHeader,
  PageLayoutPane,
} from './page-layout'

const meta = {
  title: 'Components/PageLayout/Features',
  component: PageLayout,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PageLayout>

export default meta
type Story = StoryObj<typeof meta>

function Card({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <div className="mb-2 text-sm font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

export const StickyPane: Story = {
  render: () => (
    <PageLayout
      containerWidth="xlarge"
      gutters="normal"
      spacing="normal"
    >
      <PageLayoutHeader divider="line" className="sticky top-0 z-10 bg-background/80 backdrop-blur">
        <div className="flex h-14 items-center justify-between">
          <div className="text-lg font-semibold">Sticky header</div>
          <div className="text-sm text-muted-foreground">Scroll</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="lg:col-span-8">
          <div className="grid gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <Card key={i} title={`Content ${i + 1}`}>
                Lots of content to enable scrolling.
              </Card>
            ))}
          </div>
        </PageLayoutContent>

        <PageLayoutPane ariaLabel="Sticky pane" sticky className="lg:col-span-4">
          <div className="grid gap-4">
            <Card title="Sticky pane">This stays visible while you scroll.</Card>
            <Card title="Filters">Put filter controls here.</Card>
          </div>
        </PageLayoutPane>
      </PageLayoutBody>
    </PageLayout>
  ),
}

export const ResizablePane: Story = {
  render: () => (
    <PageLayout
      containerWidth="xlarge"
      gutters="normal"
      spacing="normal"
    >
      <PageLayoutHeader divider="none">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Resizable pane</div>
          <div className="text-sm text-muted-foreground">Drag the pane edge (desktop)</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="lg:col-span-8">
          <div className="grid gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} title={`Main ${i + 1}`}>
                Resize the pane on the right (desktop widths).
              </Card>
            ))}
          </div>
        </PageLayoutContent>

        <PageLayoutPane ariaLabel="Resizable pane" divider="line" resizable minWidth={260} className="lg:col-span-4">
          <div className="grid gap-4">
            <Card title="Resizable pane">
              Uses <code className="rounded bg-muted px-1 py-0.5">resize-x</code> +{' '}
              <code className="rounded bg-muted px-1 py-0.5">overflow-auto</code>.
            </Card>
            <Card title="Notes">Great for details panels.</Card>
          </div>
        </PageLayoutPane>
      </PageLayoutBody>
    </PageLayout>
  ),
}