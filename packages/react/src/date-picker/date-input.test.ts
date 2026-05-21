import { describe, expect, it } from 'vitest';

import {
  formatDateInput,
  parseStrictDateInput,
  resolveDateInput,
} from './date-input';

describe('formatDateInput', () => {
  describe('when no value is provided', () => {
    it('should return an empty string', () => {
      // Arrange
      // Act
      const result = formatDateInput(undefined, 'DD/MM/YYYY');

      // Assert
      expect(result).toBe('');
    });
  });

  describe('when a value is provided', () => {
    it('should format using the input format', () => {
      // Arrange
      const value = new Date(2024, 0, 15);

      // Act
      const result = formatDateInput(value, 'DD/MM/YYYY');

      // Assert
      expect(result).toBe('15/01/2024');
    });
  });
});

describe('parseStrictDateInput', () => {
  describe('when the input matches the format exactly', () => {
    it('should return the parsed date', () => {
      // Arrange
      // Act
      const result = parseStrictDateInput('15/01/2024', 'DD/MM/YYYY');

      // Assert
      expect(result).toEqual(new Date(2024, 0, 15));
    });
  });

  describe('when the input omits leading zeros', () => {
    it('should return undefined', () => {
      // Arrange
      // Act
      const result = parseStrictDateInput('3/04/2026', 'DD/MM/YYYY');

      // Assert
      expect(result).toBeUndefined();
    });
  });
});

describe('resolveDateInput', () => {
  describe('when the input is empty', () => {
    it('should be valid without a date', () => {
      // Arrange
      // Act
      const result = resolveDateInput('', 'DD/MM/YYYY');

      // Assert
      expect(result).toEqual({ valid: true });
    });
  });

  describe('when the day and month omit leading zeros', () => {
    it('should accept the date as valid', () => {
      // Arrange
      // Act
      const result = resolveDateInput('3/04/2026', 'DD/MM/YYYY');

      // Assert
      expect(result).toEqual({ valid: true, date: new Date(2026, 3, 3) });
    });
  });

  describe('when compact input is enabled', () => {
    it('should parse short digit-only values', () => {
      // Arrange
      // Act
      const result = resolveDateInput('3', 'DD/MM/YYYY', { allowCompactInput: true });

      // Assert
      expect(result.valid).toBe(true);
      expect(result).toMatchObject({
        valid: true,
        date: expect.any(Date),
      });
    });
  });

  describe('when compact input is disabled', () => {
    it('should reject short digit-only values', () => {
      // Arrange
      // Act
      const result = resolveDateInput('3', 'DD/MM/YYYY');

      // Assert
      expect(result).toEqual({ valid: false, error: 'Use format DD/MM/YYYY' });
    });
  });

  describe('when the day exceeds the days in the month', () => {
    it('should return a month-specific error message', () => {
      // Arrange
      // Act
      const result = resolveDateInput('31/02/2023', 'DD/MM/YYYY');

      // Assert
      expect(result).toEqual({ valid: false, error: 'Only 28 days in February' });
    });
  });

  describe('when the date is valid in a leap year', () => {
    it('should accept 29 February', () => {
      // Arrange
      // Act
      const result = resolveDateInput('29/02/2024', 'DD/MM/YYYY');

      // Assert
      expect(result).toEqual({ valid: true, date: new Date(2024, 1, 29) });
    });
  });

  describe('when the month is invalid', () => {
    it('should return a month error message', () => {
      // Arrange
      // Act
      const result = resolveDateInput('10/13/2024', 'DD/MM/YYYY');

      // Assert
      expect(result).toEqual({ valid: false, error: 'Enter a valid month' });
    });
  });

  describe('when the input is not a date', () => {
    it('should return a format error message', () => {
      // Arrange
      // Act
      const result = resolveDateInput('not-a-date', 'DD/MM/YYYY');

      // Assert
      expect(result).toEqual({ valid: false, error: 'Use format DD/MM/YYYY' });
    });
  });
});
