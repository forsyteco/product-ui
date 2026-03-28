import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';
import { Button } from '../button';

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
      <div className="sbDemoTabsShell">
        <h1 className="sbText2xl sbFontBold sbMb6">Settings</h1>
        <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList>
            <Tab>General</Tab>
            <Tab>Security</Tab>
            <Tab>Privacy</Tab>
            <Tab>Billing</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="sbStack4">
                <div>
                  <label className="sbFormLabelInline">Display Name</label>
                  <input
                    type="text"
                    className="sbNativeField"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="sbFormLabelInline">Email</label>
                  <input
                    type="email"
                    className="sbNativeField"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="sbStack4">
                <div>
                  <label className="sbFormLabelInline">Current Password</label>
                  <input type="password" className="sbNativeField" />
                </div>
                <div>
                  <label className="sbFormLabelInline">New Password</label>
                  <input type="password" className="sbNativeField" />
                </div>
                <Button>Update Password</Button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="sbStack4">
                <div className="sbRowBetween">
                  <div>
                    <h3 className="sbTextBase sbFontMedium">Public Profile</h3>
                    <p className="sbTextBase sbMutedText">Make your profile visible to everyone</p>
                  </div>
                  <input type="checkbox" className="sbCheckbox" />
                </div>
                <div className="sbRowBetween">
                  <div>
                    <h3 className="sbTextBase sbFontMedium">Email Notifications</h3>
                    <p className="sbTextBase sbMutedText">Receive email updates</p>
                  </div>
                  <input type="checkbox" className="sbCheckbox" defaultChecked />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="sbStack4">
                <div className="sbDocSurface">
                  <h3 className="sbFontSemibold sbMb2">Current Plan</h3>
                  <p className="sbTextBase sbMutedText sbMb4">Pro Plan - $29/month</p>
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

