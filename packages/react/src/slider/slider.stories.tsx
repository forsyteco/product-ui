import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta = {
  title: 'Components/Slider',
  component: Slider.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Slider from `@base-ui/react/slider`.' } },
  },
} satisfies Meta<typeof Slider.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Slider.Root defaultValue={[35]} min={0} max={100} style={{ width: 280 }}>
      <Slider.Label>Volume</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
      <Slider.Value />
    </Slider.Root>
  ),
};
