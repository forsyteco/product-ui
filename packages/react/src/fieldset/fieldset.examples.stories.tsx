import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../input';
import { Fieldset } from './fieldset';

const meta = {
  title: 'Components/Fieldset/Examples',
  component: Fieldset,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactForm: Story = {
  render: () => (
    <div className="sb-demo-narrow">
      <form className="sb-stack-6">
        <Fieldset legend="Contact Information">
          <div className="sb-stack-4">
            <div>
              <label className="sb-form-label">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="sb-form-label">Phone</label>
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
        </Fieldset>
        <Fieldset legend="Address">
          <div className="sb-stack-4">
            <div>
              <label className="sb-form-label">Street</label>
              <Input
                type="text"
                placeholder="123 Main St"
              />
            </div>
            <div className="sb-grid sb-grid-cols-2 sb-grid-gap-4">
              <div>
                <label className="sb-form-label">City</label>
                <Input
                  type="text"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="sb-form-label">ZIP</label>
                <Input
                  type="text"
                  placeholder="12345"
                />
              </div>
            </div>
          </div>
        </Fieldset>
      </form>
    </div>
  ),
};
