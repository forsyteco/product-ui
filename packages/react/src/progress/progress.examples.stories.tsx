import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta = {
  title: 'Components/Progress/Examples',
  component: Progress.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Progress.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Download: Story = {
  render: () => (
    <Progress.Root value={65} style={{ width: 320 }}>
      <Progress.Label>Download</Progress.Label>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress.Root>
  ),
};
