import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

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
    <div className="sbDemoNarrow">
      <form className="sbStack4">
        <div>
          <label className="sbFormLabel">Email</label>
          <input
            type="email"
            className="sbNativeInput"
            placeholder="you@example.com"
          />
        </div>
        <div className="sbCardFooterActions">
          <Button variant="outline" type="button">
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
    <div className="sbP6 sbRow sbGap4">
      <Button>
        <svg className="sbIcon4 sbMr2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </Button>
      <Button variant="outline">
        <svg className="sbIcon4 sbMr2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        View
      </Button>
    </div>
  ),
};

