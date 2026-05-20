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
        <Autocomplete.Input />
      </Autocomplete.Control>
      <Autocomplete.Options />
    </Autocomplete.Root>
  );
}

describe('Autocomplete', () => {
  describe('when rendered with default props', () => {
    it('should render the autocomplete component', () => {
      // Arrange
      // Act
      renderAutocomplete({ options });

      // Assert
      const input = screen.getByPlaceholderText('Search…');
      expect(input).toBeInTheDocument();
    });
  });

  describe('when a value is selected', () => {
    it('should display the selected value', () => {
      // Arrange
      // Act
      renderAutocomplete({ options, value: options[0] });

      // Assert
      const input = screen.getByDisplayValue('Option 1');
      expect(input).toBeInTheDocument();
    });

    it('should show a clear button', () => {
      // Arrange
      // Act
      renderAutocomplete({ options, value: options[0] });

      // Assert
      expect(screen.getByRole('button', { name: 'Clear selection' })).toBeInTheDocument();
    });
  });

  describe('when the user types in the input', () => {
    it('should open options on the first character typed by default', () => {
      // Arrange
      renderAutocomplete({ options });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      fireEvent.change(input, { target: { value: 'O' } });

      // Assert
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('should open options only after minQueryLength characters when minQueryLength is set', () => {
      // Arrange
      renderAutocomplete({ options, minQueryLength: 2 });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      fireEvent.change(input, { target: { value: 'O' } });

      // Assert
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();

      // Act
      fireEvent.change(input, { target: { value: 'Op' } });

      // Assert
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('should filter options by query and show empty state after threshold', () => {
      // Arrange
      renderAutocomplete({ options });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      fireEvent.change(input, { target: { value: 'Option 3' } });

      // Assert
      expect(screen.getByText('Option 3')).toBeInTheDocument();

      // Act
      fireEvent.change(input, { target: { value: 'Missing' } });

      // Assert
      expect(screen.getByText('No results')).toBeInTheDocument();
    });

    it('should call onChange when an option is selected', () => {
      // Arrange
      const handleChange = vi.fn();
      renderAutocomplete({ options, onChange: handleChange });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      fireEvent.change(input, { target: { value: 'Option' } });
      fireEvent.keyDown(input, { key: 'ArrowDown' });
      const option = screen.getByText('Option 2');
      fireEvent.mouseDown(option);
      fireEvent.click(option);

      // Assert
      expect(handleChange).toHaveBeenCalledWith(options[1]);
    });
  });

  describe('when disabled is true', () => {
    it('should disable the input', () => {
      // Arrange
      // Act
      renderAutocomplete({ options, disabled: true });

      // Assert
      const input = screen.getByPlaceholderText('Search…');
      expect(input).toBeDisabled();
    });
  });

  describe('when loading is true', () => {
    it('should show loading state after typing', () => {
      // Arrange
      renderAutocomplete({ options, loading: true });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      fireEvent.change(input, { target: { value: 'O' } });

      // Assert
      expect(screen.getByText('Loading…')).toBeInTheDocument();
    });
  });
});
