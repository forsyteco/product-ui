import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NameCell } from './name-cell';

describe('NameCell', () => {
  const mockRow = { email: 'john@example.com' };

  describe('when rendering the name', () => {
    it('should render the name correctly', () => {
      // Arrange
      // Act
      render(<NameCell value="John Doe" row={mockRow} />);

      // Assert
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('should apply correct styling to name (font-medium)', () => {
      // Arrange
      // Act
      render(<NameCell value="Jane Smith" row={{ email: 'jane@example.com' }} />);

      // Assert
      const nameElement = screen.getByText('Jane Smith');
      expect(nameElement).toHaveClass('font-medium');
    });
  });

  describe('when rendering the email', () => {
    it('should render the email from row correctly', () => {
      // Arrange
      // Act
      render(<NameCell value="John Doe" row={{ email: 'john@example.com' }} />);

      // Assert
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('should apply correct styling to email (text-xs and text-muted-foreground)', () => {
      // Arrange
      // Act
      render(<NameCell value="Jane Smith" row={{ email: 'jane@example.com' }} />);

      // Assert
      const emailElement = screen.getByText('jane@example.com');
      expect(emailElement).toHaveClass('text-xs');
      expect(emailElement).toHaveClass('text-muted-foreground');
    });
  });

  describe('when handling edge cases', () => {
    it('should handle empty name gracefully', () => {
      // Arrange
      // Act
      render(<NameCell value="" row={{ email: 'test@example.com' }} />);

      // Assert
      // Email should still render
      expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    it('should handle empty email gracefully', () => {
      // Arrange
      // Act
      render(<NameCell value="John Doe" row={{ email: '' }} />);

      // Assert
      // Name should still render
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  describe('when row has additional fields', () => {
    it('should work with rows that have additional fields beyond email', () => {
      // Arrange
      const rowWithExtraFields = {
        id: '1',
        email: 'user@company.com',
        role: 'Admin',
      };

      // Act
      render(<NameCell value="Test User" row={rowWithExtraFields} />);

      // Assert
      expect(screen.getByText('Test User')).toBeInTheDocument();
      expect(screen.getByText('user@company.com')).toBeInTheDocument();
    });
  });
});
