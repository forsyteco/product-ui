import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Listbox } from './listbox';
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
      <div className="sb-demo-narrow">
        <label className="sb-block sb-text-base sb-font-medium sb-mb-2 sb-foreground-text">
          Status
        </label>
        <Listbox
          options={statusOptions}
          value={selected}
          onChange={setSelected}
          placeholder="Select status..."
        />
        {selected && (
          <p className="sb-mt-4 sb-text-base sb-muted-text">
            Selected: {selected.label}
          </p>
        )}
      </div>
    );
  },
};

