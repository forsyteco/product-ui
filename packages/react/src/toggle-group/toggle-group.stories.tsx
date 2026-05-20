import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../toggle';
import { ToggleGroup } from './toggle-group';

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Toggle group from `@base-ui/react/toggle-group`.' } },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToggleGroup defaultValue={['left']} aria-label="Align">
      <Toggle value="left">Left</Toggle>
      <Toggle value="center">Center</Toggle>
      <Toggle value="right">Right</Toggle>
    </ToggleGroup>
  ),
};
