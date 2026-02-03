import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclosure, DisclosureButton, DisclosurePanel } from './disclosure';

const meta = {
  title: 'Components/Disclosure/Features',
  component: Disclosure,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'Whether the disclosure is open by default',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultClosed: Story = {
  render: () => (
    <Disclosure>
      <DisclosureButton>What is your refund policy?</DisclosureButton>
      <DisclosurePanel>
        If you're not satisfied with your purchase, we'll refund you within 30 days.
      </DisclosurePanel>
    </Disclosure>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Disclosure defaultOpen>
      <DisclosureButton>What is your refund policy?</DisclosureButton>
      <DisclosurePanel>
        If you're not satisfied with your purchase, we'll refund you within 30 days.
      </DisclosurePanel>
    </Disclosure>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-2">
      <Disclosure>
        <DisclosureButton>What is your refund policy?</DisclosureButton>
        <DisclosurePanel>
          If you're not satisfied with your purchase, we'll refund you within 30 days.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton>Do you offer international shipping?</DisclosureButton>
        <DisclosurePanel>
          Yes, we ship to over 50 countries worldwide.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton>How long does shipping take?</DisclosureButton>
        <DisclosurePanel>
          Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.
        </DisclosurePanel>
      </Disclosure>
    </div>
  ),
};

