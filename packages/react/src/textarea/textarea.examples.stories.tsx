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
    <div className="sbDemoNarrow">
      <form className="sbStack4">
        <div>
          <label className="sbFormLabel">
            Name
          </label>
          <input
            type="text"
            className="sbNativeInput"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="sbFormLabel">
            Email
          </label>
          <input
            type="email"
            className="sbNativeInput"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="sbFormLabel">
            Message
          </label>
          <Textarea
            rows={6}
            placeholder="Enter your message..."
          />
        </div>
        <Button type="submit" className="sbWFull">
          Send Message
        </Button>
      </form>
    </div>
  ),
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="sbDemoNarrow">
      <form className="sbStack4">
        <div>
          <label className="sbFormLabel">
            Description
          </label>
          <Textarea
            rows={4}
            placeholder="Enter description..."
            error
          />
          <p className="sbMt1 sbTextBase sbErrorText">
            Description must be at least 10 characters
          </p>
        </div>
      </form>
    </div>
  ),
};

