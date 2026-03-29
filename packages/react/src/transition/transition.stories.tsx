import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Transition } from './transition';
import { Button } from '../button';

const meta = {
  title: 'Components/Transition',
  component: Transition,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A transition component for animating elements in and out. Built with Headless UI with customizable enter/leave animations.',
      },
    },
  },
  argTypes: {
    show: {
      control: { type: 'boolean' },
      description: 'Whether the transition is shown',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Transition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="default" onClick={() => setShow(!show)} className="sb-mb-4">
          Toggle
        </Button>
        <Transition show={show}>
          <div className="sb-demo-inset-pad">Transitioning content</div>
        </Transition>
      </>
    );
  },
};

export const Playground: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="default" onClick={() => setShow(!show)} className="sb-mb-4">
          Toggle
        </Button>
        <Transition {...args} show={show}>
          <div className="sb-demo-inset-pad">Custom transition</div>
        </Transition>
      </>
    );
  },
  args: {
    show: false,
  },
};

