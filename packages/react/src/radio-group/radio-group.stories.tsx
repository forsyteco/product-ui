import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RadioGroup from './radio-group';
import type { RadioGroupOption } from './radio-group';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A radio group component for selecting a single option from a list. Built with Headless UI for accessibility.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is disabled',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: RadioGroupOption[] = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return (
      <div className="w-64">
        <RadioGroup options={options} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return (
      <div className="w-64">
        <RadioGroup {...args} options={options} value={value} onChange={setValue} />
      </div>
    );
  },
  args: {
    disabled: false,
  },
};

