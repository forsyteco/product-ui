import type { Meta, StoryObj } from '@storybook/react-vite';

import CounterLabel from './counter-label';

const meta = {
  title: 'Components/CounterLabel',
  component: CounterLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A small count badge with primary/secondary variants.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CounterLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CounterLabel>12</CounterLabel>,
};

export const Playground: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <CounterLabel variant="secondary">3</CounterLabel>
      <CounterLabel variant="primary">24</CounterLabel>
      <CounterLabel variant="secondary">128</CounterLabel>
    </div>
  ),
};


