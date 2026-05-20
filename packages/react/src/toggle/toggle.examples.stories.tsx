import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';

const meta = {
  title: 'Components/Toggle/Examples',
  component: Toggle,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToolbarChunk: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 6 }}>
      <Toggle value="b" aria-label="Bold">
        B
      </Toggle>
      <Toggle value="i" aria-label="Italic">
        I
      </Toggle>
    </div>
  ),
};
