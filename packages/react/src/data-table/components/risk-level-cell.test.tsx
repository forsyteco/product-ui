import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RiskLevelCell } from './risk-level-cell';

describe('RiskLevelCell', () => {
  describe('High Risk Level', () => {
    it('renders "High" with correct red styling', () => {
      render(<RiskLevelCell value="high" />);

      const badge = screen.getByText('High');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-red-100');
      expect(badge).toHaveClass('text-red-800');
    });
  });

  describe('Medium Risk Level', () => {
    it('renders "Medium" with correct yellow styling', () => {
      render(<RiskLevelCell value="medium" />);

      const badge = screen.getByText('Medium');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-yellow-100');
      expect(badge).toHaveClass('text-yellow-800');
    });
  });

  describe('Low Risk Level', () => {
    it('renders "Low" with correct green styling', () => {
      render(<RiskLevelCell value="low" />);

      const badge = screen.getByText('Low');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-green-100');
      expect(badge).toHaveClass('text-green-800');
    });
  });

  describe('Case Insensitivity', () => {
    it('handles lowercase input and capitalizes first letter', () => {
      render(<RiskLevelCell value="high" />);

      expect(screen.getByText('High')).toBeInTheDocument();
    });

    it('handles uppercase input and capitalizes only first letter', () => {
      render(<RiskLevelCell value="HIGH" />);

      expect(screen.getByText('High')).toBeInTheDocument();
    });

    it('handles mixed case input correctly', () => {
      render(<RiskLevelCell value="MeDiUm" />);

      expect(screen.getByText('Medium')).toBeInTheDocument();
    });
  });

  describe('Base Styling', () => {
    it('applies base styling classes (rounded, px-2, py-1, text-xs, font-medium)', () => {
      render(<RiskLevelCell value="low" />);

      const badge = screen.getByText('Low');
      expect(badge).toHaveClass('rounded');
      expect(badge).toHaveClass('px-2');
      expect(badge).toHaveClass('py-1');
      expect(badge).toHaveClass('text-xs');
      expect(badge).toHaveClass('font-medium');
    });
  });

  describe('Unknown Values', () => {
    it('handles unknown values gracefully with default gray styling', () => {
      render(<RiskLevelCell value="unknown" />);

      const badge = screen.getByText('Unknown');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-gray-100');
      expect(badge).toHaveClass('text-gray-800');
    });

    it('handles empty string gracefully', () => {
      const { container } = render(<RiskLevelCell value="" />);

      const badge = container.querySelector('span');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-gray-100');
      expect(badge).toHaveClass('text-gray-800');
    });

    it('handles random unknown value with proper capitalization', () => {
      render(<RiskLevelCell value="critical" />);

      const badge = screen.getByText('Critical');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-gray-100');
      expect(badge).toHaveClass('text-gray-800');
    });
  });
});
