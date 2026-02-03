/**
 * Mapping of country names to ISO 2-letter country codes
 */
export declare const COUNTRY_CODES: Record<string, string>;
/**
 * Maps a country name to its ISO 2-letter code
 * @param countryName - The full country name (e.g., "United Kingdom")
 * @returns The ISO 2-letter code (e.g., "GB") or null if not found
 */
export declare function getCountryCode(countryName: string): string | null;
/**
 * Converts an ISO 2-letter country code to a Twemoji CDN URL for the flag
 * @param isoCode - The ISO 2-letter country code (e.g., "GB")
 * @returns The Twemoji CDN URL for the flag SVG
 */
export declare function getFlagUrl(isoCode: string): string;
//# sourceMappingURL=country-codes.d.ts.map