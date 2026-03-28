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
    <Card className="sbW420">
      <CardHeader className="sbBorderB">
        <div>
          <CardTitle>Team settings</CardTitle>
          <CardDescription>Manage your team configuration.</CardDescription>
        </div>
        <CardAction>
          <Button size="sm" variant="outline">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="sbGrid sbGridGap2 sbTextBase">
          <div className="sbRowBetween">
            <span className="sbMutedText">Members</span>
            <span className="sbForegroundText">12</span>
          </div>
          <div className="sbRowBetween">
            <span className="sbMutedText">Plan</span>
            <span className="sbForegroundText">Pro</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="sbBorderT sbCardFooterActions">
        <Button variant="outline">Cancel</Button>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card className="sbW360">
      <CardContent>
        <p className="sbTextBase sbForegroundText">A minimal card with only content.</p>
      </CardContent>
    </Card>
  ),
};


