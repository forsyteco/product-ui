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
        <Button variant="outline" onClick={() => setShow(!show)} className="sbMb4">
          Toggle
        </Button>
        <Transition show={show}>
          <div className="sbDemoInsetPad">Fading content</div>
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
        <Button variant="outline" onClick={() => setShow(!show)} className="sbMb4">
          Toggle
        </Button>
        <Transition
          show={show}
          enter="sbTransEaseOut300"
          enterFrom="sbYMinus4Opacity0"
          enterTo="sbY0Opacity1"
          leave="sbTransEaseIn200"
          leaveFrom="sbY0Opacity1"
          leaveTo="sbYMinus4Opacity0"
        >
          <div className="sbDemoInsetPad">Sliding content</div>
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
        <Button variant="outline" onClick={() => setShow(!show)} className="sbMb4">
          Toggle
        </Button>
        <Transition
          show={show}
          enter="sbTransEaseOut200"
          enterFrom="sbScale95Opacity0"
          enterTo="sbScale100Opacity1"
          leave="sbTransEaseIn150"
          leaveFrom="sbScale100Opacity1"
          leaveTo="sbScale95Opacity0"
        >
          <div className="sbDemoInsetPad">Scaling content</div>
        </Transition>
      </>
    );
  },
};

