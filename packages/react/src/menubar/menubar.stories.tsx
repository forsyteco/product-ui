import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menubar } from './menubar';

const meta = {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Menubar container from `@base-ui/react/menubar`.' } },
  },
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Menubar>Compose with Base UI menu primitives inside.</Menubar>,
};
