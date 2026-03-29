import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';

const meta = {
  title: 'Components/Slider/Examples',
  component: Slider.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Slider.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brightness: Story = {
  render: () => (
    <Slider.Root defaultValue={[60]} min={0} max={100} style={{ width: 320 }}>
      <Slider.Label>Brightness</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  ),
};
