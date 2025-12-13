import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Combobox from './combobox';
import type { ComboboxOption } from './combobox';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A combobox component with searchable dropdown. Built with Headless UI for accessibility and keyboard navigation.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the combobox is disabled',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: ComboboxOption[] = [
  { id: '1', label: 'Apple', value: 'apple' },
  { id: '2', label: 'Banana', value: 'banana' },
  { id: '3', label: 'Cherry', value: 'cherry' },
  { id: '4', label: 'Date', value: 'date' },
  { id: '5', label: 'Elderberry', value: 'elderberry' },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return (
      <div className="w-64">
        <Combobox
          options={options}
          value={selected}
          onChange={setSelected}
          placeholder="Select a fruit..."
        />
      </div>
    );
  },
};

export const Playground: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return (
      <div className="w-64">
        <Combobox
          {...args}
          options={options}
          value={selected}
          onChange={setSelected}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Select an option...',
    disabled: false,
  },
};

