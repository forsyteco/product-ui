import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './scroll-area';

const meta = {
  title: 'Components/ScrollArea/Examples',
  component: ScrollArea.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ScrollArea.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {
  render: () => (
    <ScrollArea.Root>
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <h3 style={{ marginTop: 0 }}>Notes</h3>
          <p>Scrollable panel for long notes in a modal or sidebar.</p>
          <p style={{ marginBottom: 400 }}>End.</p>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  ),
};
