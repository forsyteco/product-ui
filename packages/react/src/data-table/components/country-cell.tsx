import { useState } from 'react';

export type CountryCellProps = {
  /** The country name to display (e.g., "United Kingdom", "France") */
  value: string;
};

/**
 * Mapping of country names to ISO 2-letter country codes
 */
const COUNTRY_CODES: Record<string, string> = {
  'United Kingdom': 'GB',
  'United States': 'US',
  France: 'FR',
  Germany: 'DE',
  Norway: 'NO',
  Spain: 'ES',
  Italy: 'IT',
  Poland: 'PL',
  Canada: 'CA',
  Australia: 'AU',
  Netherlands: 'NL',
  Belgium: 'BE',
  Switzerland: 'CH',
  Ireland: 'IE',
  Portugal: 'PT',
  Sweden: 'SE',
  Denmark: 'DK',
  Austria: 'AT',
};

/**
 * Maps a country name to its ISO 2-letter code
 * @param countryName - The full country name (e.g., "United Kingdom")
 * @returns The ISO 2-letter code (e.g., "GB") or null if not found
 */
function getCountryCode(countryName: string): string | null {
  return COUNTRY_CODES[countryName] ?? null;
}

/**
 * Converts an ISO 2-letter country code to a Twemoji CDN URL for the flag
 * @param isoCode - The ISO 2-letter country code (e.g., "GB")
 * @returns The Twemoji CDN URL for the flag SVG
 */
function getFlagUrl(isoCode: string): string {
  // Regional indicator symbols start at U+1F1E6 for 'A'
  const BASE_CODE_POINT = 0x1f1e6;

  const codePoints = isoCode
    .toUpperCase()
    .split('')
    .map((char) => {
      const offset = char.charCodeAt(0) - 'A'.charCodeAt(0);
      return (BASE_CODE_POINT + offset).toString(16);
    })
    .join('-');

  return `https://cdn.jsdelivr.net/npm/twemoji@latest/2/svg/${codePoints}.svg`;
}

/**
 * A cell renderer component that displays a country flag alongside the country name.
 *
 * Shows: Flag image (from Twemoji CDN) + Country name
 * Falls back to "-" if the flag image fails to load.
 *
 * @example
 * // In column definition:
 * { id: 'country', header: 'Country', accessorKey: 'country', cell: CountryCell }
 */
function CountryCell({ value }: CountryCellProps) {
  const [hasError, setHasError] = useState(false);

  const countryCode = getCountryCode(value);
  const flagUrl = countryCode ? getFlagUrl(countryCode) : getFlagUrl(value);

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className="inline-flex items-center gap-2">
      {hasError ? (
        <span>-</span>
      ) : (
        <img
          src={flagUrl}
          alt={`${value} flag`}
          className="h-5 w-5"
          onError={handleImageError}
        />
      )}
      <span className="text-foreground">{value}</span>
    </div>
  );
}

export default CountryCell;
