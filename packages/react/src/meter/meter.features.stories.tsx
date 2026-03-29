import type { Meta, StoryObj } from '@storybook/react-vite';
import { Meter } from './meter';

const meta = {
  title: 'Components/Meter/Features',
  component: Meter.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Meter.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Half: Story = {
  render: () => (
    <Meter.Root value={50} min={0} max={100} style={{ width: 240 }}>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter.Root>
  ),
};
