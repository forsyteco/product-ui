import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Listbox from './listbox';
import type { ListboxOption } from './listbox';

const meta = {
  title: 'Components/Listbox',
  component: Listbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation.',
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
      description: 'Whether the listbox is disabled',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: ListboxOption[] = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

export const Default: Story = {
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

export const Playground: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return (
      <div className="w-64">
        <Listbox
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

