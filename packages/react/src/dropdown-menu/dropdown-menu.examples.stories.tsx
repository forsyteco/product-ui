import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMenu, DropdownMenuItem, DropdownMenuButton } from './dropdown-menu';
import { Button } from '../button';

const meta = {
  title: 'Components/DropdownMenu/Examples',
  component: DropdownMenu,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMenu: Story = {
  render: () => (
    <div className="sb-end-bar">
      <DropdownMenu
        trigger={
          <Button variant="default" className="sb-row sb-gap-2 sb-rounded-lg-btn">
            <span>John Doe</span>
            <svg className="sb-icon-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        }
      >
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem disabled>Upgrade Plan</DropdownMenuItem>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenu>
    </div>
  ),
};

export const ActionMenu: Story = {
  render: () => (
    <div className="sb-p-4">
      <div className="sb-doc-surface">
        <div className="sb-row-between sb-mb-4">
          <h3 className="sb-font-semibold">Document</h3>
          <DropdownMenu trigger={<DropdownMenuButton>Actions</DropdownMenuButton>}>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuItem className="sb-menu-item-danger">Delete</DropdownMenuItem>
          </DropdownMenu>
        </div>
        <p className="sb-text-base sb-muted-text">This is a sample document with an action menu.</p>
      </div>
    </div>
  ),
};

