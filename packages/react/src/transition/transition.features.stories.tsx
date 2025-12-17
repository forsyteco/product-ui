import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Transition } from './transition';
import { Button } from '../button';

const meta = {
  title: 'Components/Transition/Features',
  component: Transition,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    show: {
      control: { type: 'boolean' },
      description: 'Whether the transition is shown',
    },
  },
} satisfies Meta<typeof Transition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fade: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setShow(!show)} className="mb-4">
          Toggle
        </Button>
        <Transition show={show}>
          <div className="p-4 bg-gray-100 rounded">Fading content</div>
        </Transition>
      </>
    );
  },
};

export const Slide: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setShow(!show)} className="mb-4">
          Toggle
        </Button>
        <Transition
          show={show}
          enter="transition ease-out duration-300"
          enterFrom="transform -translate-y-4 opacity-0"
          enterTo="transform translate-y-0 opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform translate-y-0 opacity-100"
          leaveTo="transform -translate-y-4 opacity-0"
        >
          <div className="p-4 bg-gray-100 rounded">Sliding content</div>
        </Transition>
      </>
    );
  },
};

export const Scale: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setShow(!show)} className="mb-4">
          Toggle
        </Button>
        <Transition
          show={show}
          enter="transition ease-out duration-200"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="p-4 bg-gray-100 rounded">Scaling content</div>
        </Transition>
      </>
    );
  },
};

