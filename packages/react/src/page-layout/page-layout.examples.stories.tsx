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
    <div className="rounded-lg border bg-background p-4">
      <div className="mb-2 text-sm font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{children}</div>
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
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Dashboard</div>
            <div className="text-sm text-muted-foreground">Overview</div>
          </div>
          <div className="text-sm text-muted-foreground">Last updated: just now</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="lg:col-span-9">
          <div className="grid gap-4">
            <Panel title="KPIs">Cards / charts go here</Panel>
            <div className="grid gap-4 lg:grid-cols-2">
              <Panel title="Work queue">List</Panel>
              <Panel title="Alerts">List</Panel>
            </div>
            <Panel title="Recent activity">Timeline</Panel>
          </div>
        </PageLayoutContent>

        <PageLayoutPane className="lg:col-span-3" position="end" sticky offsetHeader={0}>
          <div className="grid gap-4">
            <Panel title="Quick actions">Buttons</Panel>
            <Panel title="Context">Selected matter/client details</Panel>
          </div>
        </PageLayoutPane>
      </PageLayoutBody>

      <PageLayoutFooter divider="line">
        <div className="text-sm text-muted-foreground">© Forsyte</div>
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
        <div className="text-lg font-semibold">Content-only page</div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="lg:col-span-12">
          <div className="grid gap-4">
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
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Settings</div>
          <div className="text-sm text-muted-foreground">Account</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutPane className="lg:col-span-3" position="start" sticky offsetHeader={0}>
          <div className="grid gap-2">
            {['Profile', 'Security', 'Billing', 'Integrations', 'Audit log'].map((item) => (
              <div key={item} className="rounded-md border px-3 py-2 text-sm">
                {item}
              </div>
            ))}
          </div>
        </PageLayoutPane>

        <PageLayoutContent className="lg:col-span-9">
          <div className="grid gap-4">
            <Panel title="Profile">Main settings content</Panel>
            <Panel title="Preferences">More settings</Panel>
            <Panel title="Danger zone">Actions</Panel>
          </div>
        </PageLayoutContent>
      </PageLayoutBody>

      <PageLayoutFooter divider="line">
        <div className="text-sm text-muted-foreground">v1alpha</div>
      </PageLayoutFooter>
    </PageLayout>
  ),
}