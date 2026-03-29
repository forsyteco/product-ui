import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta = {
  title: 'Components/Slider/Features',
  component: Slider.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Slider.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Range: Story = {
  render: () => (
    <Slider.Root defaultValue={[20, 80]} min={0} max={100} style={{ width: 300 }}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  ),
};
