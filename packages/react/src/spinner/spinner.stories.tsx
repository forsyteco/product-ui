import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Spinner from './spinner';

const meta = {
  title: 'Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Full: Story = {
  render: () => (
    <div className="flex h-48 w-full flex-1 flex-col">
      <Spinner full />
    </div>
  ),
};
