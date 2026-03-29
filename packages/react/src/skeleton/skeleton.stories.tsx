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
  render: () => <Skeleton className="sb-sk-h-4 sb-sk-w-48" />,
};

export const Playground: Story = {
  args: {},
  render: () => (
    <div className="sb-grid sb-grid-gap-3">
      <Skeleton className="sb-sk-h-4 sb-sk-w-56" />
      <Skeleton className="sb-sk-h-4 sb-sk-w-48" />
      <Skeleton className="sb-sk-h-4 sb-sk-w-64" />
    </div>
  ),
};


