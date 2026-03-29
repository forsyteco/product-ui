import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './form';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Form from `@base-ui/react/form` with validation helpers.' } },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Form style={{ width: 320 }}>
      <label>
        Name
        <input name="name" />
      </label>
      <button type="submit">Submit</button>
    </Form>
  ),
};
