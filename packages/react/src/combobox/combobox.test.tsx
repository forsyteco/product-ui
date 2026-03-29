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
  describe('when rendered with default props', () => {
    it('should render the combobox component', () => {
      // Arrange
      // Act
      renderCombobox({ options });

      // Assert
      const input = screen.getByPlaceholderText('Select an option...');
      expect(input).toBeInTheDocument();
    });
  });

  describe('when a value is selected', () => {
    it('should display the selected value', () => {
      // Arrange
      // Act
      renderCombobox({ options, value: options[0] });

      // Assert
      const input = screen.getByDisplayValue('Option 1');
      expect(input).toBeInTheDocument();
    });
  });

  describe('when the user focuses and types in the input', () => {
    it('should filter options by query and show empty state', () => {
      // Arrange
      renderCombobox({ options });
      const input = screen.getByPlaceholderText('Select an option...');

      // Act
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: 'Option 3' } });

      // Assert
      expect(screen.getByText('Option 3')).toBeInTheDocument();

      // Act
      fireEvent.change(input, { target: { value: 'Missing' } });

      // Assert
      expect(screen.getByText('Nothing found.')).toBeInTheDocument();
    });

    it('should call onChange when an option is selected', () => {
      // Arrange
      const handleChange = vi.fn();
      renderCombobox({ options, onChange: handleChange });
      const input = screen.getByPlaceholderText('Select an option...');

      // Act
      fireEvent.focus(input);
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
      renderCombobox({ options, disabled: true });

      // Assert
      const input = screen.getByPlaceholderText('Select an option...');
      expect(input).toBeDisabled();
    });
  });
});
