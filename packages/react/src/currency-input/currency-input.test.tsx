import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { CurrencyInput } from './currency-input';

describe('CurrencyInput', () => {
  it('formats and reports numeric value', () => {
    const onValueChange = vi.fn();
    render(<CurrencyInput onValueChange={onValueChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '1234' } });

    expect(input).toHaveValue('1,234');
    expect(onValueChange).toHaveBeenLastCalledWith(1234);
  });

  it('renders currency symbol in start element', () => {
    render(<CurrencyInput currencySymbol="$" />);
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('allows partial decimal states', () => {
    const onValueChange = vi.fn();
    render(<CurrencyInput onValueChange={onValueChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '1.' } });
    expect(input).toHaveValue('1.');
    expect(onValueChange).toHaveBeenLastCalledWith(1);

    fireEvent.change(input, { target: { value: '.5' } });
    expect(input).toHaveValue('0.5');
    expect(onValueChange).toHaveBeenLastCalledWith(0.5);
  });

  it('clamps values on change and blur', () => {
    const onValueChange = vi.fn();
    render(<CurrencyInput min={0} max={10} onValueChange={onValueChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '25' } });

    expect(onValueChange).toHaveBeenLastCalledWith(10);

    fireEvent.blur(input);
    expect(input).toHaveValue('10');
  });

  it('preserves trailing zeros on blur', () => {
    const onValueChange = vi.fn();
    render(<CurrencyInput onValueChange={onValueChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '1.00' } });
    fireEvent.blur(input);

    expect(input).toHaveValue('1.00');
    expect(onValueChange).toHaveBeenLastCalledWith(1);
  });

  it('syncs display when value prop changes', () => {
    const { rerender } = render(<CurrencyInput value={1234} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1,234');

    rerender(<CurrencyInput value={567.89} />);
    expect(input).toHaveValue('567.89');
  });
});
