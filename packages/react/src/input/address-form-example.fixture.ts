import type { AutocompleteOption } from '../autocomplete/types';
import type { CountryComboboxOption } from '../combobox/country-combobox';
import type { MockAddressSuggestion } from './address-form-example.types';

export type { MockAddressSuggestion } from './address-form-example.types';

export const mockAddressFormCountries: CountryComboboxOption[] = [
  { id: 'fr', label: 'France', value: 'fr' },
  { id: 'de', label: 'Germany', value: 'de' },
  { id: 'ie', label: 'Ireland', value: 'ie' },
  { id: 'gb', label: 'United Kingdom', value: 'gb' },
  { id: 'us', label: 'United States', value: 'us' },
];

export const mockUnitedKingdom =
  mockAddressFormCountries.find((country) => country.value === 'gb') ??
  ({ id: 'gb', label: 'United Kingdom', value: 'gb' } satisfies CountryComboboxOption);

/** Single mock UK lookup result for Storybook address search. */
export const mockSearchableAddress: MockAddressSuggestion = {
  id: 'mock-baker-street',
  street: '221B Baker Street',
  city: 'London',
  county: 'Greater London',
  postcode: 'NW1 6XE',
};

export const mockAddressAutocompleteOptions: AutocompleteOption[] = [
  {
    id: mockSearchableAddress.id,
    label: formatAddressSuggestionLabel(mockSearchableAddress),
    value: mockSearchableAddress.id,
  },
];

const mockSearchHaystack =
  '221b baker street london nw1 6xe greater london'.toLowerCase();

export function formatAddressSuggestionLabel(address: MockAddressSuggestion): string {
  return [address.street, address.city, address.postcode].filter(Boolean).join(', ');
}

export function matchesMockAddressSearch(query: string): boolean {
  const trimmed = query.trim().toLowerCase();
  if (trimmed.length < 3) {
    return false;
  }

  return mockSearchHaystack.includes(trimmed);
}

export function addressFromSuggestion(suggestion: MockAddressSuggestion) {
  return {
    streetLines: [suggestion.street],
    city: suggestion.city,
    county: suggestion.county ?? '',
    postcode: suggestion.postcode,
  };
}
