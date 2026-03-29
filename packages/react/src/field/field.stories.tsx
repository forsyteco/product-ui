import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './field';

const meta = {
  title: 'Components/Field',
  component: Field.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Field primitives from `@base-ui/react/field`.' } },
  },
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field.Root name="story" style={{ width: 280 }}>
      <Field.Label>Label</Field.Label>
      <Field.Description>Helper text</Field.Description>
      <input name="story" style={{ padding: 8, borderRadius: 6, border: '1px solid rgb(var(--border))' }} />
    </Field.Root>
  ),
};
