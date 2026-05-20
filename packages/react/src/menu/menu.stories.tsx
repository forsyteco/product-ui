import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuItem, MenuButton } from './menu';
import { Button } from '../button';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown menu built on `@base-ui/react/menu` with design tokens.',
      },
    },
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
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu trigger={<Button>Open Menu</Button>}>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Menu {...args} trigger={<Button>Open Menu</Button>}>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem disabled>Delete</MenuItem>
    </Menu>
  ),
  args: {
    align: 'right',
  },
};
