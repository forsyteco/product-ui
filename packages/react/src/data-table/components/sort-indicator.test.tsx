import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { SortIndicator } from './sort-indicator';

describe('SortIndicator', () => {
  describe('when direction is ascending', () => {
    it('should render ascending icon when direction is asc', () => {
      // Arrange
      const direction = 'asc' as const;

      // Act
      const { container } = render(<SortIndicator direction={direction} />);

      // Assert
      expect(container.querySelector('.lucide-arrow-up')).toBeInTheDocument();
      expect(container.querySelector('.lucide-arrow-down')).not.toBeInTheDocument();
      expect(container.querySelector('.lucide-arrow-up-down')).not.toBeInTheDocument();
    });
  });

  describe('when direction is descending', () => {
    it('should render descending icon when direction is desc', () => {
      // Arrange
      const direction = 'desc' as const;

      // Act
      const { container } = render(<SortIndicator direction={direction} />);

      // Assert
      expect(container.querySelector('.lucide-arrow-down')).toBeInTheDocument();
      expect(container.querySelector('.lucide-arrow-up')).not.toBeInTheDocument();
      expect(container.querySelector('.lucide-arrow-up-down')).not.toBeInTheDocument();
    });
  });

  describe('when direction is null', () => {
    it('should render unsorted icon when direction is null', () => {
      // Arrange
      const direction = null;

      // Act
      const { container } = render(<SortIndicator direction={direction} />);

      // Assert
      expect(container.querySelector('.lucide-arrow-up-down')).toBeInTheDocument();
      expect(container.querySelector('.lucide-arrow-down')).not.toBeInTheDocument();
      expect(container.querySelector('.lucide-arrow-up')).not.toBeInTheDocument();
    });
  });

  describe('when sorted with custom active colors', () => {
    it('should apply active background and active foreground when sorted', () => {
      // Arrange
      const props = {
        direction: 'asc' as const,
        color: 'rgb(10, 20, 30)',
        activeBackground: 'rgb(1, 2, 3)',
        activeForeground: 'rgb(4, 5, 6)',
      };

      // Act
      const { container } = render(<SortIndicator {...props} />);

      // Assert
      const wrapper = container.querySelector('span');
      const icon = container.querySelector('.lucide-arrow-up');
      expect(wrapper).toHaveStyle({ backgroundColor: 'rgb(1, 2, 3)' });
      expect(icon).toHaveStyle({ color: 'rgb(4, 5, 6)' });
    });
  });

  describe('when sorted without active background', () => {
    it('should apply default active class when sorted without active background', () => {
      // Arrange
      const props = { direction: 'desc' as const, color: 'rgb(10, 20, 30)' };

      // Act
      const { container } = render(<SortIndicator {...props} />);

      // Assert
      const wrapper = container.querySelector('span');
      expect(wrapper?.className).toContain('sort-active-default');
    });
  });
});
