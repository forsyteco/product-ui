import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';

const meta = {
  title: 'Components/Separator/Examples',
  component: Separator,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuLike: Story = {
  render: () => (
    <div style={{ width: 200, padding: 8, border: '1px solid rgb(var(--border))', borderRadius: 8 }}>
      <div>Item A</div>
      <Separator />
      <div>Item B</div>
      <Separator />
      <div>Item C</div>
    </div>
  ),
};
