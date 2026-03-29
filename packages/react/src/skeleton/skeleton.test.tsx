import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  describe('when className is provided', () => {
    it('should render and forwards className', () => {
      // Arrange
      const { container } = render(<Skeleton className="test-skeleton" />);

      // Act
      const el = container.querySelector('[data-slot="skeleton"]');

      // Assert
      expect(el).toBeInTheDocument();
      expect(el).toHaveClass('test-skeleton');
    });
  });
});
