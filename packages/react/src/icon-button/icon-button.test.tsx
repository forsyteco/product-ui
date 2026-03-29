import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IconButton } from './icon-button';
import styles from './icon-button.module.css';

const HeartIcon = ({ className }: { className?: string }) => (
  <svg data-testid="icon" aria-hidden className={className} />
);

describe('IconButton', () => {
  describe('when rendered with an icon and aria-label', () => {
    it('should render an icon button with accessible label', () => {
      // Arrange
      render(<IconButton icon={HeartIcon} aria-label="Favorite" />);

      // Act
      const control = screen.getByLabelText('Favorite');

      // Assert
      expect(control).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
  });

  describe('when variant, size, and shape are provided', () => {
    it('should apply variant, size, and shape classes', () => {
      // Arrange
      const { container } = render(
        <IconButton icon={HeartIcon} variant="default" size="large" shape="circle" aria-label="Favorite" />
      );

      // Act
      const button = container.firstChild as HTMLElement;

      // Assert
      expect(button).toHaveClass(styles['variant-default']);
      expect(button).toHaveClass(styles['size-large'], styles['shape-circle']);
      expect(screen.getByTestId('icon')).toHaveClass(styles['icon-large']);
    });
  });

  describe('when variant is danger', () => {
    it('should apply danger variant styling', () => {
      // Arrange
      const { container } = render(<IconButton icon={HeartIcon} variant="danger" aria-label="Danger" />);

      // Act
      const button = container.firstChild as HTMLElement;

      // Assert
      expect(button).toHaveClass(styles['variant-danger']);
    });
  });

  describe('when loading is true', () => {
    it('should show loading state', () => {
      // Arrange
      const { container } = render(<IconButton icon={HeartIcon} loading aria-label="Loading" />);

      // Act
      const spinner = container.querySelector('svg.animate-spinner-rotate');

      // Assert
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('when href is provided', () => {
    it('should render as a link when href is provided', () => {
      // Arrange
      render(<IconButton as="a" href="https://example.com" icon={HeartIcon} aria-label="Go to site" />);

      // Act
      const link = screen.getByRole('link');

      // Assert
      expect(link).toHaveAttribute('href', 'https://example.com');
    });
  });

  describe('when inactive is true', () => {
    it('should disable interactions when inactive', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<IconButton icon={HeartIcon} inactive onClick={handleClick} aria-label="Inactive" />);

      // Act
      const button = screen.getByRole('button');
      await user.click(button);

      // Assert
      expect(handleClick).not.toHaveBeenCalled();
      expect(button).toBeDisabled();
      expect(button).toHaveClass(styles.inactive);
    });
  });
});
