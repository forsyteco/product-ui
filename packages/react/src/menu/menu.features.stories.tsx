import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuItem, MenuButton } from './menu';
import { Button } from '../button';

const meta = {
  title: 'Components/Menu/Features',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Alignment of the menu popup',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: "'right'" },
      },
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alignments: Story = {
  render: () => (
    <div className="sb-row sb-gap-8">
      <div className="sb-col-center sb-gap-2">
        <Menu trigger={<Button>Left Aligned</Button>} align="left">
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
        <span className="sb-text-xs sb-muted-text">Left</span>
      </div>
      <div className="sb-col-center sb-gap-2">
        <Menu trigger={<Button>Right Aligned</Button>} align="right">
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
        <span className="sb-text-xs sb-muted-text">Right</span>
      </div>
    </div>
  ),
};

export const WithMenuButton: Story = {
  render: () => (
    <Menu trigger={<MenuButton>Options</MenuButton>}>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <Menu trigger={<Button>Menu</Button>}>
      <MenuItem>Enabled Item</MenuItem>
      <MenuItem disabled>Disabled Item</MenuItem>
      <MenuItem>Another Enabled Item</MenuItem>
    </Menu>
  ),
};
