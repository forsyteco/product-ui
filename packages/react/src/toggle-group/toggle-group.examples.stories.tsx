import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../toggle';
import { ToggleGroup } from './toggle-group';

const meta = {
  title: 'Components/ToggleGroup/Examples',
  component: ToggleGroup,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ViewMode: Story = {
  render: () => (
    <ToggleGroup defaultValue={['list']} aria-label="View">
      <Toggle value="list">List</Toggle>
      <Toggle value="grid">Grid</Toggle>
    </ToggleGroup>
  ),
};
