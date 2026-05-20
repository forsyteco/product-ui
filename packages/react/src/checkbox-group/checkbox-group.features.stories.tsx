import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from './checkbox-group';

const meta = {
  title: 'Components/CheckboxGroup/Features',
  component: CheckboxGroup,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  render: () => (
    <CheckboxGroup aria-label="Opts" disabled>
      <span>Grouped (disabled)</span>
    </CheckboxGroup>
  ),
};
