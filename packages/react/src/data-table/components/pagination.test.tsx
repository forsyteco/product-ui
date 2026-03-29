import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Pagination } from './pagination';

describe('Pagination', () => {
  it('should render page summary from page and total count', () => {
    // Arrange
    render(
      <Pagination
        page={2}
        pageSize={10}
        totalCount={45}
        onPageChange={vi.fn()}
      />
    );

    // Assert
    expect(screen.getByText('Page 2 of 5')).toBeInTheDocument();
  });

  it('should disable previous button on first page', () => {
    // Arrange
    render(
      <Pagination
        page={1}
        pageSize={10}
        totalCount={45}
        onPageChange={vi.fn()}
      />
    );

    // Assert
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled();
  });

  it('should disable next button on last page', () => {
    // Arrange
    render(
      <Pagination
        page={5}
        pageSize={10}
        totalCount={45}
        onPageChange={vi.fn()}
      />
    );

    // Assert
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Previous page' })).not.toBeDisabled();
  });

  it('should call onPageChange with previous and next pages', () => {
    // Arrange
    const onPageChange = vi.fn();
    render(
      <Pagination
        page={3}
        pageSize={10}
        totalCount={45}
        onPageChange={onPageChange}
      />
    );

    // Act
    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next page' }));

    // Assert
    expect(onPageChange).toHaveBeenNthCalledWith(1, 2);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 4);
  });

  it('should apply color styles when colorConfig is provided', () => {
    // Arrange
    render(
      <Pagination
        page={1}
        pageSize={10}
        totalCount={10}
        onPageChange={vi.fn()}
        colorConfig={{
          paginationBackground: 'rgb(12, 34, 56)',
          paginationText: 'rgb(200, 210, 220)',
        }}
      />
    );

    // Assert
    const nav = screen.getByRole('navigation', { name: 'Pagination' });
    expect(nav).toHaveStyle({
      backgroundColor: 'rgb(12, 34, 56)',
      color: 'rgb(200, 210, 220)',
    });
  });
});
