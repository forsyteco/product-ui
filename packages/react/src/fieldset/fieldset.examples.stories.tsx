import type { Meta, StoryObj } from '@storybook/react-vite';
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
              <input
                type="email"
                className="sb-native-input"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="sb-form-label">Phone</label>
              <input
                type="tel"
                className="sb-native-input"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
        </Fieldset>
        <Fieldset legend="Address">
          <div className="sb-stack-4">
            <div>
              <label className="sb-form-label">Street</label>
              <input
                type="text"
                className="sb-native-input"
                placeholder="123 Main St"
              />
            </div>
            <div className="sb-grid sb-grid-cols-2 sb-grid-gap-4">
              <div>
                <label className="sb-form-label">City</label>
                <input
                  type="text"
                  className="sb-native-input"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="sb-form-label">ZIP</label>
                <input
                  type="text"
                  className="sb-native-input"
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
