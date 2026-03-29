import type { Meta, StoryObj } from '@storybook/react-vite';
import { Meter } from './meter';

const meta = {
  title: 'Components/Meter',
  component: Meter.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Meter from `@base-ui/react/meter`.' } },
  },
} satisfies Meta<typeof Meter.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Meter.Root value={45} min={0} max={100} style={{ width: 280 }}>
      <Meter.Label>Storage</Meter.Label>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
      <Meter.Value />
    </Meter.Root>
  ),
};
