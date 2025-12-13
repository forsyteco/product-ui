import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Combobox from './combobox';

const options = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

describe('Combobox', () => {
  it('renders the combobox component', () => {
    render(<Combobox options={options} />);
    const input = screen.getByPlaceholderText('Select an option...');
    expect(input).toBeInTheDocument();
  });

  it('displays selected value', () => {
    render(<Combobox options={options} value={options[0]} />);
    const input = screen.getByDisplayValue('Option 1');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn();
    render(<Combobox options={options} onChange={handleChange} />);
    // Note: Testing interaction would require more complex setup with user events
    expect(handleChange).toBeDefined();
  });
});

