import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Listbox from './listbox';
import type { ListboxOption } from './listbox';

const meta = {
  title: 'Components/Listbox/Examples',
  component: Listbox,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const statusOptions: ListboxOption[] = [
  { id: 'active', label: 'Active', value: 'active' },
  { id: 'inactive', label: 'Inactive', value: 'inactive' },
  { id: 'pending', label: 'Pending', value: 'pending' },
  { id: 'archived', label: 'Archived', value: 'archived', disabled: true },
];

export const StatusSelector: Story = {
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return (
      <div className="p-6 max-w-md">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Status
        </label>
        <Listbox
          options={statusOptions}
          value={selected}
          onChange={setSelected}
          placeholder="Select status..."
        />
        {selected && (
          <p className="mt-4 text-base text-gray-600">
            Selected: {selected.label}
          </p>
        )}
      </div>
    );
  },
};

