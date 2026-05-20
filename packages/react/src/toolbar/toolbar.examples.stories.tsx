import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toolbar } from './toolbar';

const meta = {
  title: 'Components/Toolbar/Examples',
  component: Toolbar.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toolbar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkActions: Story = {
  render: () => (
    <Toolbar.Root aria-label="Doc actions">
      <Toolbar.Link href="#share">Share</Toolbar.Link>
      <Toolbar.Separator />
      <Toolbar.Link href="#export">Export</Toolbar.Link>
    </Toolbar.Root>
  ),
};
