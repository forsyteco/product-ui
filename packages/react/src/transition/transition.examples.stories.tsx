import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Transition } from './transition';
import { Button } from '../button';

const meta = {
  title: 'Components/Transition/Examples',
  component: Transition,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Transition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notification: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <div className="p-6">
        <Button
          onClick={() => {
            setShow(true);
            setTimeout(() => setShow(false), 3000);
          }}
        >
          Show Notification
        </Button>
        <div className="fixed top-4 right-4">
          <Transition show={show}>
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
              Success! Your changes have been saved.
            </div>
          </Transition>
        </div>
      </div>
    );
  },
};

