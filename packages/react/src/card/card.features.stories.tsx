import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: 'Components/Card/Features',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeaderAction: Story = {
  render: () => (
    <Card className="sb-w-420">
      <CardHeader className="sb-border-b">
        <div>
          <CardTitle>Team settings</CardTitle>
          <CardDescription>Manage your team configuration.</CardDescription>
        </div>
        <CardAction>
          <Button size="sm" variant="default">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="sb-grid sb-grid-gap-2 sb-text-base">
          <div className="sb-row-between">
            <span className="sb-muted-text">Members</span>
            <span className="sb-foreground-text">12</span>
          </div>
          <div className="sb-row-between">
            <span className="sb-muted-text">Plan</span>
            <span className="sb-foreground-text">Pro</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="sb-border-t sb-card-footer-actions">
        <Button variant="default">Cancel</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card className="sb-w-360">
      <CardContent>
        <p className="sb-text-base sb-foreground-text">A minimal card with only content.</p>
      </CardContent>
    </Card>
  ),
};


