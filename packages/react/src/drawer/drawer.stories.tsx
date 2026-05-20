import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './drawer';

const meta = {
  title: 'Components/Drawer',
  component: Drawer.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Drawer on `@base-ui/react/drawer`.' } },
  },
} satisfies Meta<typeof Drawer.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Viewport>
          <Drawer.Popup>
            <Drawer.Content>
              <Drawer.Title>Panel</Drawer.Title>
              <Drawer.Description>Drawer content area.</Drawer.Description>
              <Drawer.Close type="button">Close</Drawer.Close>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};
