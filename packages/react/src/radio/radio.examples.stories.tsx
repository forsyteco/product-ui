import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './radio';

const meta = {
  title: 'Components/Radio/Examples',
  component: Radio.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Radio.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grouped: Story = {
  render: () => (
    <div role="radiogroup" aria-label="Billing" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Radio.Root name="billing" value="monthly" defaultChecked>
        <Radio.Indicator />
        Monthly
      </Radio.Root>
      <Radio.Root name="billing" value="annual">
        <Radio.Indicator />
        Annual
      </Radio.Root>
    </div>
  ),
};
