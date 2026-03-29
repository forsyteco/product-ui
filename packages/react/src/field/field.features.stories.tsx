import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './field';

const meta = {
  title: 'Components/Field/Features',
  component: Field.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithError: Story = {
  render: () => (
    <Field.Root name="x" style={{ width: 280 }}>
      <Field.Label>Username</Field.Label>
      <Field.Error>Already taken</Field.Error>
      <input name="x" style={{ padding: 8, borderRadius: 6, border: '1px solid rgb(var(--border))' }} />
    </Field.Root>
  ),
};
