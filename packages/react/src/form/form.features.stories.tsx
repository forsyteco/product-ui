import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './form';

const meta = {
  title: 'Components/Form/Features',
  component: Form,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Form>
      <input name="q" placeholder="Search" />
      <button type="submit">Search</button>
    </Form>
  ),
};
