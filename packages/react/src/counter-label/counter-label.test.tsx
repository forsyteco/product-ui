import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CounterLabel } from './counter-label';

describe('CounterLabel', () => {
  describe('when children are provided', () => {
    it('should render with default variant and aria-hidden', () => {
      // Arrange
      render(<CounterLabel>12</CounterLabel>);

      // Act
      const el = screen.getByText('12').closest('[data-slot="counter-label"]');

      // Assert
      expect(el).toBeInTheDocument();
      expect(el).toHaveAttribute('aria-hidden', 'true');
      expect(el).toHaveAttribute('data-variant', 'secondary');
    });
  });

  describe('when children are empty', () => {
    it('should not render when empty', () => {
      // Arrange
      const { container } = render(<CounterLabel />);

      // Act
      const el = container.querySelector('[data-slot="counter-label"]');

      // Assert
      expect(el).toBeNull();
    });
  });
});
