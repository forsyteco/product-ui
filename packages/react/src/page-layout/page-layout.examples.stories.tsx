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
    <div className="sbPanel">
      <div className="sbMb2 sbTextSm sbFontMedium">{title}</div>
      <div className="sbTextSm sbMutedText">{children}</div>
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
        <div className="sbRowBetween">
          <div>
            <div className="sbTextLg sbFontSemibold">Dashboard</div>
            <div className="sbTextSm sbMutedText">Overview</div>
          </div>
          <div className="sbTextSm sbMutedText">Last updated: just now</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="sbLgColSpan9">
          <div className="sbGrid sbGridGap4">
            <Panel title="KPIs">Cards / charts go here</Panel>
            <div className="sbGrid sbGridGap4 sbLgGridCols2">
              <Panel title="Work queue">List</Panel>
              <Panel title="Alerts">List</Panel>
            </div>
            <Panel title="Recent activity">Timeline</Panel>
          </div>
        </PageLayoutContent>

        <PageLayoutPane className="sbLgColSpan3" position="end" sticky offsetHeader={0}>
          <div className="sbGrid sbGridGap4">
            <Panel title="Quick actions">Buttons</Panel>
            <Panel title="Context">Selected matter/client details</Panel>
          </div>
        </PageLayoutPane>
      </PageLayoutBody>

      <PageLayoutFooter divider="line">
        <div className="sbTextSm sbMutedText">© Forsyte</div>
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
        <div className="sbTextLg sbFontSemibold">Content-only page</div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="sbLgColSpan12">
          <div className="sbGrid sbGridGap4">
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
        <div className="sbRowBetween">
          <div className="sbTextLg sbFontSemibold">Settings</div>
          <div className="sbTextSm sbMutedText">Account</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutPane className="sbLgColSpan3" position="start" sticky offsetHeader={0}>
          <div className="sbGrid sbGridGap2">
            {['Profile', 'Security', 'Billing', 'Integrations', 'Audit log'].map((item) => (
              <div key={item} className="sbNavItem">
                {item}
              </div>
            ))}
          </div>
        </PageLayoutPane>

        <PageLayoutContent className="sbLgColSpan9">
          <div className="sbGrid sbGridGap4">
            <Panel title="Profile">Main settings content</Panel>
            <Panel title="Preferences">More settings</Panel>
            <Panel title="Danger zone">Actions</Panel>
          </div>
        </PageLayoutContent>
      </PageLayoutBody>

      <PageLayoutFooter divider="line">
        <div className="sbTextSm sbMutedText">v1alpha</div>
      </PageLayoutFooter>
    </PageLayout>
  ),
}