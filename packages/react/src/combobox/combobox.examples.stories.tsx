import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Combobox from './combobox';
import type { ComboboxOption } from './combobox';

const meta = {
  title: 'Components/Combobox/Examples',
  component: Combobox,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries: ComboboxOption[] = [
  { id: 'us', label: 'United States', value: 'us' },
  { id: 'uk', label: 'United Kingdom', value: 'uk' },
  { id: 'ca', label: 'Canada', value: 'ca' },
  { id: 'au', label: 'Australia', value: 'au' },
  { id: 'de', label: 'Germany', value: 'de' },
  { id: 'fr', label: 'France', value: 'fr' },
];

export const CountrySelector: Story = {
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return (
      <div className="p-6 max-w-md">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Country
        </label>
        <Combobox
          options={countries}
          value={selected}
          onChange={setSelected}
          placeholder="Search for a country..."
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

