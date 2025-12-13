import type { Meta, StoryObj } from '@storybook/react-vite';
import Disclosure, { DisclosureButton, DisclosurePanel } from './disclosure';

const meta = {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A disclosure component for showing and hiding content. Built with Headless UI for accessibility.',
      },
    },
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
  tags: ['autodocs'],
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Disclosure>
      <DisclosureButton>What is your refund policy?</DisclosureButton>
      <DisclosurePanel>
        If you're not satisfied with your purchase, we'll refund you within 30 days.
      </DisclosurePanel>
    </Disclosure>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Disclosure {...args}>
      <DisclosureButton>Toggle Content</DisclosureButton>
      <DisclosurePanel>
        This is the disclosure panel content. It can contain any React elements.
      </DisclosurePanel>
    </Disclosure>
  ),
  args: {
    defaultOpen: false,
  },
};

