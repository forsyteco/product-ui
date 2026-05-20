import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toolbar } from './toolbar';

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Toolbar from `@base-ui/react/toolbar`.' } },
  },
} satisfies Meta<typeof Toolbar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toolbar.Root aria-label="Editor">
      <Toolbar.Group>
        <Toolbar.Button>Undo</Toolbar.Button>
        <Toolbar.Button>Redo</Toolbar.Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group>
        <Toolbar.Button>Bold</Toolbar.Button>
        <Toolbar.Button>Italic</Toolbar.Button>
      </Toolbar.Group>
    </Toolbar.Root>
  ),
};
