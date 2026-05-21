import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import inputStyles from '../input/input.module.css';
import { DatePicker } from './date-picker';

describe('DatePicker', () => {
  describe('when no value is selected', () => {
    it('should render the placeholder in the input', () => {
      // Arrange
      // Act
      render(<DatePicker placeholder="Select date" inputFormat="DD/MM/YYYY" />);

      // Assert
      expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
    });
  });

  describe('when a value is provided', () => {
    it('should render the formatted date in the input', () => {
      // Arrange
      const value = new Date(2024, 0, 15);

      // Act
      render(<DatePicker value={value} inputFormat="DD/MM/YYYY" />);

      // Assert
      expect(screen.getByRole('textbox')).toHaveValue('15/01/2024');
    });
  });

  describe('when the user types a valid date', () => {
    it('should call onValueChange with the parsed date', async () => {
      // Arrange
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(<DatePicker onValueChange={onValueChange} inputFormat="DD/MM/YYYY" />);
      const input = screen.getByRole('textbox');

      // Act
      await user.type(input, '20/02/2024');

      // Assert
      expect(onValueChange).toHaveBeenLastCalledWith(new Date(2024, 1, 20));
    });
  });

  describe('when the calendar button is clicked', () => {
    it('should open the calendar', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker inputFormat="DD/MM/YYYY" />);

      // Act
      await user.click(screen.getByRole('button', { name: /open calendar/i }));

      // Assert
      expect(screen.getByTestId('calendar-root')).toBeInTheDocument();
    });
  });

  describe('when defaultValue changes in uncontrolled mode', () => {
    it('should update the displayed date', () => {
      // Arrange
      const { rerender } = render(
        <DatePicker defaultValue={new Date(2024, 0, 10)} inputFormat="DD/MM/YYYY" />
      );

      // Assert
      expect(screen.getByRole('textbox')).toHaveValue('10/01/2024');

      // Act
      rerender(<DatePicker defaultValue={new Date(2024, 1, 20)} inputFormat="DD/MM/YYYY" />);

      // Assert
      expect(screen.getByRole('textbox')).toHaveValue('20/02/2024');
    });
  });

  describe('when the user selects the same day in the calendar', () => {
    it('should keep the typed date instead of clearing it', async () => {
      // Arrange
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(<DatePicker onValueChange={onValueChange} inputFormat="DD/MM/YYYY" />);
      const input = screen.getByRole('textbox');

      await user.type(input, '20/02/2024');
      onValueChange.mockClear();

      // Act
      await user.click(screen.getByRole('button', { name: /open calendar/i }));
      await user.click(screen.getByRole('button', { name: /february 20th, 2024/i }));

      // Assert
      expect(onValueChange).not.toHaveBeenCalledWith(undefined);
      expect(input).toHaveValue('20/02/2024');
    });
  });

  describe('when the user enters a date without leading zeros', () => {
    it('should not show an error after blur', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker inputFormat="DD/MM/YYYY" />);
      const input = screen.getByRole('textbox');

      // Act
      await user.type(input, '3/04/2026');
      await user.tab();

      // Assert
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      expect(input).not.toHaveAttribute('aria-invalid', 'true');
      expect(input).toHaveValue('03/04/2026');
    });
  });

  describe('when the user enters an impossible date', () => {
    it('should show an error message and error styling after blur', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker inputFormat="DD/MM/YYYY" />);
      const input = screen.getByRole('textbox');

      // Act
      await user.type(input, '31/02/2023');
      await user.tab();

      // Assert
      expect(screen.getByRole('alert')).toHaveTextContent('Only 28 days in February');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input.closest(`.${inputStyles.root}`)).toHaveClass(inputStyles['root--error']);
      expect(input).toHaveValue('31/02/2023');
    });
  });

  describe('when an external error message is provided', () => {
    it('should apply error styling to the input', () => {
      // Arrange
      // Act
      render(<DatePicker errorMessage="Date is required" inputFormat="DD/MM/YYYY" />);
      const input = screen.getByRole('textbox');

      // Assert
      expect(screen.getByRole('alert')).toHaveTextContent('Date is required');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input.closest(`.${inputStyles.root}`)).toHaveClass(inputStyles['root--error']);
    });
  });

  describe('when checking accessibility attributes', () => {
    it('should expose popover semantics on the calendar button', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker inputFormat="DD/MM/YYYY" />);
      const calendarButton = screen.getByRole('button', { name: /open calendar/i });

      // Assert
      expect(calendarButton).toHaveAttribute('aria-haspopup', 'dialog');
      expect(calendarButton).toHaveAttribute('aria-expanded', 'false');

      // Act
      await user.click(calendarButton);

      // Assert
      expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
      expect(calendarButton).toHaveAttribute('aria-controls');
      expect(calendarButton).toHaveAccessibleName(/close calendar/i);
      expect(screen.getByRole('dialog', { name: 'Choose date' })).toBeInTheDocument();
    });
  });

  describe('when the user presses ArrowDown in the input', () => {
    it('should open the calendar', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker inputFormat="DD/MM/YYYY" />);
      const input = screen.getByRole('textbox');

      // Act
      await user.click(input);
      await user.keyboard('{ArrowDown}');

      // Assert
      expect(screen.getByTestId('calendar-root')).toBeInTheDocument();
    });
  });

  describe('when a minimum date is configured', () => {
    it('should reject earlier typed dates on blur', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker inputFormat="DD/MM/YYYY" minDate={new Date(2024, 0, 15)} />);
      const input = screen.getByRole('textbox');

      // Act
      await user.type(input, '10/01/2024');
      await user.tab();

      // Assert
      expect(screen.getByRole('alert')).toHaveTextContent('Date must be on or after 15/01/2024');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('when clearable is enabled and a value is selected', () => {
    it('should clear the value when the clear button is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(
        <DatePicker
          clearable
          defaultValue={new Date(2024, 0, 15)}
          onValueChange={onValueChange}
          inputFormat="DD/MM/YYYY"
        />
      );

      // Act
      await user.click(screen.getByRole('button', { name: /clear date/i }));

      // Assert
      expect(onValueChange).toHaveBeenCalledWith(undefined);
      expect(screen.getByRole('textbox')).toHaveValue('');
    });
  });

  describe('when the input is read only', () => {
    it('should open the calendar when the input is clicked', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker readOnly inputFormat="DD/MM/YYYY" defaultValue={new Date(2024, 0, 15)} />);

      // Act
      await user.click(screen.getByRole('textbox'));

      // Assert
      expect(screen.getByTestId('calendar-root')).toBeInTheDocument();
    });
  });

  describe('when the field is required and left empty', () => {
    it('should show a required error after blur', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<DatePicker required inputFormat="DD/MM/YYYY" />);
      const input = screen.getByRole('textbox');

      // Act
      await user.click(input);
      await user.tab();

      // Assert
      expect(screen.getByRole('alert')).toHaveTextContent('Date is required');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(input).toBeRequired();
    });
  });
});
