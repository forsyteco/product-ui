import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';
import { Button } from '../button';
import { Input } from '../input';
import { Switch } from '../switch';

const meta = {
  title: 'Components/Tabs/Examples',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SettingsPage: Story = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
      <div className="sb-demo-tabs-shell">
        <h1 className="sb-text-2xl sb-font-bold sb-mb-6">Settings</h1>
        <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList>
            <Tab>General</Tab>
            <Tab>Security</Tab>
            <Tab>Privacy</Tab>
            <Tab>Billing</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="sb-stack-4">
                <div>
                  <label className="sb-form-label-inline">Display Name</label>
                  <Input
                    type="text"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="sb-form-label-inline">Email</label>
                  <Input
                    type="email"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="sb-stack-4">
                <div>
                  <label className="sb-form-label-inline">Current Password</label>
                  <Input type="password" />
                </div>
                <div>
                  <label className="sb-form-label-inline">New Password</label>
                  <Input type="password" />
                </div>
                <Button>Update Password</Button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="sb-stack-4">
                <Switch
                  label="Public Profile"
                  description="Make your profile visible to everyone"
                />
                <Switch
                  label="Email Notifications"
                  description="Receive email updates"
                  defaultChecked
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="sb-stack-4">
                <div className="sb-doc-surface">
                  <h3 className="sb-font-semibold sb-mb-2">Current Plan</h3>
                  <p className="sb-text-base sb-muted-text sb-mb-4">Pro Plan - $29/month</p>
                  <Button>Change Plan</Button>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
  },
};

