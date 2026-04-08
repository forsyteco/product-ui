import type { Meta, StoryObj } from '@storybook/react-vite';

import { InlineAlert } from './inline-alert';

const meta = {
  title: 'Components/InlineAlert',
  component: InlineAlert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Non-blocking inline message with optional Retry / Dismiss (e.g. optimistic failures).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageOnly: Story = {
  args: {
    message: 'Could not load the latest data.',
  },
};

export const WithActions: Story = {
  args: {
    message: 'Save failed. You can retry or dismiss this message.',
    onRetry: () => {},
    onDismiss: () => {},
  },
};

export const RetryOnly: Story = {
  args: {
    message: 'Network error.',
    onRetry: () => {},
  },
};
