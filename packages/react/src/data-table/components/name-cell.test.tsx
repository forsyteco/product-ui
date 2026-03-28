import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NameCell } from './name-cell';
import styles from './data-table.module.css';

describe('NameCell', () => {
  const mockRow = { email: 'john@example.com' };

  describe('Name Rendering', () => {
    it('renders the name correctly', () => {
      render(<NameCell value="John Doe" row={mockRow} />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('applies name class to name text', () => {
      render(<NameCell value="Jane Smith" row={{ email: 'jane@example.com' }} />);

      const nameElement = screen.getByText('Jane Smith');
      expect(nameElement).toHaveClass(styles.nameValue);
    });
  });

  describe('Email Rendering', () => {
    it('renders the email from row correctly', () => {
      render(<NameCell value="John Doe" row={{ email: 'john@example.com' }} />);

      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('applies email class to email text', () => {
      render(<NameCell value="Jane Smith" row={{ email: 'jane@example.com' }} />);

      const emailElement = screen.getByText('jane@example.com');
      expect(emailElement).toHaveClass(styles.nameEmail);
    });
  });

  describe('Edge Cases', () => {
    it('handles empty name gracefully', () => {
      render(<NameCell value="" row={{ email: 'test@example.com' }} />);

      // Email should still render
      expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    it('handles empty email gracefully', () => {
      render(<NameCell value="John Doe" row={{ email: '' }} />);

      // Name should still render
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  describe('Row with additional fields', () => {
    it('works with rows that have additional fields beyond email', () => {
      const rowWithExtraFields = {
        id: '1',
        email: 'user@company.com',
        role: 'Admin',
      };

      render(<NameCell value="Test User" row={rowWithExtraFields} />);

      expect(screen.getByText('Test User')).toBeInTheDocument();
      expect(screen.getByText('user@company.com')).toBeInTheDocument();
    });
  });
});
