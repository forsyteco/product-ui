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
    <div className="max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted">
            <span className="text-base">Inbox</span>
            <CounterLabel>12</CounterLabel>
          </div>
          <div className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted">
            <span className="text-base">Requests</span>
            <CounterLabel variant="primary">3</CounterLabel>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};


