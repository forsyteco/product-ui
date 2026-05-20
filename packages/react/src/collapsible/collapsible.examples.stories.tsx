import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from './collapsible';

const meta = {
  title: 'Components/Collapsible/Examples',
  component: Collapsible,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FaqList: Story = {
  render: () => (
    <div style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Collapsible>
        <CollapsibleTrigger>Billing</CollapsibleTrigger>
        <CollapsiblePanel>Invoices and payment methods.</CollapsiblePanel>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger>Shipping</CollapsibleTrigger>
        <CollapsiblePanel>Delivery timelines and carriers.</CollapsiblePanel>
      </Collapsible>
    </div>
  ),
};
