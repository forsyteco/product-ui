import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberField } from './number-field';

const meta = {
  title: 'Components/NumberField/Features',
  component: NumberField.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NumberField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stepper: Story = {
  render: () => (
    <NumberField.Root defaultValue={0} step={5} style={{ width: 200 }}>
      <NumberField.Group>
        <NumberField.Decrement aria-label="Decrease" />
        <NumberField.Input />
        <NumberField.Increment aria-label="Increase" />
      </NumberField.Group>
    </NumberField.Root>
  ),
};
