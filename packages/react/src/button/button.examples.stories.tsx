import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Input } from '../input';

const meta = {
  title: 'Components/Button/Examples',
  component: Button,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormActions: Story = {
  render: () => (
    <div className="sb-demo-narrow">
      <form className="sb-stack-4">
        <div>
          <label className="sb-form-label">Email</label>
          <Input
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="sb-card-footer-actions">
          <Button variant="default" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  ),
};

export const IconButton: Story = {
  render: () => (
    <div className="sb-p-6 sb-row sb-gap-4">
      <Button>
        <svg className="sb-icon-4 sb-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </Button>
      <Button variant="default">
        <svg className="sb-icon-4 sb-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        View
      </Button>
    </div>
  ),
};

