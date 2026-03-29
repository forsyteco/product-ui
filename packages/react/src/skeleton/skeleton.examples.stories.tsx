import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, CardContent, CardHeader, CardTitle } from '../card';
import { Skeleton } from './skeleton';

const meta = {
  title: 'Components/Skeleton/Examples',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingCard: Story = {
  render: () => (
    <Card className="sb-w-420">
      <CardHeader>
        <CardTitle>Loading profile</CardTitle>
      </CardHeader>
      <CardContent className="sb-stack-4">
        <div className="sb-row sb-gap-3">
          <Skeleton className="sb-sk-avatar-12" />
          <div className="sb-stack-2">
            <Skeleton className="sb-sk-h-4 sb-sk-w-40" />
            <Skeleton className="sb-sk-h-4 sb-sk-w-56" />
          </div>
        </div>
        <div className="sb-stack-2">
          <Skeleton className="sb-sk-h-4 sb-sk-w-full" />
          <Skeleton className="sb-sk-h-4 sb-sk-w-11-of-12" />
          <Skeleton className="sb-sk-h-4 sb-sk-w-80p" />
        </div>
      </CardContent>
    </Card>
  ),
};


