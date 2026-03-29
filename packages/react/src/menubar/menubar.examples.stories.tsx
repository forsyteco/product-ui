import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menubar } from './menubar';

const meta = {
  title: 'Components/Menubar/Examples',
  component: Menubar,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shell: Story = {
  render: () => (
    <Menubar style={{ minWidth: 320, justifyContent: 'flex-start' }}>
      <span style={{ fontSize: 12, color: 'rgb(var(--muted-foreground))' }}>App menus go here</span>
    </Menubar>
  ),
};
