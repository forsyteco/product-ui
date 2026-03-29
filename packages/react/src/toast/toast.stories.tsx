import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Toast } from './toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Toast host powered by [Sonner](https://sonner.emilkowal.ski/toast). Use `toast()` from `sonner` to show messages.',
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Toast />
      <button type="button" onClick={() => toast('Saved')}>
        Show toast
      </button>
    </>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <>
      <Toast />
      <button
        type="button"
        onClick={() =>
          toast('Update published', {
            description: 'Your changes are live.',
          })
        }
      >
        Show toast
      </button>
    </>
  ),
};
