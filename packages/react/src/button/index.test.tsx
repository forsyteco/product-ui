import { describe, expect, it } from 'vitest';
import { Button, buttonVariants } from './index';

describe('Button index exports', () => {
  describe('when inspecting the public API', () => {
    it('should expose named component and helpers', () => {
      // Arrange
      // Act
      const variantsType = typeof buttonVariants;

      // Assert
      expect(Button).toBeDefined();
      expect(buttonVariants).toBeDefined();
      expect(variantsType).toBe('function');
    });
  });
});
