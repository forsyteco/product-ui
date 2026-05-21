import { clsx } from 'clsx';
import { useState } from 'react';
import { useCountryFlagUrl } from './flag-provider';
import styles from './country-flag.module.css';

export type CountryFlagProps = Readonly<{
  /** ISO 3166-1 alpha-2 country code (e.g. `gb` or `GB`) */
  isoCode: string;
  /** Optional explicit flag image URL. Falls back to `CountryFlagProvider`. */
  src?: string;
  className?: string;
  size?: 'default' | 'lg';
}>;

export function CountryFlag({ isoCode, src, className, size = 'default' }: CountryFlagProps) {
  const [hasError, setHasError] = useState(false);
  const flagUrl = src ?? useCountryFlagUrl(isoCode);

  if (!flagUrl || hasError) {
    return null;
  }

  return (
    <img
      src={flagUrl}
      alt=""
      aria-hidden
      loading="lazy"
      decoding="async"
      width={size === 'lg' ? 20 : 16}
      height={size === 'lg' ? 20 : 16}
      className={clsx(styles.flag, size === 'lg' && styles['flag-lg'], className)}
      onError={() => setHasError(true)}
    />
  );
}
