import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';

const meta = {
  title: 'Components/Tooltip/Examples',
  component: Tooltip.Root,
  parameters: { layout: 'centered' },
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

export const IconHint: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger aria-label="Info">ⓘ</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup>Additional context for this control.</Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  ),
};
