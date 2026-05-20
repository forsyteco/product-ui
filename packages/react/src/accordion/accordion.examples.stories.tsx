import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './accordion';

const meta = {
  title: 'Components/Accordion/Examples',
  component: Accordion.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Faq: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Accordion.Root multiple>
        <Accordion.Item value="ship">
          <Accordion.Header>
            <Accordion.Trigger>Shipping</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>We ship within 2 business days.</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="ret">
          <Accordion.Header>
            <Accordion.Trigger>Returns</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>30-day returns on unused items.</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  ),
};
