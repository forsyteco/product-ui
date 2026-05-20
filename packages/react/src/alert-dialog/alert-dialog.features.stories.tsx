import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDialog } from './alert-dialog';

const meta = {
  title: 'Components/AlertDialog/Features',
  component: AlertDialog.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Viewport>
          <AlertDialog.Popup>
            <AlertDialog.Title>Confirm</AlertDialog.Title>
            <AlertDialog.Description>Proceed with this change?</AlertDialog.Description>
            <AlertDialog.Close type="button">OK</AlertDialog.Close>
          </AlertDialog.Popup>
        </AlertDialog.Viewport>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
