import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDialog } from './alert-dialog';

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: { component: 'Alert dialog on `@base-ui/react/alert-dialog` with token styling.' },
    },
  },
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Delete</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Viewport>
          <AlertDialog.Popup>
            <AlertDialog.Title>Are you sure?</AlertDialog.Title>
            <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <AlertDialog.Close type="button">Cancel</AlertDialog.Close>
              <AlertDialog.Close type="button">Continue</AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Viewport>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
