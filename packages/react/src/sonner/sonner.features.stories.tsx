import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';

import Button from '../button';
import Sonner from './sonner';

const meta = {
  title: 'Components/Sonner/Features',
  component: Sonner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sonner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Sonner />
      <Button
        onClick={() =>
          toast('Project created', {
            description: 'You can undo this action for a short time.',
            action: {
              label: 'Undo',
              onClick: () => toast.message('Undone'),
            },
          })
        }
      >
        Show toast with action
      </Button>
    </div>
  ),
};

export const PromiseToast: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Sonner />
      <Button
        onClick={() =>
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 900)),
            {
              loading: 'Saving…',
              success: 'Saved',
              error: 'Failed to save',
            }
          )
        }
      >
        Show promise toast
      </Button>
    </div>
  ),
};


