import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { CounterLabel } from './counter-label';

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
    <div className="sb-row sb-gap-3">
      <div className="sb-row sb-gap-2">
        <span className="sb-text-base sb-muted-text">Secondary</span>
        <CounterLabel variant="secondary">7</CounterLabel>
      </div>
      <div className="sb-row sb-gap-2">
        <span className="sb-text-base sb-muted-text">Primary</span>
        <CounterLabel variant="primary">7</CounterLabel>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <Button variant="default" className="sb-button-row-gap-2">
      Inbox <CounterLabel variant="secondary">12</CounterLabel>
    </Button>
  ),
};


