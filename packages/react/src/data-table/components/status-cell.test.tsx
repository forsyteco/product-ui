import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusCell, STATUS } from './status-cell';
import styles from './data-table.module.css';

describe('StatusCell', () => {
  describe('when rendering the status badge', () => {
    it('should render the status value formatted correctly (snake_case to Title Case)', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });

    it('should render "Complete" for complete status', () => {
      // Arrange
      const value = STATUS.COMPLETE;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      expect(screen.getByText('Complete')).toBeInTheDocument();
    });

    it('should render "Do not act" for do_not_act status', () => {
      // Arrange
      const value = STATUS.DO_NOT_ACT;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      expect(screen.getByText('Do not act')).toBeInTheDocument();
    });

    it('should render "Failed" for failed status', () => {
      // Arrange
      const value = STATUS.FAILED;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      expect(screen.getByText('Failed')).toBeInTheDocument();
    });

    it('should apply badge base class to status', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      const badge = screen.getByText('In progress');
      expect(badge).toHaveClass(styles['status-badge']);
    });
  });

  describe('when applying status colors', () => {
    it('should apply green colors for complete status', () => {
      // Arrange
      const value = STATUS.COMPLETE;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      const badge = screen.getByText('Complete');
      expect(badge).toHaveClass(styles['status-complete']);
    });

    it('should apply rose colors for do_not_act status', () => {
      // Arrange
      const value = STATUS.DO_NOT_ACT;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      const badge = screen.getByText('Do not act');
      expect(badge).toHaveClass(styles['status-do-not-act']);
    });

    it('should apply red colors for failed status', () => {
      // Arrange
      const value = STATUS.FAILED;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      const badge = screen.getByText('Failed');
      expect(badge).toHaveClass(styles['status-failed']);
    });

    it('should apply gray colors for in_progress status', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      const badge = screen.getByText('In progress');
      expect(badge).toHaveClass(styles['status-progress']);
    });
  });

  describe('when version is false', () => {
    it('should not show any version info when version is false', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = false;

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
      expect(screen.queryByText('-')).not.toBeInTheDocument();
    });

    it('should still show the status badge when version is false', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = false;

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });
  });

  describe('when version is undefined or "unknown"', () => {
    it('should not show version info when version is undefined', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
    });

    it('should not show version info when version is "unknown"', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = 'unknown';

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
    });

    it('should still show the status badge when version is undefined', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;

      // Act
      render(<StatusCell value={value} />);

      // Assert
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });

    it('should still show the status badge when version is "unknown"', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = 'unknown';

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      expect(screen.getByText('In progress')).toBeInTheDocument();
    });
  });

  describe('when version is null', () => {
    it('should show "Version: -" when version is null', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = null;

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      expect(screen.getByText('Version:')).toBeInTheDocument();
      expect(screen.getByText('-')).toBeInTheDocument();
    });

    it('should apply muted styling to version text', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = null;

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      const versionLabel = screen.getByText('Version:');
      expect(versionLabel.parentElement).toHaveClass(styles['status-version']);
    });
  });

  describe('when version has a value', () => {
    it('should show the version value when provided', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = '1.2.3';

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      expect(screen.getByText('Version:')).toBeInTheDocument();
      expect(screen.getByText('1.2.3')).toBeInTheDocument();
    });

    it('should show various version formats', () => {
      // Arrange
      const value = STATUS.COMPLETE;
      const version = 'v2.0.0-beta';

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      expect(screen.getByText('v2.0.0-beta')).toBeInTheDocument();
    });

    it('should apply muted styling to version label', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = '1.0.0';

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      const versionLabel = screen.getByText('Version:');
      expect(versionLabel.parentElement).toHaveClass(styles['status-version']);
    });
  });

  describe('when inspecting container layout', () => {
    it('should use flex column layout for stacked display', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = '1.0.0';

      // Act
      const { container } = render(<StatusCell value={value} version={version} />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles['status-wrap']);
    });

    it('should have appropriate gap between status and version', () => {
      // Arrange
      const value = STATUS.IN_PROGRESS;
      const version = '1.0.0';

      // Act
      const { container } = render(<StatusCell value={value} version={version} />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles['status-wrap']);
    });
  });

  describe('when verifying the STATUS constant', () => {
    it('should export STATUS constant with expected values', () => {
      // Arrange
      // Act
      const exported = STATUS;

      // Assert
      expect(exported.COMPLETE).toBe('complete');
      expect(exported.DO_NOT_ACT).toBe('do_not_act');
      expect(exported.FAILED).toBe('failed');
      expect(exported.IN_PROGRESS).toBe('in_progress');
    });
  });

  describe('when handling edge cases', () => {
    it('should show version label with empty value when version is empty string', () => {
      // Arrange
      const value = STATUS.COMPLETE;
      const version = '';

      // Act
      render(<StatusCell value={value} version={version} />);

      // Assert
      expect(screen.getByText('Version:')).toBeInTheDocument();
    });
  });
});
