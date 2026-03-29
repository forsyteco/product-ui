import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Fieldset } from './fieldset';
import styles from './fieldset.module.css';

describe('Fieldset', () => {
  describe('when rendered with children only', () => {
    it('should render the fieldset component', () => {
      // Arrange
      render(<Fieldset>Content</Fieldset>);

      // Act
      const content = screen.getByText('Content');

      // Assert
      expect(content).toBeInTheDocument();
    });
  });

  describe('when a legend is provided', () => {
    it('should render with legend', () => {
      // Arrange
      render(<Fieldset legend="Test Legend">Content</Fieldset>);

      // Act
      const legend = screen.getByText('Test Legend');

      // Assert
      expect(legend).toBeInTheDocument();
    });
  });

  describe('when disabled is true', () => {
    it('should apply disabled state', () => {
      // Arrange
      render(<Fieldset disabled>Content</Fieldset>);

      // Act
      const fieldset = screen.getByText('Content').closest('fieldset');

      // Assert
      expect(fieldset).toBeDisabled();
    });
  });

  describe('when error is true', () => {
    it('should apply error styling when error is true', () => {
      // Arrange
      render(<Fieldset error>Content</Fieldset>);

      // Act
      const fieldset = screen.getByText('Content').closest('fieldset');

      // Assert
      expect(fieldset).toHaveClass(styles.error);
    });
  });
});
