import type { CountryResolvable } from './resolve-country-code';
import { resolveCountryCode } from './resolve-country-code';
import { CountryFlag } from './country-flag';
import styles from './country-option-label.module.css';

export type CountryOptionLabelProps = Readonly<{
  option: CountryResolvable;
}>;

export function CountryOptionLabel({ option }: CountryOptionLabelProps) {
  const isoCode = resolveCountryCode(option);

  return (
    <span className={styles.root}>
      {isoCode ? <CountryFlag isoCode={isoCode} /> : null}
      <span className={styles.label}>{option.label}</span>
    </span>
  );
}
