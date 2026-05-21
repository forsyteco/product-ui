import { getCountryCode } from './country-codes';

export type CountryResolvable = {
  label: string;
  id?: string | number;
  value?: string;
  isoCode?: string;
};

/**
 * Resolves an ISO 3166-1 alpha-2 code from a country option or label.
 * Prefers explicit `isoCode`, then a 2-letter `value`/`id`, then the label lookup table.
 */
export function resolveCountryCode(source: CountryResolvable): string | null {
  if (source.isoCode) {
    return source.isoCode.toUpperCase();
  }

  for (const candidate of [source.value, source.id !== undefined ? String(source.id) : undefined]) {
    if (candidate && /^[a-zA-Z]{2}$/.test(candidate)) {
      return candidate.toUpperCase();
    }
  }

  return getCountryCode(source.label);
}
