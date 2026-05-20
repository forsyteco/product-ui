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

  describe('when error is true', () => {
    it('should set aria-invalid to true and apply error styling', () => {
      // Arrange
      const { container } = render(<Input error aria-label="Error input" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Error input' });
      const wrapper = container.firstChild as HTMLElement;

      // Assert
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(wrapper).toHaveClass(styles['root--error']);
    });
  });

  describe('when success is true', () => {
    it('should apply success styling on the wrapper', () => {
      // Arrange
      const { container } = render(<Input success aria-label="Success input" />);

      // Act
      const wrapper = container.firstChild as HTMLElement;

      // Assert
      expect(wrapper).toHaveClass(styles['root--success']);
    });
  });

  describe('when both error and success are true', () => {
    it('should prefer error styling over success', () => {
      // Arrange
      const { container } = render(<Input error success aria-label="Conflict input" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Conflict input' });
      const wrapper = container.firstChild as HTMLElement;

      // Assert
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(wrapper).toHaveClass(styles['root--error']);
      expect(wrapper).not.toHaveClass(styles['root--success']);
    });
  });

  describe('when disabled is true', () => {
    it('should disable the input control', () => {
      // Arrange
      render(<Input disabled aria-label="Disabled input" />);

      // Act
      const input = screen.getByRole('textbox', { name: 'Disabled input' });

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
