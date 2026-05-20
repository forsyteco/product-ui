import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Tooltip from `@base-ui/react/tooltip`.' } },
  },
  decorators: [
    Story => (
      <Tooltip.Provider delay={0}>
        <Story />
      </Tooltip.Provider>
    ),
  ],
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger>Hover</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={6}>
          <Tooltip.Popup>Tooltip copy</Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  ),
};
