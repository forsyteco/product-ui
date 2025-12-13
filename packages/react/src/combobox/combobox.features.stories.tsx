import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Combobox from './combobox';
import type { ComboboxOption } from './combobox';

const meta = {
  title: 'Components/Combobox/Features',
  component: Combobox,
  parameters: {
    layout: 'centered',
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

export const Basic: Story = {
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

export const WithInitialValue: Story = {
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(options[1]);
    return (
      <div className="w-64">
        <Combobox
          options={options}
          value={selected}
          onChange={setSelected}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <Combobox options={options} disabled placeholder="Disabled combobox" />
    </div>
  ),
};

