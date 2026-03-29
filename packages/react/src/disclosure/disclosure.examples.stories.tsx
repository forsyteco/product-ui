import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclosure, DisclosureButton, DisclosurePanel } from './disclosure';

const meta = {
  title: 'Components/Disclosure/Examples',
  component: Disclosure,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FAQ: Story = {
  render: () => (
    <div className="sb-demo-wide">
      <h2 className="sb-text-2xl sb-font-bold sb-mb-6">Frequently Asked Questions</h2>
      <div className="sb-stack-4">
        <Disclosure>
          <DisclosureButton>
            <span>What is your refund policy?</span>
            <svg className="sb-icon-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </DisclosureButton>
          <DisclosurePanel>
            If you're not satisfied with your purchase, we'll refund you within 30 days of delivery. Please contact our support team to initiate a refund.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton>
            <span>Do you offer international shipping?</span>
            <svg className="sb-icon-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </DisclosureButton>
          <DisclosurePanel>
            Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. Check our shipping page for details.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton>
            <span>How can I track my order?</span>
            <svg className="sb-icon-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </DisclosureButton>
          <DisclosurePanel>
            Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  ),
};

