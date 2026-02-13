import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Autocomplete } from './autocomplete';

const options = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

function renderAutocomplete(props: {
  options: typeof options;
  value?: (typeof options)[0] | null;
  onChange?: (value: (typeof options)[0] | null) => void;
  placeholder?: string;
  disabled?: boolean;
  minQueryLength?: number;
  loading?: boolean;
}) {
  return render(
    <Autocomplete.Root
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder ?? 'Search…'}
      disabled={props.disabled}
      minQueryLength={props.minQueryLength ?? 1}
      loading={props.loading}
    >
      <Autocomplete.Control>
        <Autocomplete.LeadingIcon />
        <Autocomplete.Input />
        <Autocomplete.ClearButton />
      </Autocomplete.Control>
      <Autocomplete.Options />
    </Autocomplete.Root>
  );
}

describe('Autocomplete', () => {
  it('renders the autocomplete component', () => {
    renderAutocomplete({ options });
    const input = screen.getByPlaceholderText('Search…');
    expect(input).toBeInTheDocument();
  });

  it('displays selected value', () => {
    renderAutocomplete({ options, value: options[0] });
    const input = screen.getByDisplayValue('Option 1');
    expect(input).toBeInTheDocument();
  });

  it('opens options on first character typed by default', () => {
    renderAutocomplete({ options });
    const input = screen.getByPlaceholderText('Search…');

    fireEvent.change(input, { target: { value: 'O' } });
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('opens options only after minQueryLength characters when set', () => {
    renderAutocomplete({ options, minQueryLength: 2 });
    const input = screen.getByPlaceholderText('Search…');

    fireEvent.change(input, { target: { value: 'O' } });
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Op' } });
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('filters options by query and shows empty state after threshold', () => {
    renderAutocomplete({ options });
    const input = screen.getByPlaceholderText('Search…');

    fireEvent.change(input, { target: { value: 'Option 3' } });
    expect(screen.getByText('Option 3')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Missing' } });
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn();
    renderAutocomplete({ options, onChange: handleChange });

    const input = screen.getByPlaceholderText('Search…');
    fireEvent.change(input, { target: { value: 'Option' } });
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    const option = screen.getByText('Option 2');
    fireEvent.mouseDown(option);
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith(options[1]);
  });

  it('respects disabled state', () => {
    renderAutocomplete({ options, disabled: true });
    const input = screen.getByPlaceholderText('Search…');
    expect(input).toHaveClass('opacity-50');
  });

  it('shows loading state when loading', () => {
    renderAutocomplete({ options, loading: true });
    const input = screen.getByPlaceholderText('Search…');
    fireEvent.change(input, { target: { value: 'O' } });
    expect(screen.getByText('Loading…')).toBeInTheDocument();
  });
});
