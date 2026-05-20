import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContextMenu } from './context-menu';

const meta = {
  title: 'Components/ContextMenu/Examples',
  component: ContextMenu.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ContextMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardSurface: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div
          style={{
            width: 280,
            padding: 24,
            borderRadius: 8,
            border: '1px solid rgb(var(--border))',
            background: 'rgb(var(--muted) / 0.2)',
          }}
        >
          Card
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup>
            <ContextMenu.Item>Duplicate</ContextMenu.Item>
            <ContextMenu.Item>Archive</ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};
