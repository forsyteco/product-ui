import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, CardContent, CardHeader, CardTitle } from '../card';
import { Avatar, AvatarFallback } from './avatar';

const meta = {
  title: 'Components/Avatar/Examples',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MemberList: Story = {
  render: () => (
    <div className="sb-w-full sb-max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="sb-stack-gap-3">
          {['Ada Lovelace', 'Grace Hopper', 'Alan Turing'].map((name) => (
            <div key={name} className="sb-row sb-gap-3">
              <Avatar>
                <AvatarFallback variant="boring" name={name} />
              </Avatar>
              <div className="sb-text-base">{name}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  ),
};


