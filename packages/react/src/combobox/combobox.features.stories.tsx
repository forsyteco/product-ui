import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox } from './combobox';
import type { ComboboxOption } from './types';

const meta = {
  title: 'Components/Combobox/Features',
  component: Combobox.Root,
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
} satisfies Meta<typeof Combobox.Root>;

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
        <Combobox.Root options={options} value={selected} onChange={setSelected} placeholder="Select a fruit...">
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>
    );
  },
};

export const WithInitialValue: Story = {
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(options[1]);
    return (
      <div className="w-64">
        <Combobox.Root options={options} value={selected} onChange={setSelected}>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-64">
      <Combobox.Root options={options} disabled placeholder="Disabled combobox">
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.ClearButton />
          <Combobox.ToggleButton />
        </Combobox.Control>
        <Combobox.Options />
      </Combobox.Root>
    </div>
  ),
};
