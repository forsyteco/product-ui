import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Autocomplete } from './autocomplete';
import type { AutocompleteOption } from './types';

const meta = {
  title: 'Components/Autocomplete/Examples',
  component: Autocomplete.Root,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Autocomplete.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries: AutocompleteOption[] = [
  { id: 'us', label: 'United States', value: 'us' },
  { id: 'uk', label: 'United Kingdom', value: 'uk' },
  { id: 'ca', label: 'Canada', value: 'ca' },
  { id: 'au', label: 'Australia', value: 'au' },
  { id: 'de', label: 'Germany', value: 'de' },
  { id: 'fr', label: 'France', value: 'fr' },
  { id: 'jp', label: 'Japan', value: 'jp' },
  { id: 'br', label: 'Brazil', value: 'br' },
];

export const CountrySearch: Story = {
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    return (
      <div className="sb-demo-narrow">
        <Autocomplete.Root
          options={countries}
          value={selected}
          onChange={setSelected}
          placeholder="Type to search countries…"
        >
          <Autocomplete.Label>Country</Autocomplete.Label>
          <Autocomplete.Control>
            <Autocomplete.Input />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
        {selected && (
          <p className="sb-mt-4 sb-text-base sb-muted-text">Selected: {selected.label}</p>
        )}
      </div>
    );
  },
};
