import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from './collapsible';

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Expand and collapse content. Built on `@base-ui/react/collapsible` with design tokens.',
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the panel is open by default',
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Collapsible {...args}>
      <CollapsibleTrigger>What is your refund policy?</CollapsibleTrigger>
      <CollapsiblePanel>
        We offer a 30-day money-back guarantee on all purchases.
      </CollapsiblePanel>
    </Collapsible>
  ),
};

export const Playground: Story = {
  args: { defaultOpen: false },
  render: args => (
    <Collapsible {...args}>
      <CollapsibleTrigger>Toggle content</CollapsibleTrigger>
      <CollapsiblePanel>
        This is the collapsible panel content. It can contain any React elements.
      </CollapsiblePanel>
    </Collapsible>
  ),
};
