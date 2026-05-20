import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmptyState } from './empty-state';

const meta = {
  title: 'Components/EmptyState/Examples',
  component: EmptyState,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilteredList: Story = {
  args: {
    title: 'No matches',
    description: 'Clear filters or try a different search term.',
    actionLabel: 'Clear filters',
    onAction: () => {},
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'No data',
  },
};
