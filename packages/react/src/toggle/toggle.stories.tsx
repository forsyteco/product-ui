import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Toggle from `@base-ui/react/toggle`.' } },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toggle value="italic" aria-label="Italic">
      Italic
    </Toggle>
  ),
};
