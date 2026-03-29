import { useState } from 'react';
import { getCountryCode, getFlagUrl } from './country-codes';
import styles from './data-table.module.css';

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
export function CountryCell({ value }: CountryCellProps) {
  const [hasError, setHasError] = useState(false);

  const countryCode = getCountryCode(value);
  const flagUrl = countryCode ? getFlagUrl(countryCode) : getFlagUrl(value);

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className={styles.country}>
      {hasError ? (
        <span>-</span>
      ) : (
        <img
          src={flagUrl}
          alt={`${value} flag`}
          className={styles['country-flag']}
          onError={handleImageError}
        />
      )}
      <span className={styles['copy-value']}>{value}</span>
    </div>
  );
}

