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
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageLayout>

export default meta
type Story = StoryObj<typeof meta>

function Card({ title, children }: { readonly title: string; readonly children?: React.ReactNode }) {
    return (
        <div className="sb-panel">
            <div className="sb-mb-2 sb-text-sm sb-font-medium">{title}</div>
            <div className="sb-text-sm sb-muted-text">{children}</div>
        </div>
    )
}

export const StickyPane: Story = {
    args: {
        children: null,
        containerWidth: 'xlarge',
        padding: 'normal',
        columnGap: 'normal',
        rowGap: 'normal',
    },
    render: () => (
        <PageLayout containerWidth="xlarge" padding="normal" columnGap="normal" rowGap="normal">
            <PageLayoutHeader divider="line" className="sb-sticky-header">
                <div className="sb-row-between sb-h-14">
                    <div className="sb-text-lg sb-font-semibold">Sticky header</div>
                    <div className="sb-text-sm sb-muted-text">Scroll</div>
                </div>
            </PageLayoutHeader>

            <PageLayoutBody>
                <PageLayoutContent className="sb-lg-col-span-8">
                    <div className="sb-grid sb-grid-gap-4">
                        {Array.from({ length: 12 }).map((_, i) => {
                            const title = `Content ${i + 1}`;
                            return (
                                <Card key={title} title={title}>
                                    Lots of content to enable scrolling.
                                </Card>
                            );
                        })}
                    </div>
                </PageLayoutContent>

                <PageLayoutPane
                    className="sb-lg-col-span-4"
                    position="end"
                    sticky
                    offsetHeader={56} // matches sticky header bar height (3.5rem)
                >
                    <div className="sb-grid sb-grid-gap-4">
                        <Card title="Sticky pane">This stays visible while you scroll.</Card>
                        <Card title="Filters">Put filter controls here.</Card>
                    </div>
                </PageLayoutPane>
            </PageLayoutBody>
        </PageLayout>
    ),
}

export const ResizablePane: Story = {
    args: {
        children: null,
        containerWidth: 'xlarge',
        padding: 'normal',
        columnGap: 'normal',
        rowGap: 'normal',
    },
    render: () => (
        <PageLayout containerWidth="xlarge" padding="normal" columnGap="normal" rowGap="normal">
            <PageLayoutHeader divider="none">
                <div className="sb-row-between">
                    <div className="sb-text-lg sb-font-semibold">Resizable pane</div>
                    <div className="sb-text-sm sb-muted-text">Drag the gutter</div>
                </div>
            </PageLayoutHeader>

            <PageLayoutBody>
                <PageLayoutContent className="sb-lg-col-span-8">
                    <div className="sb-grid sb-grid-gap-4">
                        {Array.from({ length: 6 }).map((_, i) => {
                            const title = `Main ${i + 1}`;
                            return (
                                <Card key={title} title={title}>
                                    Resize the pane on the right (desktop widths).
                                </Card>
                            );
                        })}
                    </div>
                </PageLayoutContent>

                <PageLayoutPane
                    className="sb-lg-col-span-4"
                    position="end"
                    resizable
                    minWidth={260}
                    widthStorageKey="storybook:pageLayout:rightPaneWidth"
                >
                    <div className="sb-grid sb-grid-gap-4">
                        <Card title="Resizable pane">Width persists via localStorage.</Card>
                        <Card title="Notes">Great for details panels.</Card>
                    </div>
                </PageLayoutPane>
            </PageLayoutBody>
        </PageLayout>
    ),
}