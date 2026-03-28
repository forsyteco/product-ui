import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, CardContent, CardHeader, CardTitle } from '../card';
import { CounterLabel } from './counter-label';

const meta = {
  title: 'Components/CounterLabel/Examples',
  component: CounterLabel,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CounterLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarItem: Story = {
  render: () => (
    <div className="sbWFull sbMaxWsm">
      <Card>
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
        </CardHeader>
        <CardContent className="sbGrid sbGridGap2">
          <div className="sbListRow">
            <span className="sbTextBase">Inbox</span>
            <CounterLabel>12</CounterLabel>
          </div>
          <div className="sbListRow">
            <span className="sbTextBase">Requests</span>
            <CounterLabel variant="primary">3</CounterLabel>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};


