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
        <Button variant="default" onClick={() => setShow(!show)} className="sb-mb-4">
          Toggle
        </Button>
        <Transition show={show}>
          <div className="sb-demo-inset-pad">Fading content</div>
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
        <Button variant="default" onClick={() => setShow(!show)} className="sb-mb-4">
          Toggle
        </Button>
        <Transition
          show={show}
          enter="sb-trans-ease-out-300"
          enterFrom="sb-y-minus-4-opacity-0"
          enterTo="sb-y-0-opacity-1"
          leave="sb-trans-ease-in-200"
          leaveFrom="sb-y-0-opacity-1"
          leaveTo="sb-y-minus-4-opacity-0"
        >
          <div className="sb-demo-inset-pad">Sliding content</div>
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
        <Button variant="default" onClick={() => setShow(!show)} className="sb-mb-4">
          Toggle
        </Button>
        <Transition
          show={show}
          enter="sb-trans-ease-out-200"
          enterFrom="sb-scale-95-opacity-0"
          enterTo="sb-scale-100-opacity-1"
          leave="sb-trans-ease-in-150"
          leaveFrom="sb-scale-100-opacity-1"
          leaveTo="sb-scale-95-opacity-0"
        >
          <div className="sb-demo-inset-pad">Scaling content</div>
        </Transition>
      </>
    );
  },
};

