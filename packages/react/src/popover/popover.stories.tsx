import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

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
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <h3 className="sbTextBase sbFontMedium sbForegroundText sbMb2">Popover Title</h3>
        <p className="sbTextBase sbMutedText">This is the popover content.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>Toggle Popover</PopoverTrigger>
      <PopoverContent>
        <h3 className="sbTextBase sbFontMedium sbForegroundText sbMb2">Custom Popover</h3>
        <p className="sbTextBase sbMutedText">You can customize the content and styling.</p>
      </PopoverContent>
    </Popover>
  ),
  args: {},
};

