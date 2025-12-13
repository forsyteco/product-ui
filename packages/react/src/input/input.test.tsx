import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from './input';

describe('Input', () => {
  it('renders the input component', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('applies error styling', () => {
    const { container } = render(<Input error />);
    const input = container.querySelector('input');
    expect(input).toHaveClass('border-red-300');
  });

  it('applies disabled state', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('handles different input types', () => {
    render(<Input type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });
});

