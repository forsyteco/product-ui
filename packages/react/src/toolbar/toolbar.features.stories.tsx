import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toolbar } from './toolbar';

const meta = {
  title: 'Components/Toolbar/Features',
  component: Toolbar.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toolbar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  render: () => (
    <Toolbar.Root aria-label="Search tools">
      <Toolbar.Input placeholder="Filter…" aria-label="Filter" />
      <Toolbar.Separator />
      <Toolbar.Button>Clear</Toolbar.Button>
    </Toolbar.Root>
  ),
};
