import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VisuallyHidden } from './visually-hidden';
import styles from './visually-hidden.module.css';

describe('VisuallyHidden', () => {
  describe('when rendering default content', () => {
    it('should render children inside a span with visually hidden class', () => {
      // Arrange
      render(<VisuallyHidden data-testid="vh">Hidden text</VisuallyHidden>);

      // Act
      const element = screen.getByTestId('vh');

      // Assert
      expect(element.tagName).toBe('SPAN');
      expect(element).toHaveClass(styles.root);
      expect(element).toHaveTextContent('Hidden text');
    });
  });

  describe('when className and HTML attributes are provided', () => {
    it('should merge custom className and forwards html attributes', () => {
      // Arrange
      render(
        <VisuallyHidden data-testid="vh" className="extra-class" id="extra-id">
          Hidden text
        </VisuallyHidden>
      );

      // Act
      const element = screen.getByTestId('vh');

      // Assert
      expect(element).toHaveClass('extra-class');
      expect(element).toHaveAttribute('id', 'extra-id');
    });
  });
});
