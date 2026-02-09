import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DateCell } from './date-cell';

describe('DateCell', () => {
  // Use a fixed "now" date for consistent test results
  const fixedNow = new Date('2025-07-15T12:00:00.000Z');

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(fixedNow);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Date Formatting', () => {
    it('renders the formatted date in default British format (dd/MM/yyyy)', () => {
      const testDate = new Date('2025-07-10T10:00:00.000Z');
      render(<DateCell value={testDate} />);

      expect(screen.getByText('10/07/2025')).toBeInTheDocument();
    });

    it('accepts custom date format string and renders accordingly', () => {
      const testDate = new Date('2025-07-10T10:00:00.000Z');
      render(<DateCell value={testDate} dateFormat="YYYY-MM-DD" />);

      expect(screen.getByText('2025-07-10')).toBeInTheDocument();
    });

    it('handles string date input (ISO format)', () => {
      render(<DateCell value="2025-07-10T10:00:00.000Z" />);

      expect(screen.getByText('10/07/2025')).toBeInTheDocument();
    });

    it('handles Date object input', () => {
      const testDate = new Date('2025-07-10T10:00:00.000Z');
      render(<DateCell value={testDate} />);

      expect(screen.getByText('10/07/2025')).toBeInTheDocument();
    });
  });

  describe('Relative Time', () => {
    it('renders "today" when date is today', () => {
      // Use the same day as fixedNow
      const today = new Date('2025-07-15T08:00:00.000Z');
      render(<DateCell value={today} />);

      expect(screen.getByText('today')).toBeInTheDocument();
    });

    it('renders "yesterday" when date is 1 day ago', () => {
      const yesterday = new Date('2025-07-14T10:00:00.000Z');
      render(<DateCell value={yesterday} />);

      expect(screen.getByText('yesterday')).toBeInTheDocument();
    });

    it('renders "x days ago" for dates 2+ days in the past', () => {
      // 5 days ago from fixedNow (July 15)
      const fiveDaysAgo = new Date('2025-07-10T10:00:00.000Z');
      render(<DateCell value={fiveDaysAgo} />);

      expect(screen.getByText('5 days ago')).toBeInTheDocument();
    });

    it('renders "in x days" for future dates', () => {
      // 3 days in the future from fixedNow (July 15)
      const threeDaysInFuture = new Date('2025-07-18T10:00:00.000Z');
      render(<DateCell value={threeDaysInFuture} />);

      expect(screen.getByText('in 3 days')).toBeInTheDocument();
    });
  });

  describe('Clock Icon', () => {
    it('renders the Clock icon', () => {
      const testDate = new Date('2025-07-10T10:00:00.000Z');
      const { container } = render(<DateCell value={testDate} />);

      // lucide-react icons render as SVGs with the lucide class
      const clockIcon = container.querySelector('svg.lucide-clock');
      expect(clockIcon).toBeInTheDocument();
    });
  });
});
