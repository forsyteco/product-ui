import { useState } from 'react';
import { getCountryCode } from '../../country/country-codes';
import { useCountryFlagUrl } from '../../country/flag-provider';

export type CountryCellProps = Readonly<{
  /** The country name to display (e.g., "United Kingdom", "France") */
  value: string;
}>;

export function CountryCell({ value }: CountryCellProps) {
  const [hasError, setHasError] = useState(false);
  const countryCode = getCountryCode(value);
  const flagUrl = useCountryFlagUrl(countryCode ?? value);

  return (
    <div className="inline-flex items-center gap-2">
      {flagUrl && !hasError ? (
        <img
          src={flagUrl}
          alt=""
          aria-hidden
          className="h-5 w-5"
          onError={() => setHasError(true)}
        />
      ) : null}
      <span className="text-foreground">{value}</span>
    </div>
  );
}
