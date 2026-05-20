import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from './checkbox-group';

const meta = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Checkbox group from `@base-ui/react/checkbox-group`.' } },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CheckboxGroup aria-label="Options" />,
};
