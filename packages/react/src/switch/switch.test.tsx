import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './switch';

describe('Switch', () => {
  describe('when rendered with default props', () => {
    it('should render the switch component', () => {
      // Arrange
      render(<Switch />);

      // Act
      const switchElement = screen.getByRole('switch');

      // Assert
      expect(switchElement).toBeInTheDocument();
    });
  });

  describe('when a label is provided', () => {
    it('should render with label', () => {
      // Arrange
      render(<Switch label="Enable notifications" />);

      // Act
      const label = screen.getByText('Enable notifications');

      // Assert
      expect(label).toBeInTheDocument();
    });
  });

  describe('when checked is true', () => {
    it('should apply checked state', () => {
      // Arrange
      render(<Switch checked />);

      // Act
      const switchElement = screen.getByRole('switch');

      // Assert
      expect(switchElement).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('when disabled is true', () => {
    it('should apply disabled state', () => {
      // Arrange
      render(<Switch disabled />);

      // Act
      const switchElement = screen.getByRole('switch');

      // Assert
      expect(switchElement).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('when the user toggles the switch', () => {
    it('should call onChange when toggled', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Switch onChange={handleChange} />);

      // Act
      await user.click(screen.getByRole('switch'));

      // Assert
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true);
    });
  });
});
