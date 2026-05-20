import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heart, Inbox, Bell } from 'lucide-react'

import { IconButton } from './icon-button';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An icon-only button with canonical variants (`primary`, `default`, `ghost`, `danger`) and shared interaction token contract. Variant states read named tokens such as `--icon-button-primary-background`, `--icon-button-primary-hover`, `--icon-button-primary-active`, and `--icon-button-primary-focus-ring`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'default', 'ghost', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    shape: {
      control: { type: 'select' },
      options: ['square', 'circle'],
    },
    icon: { control: false },
    as: { control: false },
    href: { control: 'text' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Favorite',
  },
}

export const Playground: Story = {
  args: {
    icon: Bell,
    variant: 'primary',
    size: 'medium',
    shape: 'square',
    'aria-label': 'Playground icon button',
  },
}

