import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BaseStyles } from './base-styles';
import styles from './base-styles.module.css';

describe('BaseStyles', () => {
  describe('when rendered with default props', () => {
    it('should render with default root class and portal marker', () => {
      // Arrange
      render(<BaseStyles data-testid="base-styles">content</BaseStyles>);

      // Act
      const root = screen.getByTestId('base-styles');

      // Assert
      expect(root).toHaveClass(styles.root);
      expect(root).toHaveAttribute('data-portal-root');
    });
  });

  describe('when polymorphic "as", className, and style variables are provided', () => {
    it('should support polymorphic as, custom className, and style variables', () => {
      // Arrange
      render(
        <BaseStyles
          as="section"
          data-testid="base-styles"
          className="custom-root"
          color="rgb(10 20 30)"
          style={{ padding: '8px' }}
        >
          content
        </BaseStyles>
      );

      // Act
      const root = screen.getByTestId('base-styles');

      // Assert
      expect(root.tagName).toBe('SECTION');
      expect(root).toHaveClass('custom-root');
      expect(root).toHaveStyle({ '--BaseStyles-fgColor': 'rgb(10 20 30)', padding: '8px' });
    });
  });
});
