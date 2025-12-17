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
    <div className="p-6 max-w-md">
      <form className="space-y-6">
        <Fieldset legend="Contact Information">
          <div className="space-y-4">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
        </Fieldset>
        <Fieldset legend="Address">
          <div className="space-y-4">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Street</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="123 Main St"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 mb-1">ZIP</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
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

