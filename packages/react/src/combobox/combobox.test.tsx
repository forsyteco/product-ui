import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('filters options by query and shows empty state', () => {
    render(<Combobox options={options} />);
    const input = screen.getByPlaceholderText('Select an option...');

    fireEvent.change(input, { target: { value: 'Option 3' } });
    expect(screen.getByText('Option 3')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Missing' } });
    expect(screen.getByText('Nothing found.')).toBeInTheDocument();
  });

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn();
    const { container } = render(<Combobox options={options} onChange={handleChange} />);

    const toggle = container.querySelector('button');
    if (!toggle) throw new Error('Combobox toggle not found');

    fireEvent.click(toggle);
    const input = screen.getByPlaceholderText('Select an option...');
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    const option = screen.getByText('Option 2');
    fireEvent.mouseDown(option);
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith(options[1]);
  });

  it('respects disabled state', () => {
    render(<Combobox options={options} disabled />);
    const input = screen.getByPlaceholderText('Select an option...');
    expect(input).toHaveClass('opacity-50');
  });
});

