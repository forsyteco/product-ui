import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heart, Inbox, Bell } from 'lucide-react';
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

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
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

export const IconOnlyVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button icon={Heart} variant="primary" aria-label="Primary" />
      <Button icon={Heart} variant="secondary" aria-label="Secondary" />
      <Button icon={Heart} variant="outline" aria-label="Outline" />
      <Button icon={Heart} variant="ghost" aria-label="Ghost" />
      <Button icon={Heart} variant="danger" aria-label="Danger" />
      <Button icon={Heart} variant="primary" as="a" href="#" aria-label="Anchor (primary)" />
    </div>
  ),
};

export const IconOnlySizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button icon={Inbox} size="small" aria-label="Small" />
      <Button icon={Inbox} size="medium" aria-label="Medium" />
      <Button icon={Inbox} size="large" aria-label="Large" />
    </div>
  ),
};

export const IconOnlyShapes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button icon={Heart} aria-label="Square" shape="square" />
      <Button icon={Heart} aria-label="Circle" shape="circle" />
    </div>
  ),
};

export const IconOnlyStatesAndBehaviors: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Button icon={Inbox} aria-label="Disabled" disabled />
          <Button icon={Inbox} aria-label="Inactive" inactive />
          <Button icon={Inbox} aria-label="External tooltip" title="External tooltip" />
        </div>
        <div className="flex items-center gap-3">
          <Button icon={Bell} aria-label="Menu anchor" aria-haspopup="menu" aria-expanded="false" />
          <Button icon={Bell} aria-label="Loading" loading />
          <LoadingTriggerDemo />
        </div>
        <div className="flex items-center gap-3">
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
      icon={Inbox}
      aria-label="Toggle loading"
      loading={isLoading}
      onClick={() => setIsLoading((v) => !v)}
      description="Click to toggle loading"
    />
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
      <Button icon={Bell} aria-label="Long delayed tooltip" />
      {show ? (
        <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white">
          Tooltip after delay
        </span>
      ) : null}
    </div>
  );
};
