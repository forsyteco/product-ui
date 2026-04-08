import type { Meta, StoryObj } from '@storybook/react-vite';

import { InlineAlert } from './inline-alert';

const meta = {
  title: 'Components/InlineAlert/Features',
  component: InlineAlert,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsAlert: Story = {
  args: {
    message: 'Critical: action required.',
    role: 'alert',
    'aria-live': 'assertive',
  },
};

export const CustomLabels: Story = {
  args: {
    message: 'Sync failed.',
    onRetry: () => {},
    onDismiss: () => {},
    retryLabel: 'Try again',
    dismissLabel: 'Ignore',
  },
};
