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
    <div className="sbDemoNarrow">
      <form className="sbStack6">
        <Fieldset legend="Contact Information">
          <div className="sbStack4">
            <div>
              <label className="sbFormLabel">Email</label>
              <input
                type="email"
                className="sbNativeInput"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="sbFormLabel">Phone</label>
              <input
                type="tel"
                className="sbNativeInput"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
        </Fieldset>
        <Fieldset legend="Address">
          <div className="sbStack4">
            <div>
              <label className="sbFormLabel">Street</label>
              <input
                type="text"
                className="sbNativeInput"
                placeholder="123 Main St"
              />
            </div>
            <div className="sbGrid sbGridCols2 sbGridGap4">
              <div>
                <label className="sbFormLabel">City</label>
                <input
                  type="text"
                  className="sbNativeInput"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="sbFormLabel">ZIP</label>
                <input
                  type="text"
                  className="sbNativeInput"
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
