import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './radio';

const meta = {
  title: 'Components/Radio/Features',
  component: Radio.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Radio.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  render: () => (
    <Radio.Root name="x" value="a" disabled>
      <Radio.Indicator />
      Disabled
    </Radio.Root>
  ),
};
