import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menubar } from './menubar';

const meta = {
  title: 'Components/Menubar/Features',
  component: Menubar,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => <Menubar orientation="horizontal">File · Edit · View</Menubar>,
};
