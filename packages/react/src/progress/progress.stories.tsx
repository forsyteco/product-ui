import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta = {
  title: 'Components/Progress',
  component: Progress.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Progress from `@base-ui/react/progress`.' } },
  },
} satisfies Meta<typeof Progress.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Progress.Root value={40} style={{ width: 280 }}>
      <Progress.Label>Uploading</Progress.Label>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
      <Progress.Value />
    </Progress.Root>
  ),
};
