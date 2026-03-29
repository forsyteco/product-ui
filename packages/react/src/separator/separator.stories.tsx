import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Separator from `@base-ui/react/separator`.' } },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 240 }}>
      <p style={{ margin: 0 }}>Above</p>
      <Separator />
      <p style={{ margin: 0 }}>Below</p>
    </div>
  ),
};
