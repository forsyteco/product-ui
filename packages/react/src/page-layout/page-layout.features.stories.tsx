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
        <div className="sbPanel">
            <div className="sbMb2 sbTextSm sbFontMedium">{title}</div>
            <div className="sbTextSm sbMutedText">{children}</div>
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
            <PageLayoutHeader divider="line" className="sbStickyHeader">
                <div className="sbRowBetween sbH14">
                    <div className="sbTextLg sbFontSemibold">Sticky header</div>
                    <div className="sbTextSm sbMutedText">Scroll</div>
                </div>
            </PageLayoutHeader>

            <PageLayoutBody>
                <PageLayoutContent className="sbLgColSpan8">
                    <div className="sbGrid sbGridGap4">
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
                    className="sbLgColSpan4"
                    position="end"
                    sticky
                    offsetHeader={56} // matches sticky header bar height (3.5rem)
                >
                    <div className="sbGrid sbGridGap4">
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
                <div className="sbRowBetween">
                    <div className="sbTextLg sbFontSemibold">Resizable pane</div>
                    <div className="sbTextSm sbMutedText">Drag the gutter</div>
                </div>
            </PageLayoutHeader>

            <PageLayoutBody>
                <PageLayoutContent className="sbLgColSpan8">
                    <div className="sbGrid sbGridGap4">
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
                    className="sbLgColSpan4"
                    position="end"
                    resizable
                    minWidth={260}
                    widthStorageKey="storybook:pageLayout:rightPaneWidth"
                >
                    <div className="sbGrid sbGridGap4">
                        <Card title="Resizable pane">Width persists via localStorage.</Card>
                        <Card title="Notes">Great for details panels.</Card>
                    </div>
                </PageLayoutPane>
            </PageLayoutBody>
        </PageLayout>
    ),
}