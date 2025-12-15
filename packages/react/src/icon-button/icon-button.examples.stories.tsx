import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heart, Inbox, Bell, MessageSquare } from 'lucide-react'

import IconButton from './icon-button'

const meta = {
  title: 'Components/IconButton/Examples',
  component: IconButton,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton icon={Heart} aria-label="Favorite" />
      <IconButton icon={Inbox} aria-label="Notifications" description="View notifications" />
      <IconButton icon={Bell} aria-label="Alerts" variant="primary" />
      <IconButton icon={MessageSquare} aria-label="Messages" variant="danger" />
    </div>
  ),
}

export const WithKeybindingHints: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton icon={Inbox} aria-label="Notifications" description="Open inbox" keybindingHint="G+I" />
      <IconButton icon={Bell} aria-label="Alerts" description="Open alerts" keybindingHint="G+A" />
    </div>
  ),
}

