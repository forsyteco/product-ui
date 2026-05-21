import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CountryCombobox } from './country-combobox';
import type { CountryComboboxOption } from './country-combobox';

const meta = {
  title: 'Components/Combobox/Examples',
  component: CountryCombobox,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CountryCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries: CountryComboboxOption[] = [
  { id: 'af', label: 'Afghanistan', value: 'af' },
  { id: 'al', label: 'Albania', value: 'al' },
  { id: 'dz', label: 'Algeria', value: 'dz' },
  { id: 'as', label: 'American Samoa', value: 'as' },
  { id: 'ad', label: 'Andorra', value: 'ad' },
  { id: 'ao', label: 'Angola', value: 'ao' },
  { id: 'ai', label: 'Anguilla', value: 'ai' },
  { id: 'aq', label: 'Antarctica', value: 'aq' },
  { id: 'ag', label: 'Antigua and Barbuda', value: 'ag' },
  { id: 'ar', label: 'Argentina', value: 'ar' },
  { id: 'am', label: 'Armenia', value: 'am' },
  { id: 'aw', label: 'Aruba', value: 'aw' },
  { id: 'au', label: 'Australia', value: 'au' },
  { id: 'at', label: 'Austria', value: 'at' },
  { id: 'az', label: 'Azerbaijan', value: 'az' },
  { id: 'bs', label: 'Bahamas', value: 'bs' },
  { id: 'bh', label: 'Bahrain', value: 'bh' },
  { id: 'bd', label: 'Bangladesh', value: 'bd' },
  { id: 'bb', label: 'Barbados', value: 'bb' },
  { id: 'by', label: 'Belarus', value: 'by' },
  { id: 'be', label: 'Belgium', value: 'be' },
  { id: 'bz', label: 'Belize', value: 'bz' },
  { id: 'bj', label: 'Benin', value: 'bj' },
  { id: 'bm', label: 'Bermuda', value: 'bm' },
  { id: 'gb', label: 'United Kingdom', value: 'gb', isoCode: 'GB' },
  { id: 'us', label: 'United States', value: 'us', isoCode: 'US' },
  { id: 'fr', label: 'France', value: 'fr', isoCode: 'FR' },
  { id: 'de', label: 'Germany', value: 'de', isoCode: 'DE' },
  { id: 'jp', label: 'Japan', value: 'jp', isoCode: 'JP' },
  { id: 'no', label: 'Norway', value: 'no', isoCode: 'NO' },
];

export const CountrySelectorWithFlags: Story = {
  render: () => {
    const [selected, setSelected] = useState<CountryComboboxOption | null>(null);
    return (
      <div className="max-w-xs">
        <CountryCombobox
          options={countries}
          value={selected}
          onChange={setSelected}
          label="Country"
          placeholder="Search for a country..."
        />
        {selected && (
          <p className="mt-4 text-base text-muted-foreground">Selected: {selected.label}</p>
        )}
      </div>
    );
  },
};

export const CountrySelectorWithInitialValue: Story = {
  render: () => {
    const [selected, setSelected] = useState<CountryComboboxOption | null>(
      countries.find((country) => country.isoCode === 'GB') ?? null
    );
    return (
      <div className="max-w-xs">
        <CountryCombobox
          options={countries}
          value={selected}
          onChange={setSelected}
          label="Country of residence"
          placeholder="Search for a country..."
        />
      </div>
    );
  },
};
