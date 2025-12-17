import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';

import Button from '../button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card';
import { Sonner } from './sonner';

const meta = {
  title: 'Components/Sonner/Examples',
  component: Sonner,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Sonner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineCTA: Story = {
  render: () => (
    <div className="max-w-md">
      <Sonner />
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-muted-foreground">
            Trigger toasts from anywhere; the toaster stays at the app root.
          </p>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => toast.message('Heads up', { description: 'This is a neutral toast.' })}
          >
            Preview
          </Button>
          <Button onClick={() => toast.success('All set!')}>Notify</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};


