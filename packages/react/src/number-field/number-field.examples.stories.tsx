import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberField } from './number-field';

const meta = {
  title: 'Components/NumberField/Examples',
  component: NumberField.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NumberField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Quantity: Story = {
  render: () => (
    <NumberField.Root defaultValue={1} min={1} max={99} style={{ width: 220 }}>
      <NumberField.Group>
        <NumberField.Decrement aria-label="Decrease quantity" />
        <NumberField.Input />
        <NumberField.Increment aria-label="Increase quantity" />
      </NumberField.Group>
    </NumberField.Root>
  ),
};
