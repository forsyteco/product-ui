import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell, Inbox } from 'lucide-react';
import { Button } from './button';

const meta = {
  title: 'Components/Button/Features',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Button variant="primary">Primary</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary</Button>,
};

export const Outline: Story = {
  render: () => <Button variant="outline">Outline</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost</Button>,
};

export const Destructive: Story = {
  render: () => <Button variant="destructive">Destructive</Button>,
};

export const SizeSmall: Story = {
  render: () => <Button size="sm">Small</Button>,
};

export const SizeMedium: Story = {
  render: () => <Button size="md">Medium</Button>,
};

export const SizeLarge: Story = {
  render: () => <Button size="lg">Large</Button>,
};

export const IconOnly: Story = {
  render: () => (
    <Button icon={Inbox} aria-label="Notifications" description="View notifications" />
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>Disabled Primary</Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
    </div>
  ),
};

export const StatesAndBehaviors: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Button inactive>Inactive</Button>
          <Button title="External tooltip">External tooltip</Button>
          <Button description="Described tooltip">Described tooltip</Button>
        </div>
        <div className="flex items-center gap-3">
          <Button aria-haspopup="menu" aria-expanded="false">
            Menu anchor
          </Button>
          <Button loading>Loading</Button>
          <LoadingTriggerDemo />
        </div>
        <div className="flex items-center gap-3">
          <Button description="Open inbox" keybindingHint="G+I">
            Keybinding hint
          </Button>
          <LongDelayTooltipDemo />
        </div>
      </div>
    );
  },
};

const LoadingTriggerDemo = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      loading={isLoading}
      onClick={() => setIsLoading((value) => !value)}
      description="Click to toggle loading"
    >
      Toggle loading
    </Button>
  );
};

const LongDelayTooltipDemo = () => {
  const [show, setShow] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clear = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div
      onMouseEnter={() => {
        clear();
        timerRef.current = window.setTimeout(() => setShow(true), 800);
      }}
      onMouseLeave={() => {
        clear();
        setShow(false);
      }}
      className="relative"
    >
      <Button description="Tooltip after delay">Long delayed tooltip</Button>
      {show ? (
        <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white">
          Tooltip after delay
        </span>
      ) : null}
    </div>
  );
};
