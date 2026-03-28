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
    <div className="sbWFull sbMaxWmd">
      <Card>
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="sbStackGap3">
          {['Ada Lovelace', 'Grace Hopper', 'Alan Turing'].map((name) => (
            <div key={name} className="sbRow sbGap3">
              <Avatar>
                <AvatarFallback variant="boring" name={name} />
              </Avatar>
              <div className="sbTextBase">{name}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  ),
};


