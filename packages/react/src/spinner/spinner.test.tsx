import { describe, expect, it, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import { Spinner } from './spinner';
import styles from './spinner.module.css';

describe('Spinner', () => {
  describe('when rendered with default props', () => {
    it('should render wrapper and svg', () => {
      // Arrange
      const { container } = render(<Spinner />);

      // Act
      const wrapper = container.querySelector('div');
      const svg = container.querySelector('svg');
      const circle = container.querySelector('circle');

      // Assert
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass(styles.root);
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('animate-spinner-rotate');
      expect(circle).toBeInTheDocument();
      expect(circle).toHaveClass('animate-spinner-dash');
    });
  });

  describe('when className is provided', () => {
    it('should apply className to the wrapper', () => {
      // Arrange
      const { container } = render(<Spinner className="custom-spinner-class" />);

      // Act
      const wrapper = container.querySelector('div');

      // Assert
      expect(wrapper).toHaveClass('custom-spinner-class');
    });
  });

  describe('when multiple colors are provided', () => {
    it('should use the first stroke color initially', () => {
      // Arrange
      const { container } = render(<Spinner colors={['#111111', '#222222']} />);

      // Act
      const circle = container.querySelector('circle');

      // Assert
      expect(circle).toHaveStyle({ stroke: '#111111' });
    });

    it('should advance to the next stroke color after the interval', () => {
      // Arrange
      vi.useFakeTimers();
      const { container, unmount } = render(<Spinner colors={['#111111', '#222222']} />);
      const circle = container.querySelector('circle');

      // Act
      act(() => {
        vi.advanceTimersByTime(1500);
      });

      // Assert
      expect(circle).toHaveStyle({ stroke: '#222222' });
      act(() => {
        unmount();
      });
      vi.useRealTimers();
    });
  });
});
