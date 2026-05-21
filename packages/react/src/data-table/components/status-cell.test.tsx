import { describe, it, expect } from 'vitest';
import { render, screen } from '#test-utils';
import { StatusCell, STATUS } from './status-cell';

describe('StatusCell', () => {
  describe('when rendering the status badge', () => {
    it('should render the status value formatted correctly (snake_case to Title Case)', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      // Assert
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });

    it('should render "Complete" for complete status', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.COMPLETE} />);

      // Assert
      expect(screen.getByText('Complete')).toBeInTheDocument();
    });

    it('should render "Do not act" for do_not_act status', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.DO_NOT_ACT} />);

      // Assert
      expect(screen.getByText('Do not act')).toBeInTheDocument();
    });

    it('should render "Failed" for failed status', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.FAILED} />);

      // Assert
      expect(screen.getByText('Failed')).toBeInTheDocument();
    });

    it('should apply badge styling to status (rounded, text-base, font-medium)', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      // Assert
      const badge = screen.getByText('In progress');
      expect(badge).toHaveClass('rounded');
      expect(badge).toHaveClass('text-base');
      expect(badge).toHaveClass('font-medium');
    });
  });

  describe('when applying status colors', () => {
    it('should apply green colors for complete status', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.COMPLETE} />);

      // Assert
      const badge = screen.getByText('Complete');
      expect(badge).toHaveClass('bg-emerald-100');
      expect(badge).toHaveClass('text-emerald-800');
    });

    it('should apply rose colors for do_not_act status', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.DO_NOT_ACT} />);

      // Assert
      const badge = screen.getByText('Do not act');
      expect(badge).toHaveClass('bg-rose-100');
      expect(badge).toHaveClass('text-rose-800');
    });

    it('should apply red colors for failed status', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.FAILED} />);

      // Assert
      const badge = screen.getByText('Failed');
      expect(badge).toHaveClass('bg-red-100');
      expect(badge).toHaveClass('text-red-800');
    });

    it('should apply gray colors for in_progress status', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      // Assert
      const badge = screen.getByText('In progress');
      expect(badge).toHaveClass('bg-gray-100');
      expect(badge).toHaveClass('text-gray-800');
    });
  });

  describe('when version prop is false', () => {
    it('should not show any version info when version is false', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} version={false} />);

      // Assert
      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
      expect(screen.queryByText('-')).not.toBeInTheDocument();
    });

    it('should still show the status badge when version is false', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} version={false} />);

      // Assert
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });
  });

  describe('when version is undefined or "unknown"', () => {
    it('should not show version info when version is undefined', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      // Assert
      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
    });

    it('should not show version info when version is "unknown"', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} version="unknown" />);

      // Assert
      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
    });

    it('should still show the status badge when version is undefined', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      // Assert
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });

    it('should still show the status badge when version is "unknown"', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} version="unknown" />);

      // Assert
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });
  });

  describe('when version is null', () => {
    it('should show "Version: -" when version is null', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} version={null} />);

      // Assert
      expect(screen.getByText('Version:')).toBeInTheDocument();
      expect(screen.getByText('-')).toBeInTheDocument();
    });

    it('should apply muted styling to version text', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} version={null} />);

      // Assert
      const versionLabel = screen.getByText('Version:');
      // The class is on the parent span element
      expect(versionLabel.parentElement).toHaveClass('text-muted-foreground');
    });
  });

  describe('when version has a value', () => {
    it('should show the version value when provided', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} version="1.2.3" />);

      // Assert
      expect(screen.getByText('Version:')).toBeInTheDocument();
      expect(screen.getByText('1.2.3')).toBeInTheDocument();
    });

    it('should show various version formats', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.COMPLETE} version="v2.0.0-beta" />);

      // Assert
      expect(screen.getByText('v2.0.0-beta')).toBeInTheDocument();
    });

    it('should apply muted styling to version label', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.IN_PROGRESS} version="1.0.0" />);

      // Assert
      const versionLabel = screen.getByText('Version:');
      // The class is on the parent span element
      expect(versionLabel.parentElement).toHaveClass('text-muted-foreground');
    });
  });

  describe('when rendering container layout', () => {
    it('should use flex column layout for stacked display', () => {
      // Arrange
      // Act
      const { container } = render(<StatusCell value={STATUS.IN_PROGRESS} version="1.0.0" />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('flex');
      expect(wrapper).toHaveClass('flex-col');
    });

    it('should have appropriate gap between status and version', () => {
      // Arrange
      // Act
      const { container } = render(<StatusCell value={STATUS.IN_PROGRESS} version="1.0.0" />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('gap-1');
    });
  });

  describe('when using the STATUS constant', () => {
    it('should export STATUS constant with expected values', () => {
      // Arrange
      // Act
      // Assert
      expect(STATUS.COMPLETE).toBe('complete');
      expect(STATUS.DO_NOT_ACT).toBe('do_not_act');
      expect(STATUS.FAILED).toBe('failed');
      expect(STATUS.IN_PROGRESS).toBe('in_progress');
    });
  });

  describe('when handling edge cases', () => {
    it('should handle empty version string (shows version with empty value)', () => {
      // Arrange
      // Act
      render(<StatusCell value={STATUS.COMPLETE} version="" />);

      // Assert
      // Empty string is truthy for display, should show Version: with empty value
      expect(screen.getByText('Version:')).toBeInTheDocument();
    });
  });
});
