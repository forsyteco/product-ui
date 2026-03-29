import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from './skeleton';

const meta = {
  title: 'Components/Skeleton/Features',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextLines: Story = {
  render: () => (
    <div className="sb-w-360 sb-stack-2">
      <Skeleton className="sb-sk-h-4 sb-sk-w-60p" />
      <Skeleton className="sb-sk-h-4 sb-sk-w-full" />
      <Skeleton className="sb-sk-h-4 sb-sk-w-80p" />
    </div>
  ),
};

export const AvatarWithText: Story = {
  render: () => (
    <div className="sb-row sb-gap-3">
      <Skeleton className="sb-sk-avatar-10" />
      <div className="sb-stack-2">
        <Skeleton className="sb-sk-h-4 sb-sk-w-40" />
        <Skeleton className="sb-sk-h-4 sb-sk-w-56" />
      </div>
    </div>
  ),
};


