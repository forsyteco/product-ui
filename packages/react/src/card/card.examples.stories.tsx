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
    <div className="sb-w-full sb-max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Forsyteco Starter</CardTitle>
          <CardDescription>Everything you need to get started quickly.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="sb-stack-2 sb-text-base">
            <li className="sb-row-between">
              <span className="sb-muted-text">Projects</span>
              <span>Unlimited</span>
            </li>
            <li className="sb-row-between">
              <span className="sb-muted-text">Support</span>
              <span>Standard</span>
            </li>
            <li className="sb-row-between">
              <span className="sb-muted-text">Users</span>
              <span>10</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="sb-card-footer-actions">
          <Button variant="default">Learn more</Button>
          <Button>Choose plan</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const StatGrid: Story = {
  render: () => (
    <div className="sb-grid-md-3">
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
            <div className="sb-card-well-sm" />
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};


