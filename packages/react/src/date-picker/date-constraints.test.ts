import { describe, expect, it } from 'vitest';

import { buildDisabledMatchers, getDisabledDateError, isDateDisabled } from './date-constraints';

describe('buildDisabledMatchers', () => {
  describe('when min and max dates are provided', () => {
    it('should include boundary matchers', () => {
      // Arrange
      const minDate = new Date(2024, 0, 15);
      const maxDate = new Date(2024, 11, 31);

      // Act
      const matchers = buildDisabledMatchers({ minDate, maxDate });

      // Assert
      expect(matchers).toHaveLength(2);
      expect(isDateDisabled(new Date(2024, 0, 14), matchers)).toBe(true);
      expect(isDateDisabled(new Date(2024, 0, 15), matchers)).toBe(false);
      expect(isDateDisabled(new Date(2025, 0, 1), matchers)).toBe(true);
    });
  });
});

describe('getDisabledDateError', () => {
  describe('when the date is before the minimum date', () => {
    it('should return a min-date message', () => {
      // Arrange
      const minDate = new Date(2024, 0, 15);

      // Act
      const result = getDisabledDateError(new Date(2024, 0, 10), { minDate }, 'DD/MM/YYYY');

      // Assert
      expect(result).toBe('Date must be on or after 15/01/2024');
    });
  });

  describe('when the date is after the maximum date', () => {
    it('should return a max-date message', () => {
      // Arrange
      const maxDate = new Date(2024, 11, 31);

      // Act
      const result = getDisabledDateError(new Date(2025, 0, 1), { maxDate }, 'DD/MM/YYYY');

      // Assert
      expect(result).toBe('Date must be on or before 31/12/2024');
    });
  });
});
