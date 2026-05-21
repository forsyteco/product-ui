import { getCountryCode } from './country-codes';
import type { CountryResolvable } from './resolve-country-code';
import { resolveCountryCode } from './resolve-country-code';

export type CountryOptionLike = CountryResolvable & {
  id?: string | number;
  disabled?: boolean;
};

/**
 * Finds a country option matching typed input: exact label, lowercase ISO code, or known country name.
 */
export function findCountryOption<T extends CountryOptionLike>(
  input: string,
  options: readonly T[]
): T | null {
  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }

  const lowerInput = trimmed.toLowerCase();

  const byLabel = options.find((option) => option.label.toLowerCase() === lowerInput);
  if (byLabel) {
    return byLabel;
  }

  if (/^[a-zA-Z]{2}$/.test(trimmed)) {
    const byCode = options.find((option) => {
      const candidates = [
        option.isoCode?.toLowerCase(),
        option.value?.toLowerCase(),
        option.id !== undefined ? String(option.id).toLowerCase() : undefined,
      ];
      return candidates.some((candidate) => candidate === lowerInput);
    });
    if (byCode) {
      return byCode;
    }
  }

  const codeFromLabel = getCountryCode(trimmed);
  if (codeFromLabel) {
    const byResolvedCode = options.find((option) => resolveCountryCode(option) === codeFromLabel);
    if (byResolvedCode) {
      return byResolvedCode;
    }
  }

  return null;
}
