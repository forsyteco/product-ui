import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Listbox from './listbox';
import type { ListboxOption } from './listbox';

const meta = {
  title: 'Components/Listbox/Features',
  component: Listbox,
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
      description: 'Whether the listbox is disabled',
    },
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: ListboxOption[] = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
  { id: '4', label: 'Disabled Option', value: 'disabled', disabled: true },
];

export const Basic: Story = {
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return (
      <div className="w-64">
        <Listbox
          options={options}
          value={selected}
          onChange={setSelected}
        />
      </div>
    );
  },
};

export const WithInitialValue: Story = {
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(options[1]);
    return (
      <div className="w-64">
        <Listbox
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
      <Listbox options={options} disabled />
    </div>
  ),
};

