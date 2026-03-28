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
    <div className="sbRow sbGap3">
      <div className="sbRow sbGap2">
        <span className="sbTextBase sbMutedText">Secondary</span>
        <CounterLabel variant="secondary">7</CounterLabel>
      </div>
      <div className="sbRow sbGap2">
        <span className="sbTextBase sbMutedText">Primary</span>
        <CounterLabel variant="primary">7</CounterLabel>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <Button variant="outline" className="sbButtonRowGap2">
      Inbox <CounterLabel variant="secondary">12</CounterLabel>
    </Button>
  ),
};


