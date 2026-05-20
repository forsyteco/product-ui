import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from './collapsible';

const meta = {
  title: 'Components/Collapsible/Features',
  component: Collapsible,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen>
      <CollapsibleTrigger>What is your refund policy?</CollapsibleTrigger>
      <CollapsiblePanel>We offer a 30-day money-back guarantee.</CollapsiblePanel>
    </Collapsible>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: 360 }}>
      <Collapsible>
        <CollapsibleTrigger>Question one</CollapsibleTrigger>
        <CollapsiblePanel>Answer one.</CollapsiblePanel>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger>Question two</CollapsibleTrigger>
        <CollapsiblePanel>Answer two.</CollapsiblePanel>
      </Collapsible>
    </div>
  ),
};
