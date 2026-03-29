import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Toast } from './toast';

const meta = {
  title: 'Components/Toast/Examples',
  component: Toast,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Action: Story = {
  render: () => (
    <>
      <Toast />
      <button
        type="button"
        onClick={() =>
          toast('Unsaved changes', {
            action: { label: 'Undo', onClick: () => toast('Undone') },
          })
        }
      >
        With action
      </button>
    </>
  ),
};
