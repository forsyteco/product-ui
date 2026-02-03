import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';

const meta = {
  title: 'Components/Tabs/Features',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultIndex: {
      control: { type: 'number', min: 0 },
      description: 'Default selected tab index',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Tabs>
        <TabList>
          <Tab>Account</Tab>
          <Tab>Password</Tab>
          <Tab>Notifications</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h3 className="font-semibold mb-2">Account Settings</h3>
            <p className="text-base text-gray-600">Manage your account preferences here.</p>
          </TabPanel>
          <TabPanel>
            <h3 className="font-semibold mb-2">Password Settings</h3>
            <p className="text-base text-gray-600">Update your password and security settings.</p>
          </TabPanel>
          <TabPanel>
            <h3 className="font-semibold mb-2">Notification Settings</h3>
            <p className="text-base text-gray-600">Configure how you receive notifications.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
};

export const DefaultIndex: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>First panel content</TabPanel>
          <TabPanel>Second panel content (default)</TabPanel>
          <TabPanel>Third panel content</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  ),
};

