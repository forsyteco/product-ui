import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Transition } from './transition';

describe('Transition', () => {
  describe('when show is true', () => {
    it('should render children when show is true', () => {
      // Arrange
      render(
        <Transition show={true}>
          <div>Content</div>
        </Transition>
      );

      // Act
      const content = screen.getByText('Content');

      // Assert
      expect(content).toBeInTheDocument();
    });
  });

  describe('when show is false', () => {
    it('should not render children when show is false', () => {
      // Arrange
      render(
        <Transition show={false}>
          <div>Content</div>
        </Transition>
      );

      // Act
      const content = screen.queryByText('Content');

      // Assert
      expect(content).not.toBeInTheDocument();
    });
  });
});
