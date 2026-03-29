import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta = {
  title: 'Components/Avatar/Features',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <div className="sb-row sb-gap-4">
      <Avatar className="sb-size-6">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="sb-size-8">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="sb-size-10">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="sb-size-12">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
    </div>
  ),
};

export const ImageThenFallback: Story = {
  render: () => (
    <Avatar className="sb-size-10">
      <AvatarImage src="https://this-domain-does-not-exist.example/avatar.png" alt="Avatar" />
      <AvatarFallback variant="boring" name="Grace Hopper" />
    </Avatar>
  ),
};


