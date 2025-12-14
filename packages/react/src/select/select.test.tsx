import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Select from './select';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Select', () => {
  it('renders the select component', () => {
    render(<Select options={options} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    render(<Select options={options} placeholder="Choose..." />);
    expect(screen.getByText('Choose...')).toBeInTheDocument();
  });

  it('applies error styling', () => {
    const { container } = render(<Select options={options} error />);
    const select = container.querySelector('select');
    expect(select).toHaveClass('border-destructive-border');
  });

  it('applies disabled state', () => {
    render(<Select options={options} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });
});

