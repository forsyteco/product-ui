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

  it('should select all values when no values are selected', () => {
    // Arrange
    const onFilterChange = vi.fn();
    render(<FilterDropdown {...defaultProps} onFilterChange={onFilterChange} />);
    fireEvent.click(screen.getByRole('button', { name: /filter status/i }));

    // Act
    fireEvent.click(screen.getByRole('button', { name: /select all/i }));

    // Assert
    expect(onFilterChange).toHaveBeenCalledWith('status', ['ACTIVE', 'INACTIVE', 'PENDING_REVIEW']);
  });

  it('should clear all values when currently selected values exist', () => {
    // Arrange
    const onFilterChange = vi.fn();
    render(
      <FilterDropdown
        {...defaultProps}
        selectedValues={['ACTIVE']}
        onFilterChange={onFilterChange}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /filter status/i }));

    // Act
    fireEvent.click(screen.getByRole('button', { name: /clear all/i }));

    // Assert
    expect(onFilterChange).toHaveBeenCalledWith('status', []);
  });

  it('should disable clear all button when showSelectAll is false and selection is empty', () => {
    // Arrange
    render(<FilterDropdown {...defaultProps} showSelectAll={false} />);
    fireEvent.click(screen.getByRole('button', { name: /filter status/i }));

    // Assert
    expect(screen.getByRole('button', { name: 'Clear all' })).toBeDisabled();
  });

  it('should toggle a selected value through checkbox interaction', () => {
    // Arrange
    const onFilterChange = vi.fn();
    render(<FilterDropdown {...defaultProps} selectedValues={['ACTIVE']} onFilterChange={onFilterChange} />);
    fireEvent.click(screen.getByRole('button', { name: /filter status/i }));

    // Act
    fireEvent.click(screen.getByLabelText('Active'));

    // Assert
    expect(onFilterChange).toHaveBeenCalledWith('status', []);
  });
});
