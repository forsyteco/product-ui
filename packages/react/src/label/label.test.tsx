import { describe, expect, it } from 'vitest';
import { render, screen } from '#test-utils';

import { Label } from './label';
import styles from './label.module.css';

describe('Label', () => {
  describe('when rendered with default props', () => {
    it('should render with outline variant and default size styling', () => {
      // Arrange
      render(<Label>Status</Label>);

      // Act
      const label = screen.getByText('Status');

      // Assert
      expect(label).toHaveAttribute('data-slot', 'label');
      expect(label).toHaveAttribute('data-variant', 'outline');
      expect(label).toHaveClass(styles['variant-outline'], styles['size-default']);
    });
  });

  describe('when variant is primary', () => {
    it('should apply primary button-matched styling', () => {
      // Arrange
      render(<Label variant="primary">New</Label>);

      // Act
      const label = screen.getByText('New');

      // Assert
      expect(label).toHaveClass(styles['variant-primary']);
    });
  });

  describe('when variant is secondary', () => {
    it('should apply secondary button-matched styling', () => {
      // Arrange
      render(<Label variant="secondary">Beta</Label>);

      // Act
      const label = screen.getByText('Beta');

      // Assert
      expect(label).toHaveClass(styles['variant-secondary']);
    });
  });

  describe('when variant is ghost', () => {
    it('should apply ghost button-matched styling', () => {
      // Arrange
      render(<Label variant="ghost">Draft</Label>);

      // Act
      const label = screen.getByText('Draft');

      // Assert
      expect(label).toHaveClass(styles['variant-ghost']);
    });
  });

  describe('when size is sm', () => {
    it('should apply small size styling', () => {
      // Arrange
      render(<Label size="sm">3</Label>);

      // Act
      const label = screen.getByText('3');

      // Assert
      expect(label).toHaveClass(styles['size-sm']);
    });
  });

  describe('when size is lg', () => {
    it('should apply large size styling', () => {
      // Arrange
      render(<Label size="lg">Featured</Label>);

      // Act
      const label = screen.getByText('Featured');

      // Assert
      expect(label).toHaveClass(styles['size-lg']);
    });
  });

  describe('when children are empty', () => {
    it('should hide the label element', () => {
      // Arrange
      const { container } = render(<Label>{''}</Label>);

      // Assert
      expect(container.querySelector('[data-slot="label"]')).toHaveClass(styles.root);
    });
  });
});
