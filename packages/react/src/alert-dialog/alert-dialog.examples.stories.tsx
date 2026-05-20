import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDialog } from './alert-dialog';

const meta = {
  title: 'Components/AlertDialog/Examples',
  component: AlertDialog.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Destructive: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Remove item</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Viewport>
          <AlertDialog.Popup>
            <AlertDialog.Title>Remove item?</AlertDialog.Title>
            <AlertDialog.Description>You can restore it from trash within 30 days.</AlertDialog.Description>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <AlertDialog.Close type="button">Cancel</AlertDialog.Close>
              <AlertDialog.Close type="button">Remove</AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Viewport>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
