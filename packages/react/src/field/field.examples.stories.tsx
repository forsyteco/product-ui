import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './field';

const meta = {
  title: 'Components/Field/Examples',
  component: Field.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stacked: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <Field.Root name="a">
        <Field.Label>First</Field.Label>
        <input name="a" />
      </Field.Root>
      <Field.Root name="b">
        <Field.Label>Second</Field.Label>
        <input name="b" />
      </Field.Root>
    </div>
  ),
};
