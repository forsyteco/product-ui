import type { Meta, StoryObj } from '@storybook/react-vite';
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
        <input name="displayName" />
      </label>
      <label>
        Time zone
        <select name="tz" defaultValue="utc">
          <option value="utc">UTC</option>
          <option value="local">Local</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </Form>
  ),
};
