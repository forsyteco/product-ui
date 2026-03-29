import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('calls onChange when option is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Listbox options={options} onChange={handleChange} />);

    await user.click(screen.getByRole('button'));
    await user.click(screen.getByRole('option', { name: 'Option 2' }));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(options[1]);
  });
});

