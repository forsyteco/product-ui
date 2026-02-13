import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Combobox } from './combobox';

const options = [
  { id: '1', label: 'Option 1', value: 'option1' },
  { id: '2', label: 'Option 2', value: 'option2' },
  { id: '3', label: 'Option 3', value: 'option3' },
];

function renderCombobox(props: {
  options: typeof options;
  value?: (typeof options)[0] | null;
  onChange?: (value: (typeof options)[0] | null) => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  return render(
    <Combobox.Root
      options={props.options}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder ?? 'Select an option...'}
      disabled={props.disabled}
    >
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.ClearButton />
        <Combobox.ToggleButton />
      </Combobox.Control>
      <Combobox.Options />
    </Combobox.Root>
  );
}

describe('Combobox', () => {
  it('renders the combobox component', () => {
    renderCombobox({ options });
    const input = screen.getByPlaceholderText('Select an option...');
    expect(input).toBeInTheDocument();
  });

  it('displays selected value', () => {
    renderCombobox({ options, value: options[0] });
    const input = screen.getByDisplayValue('Option 1');
    expect(input).toBeInTheDocument();
  });

  it('filters options by query and shows empty state', () => {
    renderCombobox({ options });
    const input = screen.getByPlaceholderText('Select an option...');

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'Option 3' } });
    expect(screen.getByText('Option 3')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Missing' } });
    expect(screen.getByText('Nothing found.')).toBeInTheDocument();
  });

  it('calls onChange when option is selected', () => {
    const handleChange = vi.fn();
    renderCombobox({ options, onChange: handleChange });

    const input = screen.getByPlaceholderText('Select an option...');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    const option = screen.getByText('Option 2');
    fireEvent.mouseDown(option);
    fireEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith(options[1]);
  });

  it('respects disabled state', () => {
    renderCombobox({ options, disabled: true });
    const input = screen.getByPlaceholderText('Select an option...');
    expect(input).toHaveClass('opacity-50');
  });
});
