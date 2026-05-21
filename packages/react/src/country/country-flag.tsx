import { clsx } from 'clsx';
import { useState } from 'react';
import { getFlagUrl } from './country-codes';
import styles from './country-flag.module.css';

export type CountryFlagProps = Readonly<{
  /** ISO 3166-1 alpha-2 country code (e.g. "GB", "US") */
  isoCode: string;
  className?: string;
  size?: 'default' | 'lg';
}>;

export function CountryFlag({ isoCode, className, size = 'default' }: CountryFlagProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <img
      src={getFlagUrl(isoCode)}
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
