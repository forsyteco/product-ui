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
      <div className="p-6 max-w-md">
        <Autocomplete.Root
          options={countries}
          value={selected}
          onChange={setSelected}
          placeholder="Type to search countries…"
        >
          <Autocomplete.Label>Country</Autocomplete.Label>
          <Autocomplete.Control>
            <Autocomplete.LeadingIcon />
            <Autocomplete.Input />
            <Autocomplete.ClearButton />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
        {selected && (
          <p className="mt-4 text-base text-muted-foreground">Selected: {selected.label}</p>
        )}
      </div>
    );
  },
};
