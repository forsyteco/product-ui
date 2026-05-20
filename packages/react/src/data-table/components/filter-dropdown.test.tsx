import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { FilterDropdown } from './filter-dropdown';

describe('FilterDropdown', () => {
  const defaultProps = {
    columnId: 'status',
    filterValues: ['ACTIVE', 'INACTIVE', 'PENDING_REVIEW'],
    selectedValues: [] as string[],
    onFilterChange: vi.fn(),
  };

  describe('when the user searches filter options', () => {
    it('should filter options by search input', () => {
      // Arrange
      const onFilterChange = vi.fn();
      render(<FilterDropdown {...defaultProps} onFilterChange={onFilterChange} />);
      fireEvent.click(screen.getByRole('button', { name: /filter status/i }));
      const searchInput = screen.getByRole('searchbox');

      // Act
      fireEvent.change(searchInput, { target: { value: 'pending' } });

      // Assert
      expect(screen.getByLabelText('Pending review')).toBeInTheDocument();
      expect(screen.queryByLabelText('Active')).not.toBeInTheDocument();
    });
  });

  describe('when no values are selected', () => {
    it('should select all values when select all is clicked', () => {
      // Arrange
      const onFilterChange = vi.fn();
      render(<FilterDropdown {...defaultProps} onFilterChange={onFilterChange} />);

      // Act
      fireEvent.click(screen.getByRole('button', { name: /filter status/i }));
      fireEvent.click(screen.getByRole('button', { name: /select all/i }));

      // Assert
      expect(onFilterChange).toHaveBeenCalledWith('status', ['ACTIVE', 'INACTIVE', 'PENDING_REVIEW']);
    });
  });

  describe('when values are currently selected', () => {
    it('should clear all values when clear all is clicked', () => {
      // Arrange
      const onFilterChange = vi.fn();
      render(
        <FilterDropdown
          {...defaultProps}
          selectedValues={['ACTIVE']}
          onFilterChange={onFilterChange}
        />
      );

      // Act
      fireEvent.click(screen.getByRole('button', { name: /filter status/i }));
      fireEvent.click(screen.getByRole('button', { name: /clear all/i }));

      // Assert
      expect(onFilterChange).toHaveBeenCalledWith('status', []);
    });
  });

  describe('when showSelectAll is false and selection is empty', () => {
    it('should disable the clear all button', () => {
      // Arrange
      render(<FilterDropdown {...defaultProps} showSelectAll={false} />);

      // Act
      fireEvent.click(screen.getByRole('button', { name: /filter status/i }));

      // Assert
      expect(screen.getByRole('button', { name: 'Clear all' })).toBeDisabled();
    });
  });

  describe('when toggling a checkbox', () => {
    it('should remove the value when an active checkbox is toggled', () => {
      // Arrange
      const onFilterChange = vi.fn();
      render(<FilterDropdown {...defaultProps} selectedValues={['ACTIVE']} onFilterChange={onFilterChange} />);

      // Act
      fireEvent.click(screen.getByRole('button', { name: /filter status/i }));
      fireEvent.click(screen.getByLabelText('Active'));

      // Assert
      expect(onFilterChange).toHaveBeenCalledWith('status', []);
    });
  });
});
