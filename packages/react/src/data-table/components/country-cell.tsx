import { useState } from 'react';
import { getCountryCode, getFlagUrl } from './country-codes';

export type CountryCellProps = Readonly<{
  /** The country name to display (e.g., "United Kingdom", "France") */
  value: string;
}>;

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
