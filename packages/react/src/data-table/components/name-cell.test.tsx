import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NameCell } from './name-cell';
import styles from './data-table.module.css';

describe('NameCell', () => {
  const mockRow = { email: 'john@example.com' };

  describe('when rendering the name', () => {
    it('should render the name correctly', () => {
      // Arrange
      const value = 'John Doe';
      const row = mockRow;

      // Act
      render(<NameCell value={value} row={row} />);

      // Assert
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('should apply name class to name text', () => {
      // Arrange
      const value = 'Jane Smith';
      const row = { email: 'jane@example.com' };

      // Act
      render(<NameCell value={value} row={row} />);

      // Assert
      const nameElement = screen.getByText('Jane Smith');
      expect(nameElement).toHaveClass(styles['name-value']);
    });
  });

  describe('when rendering the email', () => {
    it('should render the email from row correctly', () => {
      // Arrange
      const value = 'John Doe';
      const row = { email: 'john@example.com' };

      // Act
      render(<NameCell value={value} row={row} />);

      // Assert
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('should apply email class to email text', () => {
      // Arrange
      const value = 'Jane Smith';
      const row = { email: 'jane@example.com' };

      // Act
      render(<NameCell value={value} row={row} />);

      // Assert
      const emailElement = screen.getByText('jane@example.com');
      expect(emailElement).toHaveClass(styles['name-email']);
    });
  });

  describe('when handling edge cases', () => {
    it('should still render email when name is empty', () => {
      // Arrange
      const value = '';
      const row = { email: 'test@example.com' };

      // Act
      render(<NameCell value={value} row={row} />);

      // Assert
      expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    it('should still render name when email is empty', () => {
      // Arrange
      const value = 'John Doe';
      const row = { email: '' };

      // Act
      render(<NameCell value={value} row={row} />);

      // Assert
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  describe('when the row has additional fields', () => {
    it('should render name and email from rows with extra fields', () => {
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
