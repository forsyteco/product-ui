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
    <Card className="sbW420">
      <CardHeader>
        <CardTitle>Loading profile</CardTitle>
      </CardHeader>
      <CardContent className="sbStack4">
        <div className="sbRow sbGap3">
          <Skeleton className="sbSkAvatar12" />
          <div className="sbStack2">
            <Skeleton className="sbSkH4 sbSkW40" />
            <Skeleton className="sbSkH4 sbSkW56" />
          </div>
        </div>
        <div className="sbStack2">
          <Skeleton className="sbSkH4 sbSkWFull" />
          <Skeleton className="sbSkH4 sbSkW11of12" />
          <Skeleton className="sbSkH4 sbSkW80p" />
        </div>
      </CardContent>
    </Card>
  ),
};


