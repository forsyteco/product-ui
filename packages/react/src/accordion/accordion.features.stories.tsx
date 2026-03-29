import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './accordion';

const meta = {
  title: 'Components/Accordion/Features',
  component: Accordion.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleOpen: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Accordion.Root>
        <Accordion.Item value="x">
          <Accordion.Header>
            <Accordion.Trigger>One</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Content one</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  ),
};
