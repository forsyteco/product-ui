import { describe, it, expect } from 'vitest';
import { resolveCountryCode } from './resolve-country-code';

describe('resolveCountryCode', () => {
  describe('when isoCode is provided', () => {
    it('should return the uppercased isoCode', () => {
      // Arrange
      const option = { label: 'United Kingdom', isoCode: 'gb' };

      // Act
      const result = resolveCountryCode(option);

      // Assert
      expect(result).toBe('GB');
    });
  });

  describe('when value is a two-letter lowercase code', () => {
    it('should return the uppercased code for flag rendering', () => {
      // Arrange
      const option = { label: 'France', value: 'fr' };

      // Act
      const result = resolveCountryCode(option);

      // Assert
      expect(result).toBe('FR');
    });
  });

  describe('when only the label is known', () => {
    it('should resolve from the country name table', () => {
      // Arrange
      const option = { label: 'United Kingdom' };

      // Act
      const result = resolveCountryCode(option);

      // Assert
      expect(result).toBe('GB');
    });
  });

  describe('when the country cannot be resolved', () => {
    it('should return null', () => {
      // Arrange
      const option = { label: 'Unknown Country' };

      // Act
      const result = resolveCountryCode(option);

      // Assert
      expect(result).toBeNull();
    });
  });
});
