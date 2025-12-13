import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Tabs, { TabList, Tab, TabPanels, TabPanel } from './tabs';

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
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList>
            <Tab>General</Tab>
            <Tab>Security</Tab>
            <Tab>Privacy</Tab>
            <Tab>Billing</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Display Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Password</label>
                  <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Update Password
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Public Profile</h3>
                    <p className="text-sm text-gray-600">Make your profile visible to everyone</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-600">Receive email updates</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Current Plan</h3>
                  <p className="text-sm text-gray-600 mb-4">Pro Plan - $29/month</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Change Plan
                  </button>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
  },
};

