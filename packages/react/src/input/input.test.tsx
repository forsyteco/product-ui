import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from './input';
import styles from './input.module.css';

describe('Input', () => {
  describe('when rendered with default props', () => {
    it('should render a textbox input', () => {
      // Arrange
      render(<Input />);

      // Act
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toBeInTheDocument();
    });
  });

  describe('when aria-invalid is true', () => {
    it('should preserve root styling and set aria-invalid attribute', () => {
      // Arrange
      const { container } = render(<Input aria-invalid="true" />);

      // Act
      const wrapper = container.firstChild;
      const input = screen.getByRole('textbox');

      // Assert
      expect(wrapper).toHaveClass(styles.root);
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('when disabled is true', () => {
    it('should disable the input control', () => {
      // Arrange
      render(<Input disabled />);

      // Act
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toBeDisabled();
    });
  });

  describe('when type is overridden', () => {
    it('should render the provided input type', () => {
      // Arrange
      render(<Input type="email" />);

      // Act
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toHaveAttribute('type', 'email');
    });
  });

  describe('when common form and accessibility attributes are provided', () => {
    it('should pass through name, required, and aria-label attributes', () => {
      // Arrange
      render(<Input name="email" required aria-label="Email address" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Email address' });

      // Assert
      expect(input).toHaveAttribute('name', 'email');
      expect(input).toBeRequired();
    });
  });
});

