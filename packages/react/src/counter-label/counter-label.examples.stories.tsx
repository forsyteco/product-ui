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
    <div className="sb-w-full sb-max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
        </CardHeader>
        <CardContent className="sb-grid sb-grid-gap-2">
          <div className="sb-list-row">
            <span className="sb-text-base">Inbox</span>
            <CounterLabel>12</CounterLabel>
          </div>
          <div className="sb-list-row">
            <span className="sb-text-base">Requests</span>
            <CounterLabel variant="primary">3</CounterLabel>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};


