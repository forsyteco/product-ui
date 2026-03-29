import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

describe('Avatar', () => {
  describe('when rendered with no children', () => {
    it('should render root', () => {
      // Arrange
      const { container } = render(<Avatar />);

      // Act
      const root = container.querySelector('[data-slot="avatar"]');

      // Assert
      expect(root).toBeInTheDocument();
    });
  });

  describe('when initials fallback is used', () => {
    it('should render initials fallback', () => {
      // Arrange
      const { container } = render(
        <Avatar>
          <AvatarFallback variant="initials" name="Ada Lovelace" />
        </Avatar>
      );

      // Act
      const fallback = container.querySelector('[data-slot="avatar-fallback"]');

      // Assert
      expect(fallback).toBeInTheDocument();
      expect(screen.getByText('AL')).toBeInTheDocument();
    });
  });

  describe('when boring fallback is used', () => {
    it('should render boring fallback', () => {
      // Arrange
      const { container } = render(
        <Avatar>
          <AvatarFallback variant="boring" name="Grace Hopper" />
        </Avatar>
      );

      // Act
      const fallback = container.querySelector('[data-slot="avatar-fallback"]');

      // Assert
      expect(fallback).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('when AvatarImage is provided', () => {
    it('should render image slot', () => {
      // Arrange
      const { container } = render(
        <Avatar>
          <AvatarImage src="https://example.com/avatar.png" alt="Avatar" />
        </Avatar>
      );

      // Act
      const root = container.querySelector('[data-slot="avatar"]');

      // Assert
      expect(root).toBeInTheDocument();
    });
  });
});
