import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox } from './combobox';
import type { ComboboxOption } from './types';

const meta = {
  title: 'Components/Combobox/Examples',
  component: Combobox.Root,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Combobox.Root>;

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
        <Combobox.Root
          options={countries}
          value={selected}
          onChange={setSelected}
          placeholder="Search for a country..."
        >
          <Combobox.Label>Country</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
        {selected && (
          <p className="mt-4 text-base text-muted-foreground">Selected: {selected.label}</p>
        )}
      </div>
    );
  },
};
