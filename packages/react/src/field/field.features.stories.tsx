import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../input';
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
      <Input name="x" />
    </Field.Root>
  ),
};
