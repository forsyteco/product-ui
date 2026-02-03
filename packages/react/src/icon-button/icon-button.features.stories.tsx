import { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heart, Inbox, Bell } from 'lucide-react'

import { IconButton } from './icon-button';

const meta = {
  title: 'Components/IconButton/Features',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton icon={Heart} variant="primary" aria-label="Primary" />
      <IconButton icon={Heart} variant="secondary" aria-label="Secondary" />
      <IconButton icon={Heart} variant="outline" aria-label="Outline" />
      <IconButton icon={Heart} variant="ghost" aria-label="Ghost" />
      <IconButton icon={Heart} variant="danger" aria-label="Danger" />
      <IconButton icon={Heart} variant="primary" as="a" href="#" aria-label="Anchor (primary)" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton icon={Inbox} size="small" aria-label="Small" />
      <IconButton icon={Inbox} size="medium" aria-label="Medium" />
      <IconButton icon={Inbox} size="large" aria-label="Large" />
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton icon={Heart} aria-label="Square" shape="square" />
      <IconButton icon={Heart} aria-label="Circle" shape="circle" />
    </div>
  ),
}

export const StatesAndBehaviors: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <IconButton icon={Heart} aria-label="Primary" variant="primary" />
          <IconButton icon={Heart} aria-label="Secondary" variant="secondary" />
          <IconButton icon={Heart} aria-label="Outline" variant="outline" />
          <IconButton icon={Heart} aria-label="Ghost" variant="ghost" />
          <IconButton icon={Heart} aria-label="Danger" variant="danger" />
        </div>
        <div className="flex items-center gap-3">
          <IconButton icon={Inbox} aria-label="Disabled" disabled />
          <IconButton icon={Inbox} aria-label="Inactive" inactive />
          <IconButton icon={Inbox} aria-label="External tooltip" title="External tooltip" />
        </div>
        <div className="flex items-center gap-3">
          <IconButton icon={Bell} aria-label="Menu anchor" aria-haspopup="menu" aria-expanded="false" />
          <IconButton icon={Bell} aria-label="Loading" loading />
          <LoadingTriggerDemo />
        </div>
        <div className="flex items-center gap-3">
          <LongDelayTooltipDemo />
        </div>
      </div>
    )
  },
}

const LoadingTriggerDemo = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <IconButton
      icon={Inbox}
      aria-label="Toggle loading"
      loading={isLoading}
      onClick={() => setIsLoading((v) => !v)}
      description="Click to toggle loading"
    />
  )
}

const LongDelayTooltipDemo = () => {
  const [show, setShow] = useState(false)
  const timerRef = useRef<number | null>(null)

  const clear = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  return (
    <div
      onMouseEnter={() => {
        clear()
        timerRef.current = window.setTimeout(() => setShow(true), 800)
      }}
      onMouseLeave={() => {
        clear()
        setShow(false)
      }}
      className="relative"
    >
      <IconButton icon={Bell} aria-label="Long delayed tooltip" />
      {show ? (
        <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white">
          Tooltip after delay
        </span>
      ) : null}
    </div>
  )
}

