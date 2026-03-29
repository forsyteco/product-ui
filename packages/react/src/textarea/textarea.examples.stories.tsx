import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';
import { Button } from '../button';

const meta = {
  title: 'Components/Textarea/Examples',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactForm: Story = {
  render: () => (
    <div className="sb-demo-narrow">
      <form className="sb-stack-4">
        <div>
          <label className="sb-form-label">
            Name
          </label>
          <input
            type="text"
            className="sb-native-input"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="sb-form-label">
            Email
          </label>
          <input
            type="email"
            className="sb-native-input"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="sb-form-label">
            Message
          </label>
          <Textarea
            rows={6}
            placeholder="Enter your message..."
          />
        </div>
        <Button type="submit" className="sb-w-full">
          Send Message
        </Button>
      </form>
    </div>
  ),
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="sb-demo-narrow">
      <form className="sb-stack-4">
        <div>
          <label className="sb-form-label">
            Description
          </label>
          <Textarea
            rows={4}
            placeholder="Enter description..."
            error
          />
          <p className="sb-mt-1 sb-text-base sb-error-text">
            Description must be at least 10 characters
          </p>
        </div>
      </form>
    </div>
  ),
};

