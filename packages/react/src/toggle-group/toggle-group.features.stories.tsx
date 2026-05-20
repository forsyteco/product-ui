import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../toggle';
import { ToggleGroup } from './toggle-group';

const meta = {
  title: 'Components/ToggleGroup/Features',
  component: ToggleGroup,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
  render: () => (
    <ToggleGroup defaultValue={['b', 'i']} multiple aria-label="Styles">
      <Toggle value="b">B</Toggle>
      <Toggle value="i">I</Toggle>
      <Toggle value="u">U</Toggle>
    </ToggleGroup>
  ),
};
