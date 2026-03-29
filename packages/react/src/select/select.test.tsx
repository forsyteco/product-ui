import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select } from './select';
import styles from './select.module.css';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Select', () => {
  describe('when rendered with options', () => {
    it('should render the select component', () => {
      // Arrange
      render(<Select options={options} />);

      // Act
      const firstOption = screen.getByText('Option 1');

      // Assert
      expect(firstOption).toBeInTheDocument();
    });
  });

  describe('when a placeholder is provided', () => {
    it('should render placeholder', () => {
      // Arrange
      render(<Select options={options} placeholder="Choose..." />);

      // Act
      const placeholder = screen.getByText('Choose...');

      // Assert
      expect(placeholder).toBeInTheDocument();
    });
  });

  describe('when error is true', () => {
    it('should apply error styling', () => {
      // Arrange
      render(<Select options={options} error />);

      // Act
      const select = screen.getByRole('combobox');

      // Assert
      expect(select).toHaveClass(styles.error);
    });
  });

  describe('when disabled is true', () => {
    it('should apply disabled state', () => {
      // Arrange
      render(<Select options={options} disabled />);

      // Act
      const select = screen.getByRole('combobox');

      // Assert
      expect(select).toBeDisabled();
    });
  });
});
