import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta = {
  title: 'Components/Progress/Features',
  component: Progress.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Progress.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Indeterminate: Story = {
  render: () => (
    <Progress.Root value={null} style={{ width: 260 }}>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress.Root>
  ),
};
