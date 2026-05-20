import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberField } from './number-field';

const meta = {
  title: 'Components/NumberField',
  component: NumberField.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Number field from `@base-ui/react/number-field`.' } },
  },
} satisfies Meta<typeof NumberField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NumberField.Root defaultValue={2} min={0} max={10} style={{ width: 200 }}>
      <NumberField.Group>
        <NumberField.Decrement aria-label="Decrease" />
        <NumberField.Input />
        <NumberField.Increment aria-label="Increase" />
      </NumberField.Group>
    </NumberField.Root>
  ),
};
