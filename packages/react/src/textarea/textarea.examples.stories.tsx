import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';
import Button from '../button';

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
    <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea
            rows={6}
            placeholder="Enter your message..."
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  ),
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Description
          </label>
          <Textarea
            rows={4}
            placeholder="Enter description..."
            error
          />
          <p className="mt-1 text-base text-red-600">
            Description must be at least 10 characters
          </p>
        </div>
      </form>
    </div>
  ),
};

