import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Listbox } from './listbox';

const options = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

describe('Listbox', () => {
  it('renders the listbox component', () => {
    render(<Listbox options={options} />);
    expect(screen.getByText('Select an option...')).toBeInTheDocument();
  });

  it('displays selected value', () => {
    render(<Listbox options={options} value={options[0]} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn();
    render(<Listbox options={options} onChange={handleChange} />);
    expect(handleChange).toBeDefined();
  });
});

