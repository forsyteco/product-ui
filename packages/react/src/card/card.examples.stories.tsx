import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: 'Components/Card/Examples',
  component: Card,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {
  render: () => (
    <div className="sbWFull sbMaxWmd">
      <Card>
        <CardHeader>
          <CardTitle>Forsyteco Starter</CardTitle>
          <CardDescription>Everything you need to get started quickly.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="sbStack2 sbTextBase">
            <li className="sbRowBetween">
              <span className="sbMutedText">Projects</span>
              <span>Unlimited</span>
            </li>
            <li className="sbRowBetween">
              <span className="sbMutedText">Support</span>
              <span>Standard</span>
            </li>
            <li className="sbRowBetween">
              <span className="sbMutedText">Users</span>
              <span>10</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="sbCardFooterActions">
          <Button variant="outline">Learn more</Button>
          <Button>Choose plan</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const StatGrid: Story = {
  render: () => (
    <div className="sbGridMd3">
      {[
        { label: 'Revenue', value: '$42,300' },
        { label: 'Active users', value: '1,284' },
        { label: 'Uptime', value: '99.98%' },
      ].map((stat) => (
        <Card key={stat.label}>
          <CardHeader>
            <CardDescription>{stat.label}</CardDescription>
            <CardTitle>{stat.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="sbCardWellSm" />
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};


