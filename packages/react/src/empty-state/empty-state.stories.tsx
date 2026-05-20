import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmptyState } from './empty-state';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Compact empty / no-results panel with optional text action.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No results',
    description: 'Try adjusting your filters or search.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Nothing here yet',
    description: 'Create your first item to get started.',
    actionLabel: 'Add item',
    onAction: () => {},
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'No data',
  },
};
