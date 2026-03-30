import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Input } from '../input';
import { Select } from '../select';
import { Form } from './form';

const meta = {
  title: 'Components/Form/Examples',
  component: Form,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Settings: Story = {
  render: () => (
    <Form style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 360 }}>
      <label>
        Display name
        <Input name="displayName" />
      </label>
      <label>
        Time zone
        <Select
          name="tz"
          defaultValue="utc"
          options={[
            { value: 'utc', label: 'UTC' },
            { value: 'local', label: 'Local' },
          ]}
        />
      </label>
      <Button type="submit">Save</Button>
    </Form>
  ),
};
