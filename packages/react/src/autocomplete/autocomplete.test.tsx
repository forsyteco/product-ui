import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '#test-utils';
import userEvent from '@testing-library/user-event';
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
  describe('when rendered with default props', () => {
    it('should render the autocomplete input', () => {
      // Arrange
      // Act
      renderAutocomplete({ options });

      // Assert
      expect(screen.getByPlaceholderText('Search…')).toBeInTheDocument();
    });
  });

  describe('when a value is selected', () => {
    it('should display the selected label', () => {
      // Arrange
      // Act
      renderAutocomplete({ options, value: options[0] });

      // Assert
      expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument();
    });
  });

  describe('when the user types in the input', () => {
    it('should open options after the first character by default', async () => {
      // Arrange
      const user = userEvent.setup();
      renderAutocomplete({ options });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      await user.click(input);
      await user.type(input, 'O');

      // Assert
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('should respect minQueryLength before opening options', async () => {
      // Arrange
      const user = userEvent.setup();
      renderAutocomplete({ options, minQueryLength: 2 });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      await user.click(input);
      await user.type(input, 'O');

      // Assert
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();

      // Act
      await user.type(input, 'p');

      // Assert
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('should filter options and show an empty state when nothing matches', async () => {
      // Arrange
      const user = userEvent.setup();
      renderAutocomplete({ options });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      await user.click(input);
      await user.type(input, 'Option 3');

      // Assert
      expect(screen.getByText('Option 3')).toBeInTheDocument();

      // Act
      await user.clear(input);
      await user.type(input, 'Missing');

      // Assert
      await waitFor(() => {
        expect(screen.getByText('No results')).toBeInTheDocument();
      });
    });

    it('should call onChange when an option is selected', async () => {
      // Arrange
      const user = userEvent.setup();
      const handleChange = vi.fn();
      renderAutocomplete({ options, onChange: handleChange });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      await user.click(input);
      await user.type(input, 'Option');
      await user.keyboard('{ArrowDown}');
      await user.click(screen.getByText('Option 2'));

      // Assert
      await waitFor(() => {
        expect(handleChange).toHaveBeenCalledWith(options[1]);
      });
    });
  });

  describe('when disabled is true', () => {
    it('should disable the input', () => {
      // Arrange
      // Act
      renderAutocomplete({ options, disabled: true });

      // Assert
      expect(screen.getByPlaceholderText('Search…')).toBeDisabled();
    });
  });

  describe('when loading is true', () => {
    it('should show a loading message after typing', async () => {
      // Arrange
      const user = userEvent.setup();
      renderAutocomplete({ options, loading: true });
      const input = screen.getByPlaceholderText('Search…');

      // Act
      await user.click(input);
      await user.type(input, 'O');

      // Assert
      expect(screen.getByText('Loading…')).toBeInTheDocument();
    });
  });
});
