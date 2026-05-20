import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from './checkbox-group';

const meta = {
  title: 'Components/CheckboxGroup/Examples',
  component: CheckboxGroup,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <CheckboxGroup aria-label="Tags" className="custom-class">
      <span>Use Base UI checkbox items inside the group in real apps.</span>
    </CheckboxGroup>
  ),
};
