import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';

const meta = {
  title: 'Components/Tooltip/Features',
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

export const WithArrow: Story = {
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger>Target</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={8}>
          <Tooltip.Popup>
            With arrow
            <Tooltip.Arrow />
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  ),
};
