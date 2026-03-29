import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';
import styles from './button.module.css';

describe('Button', () => {
  describe('when rendered with default props', () => {
    it('should render button text content', () => {
      // Arrange
      render(<Button>Click me</Button>);

      // Act
      const button = screen.getByText('Click me');

      // Assert
      expect(button).toBeInTheDocument();
    });
  });

  describe('when clicked with an onClick handler', () => {
    it('should call the click handler once', () => {
      // Arrange
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      // Act
      screen.getByText('Click me').click();

      // Assert
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when variant is provided', () => {
    it('should apply the matching variant class', () => {
      // Arrange
      const { container } = render(<Button variant="default">Button</Button>);

      // Act
      const button = container.querySelector('button');

      // Assert
      expect(button).toHaveClass(styles['variant-default']);
    });
  });

  describe('when size is provided', () => {
    it('should apply the matching size class', () => {
      // Arrange
      const { container } = render(<Button size="lg">Button</Button>);

      // Act
      const button = container.querySelector('button');

      // Assert
      expect(button).toHaveClass(styles['size-lg']);
    });
  });

  describe('when disabled is true', () => {
    it('should render a disabled button', () => {
      // Arrange
      render(<Button disabled>Disabled</Button>);

      // Act
      const button = screen.getByText('Disabled');

      // Assert
      expect(button).toBeDisabled();
    });
  });
});

