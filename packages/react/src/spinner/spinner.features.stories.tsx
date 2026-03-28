import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';

const meta = {
  title: 'Components/Spinner/Features',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 10, max: 200, step: 5 },
      description: 'Size of the spinner in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
      description: 'Width of the spinner stroke',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    colors: {
      control: { type: 'object' },
      description: 'Array of colors to cycle through',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: "['#ffde13', '#b0b0b0', '#000000']" },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <div className="sbRowAlignEndGap8">
      <div className="sbColCenter sbGap2">
        <Spinner size={24} />
        <span className="sbTextXs sbMutedText">Small (24px)</span>
      </div>
      <div className="sbColCenter sbGap2">
        <Spinner size={50} />
        <span className="sbTextXs sbMutedText">Default (50px)</span>
      </div>
      <div className="sbColCenter sbGap2">
        <Spinner size={80} />
        <span className="sbTextXs sbMutedText">Large (80px)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different spinner sizes for various use cases.',
      },
    },
  },
};

export const StrokeWidths: Story = {
  render: () => (
    <div className="sbRow sbGap8">
      <div className="sbColCenter sbGap2">
        <Spinner size={60} strokeWidth={2} />
        <span className="sbTextXs sbMutedText">Thin (2px)</span>
      </div>
      <div className="sbColCenter sbGap2">
        <Spinner size={60} strokeWidth={5} />
        <span className="sbTextXs sbMutedText">Default (5px)</span>
      </div>
      <div className="sbColCenter sbGap2">
        <Spinner size={60} strokeWidth={8} />
        <span className="sbTextXs sbMutedText">Thick (8px)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different stroke widths for visual variety.',
      },
    },
  },
};

export const CustomColors: Story = {
  render: () => (
    <div className="sbRow sbGap8">
      <div className="sbColCenter sbGap2">
        <Spinner colors={['#3b82f6', '#8b5cf6', '#ec4899']} />
        <span className="sbTextXs sbMutedText">Blue → Purple → Pink</span>
      </div>
      <div className="sbColCenter sbGap2">
        <Spinner colors={['#10b981', '#f59e0b', '#ef4444']} />
        <span className="sbTextXs sbMutedText">Green → Amber → Red</span>
      </div>
      <div className="sbColCenter sbGap2">
        <Spinner colors={['#6366f1']} />
        <span className="sbTextXs sbMutedText">Single Color</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom color schemes. Colors cycle automatically every 1.5 seconds.',
      },
    },
  },
};

