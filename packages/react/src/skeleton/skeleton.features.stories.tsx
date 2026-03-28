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
    <div className="sbW360 sbStack2">
      <Skeleton className="sbSkH4 sbSkW60p" />
      <Skeleton className="sbSkH4 sbSkWFull" />
      <Skeleton className="sbSkH4 sbSkW80p" />
    </div>
  ),
};

export const AvatarWithText: Story = {
  render: () => (
    <div className="sbRow sbGap3">
      <Skeleton className="sbSkAvatar10" />
      <div className="sbStack2">
        <Skeleton className="sbSkH4 sbSkW40" />
        <Skeleton className="sbSkH4 sbSkW56" />
      </div>
    </div>
  ),
};


