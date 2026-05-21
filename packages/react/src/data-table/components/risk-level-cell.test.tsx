import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RiskLevelCell } from './risk-level-cell';

describe('RiskLevelCell', () => {
  describe('when risk level is high', () => {
    it('should render "High" with correct red styling', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="high" />);

      // Assert
      const badge = screen.getByText('High');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-red-100');
      expect(badge).toHaveClass('text-red-800');
    });
  });

  describe('when risk level is medium', () => {
    it('should render "Medium" with correct yellow styling', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="medium" />);

      // Assert
      const badge = screen.getByText('Medium');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-yellow-100');
      expect(badge).toHaveClass('text-yellow-800');
    });
  });

  describe('when risk level is low', () => {
    it('should render "Low" with correct green styling', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="low" />);

      // Assert
      const badge = screen.getByText('Low');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-green-100');
      expect(badge).toHaveClass('text-green-800');
    });
  });

  describe('when input case varies', () => {
    it('should handle lowercase input and capitalize first letter', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="high" />);

      // Assert
      expect(screen.getByText('High')).toBeInTheDocument();
    });

    it('should handle uppercase input and capitalize only first letter', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="HIGH" />);

      // Assert
      expect(screen.getByText('High')).toBeInTheDocument();
    });

    it('should handle mixed case input correctly', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="MeDiUm" />);

      // Assert
      expect(screen.getByText('Medium')).toBeInTheDocument();
    });
  });

  describe('when applying base styling', () => {
    it('should apply base styling classes (rounded, px-2, py-1, text-base, font-medium)', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="low" />);

      // Assert
      const badge = screen.getByText('Low');
      expect(badge).toHaveClass('rounded');
      expect(badge).toHaveClass('px-2');
      expect(badge).toHaveClass('py-1');
      expect(badge).toHaveClass('text-base');
      expect(badge).toHaveClass('font-medium');
    });
  });

  describe('when value is unknown', () => {
    it('should handle unknown values gracefully with default gray styling', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="unknown" />);

      // Assert
      const badge = screen.getByText('Unknown');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-gray-100');
      expect(badge).toHaveClass('text-gray-800');
    });

    it('should handle empty string gracefully', () => {
      // Arrange
      // Act
      const { container } = render(<RiskLevelCell value="" />);

      // Assert
      const badge = container.querySelector('span');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-gray-100');
      expect(badge).toHaveClass('text-gray-800');
    });

    it('should handle random unknown value with proper capitalization', () => {
      // Arrange
      // Act
      render(<RiskLevelCell value="critical" />);

      // Assert
      const badge = screen.getByText('Critical');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('bg-gray-100');
      expect(badge).toHaveClass('text-gray-800');
    });
  });
});
