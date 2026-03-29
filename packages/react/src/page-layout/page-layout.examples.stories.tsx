import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'

import {
  PageLayout,
  PageLayoutBody,
  PageLayoutContent,
  PageLayoutHeader,
  PageLayoutFooter,
  PageLayoutPane,
} from './page-layout'

const meta = {
  title: 'Components/PageLayout/Examples',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageLayout>

export default meta
type Story = StoryObj<typeof meta>

function Panel({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="sb-panel">
      <div className="sb-mb-2 sb-text-sm sb-font-medium">{title}</div>
      <div className="sb-text-sm sb-muted-text">{children}</div>
    </div>
  )
}

export const DashboardTwoColumn: Story = {
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
          <div>
            <div className="sb-text-lg sb-font-semibold">Dashboard</div>
            <div className="sb-text-sm sb-muted-text">Overview</div>
          </div>
          <div className="sb-text-sm sb-muted-text">Last updated: just now</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="sb-lg-col-span-9">
          <div className="sb-grid sb-grid-gap-4">
            <Panel title="KPIs">Cards / charts go here</Panel>
            <div className="sb-grid sb-grid-gap-4 sb-lg-grid-cols-2">
              <Panel title="Work queue">List</Panel>
              <Panel title="Alerts">List</Panel>
            </div>
            <Panel title="Recent activity">Timeline</Panel>
          </div>
        </PageLayoutContent>

        <PageLayoutPane className="sb-lg-col-span-3" position="end" sticky offsetHeader={0}>
          <div className="sb-grid sb-grid-gap-4">
            <Panel title="Quick actions">Buttons</Panel>
            <Panel title="Context">Selected matter/client details</Panel>
          </div>
        </PageLayoutPane>
      </PageLayoutBody>

      <PageLayoutFooter divider="line">
        <div className="sb-text-sm sb-muted-text">© Forsyte</div>
      </PageLayoutFooter>
    </PageLayout>
  ),
}

export const ContentOnly: Story = {
  args: {
    children: null,
    containerWidth: 'large',
    padding: 'normal',
    columnGap: 'normal',
    rowGap: 'normal',
  },
  render: () => (
    <PageLayout containerWidth="large" padding="normal" columnGap="normal" rowGap="normal">
      <PageLayoutHeader divider="line">
        <div className="sb-text-lg sb-font-semibold">Content-only page</div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="sb-lg-col-span-12">
          <div className="sb-grid sb-grid-gap-4">
            <Panel title="Form section">Inputs</Panel>
            <Panel title="Form section">Inputs</Panel>
            <Panel title="Form section">Inputs</Panel>
          </div>
        </PageLayoutContent>
      </PageLayoutBody>
    </PageLayout>
  ),
}

export const LeftPaneNavigation: Story = {
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
          <div className="sb-text-lg sb-font-semibold">Settings</div>
          <div className="sb-text-sm sb-muted-text">Account</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutPane className="sb-lg-col-span-3" position="start" sticky offsetHeader={0}>
          <div className="sb-grid sb-grid-gap-2">
            {['Profile', 'Security', 'Billing', 'Integrations', 'Audit log'].map((item) => (
              <div key={item} className="sb-nav-item">
                {item}
              </div>
            ))}
          </div>
        </PageLayoutPane>

        <PageLayoutContent className="sb-lg-col-span-9">
          <div className="sb-grid sb-grid-gap-4">
            <Panel title="Profile">Main settings content</Panel>
            <Panel title="Preferences">More settings</Panel>
            <Panel title="Danger zone">Actions</Panel>
          </div>
        </PageLayoutContent>
      </PageLayoutBody>

      <PageLayoutFooter divider="line">
        <div className="sb-text-sm sb-muted-text">v1alpha</div>
      </PageLayoutFooter>
    </PageLayout>
  ),
}