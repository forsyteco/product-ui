import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';

const meta = {
  title: 'Components/Toggle/Features',
  component: Toggle,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PressedDefault: Story = {
  render: () => (
    <Toggle value="u" defaultPressed aria-label="Underline">
      U
    </Toggle>
  ),
};
