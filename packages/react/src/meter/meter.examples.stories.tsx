import type { Meta, StoryObj } from '@storybook/react-vite';
import { Meter } from './meter';

const meta = {
  title: 'Components/Meter/Examples',
  component: Meter.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Meter.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  render: () => (
    <Meter.Root value={72} min={0} max={100} style={{ width: 320 }}>
      <Meter.Label>CPU</Meter.Label>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter.Root>
  ),
};
