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
    <div className="sbRow sbGap4">
      <Avatar className="sbSize6">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="sbSize8">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="sbSize10">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="sbSize12">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
    </div>
  ),
};

export const ImageThenFallback: Story = {
  render: () => (
    <Avatar className="sbSize10">
      <AvatarImage src="https://this-domain-does-not-exist.example/avatar.png" alt="Avatar" />
      <AvatarFallback variant="boring" name="Grace Hopper" />
    </Avatar>
  ),
};


