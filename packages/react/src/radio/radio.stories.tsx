import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './radio';

const meta = {
  title: 'Components/Radio',
  component: Radio.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Radio from `@base-ui/react/radio`.' } },
  },
} satisfies Meta<typeof Radio.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Radio.Root name="plan" value="free" defaultChecked>
        <Radio.Indicator />
        Free
      </Radio.Root>
      <Radio.Root name="plan" value="pro">
        <Radio.Indicator />
        Pro
      </Radio.Root>
    </div>
  ),
};
