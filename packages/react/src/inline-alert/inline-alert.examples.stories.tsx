import type { Meta, StoryObj } from '@storybook/react-vite';

import { InlineAlert } from './inline-alert';

const meta = {
  title: 'Components/InlineAlert/Examples',
  component: InlineAlert,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OptimisticFailure: Story = {
  args: {
    message: 'Your change could not be saved. Try again or dismiss to keep editing offline.',
    onRetry: () => {},
    onDismiss: () => {},
  },
};
