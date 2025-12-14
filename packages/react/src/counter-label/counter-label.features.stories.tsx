import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../button';
import CounterLabel from './counter-label';

const meta = {
  title: 'Components/CounterLabel/Features',
  component: CounterLabel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CounterLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Secondary</span>
        <CounterLabel variant="secondary">7</CounterLabel>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Primary</span>
        <CounterLabel variant="primary">7</CounterLabel>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <Button variant="outline" className="gap-2">
      Inbox <CounterLabel variant="secondary">12</CounterLabel>
    </Button>
  ),
};


