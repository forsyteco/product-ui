import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import {
  PageLayout,
  PageLayoutBody,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
  PageLayoutPane,
} from './page-layout'

describe('PageLayout', () => {
  it('guards subcomponents outside provider', () => {
    expect(() => render(<PageLayoutContent>Orphan</PageLayoutContent>)).toThrow(
      'PageLayoutContent must be used within <PageLayout>.'
    )
  })

  it('renders layout grid with default spacing', () => {
    const { container } = render(
      <PageLayout className="outer-shell">
        <PageLayoutHeader ariaLabel="Header area">Header</PageLayoutHeader>

        <PageLayoutBody>
          <PageLayoutContent className="lg:col-span-8">Content</PageLayoutContent>
          <PageLayoutPane ariaLabel="Support Pane" className="lg:col-span-4">
            Pane
          </PageLayoutPane>
        </PageLayoutBody>

        <PageLayoutFooter ariaLabel="Footer area">Footer</PageLayoutFooter>
      </PageLayout>
    )

    const outer = container.firstElementChild as HTMLElement
    expect(outer).toHaveClass('outer-shell', 'w-full')

    const frame = outer.firstElementChild as HTMLElement
    expect(frame).toHaveClass('max-w-7xl', 'px-4', 'sm:px-8', 'space-y-6')

    const header = screen.getByLabelText('Header area')
    expect(header).toHaveClass('py-4')

    const body = container.querySelector('main') as HTMLElement
    expect(body).toHaveClass('grid', 'grid-cols-12', 'items-start', 'gap-6')

    const content = screen.getByText('Content').closest('section') as HTMLElement
    expect(content).toHaveClass('col-span-12', 'lg:col-span-8')

    const pane = screen.getByLabelText('Support Pane')
    expect(pane).toHaveClass('order-last', 'lg:order-last', 'col-span-12', 'lg:col-span-4')
    expect(pane).not.toHaveClass('lg:sticky', 'lg:resize-x')

    const footer = screen.getByLabelText('Footer area')
    expect(footer).toHaveClass('py-4')
  })

  it('honors spacing overrides and pane positioning', () => {
    const { container } = render(
      <PageLayout containerWidth="medium" gutters="condensed" spacing="none">
        <PageLayoutBody gap="none">
          <PageLayoutPane
            ariaLabel="Start Pane"
            position="start"
            padding="condensed"
            divider="line"
            className="lg:col-span-3"
          >
            Pane
          </PageLayoutPane>
          <PageLayoutContent padding="condensed" className="custom-content lg:col-span-9">
            Content
          </PageLayoutContent>
        </PageLayoutBody>
      </PageLayout>
    )

    const frame = container.firstElementChild?.firstElementChild as HTMLElement
    expect(frame).toHaveClass('max-w-3xl', 'px-4', 'sm:px-6')
    expect(frame).not.toHaveClass('space-y-4', 'space-y-6')

    const body = container.querySelector('main') as HTMLElement
    expect(body).toHaveClass('gap-0')

    const content = screen.getByText('Content').closest('section') as HTMLElement
    expect(content).toHaveClass('col-span-12', 'lg:col-span-9', 'py-3', 'custom-content')

    const pane = screen.getByLabelText('Start Pane')
    expect(pane).toHaveClass('order-first', 'lg:order-first', 'col-span-12', 'lg:col-span-3', 'py-3')
    expect(pane).toHaveClass('lg:border-r', 'lg:border-border', 'lg:pr-6')
  })

  it('applies sticky/resizable props and min width to pane', () => {
    render(
      <PageLayout panePosition="start">
        <PageLayoutBody>
          <PageLayoutPane ariaLabel="Resizable pane" sticky resizable minWidth={320} className="lg:col-span-5">
            Pane
          </PageLayoutPane>
          <PageLayoutContent className="lg:col-span-7">Content</PageLayoutContent>
        </PageLayoutBody>
      </PageLayout>
    )

    const pane = screen.getByLabelText('Resizable pane')
    expect(pane).toHaveClass('order-first', 'lg:order-first')
    expect(pane).toHaveClass('lg:col-span-5', 'lg:sticky', 'lg:top-6', 'lg:resize-x', 'lg:overflow-auto')
    expect(pane).toHaveStyle({ minWidth: '320px' })
  })
})