import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './drawer';

const meta = {
  title: 'Components/Drawer/Examples',
  component: Drawer.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Drawer.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filters: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger>Filters</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Viewport>
          <Drawer.Popup>
            <Drawer.Content>
              <Drawer.Title>Filter results</Drawer.Title>
              <Drawer.Description>Adjust criteria and apply.</Drawer.Description>
              <Drawer.Close type="button">Apply</Drawer.Close>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};
