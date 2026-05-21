import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './label';

const meta = {
  title: 'Components/Label/Features',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Label variant="primary">Primary</Label>,
};

export const Secondary: Story = {
  render: () => <Label variant="secondary">Secondary</Label>,
};

export const Outline: Story = {
  render: () => <Label variant="outline">Outline</Label>,
};

export const Ghost: Story = {
  render: () => <Label variant="ghost">Ghost</Label>,
};

export const SizeSmall: Story = {
  render: () => <Label size="sm">Small</Label>,
};

export const SizeLarge: Story = {
  render: () => <Label size="lg">Large</Label>,
};
