import type { Meta, StoryObj } from '@storybook/react-vite';
import Popover, { PopoverButton, PopoverPanel } from './popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A popover component for displaying floating content. Built with Headless UI for positioning and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverButton>Open Popover</PopoverButton>
      <PopoverPanel>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Popover Title</h3>
        <p className="text-sm text-gray-600">This is the popover content.</p>
      </PopoverPanel>
    </Popover>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverButton>Toggle Popover</PopoverButton>
      <PopoverPanel>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Custom Popover</h3>
        <p className="text-sm text-gray-600">You can customize the content and styling.</p>
      </PopoverPanel>
    </Popover>
  ),
  args: {},
};

