import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuItem, MenuButton } from './menu';
import { Button } from '../button';

const meta = {
  title: 'Components/Menu/Examples',
  component: Menu,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMenu: Story = {
  render: () => (
    <div className="sb-end-bar">
      <Menu
        trigger={
          <Button variant="default" className="sb-row sb-gap-2 sb-rounded-lg-btn">
            <span>John Doe</span>
            <svg className="sb-icon-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        }
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuItem disabled>Upgrade Plan</MenuItem>
        <MenuItem>Sign out</MenuItem>
      </Menu>
    </div>
  ),
};

export const ActionMenu: Story = {
  render: () => (
    <div className="sb-p-4">
      <div className="sb-doc-surface">
        <div className="sb-row-between sb-mb-4">
          <h3 className="sb-font-semibold">Document</h3>
          <Menu trigger={<MenuButton>Actions</MenuButton>}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Share</MenuItem>
            <MenuItem>Duplicate</MenuItem>
            <MenuItem>Archive</MenuItem>
            <MenuItem className="sb-menu-item-danger">Delete</MenuItem>
          </Menu>
        </div>
        <p className="sb-text-base sb-muted-text">This is a sample document with an action menu.</p>
      </div>
    </div>
  ),
};
