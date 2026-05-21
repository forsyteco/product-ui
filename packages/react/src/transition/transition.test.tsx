import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Transition } from './transition';

describe('Transition', () => {
  describe('when show is true', () => {
    it('should render children', () => {
      // Arrange
      // Act
      render(
        <Transition show={true}>
          <div>Content</div>
        </Transition>
      );

      // Assert
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('when show is false', () => {
    it('should not render children', () => {
      // Arrange
      // Act
      render(
        <Transition show={false}>
          <div>Content</div>
        </Transition>
      );

      // Assert
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });
  });
});
