import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Button } from '../button';
import { Toast } from './toast';

const meta = {
  title: 'Components/Toast/Features',
  component: Toast,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => (
    <>
      <Toast />
      <Button type="button" onClick={() => toast.success('Done')}>
        Success
      </Button>
    </>
  ),
};

export const ErrorToast: Story = {
  render: () => (
    <>
      <Toast />
      <Button type="button" onClick={() => toast.error('Something went wrong')}>
        Error
      </Button>
    </>
  ),
};
