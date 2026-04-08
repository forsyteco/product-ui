import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchField } from './search-field';

describe('SearchField', () => {
  describe('when rendered with default props', () => {
    it('should render a textbox', () => {
      // Arrange
      render(<SearchField />);

      // Act
      const input = screen.getByRole('textbox');

      // Assert
      expect(input).toBeInTheDocument();
    });
  });

  describe('when clearable is false (default)', () => {
    it('should not render the clear button', () => {
      // Arrange
      render(<SearchField value="hello" onChange={() => {}} />);

      // Act / Assert
      expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
    });
  });

  describe('when clearable is true and value is empty', () => {
    it('should not render the clear button', () => {
      // Arrange
      render(<SearchField clearable value="" onChange={() => {}} onClear={() => {}} />);

      // Act / Assert
      expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
    });
  });

  describe('when clearable is true and value is only whitespace', () => {
    it('should not render the clear button', () => {
      // Arrange
      render(<SearchField clearable value="   " onChange={() => {}} onClear={() => {}} />);

      // Act / Assert
      expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
    });
  });

  describe('when clearable is true and value is non-empty', () => {
    it('should render the clear button', () => {
      // Arrange
      render(<SearchField clearable value="risk" onChange={() => {}} onClear={() => {}} />);

      // Act / Assert
      expect(screen.getByRole('button', { name: 'Clear search' })).toBeInTheDocument();
    });

    it('should call onClear when clear button is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onClear = vi.fn();
      render(<SearchField clearable value="risk" onChange={() => {}} onClear={onClear} />);

      // Act
      await user.click(screen.getByRole('button', { name: 'Clear search' }));

      // Assert
      expect(onClear).toHaveBeenCalledTimes(1);
    });
  });

  describe('when clearable is true but onClear is omitted', () => {
    it('should not render the clear button', () => {
      // Arrange
      render(<SearchField clearable value="hello" onChange={() => {}} />);

      // Act / Assert
      expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
    });
  });

  describe('when a custom endElement is provided', () => {
    it('should render the custom endElement instead of the clear button', () => {
      // Arrange
      render(
        <SearchField
          clearable
          value="hello"
          onChange={() => {}}
          onClear={() => {}}
          endElement={<span>custom</span>}
        />
      );

      // Act / Assert
      expect(screen.getByText('custom')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
    });
  });

  describe('when value changes', () => {
    it('should call onChange', async () => {
      // Arrange
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<SearchField value="" onChange={onChange} />);

      // Act
      await user.type(screen.getByRole('textbox'), 'a');

      // Assert
      expect(onChange).toHaveBeenCalled();
    });
  });
});
