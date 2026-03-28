import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from './skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A lightweight skeleton loader primitive.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Skeleton className="sbSkH4 sbSkW48" />,
};

export const Playground: Story = {
  args: {},
  render: () => (
    <div className="sbGrid sbGridGap3">
      <Skeleton className="sbSkH4 sbSkW56" />
      <Skeleton className="sbSkH4 sbSkW48" />
      <Skeleton className="sbSkH4 sbSkW64" />
    </div>
  ),
};


