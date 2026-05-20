import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RiskLevelCell } from './risk-level-cell';
import styles from './data-table.module.css';

describe('RiskLevelCell', () => {
  describe('when the value is high risk', () => {
    it('should render "High" with correct red styling', () => {
      // Arrange
      const value = 'high';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      const badge = screen.getByText('High');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(styles['risk-high']);
    });
  });

  describe('when the value is medium risk', () => {
    it('should render "Medium" with correct yellow styling', () => {
      // Arrange
      const value = 'medium';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      const badge = screen.getByText('Medium');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(styles['risk-medium']);
    });
  });

  describe('when the value is low risk', () => {
    it('should render "Low" with correct green styling', () => {
      // Arrange
      const value = 'low';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      const badge = screen.getByText('Low');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(styles['risk-low']);
    });
  });

  describe('when the input casing varies', () => {
    it('should handle lowercase input and capitalize first letter', () => {
      // Arrange
      const value = 'high';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      expect(screen.getByText('High')).toBeInTheDocument();
    });

    it('should handle uppercase input and capitalize only first letter', () => {
      // Arrange
      const value = 'HIGH';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      expect(screen.getByText('High')).toBeInTheDocument();
    });

    it('should handle mixed case input correctly', () => {
      // Arrange
      const value = 'MeDiUm';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      expect(screen.getByText('Medium')).toBeInTheDocument();
    });
  });

  describe('when inspecting base styling', () => {
    it('should apply base risk badge class', () => {
      // Arrange
      const value = 'low';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      const badge = screen.getByText('Low');
      expect(badge).toHaveClass(styles['risk-badge']);
    });
  });

  describe('when the value is unknown or empty', () => {
    it('should handle unknown values gracefully with default gray styling', () => {
      // Arrange
      const value = 'unknown';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      const badge = screen.getByText('Unknown');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(styles['risk-unknown']);
    });

    it('should handle empty string gracefully', () => {
      // Arrange
      const value = '';

      // Act
      const { container } = render(<RiskLevelCell value={value} />);

      // Assert
      const badge = container.querySelector('span');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(styles['risk-unknown']);
    });

    it('should handle random unknown value with proper capitalization', () => {
      // Arrange
      const value = 'critical';

      // Act
      render(<RiskLevelCell value={value} />);

      // Assert
      const badge = screen.getByText('Critical');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(styles['risk-unknown']);
    });
  });
});
