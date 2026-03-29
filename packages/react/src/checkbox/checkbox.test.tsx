import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  describe('when rendered with default props', () => {
    it('should render the checkbox component', () => {
      // Arrange
      render(<Checkbox />);

      // Act
      const checkbox = screen.getByRole('checkbox');

      // Assert
      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('when a label is provided', () => {
    it('should render with label', () => {
      // Arrange
      render(<Checkbox label="Accept terms" />);

      // Act
      const labelText = screen.getByText('Accept terms');

      // Assert
      expect(labelText).toBeInTheDocument();
      expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    });
  });

  describe('when defaultChecked is true', () => {
    it('should apply checked state', () => {
      // Arrange
      render(<Checkbox defaultChecked />);

      // Act
      const checkbox = screen.getByRole('checkbox');

      // Assert
      expect(checkbox).toBeChecked();
    });
  });

  describe('when disabled is true', () => {
    it('should apply disabled state', () => {
      // Arrange
      render(<Checkbox disabled />);

      // Act
      const checkbox = screen.getByRole('checkbox');

      // Assert
      expect(checkbox).toBeDisabled();
    });
  });
});
