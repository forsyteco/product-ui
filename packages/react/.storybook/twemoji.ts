/**
 * Storybook-only helper for Twemoji flag URLs.
 * Consumers should provide their own `getFlagUrl` via `CountryFlagProvider`.
 */
export function createTwemojiFlagUrl(isoCode: string): string {
  const baseCodePoint = 0x1f1e6;

  const codePoints = isoCode
    .toUpperCase()
    .split('')
    .map((char) => {
      const offset = (char.codePointAt(0) ?? 0) - ('A'.codePointAt(0) ?? 0);
      return (baseCodePoint + offset).toString(16);
    })
    .join('-');

  return `https://cdn.jsdelivr.net/npm/twemoji@latest/2/svg/${codePoints}.svg`;
}
