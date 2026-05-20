import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContextMenu } from './context-menu';

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Context menu on `@base-ui/react/context-menu`.' } },
  },
} satisfies Meta<typeof ContextMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>Right-click (or long-press) this area</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup>
            <ContextMenu.Item>Copy</ContextMenu.Item>
            <ContextMenu.Item>Paste</ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};
