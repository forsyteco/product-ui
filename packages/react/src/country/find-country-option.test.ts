import { describe, it, expect } from 'vitest';

import { findCountryOption } from './find-country-option';
import type { CountryOptionLike } from './find-country-option';

const options: CountryOptionLike[] = [
  { id: 'gb', label: 'United Kingdom', value: 'gb' },
  { id: 'fr', label: 'France', value: 'fr' },
  { id: 'us', label: 'United States', value: 'us' },
];

describe('findCountryOption', () => {
  describe('when the input matches an option label', () => {
    it('should return the option case-insensitively', () => {
      // Arrange
      const input = 'united kingdom';

      // Act
      const result = findCountryOption(input, options);

      // Assert
      expect(result).toEqual(options[0]);
    });
  });

  describe('when the input is a lowercase ISO code', () => {
    it('should return the matching option', () => {
      // Arrange
      const input = 'fr';

      // Act
      const result = findCountryOption(input, options);

      // Assert
      expect(result).toEqual(options[1]);
    });
  });

  describe('when the input does not match any option', () => {
    it('should return null', () => {
      // Arrange
      const input = 'Atlantis';

      // Act
      const result = findCountryOption(input, options);

      // Assert
      expect(result).toBeNull();
    });
  });
});
