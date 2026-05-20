import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmptyState } from './empty-state';

const meta = {
  title: 'Components/EmptyState/Features',
  component: EmptyState,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAction: Story = {
  args: {
    title: 'No items',
    description: 'Add something to see it listed here.',
    actionLabel: 'Create',
    onAction: () => {},
  },
};

export const AssertiveLiveRegion: Story = {
  args: {
    title: 'Search finished',
    description: 'No matches for your query.',
    'aria-live': 'assertive',
  },
};
