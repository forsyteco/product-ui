import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContextMenu } from './context-menu';

const meta = {
  title: 'Components/ContextMenu/Features',
  component: ContextMenu.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ContextMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Items: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>Surface</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup>
            <ContextMenu.Item>Edit</ContextMenu.Item>
            <ContextMenu.Item disabled>Disabled</ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};
