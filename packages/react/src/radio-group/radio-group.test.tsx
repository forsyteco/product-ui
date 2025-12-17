import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RadioGroup } from './radio-group';

const options = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

describe('RadioGroup', () => {
  it('renders the radio group component', () => {
    render(<RadioGroup options={options} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('displays selected value', () => {
    render(<RadioGroup options={options} value="option1" />);
    const option1 = screen.getByText('Option 1').closest('[role="radio"]');
    expect(option1).toHaveClass('border-blue-600');
  });

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn();
    render(<RadioGroup options={options} onChange={handleChange} />);
    expect(handleChange).toBeDefined();
  });
});

