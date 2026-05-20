import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DateCell } from './date-cell';

describe('DateCell', () => {
  const fixedNow = new Date('2025-07-15T12:00:00.000Z');

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(fixedNow);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('when formatting dates', () => {
    it('should render the formatted date in default British format (dd/MM/yyyy)', () => {
      // Arrange
      const testDate = new Date('2025-07-10T10:00:00.000Z');

      // Act
      render(<DateCell value={testDate} />);

      // Assert
      expect(screen.getByText('10/07/2025')).toBeInTheDocument();
    });

    it('should accept custom date format string and render accordingly', () => {
      // Arrange
      const testDate = new Date('2025-07-10T10:00:00.000Z');

      // Act
      render(<DateCell value={testDate} dateFormat="YYYY-MM-DD" />);

      // Assert
      expect(screen.getByText('2025-07-10')).toBeInTheDocument();
    });

    it('should handle string date input (ISO format)', () => {
      // Arrange
      const value = '2025-07-10T10:00:00.000Z';

      // Act
      render(<DateCell value={value} />);

      // Assert
      expect(screen.getByText('10/07/2025')).toBeInTheDocument();
    });

    it('should handle Date object input', () => {
      // Arrange
      const testDate = new Date('2025-07-10T10:00:00.000Z');

      // Act
      render(<DateCell value={testDate} />);

      // Assert
      expect(screen.getByText('10/07/2025')).toBeInTheDocument();
    });
  });

  describe('when showing relative time', () => {
    it('should render "today" when date is today', () => {
      // Arrange
      const today = new Date('2025-07-15T08:00:00.000Z');

      // Act
      render(<DateCell value={today} />);

      // Assert
      expect(screen.getByText('today')).toBeInTheDocument();
    });

    it('should render "yesterday" when date is 1 day ago', () => {
      // Arrange
      const yesterday = new Date('2025-07-14T10:00:00.000Z');

      // Act
      render(<DateCell value={yesterday} />);

      // Assert
      expect(screen.getByText('yesterday')).toBeInTheDocument();
    });

    it('should render "x days ago" for dates 2+ days in the past', () => {
      // Arrange
      const fiveDaysAgo = new Date('2025-07-10T10:00:00.000Z');

      // Act
      render(<DateCell value={fiveDaysAgo} />);

      // Assert
      expect(screen.getByText('5 days ago')).toBeInTheDocument();
    });

    it('should render "in x days" for future dates', () => {
      // Arrange
      const threeDaysInFuture = new Date('2025-07-18T10:00:00.000Z');

      // Act
      render(<DateCell value={threeDaysInFuture} />);

      // Assert
      expect(screen.getByText('in 3 days')).toBeInTheDocument();
    });
  });

  describe('when rendering the clock icon', () => {
    it('should render the Clock icon', () => {
      // Arrange
      const testDate = new Date('2025-07-10T10:00:00.000Z');

      // Act
      const { container } = render(<DateCell value={testDate} />);

      // Assert
      const clockIcon = container.querySelector('svg.lucide-clock');
      expect(clockIcon).toBeInTheDocument();
    });
  });
});
