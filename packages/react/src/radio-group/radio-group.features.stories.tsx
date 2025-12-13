import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RadioGroup from './radio-group';
import type { RadioGroupOption } from './radio-group';

const meta = {
  title: 'Components/RadioGroup/Features',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is disabled',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: RadioGroupOption[] = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return (
      <div className="w-64">
        <RadioGroup options={options} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const optionsWithDesc: RadioGroupOption[] = [
      { id: '1', label: 'Basic Plan', value: 'basic', description: '$9/month' },
      { id: '2', label: 'Pro Plan', value: 'pro', description: '$29/month' },
      { id: '3', label: 'Enterprise Plan', value: 'enterprise', description: '$99/month' },
    ];
    return (
      <div className="w-96">
        <RadioGroup options={optionsWithDesc} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithInitialValue: Story = {
  render: () => {
    const [value, setValue] = useState<string>('option2');
    return (
      <div className="w-64">
        <RadioGroup options={options} value={value} onChange={setValue} />
      </div>
    );
  },
};

