import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';

import { Button } from '../button';
import { Sonner } from './sonner';

const meta = {
  title: 'Components/Sonner',
  component: Sonner,
  parameters: {
    docs: {
      description: {
        component:
          'Find everything about sonner in [Sonner docs](https://sonner.emilkowal.ski/toast)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sonner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Sonner />
      <Button onClick={() => toast.success('Hey there!')}>Show toast</Button>
    </>
  ),
};

export const Playground: Story = {
  args: {},
  render: () => (
    <div className="sbStackGap3">
      <Sonner />
      <div className="sbFlexWrapGap2">
        <Button variant="outline" onClick={() => toast('Default toast')}>
          Default
        </Button>
        <Button onClick={() => toast.success('Success toast')}>Success</Button>
        <Button variant="destructive" onClick={() => toast.error('Error toast')}>
          Error
        </Button>
      </div>
    </div>
  ),
};
