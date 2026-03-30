import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Input } from '../input';
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
        <Input name="name" />
      </label>
      <Button type="submit">Submit</Button>
    </Form>
  ),
};
