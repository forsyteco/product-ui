import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Input } from '../input';
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
      <Input name="q" placeholder="Search" />
      <Button type="submit">Search</Button>
    </Form>
  ),
};
