import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './scroll-area';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Scroll area from `@base-ui/react/scroll-area`.' } },
  },
} satisfies Meta<typeof ScrollArea.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea.Root>
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          {Array.from({ length: 24 }, (_, i) => (
            <p key={i} style={{ margin: '0 0 8px' }}>
              Line {i + 1}
            </p>
          ))}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  ),
};
