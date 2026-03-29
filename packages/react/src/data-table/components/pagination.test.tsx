import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Pagination } from './pagination';

describe('Pagination', () => {
  describe('when page and total count are provided', () => {
    it('should render page summary from page and total count', () => {
      // Arrange
      const props = {
        page: 2,
        pageSize: 10,
        totalCount: 45,
        onPageChange: vi.fn(),
      };

      // Act
      render(<Pagination {...props} />);

      // Assert
      expect(screen.getByText('Page 2 of 5')).toBeInTheDocument();
    });
  });

  describe('when on the first page', () => {
    it('should disable the previous button and enable the next button', () => {
      // Arrange
      const props = {
        page: 1,
        pageSize: 10,
        totalCount: 45,
        onPageChange: vi.fn(),
      };

      // Act
      render(<Pagination {...props} />);

      // Assert
      expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled();
    });
  });

  describe('when on the last page', () => {
    it('should disable the next button and enable the previous button', () => {
      // Arrange
      const props = {
        page: 5,
        pageSize: 10,
        totalCount: 45,
        onPageChange: vi.fn(),
      };

      // Act
      render(<Pagination {...props} />);

      // Assert
      expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Previous page' })).not.toBeDisabled();
    });
  });

  describe('when navigating with previous and next', () => {
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
  });

  describe('when colorConfig is provided', () => {
    it('should apply color styles to the navigation region', () => {
      // Arrange
      const props = {
        page: 1,
        pageSize: 10,
        totalCount: 10,
        onPageChange: vi.fn(),
        colorConfig: {
          paginationBackground: 'rgb(12, 34, 56)',
          paginationText: 'rgb(200, 210, 220)',
        },
      };

      // Act
      render(<Pagination {...props} />);

      // Assert
      const nav = screen.getByRole('navigation', { name: 'Pagination' });
      expect(nav).toHaveStyle({
        backgroundColor: 'rgb(12, 34, 56)',
        color: 'rgb(200, 210, 220)',
      });
    });
  });
});
