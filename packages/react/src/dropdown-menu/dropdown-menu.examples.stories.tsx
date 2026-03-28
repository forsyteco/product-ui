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
    <div className="sbEndBar">
      <DropdownMenu
        trigger={
          <Button variant="outline" className="sbRow sbGap2 sbRoundedLgBtn">
            <span>John Doe</span>
            <svg className="sbIcon4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="sbP4">
      <div className="sbDocSurface">
        <div className="sbRowBetween sbMb4">
          <h3 className="sbFontSemibold">Document</h3>
          <DropdownMenu trigger={<DropdownMenuButton>Actions</DropdownMenuButton>}>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuItem className="sbMenuItemDanger">Delete</DropdownMenuItem>
          </DropdownMenu>
        </div>
        <p className="sbTextBase sbMutedText">This is a sample document with an action menu.</p>
      </div>
    </div>
  ),
};

