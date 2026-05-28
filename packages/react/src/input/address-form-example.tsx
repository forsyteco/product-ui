import { useCallback, useState } from 'react';
import { Plus } from 'lucide-react';

import { Autocomplete, type AutocompleteOption } from '../autocomplete';
import { CountryCombobox, type CountryComboboxOption } from '../combobox/country-combobox';
import { FormField } from '../form-field';
import { AddressManualEntryLink } from './address-manual-entry-link';
import { Input } from './input';
import {
  addressFromSuggestion,
  matchesMockAddressSearch,
  mockAddressAutocompleteOptions,
  mockAddressFormCountries,
  mockSearchableAddress,
  mockUnitedKingdom,
  type MockAddressSuggestion,
} from './address-form-example.fixture';
import styles from './address-form-example.module.css';

function highlightQuery(text: string, query: string) {
  const trimmed = query.trim();
  if (!trimmed) {
    return text;
  }

  const safeQuery = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${safeQuery})`, 'gi'));

  return parts.map((part, index) =>
    new RegExp(safeQuery, 'i').test(part) ? (
      <span key={index} className={styles.addressOptionHighlight}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

function AddressSearchOption({ query }: { query: string }) {
  const secondaryLine = [mockSearchableAddress.city, mockSearchableAddress.county, mockSearchableAddress.postcode]
    .filter(Boolean)
    .join(', ');

  return (
    <div className={styles.addressOption}>
      <span className={styles.addressOptionLine}>
        {highlightQuery(mockSearchableAddress.street, query)}
      </span>
      <span className={styles.addressOptionLine}>{highlightQuery(secondaryLine, query)}</span>
    </div>
  );
}

type ManualAddressFieldsProps = {
  streetLines: string[];
  city: string;
  county: string;
  postcode: string;
  onStreetLineChange: (index: number, value: string) => void;
  onAddStreetLine: () => void;
  onCityChange: (value: string) => void;
  onCountyChange: (value: string) => void;
  onPostcodeChange: (value: string) => void;
};

function hasManualFieldValues(streetLines: string[], city: string, county: string, postcode: string) {
  return (
    streetLines.some((line) => line.trim().length > 0) ||
    city.trim().length > 0 ||
    county.trim().length > 0 ||
    postcode.trim().length > 0
  );
}

function ManualAddressFields({
  streetLines,
  city,
  county,
  postcode,
  onStreetLineChange,
  onAddStreetLine,
  onCityChange,
  onCountyChange,
  onPostcodeChange,
}: ManualAddressFieldsProps) {
  return (
    <div className={styles.manualFields}>
      <FormField>
        <FormField.Label required>Street</FormField.Label>
        <FormField.Control describedBy="none">
          <div className={styles.streetLines}>
            {streetLines.map((line, index) => (
              <div key={index} className={styles.streetLineRow}>
                <Input
                  type="text"
                  value={line}
                  onChange={(event) => onStreetLineChange(index, event.currentTarget.value)}
                  placeholder={`Address line ${index + 1}`}
                  className={styles.streetLineField}
                  required={index === 0}
                  aria-required={index === 0}
                />
              </div>
            ))}
            <button
              type="button"
              className={styles.addAddressLineLink}
              onClick={onAddStreetLine}
              aria-label="+ Add address line"
            >
              <Plus aria-hidden size={16} strokeWidth={2} />
              Add address line
            </button>
          </div>
        </FormField.Control>
      </FormField>

      <FormField>
        <FormField.Label required>City</FormField.Label>
        <FormField.Control describedBy="none">
          <Input
            type="text"
            value={city}
            onChange={(event) => onCityChange(event.currentTarget.value)}
            placeholder="City"
            required
            aria-required
          />
        </FormField.Control>
      </FormField>

      <FormField>
        <FormField.Label>County</FormField.Label>
        <FormField.Control describedBy="none">
          <Input
            type="text"
            value={county}
            onChange={(event) => onCountyChange(event.currentTarget.value)}
            placeholder="County"
          />
        </FormField.Control>
      </FormField>

      <FormField>
        <FormField.Label required>Postcode</FormField.Label>
        <FormField.Control describedBy="none">
          <Input
            type="text"
            value={postcode}
            onChange={(event) => onPostcodeChange(event.currentTarget.value)}
            placeholder="Postcode"
            required
            aria-required
          />
        </FormField.Control>
      </FormField>
    </div>
  );
}

export function AddressFormExample() {
  const [country, setCountry] = useState<CountryComboboxOption | null>(mockUnitedKingdom);
  const [searchQuery, setSearchQuery] = useState('');
  const [isManualEntry, setIsManualEntry] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<MockAddressSuggestion | null>(null);
  const [streetLines, setStreetLines] = useState(['']);
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [postcode, setPostcode] = useState('');

  const isUkSelected = country?.value === 'gb';
  const showUkSearch = Boolean(country && isUkSelected && !isManualEntry && !selectedAddress);
  const showManualFields = Boolean(country && (isManualEntry || selectedAddress));

  const renderAddressOption = useCallback(
    (_option: AutocompleteOption) => <AddressSearchOption query={searchQuery} />,
    [searchQuery]
  );

  function applySuggestion(suggestion: MockAddressSuggestion) {
    const address = addressFromSuggestion(suggestion);
    setSelectedAddress(suggestion);
    setSearchQuery('');
    setIsManualEntry(true);
    setStreetLines(address.streetLines.length > 0 ? address.streetLines : ['']);
    setCity(address.city);
    setCounty(address.county);
    setPostcode(address.postcode);
  }

  function returnToUkSearch() {
    setSelectedAddress(null);
    setSearchQuery('');
    setIsManualEntry(false);
    setStreetLines(['']);
    setCity('');
    setCounty('');
    setPostcode('');
  }

  function handleCountryChange(nextCountry: CountryComboboxOption | null) {
    setCountry(nextCountry);
    setSearchQuery('');
    setSelectedAddress(null);

    if (nextCountry?.value !== 'gb') {
      setIsManualEntry(true);
      return;
    }

    if (hasManualFieldValues(streetLines, city, county, postcode)) {
      setIsManualEntry(true);
      return;
    }

    setIsManualEntry(false);
  }

  function handleAddressSelect(option: AutocompleteOption | null) {
    if (!option) {
      return;
    }

    applySuggestion(mockSearchableAddress);
  }

  return (
    <div className={styles.addressForm}>
      <FormField>
        <FormField.Label>Transaction address</FormField.Label>
        <FormField.Description>
          You can add a full transaction address below, or save without it. Try searching for 221B
          Baker Street, London, or NW1 6XE.
        </FormField.Description>
      </FormField>

      <FormField>
        <FormField.Label required>Country</FormField.Label>
        <FormField.Control describedBy="none">
          <CountryCombobox
            options={mockAddressFormCountries}
            value={country}
            onChange={handleCountryChange}
            placeholder="Select country"
            quickSelect={mockUnitedKingdom}
            required
          />
        </FormField.Control>
      </FormField>

      {showUkSearch ? (
        <FormField>
          <FormField.Label>Search address</FormField.Label>
          <FormField.Control describedBy="none">
            <div className={styles.findAddressControl} role="group" aria-label="Search address">
              <Autocomplete.Root
                options={mockAddressAutocompleteOptions}
                query={searchQuery}
                onQueryChange={setSearchQuery}
                onChange={handleAddressSelect}
                placeholder="Enter street or postcode"
                minQueryLength={3}
                clearable
                filterFn={(_, query) => matchesMockAddressSearch(query)}
                emptyBeforeThresholdText={(min) => `Type at least ${min} characters to search`}
                emptyAfterThresholdText="No addresses found"
                renderOption={renderAddressOption}
              >
                <Autocomplete.Control>
                  <Autocomplete.LeadingIcon />
                  <Autocomplete.Input />
                  <Autocomplete.ClearButton aria-label="Clear search" />
                </Autocomplete.Control>
                <Autocomplete.Options />
              </Autocomplete.Root>
              <AddressManualEntryLink
                onClick={() => {
                  setSearchQuery('');
                  setIsManualEntry(true);
                }}
              />
            </div>
          </FormField.Control>
        </FormField>
      ) : null}

      {showManualFields ? (
        <>
          <ManualAddressFields
            streetLines={streetLines}
            city={city}
            county={county}
            postcode={postcode}
            onStreetLineChange={(index, value) => {
              setStreetLines((lines) =>
                lines.map((line, lineIndex) => (lineIndex === index ? value : line))
              );
            }}
            onAddStreetLine={() => setStreetLines((lines) => [...lines, ''])}
            onCityChange={setCity}
            onCountyChange={setCounty}
            onPostcodeChange={setPostcode}
          />
          {isUkSelected ? (
            <div className={styles.secondaryActions}>
              <button type="button" className={styles.returnToSearchLink} onClick={returnToUkSearch}>
                Return to search
              </button>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
