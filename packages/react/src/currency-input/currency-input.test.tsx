import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { CurrencyInput } from './currency-input';

describe('CurrencyInput', () => {
  describe('when the user types a whole number', () => {
    it('should format and report numeric value', () => {
      // Arrange
      const onValueChange = vi.fn();
      render(<CurrencyInput onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');

      // Act
      fireEvent.change(input, { target: { value: '1234' } });

      // Assert
      expect(input).toHaveValue('1,234');
      expect(onValueChange).toHaveBeenLastCalledWith(1234);
    });
  });

  describe('when currencySymbol is provided', () => {
    it('should render currency symbol in start element', () => {
      // Arrange
      render(<CurrencyInput currencySymbol="$" />);

      // Act
      const symbol = screen.getByText('$');

      // Assert
      expect(symbol).toBeInTheDocument();
    });
  });

  describe('when the user enters partial decimals', () => {
    it('should allow partial decimal states', () => {
      // Arrange
      const onValueChange = vi.fn();
      render(<CurrencyInput onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');

      // Act
      fireEvent.change(input, { target: { value: '1.' } });

      // Assert
      expect(input).toHaveValue('1.');
      expect(onValueChange).toHaveBeenLastCalledWith(1);

      // Act
      fireEvent.change(input, { target: { value: '.5' } });

      // Assert
      expect(input).toHaveValue('0.5');
      expect(onValueChange).toHaveBeenLastCalledWith(0.5);
    });
  });

  describe('when min and max are set', () => {
    it('should clamp values on change and blur', () => {
      // Arrange
      const onValueChange = vi.fn();
      render(<CurrencyInput min={0} max={10} onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');

      // Act
      fireEvent.change(input, { target: { value: '25' } });

      // Assert
      expect(onValueChange).toHaveBeenLastCalledWith(10);

      // Act
      fireEvent.blur(input);

      // Assert
      expect(input).toHaveValue('10');
    });
  });

  describe('when the user blurs with trailing zeros', () => {
    it('should preserve trailing zeros on blur', () => {
      // Arrange
      const onValueChange = vi.fn();
      render(<CurrencyInput onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: '1.00' } });

      // Act
      fireEvent.blur(input);

      // Assert
      expect(input).toHaveValue('1.00');
      expect(onValueChange).toHaveBeenLastCalledWith(1);
    });
  });

  describe('when the value prop is set', () => {
    it('should show the formatted value in the input', () => {
      // Arrange
      render(<CurrencyInput value={1234} />);

      // Act
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toHaveValue('1,234');
    });

    it('should update the input when the value prop changes', () => {
      // Arrange
      const { rerender } = render(<CurrencyInput value={1234} />);

      // Act
      rerender(<CurrencyInput value={567.89} />);
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toHaveValue('567.89');
    });
  });

  describe('when invalid text is blurred', () => {
    it('should clear value and emit undefined on blur for invalid input', () => {
      // Arrange
      const onValueChange = vi.fn();
      render(<CurrencyInput onValueChange={onValueChange} />);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'abc' } });

      // Act
      fireEvent.blur(input);

      // Assert
      expect(input).toHaveValue('');
      expect(onValueChange).toHaveBeenLastCalledWith(undefined);
    });
  });

  describe('when currencySymbol is an empty string', () => {
    it('should not render a currency symbol when currencySymbol is empty', () => {
      // Arrange
      render(<CurrencyInput currencySymbol="" />);

      // Act
      const pound = screen.queryByText('£');

      // Assert
      expect(pound).not.toBeInTheDocument();
    });
  });

  describe('when startElement and currencySymbol are both provided', () => {
    it('should prefer custom startElement over currencySymbol', () => {
      // Arrange
      render(
        <CurrencyInput currencySymbol="$" startElement={<span data-testid="custom-start">EUR</span>} />
      );

      // Act
      const customStart = screen.getByTestId('custom-start');

      // Assert
      expect(customStart).toHaveTextContent('EUR');
      expect(screen.queryByText('$')).not.toBeInTheDocument();
    });
  });
});
