import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusCell, STATUS } from './status-cell';

describe('StatusCell', () => {
  describe('Status Badge Rendering', () => {
    it('renders the status value formatted correctly (snake_case to Title Case)', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      expect(screen.getByText('In progress')).toBeInTheDocument();
    });

    it('renders "Complete" for complete status', () => {
      render(<StatusCell value={STATUS.COMPLETE} />);

      expect(screen.getByText('Complete')).toBeInTheDocument();
    });

    it('renders "Do not act" for do_not_act status', () => {
      render(<StatusCell value={STATUS.DO_NOT_ACT} />);

      expect(screen.getByText('Do not act')).toBeInTheDocument();
    });

    it('renders "Failed" for failed status', () => {
      render(<StatusCell value={STATUS.FAILED} />);

      expect(screen.getByText('Failed')).toBeInTheDocument();
    });

    it('applies badge styling to status (rounded, text-xs, font-medium)', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      const badge = screen.getByText('In progress');
      expect(badge).toHaveClass('rounded');
      expect(badge).toHaveClass('text-xs');
      expect(badge).toHaveClass('font-medium');
    });
  });

  describe('Status Colors', () => {
    it('applies green colors for complete status', () => {
      render(<StatusCell value={STATUS.COMPLETE} />);

      const badge = screen.getByText('Complete');
      expect(badge).toHaveClass('bg-emerald-100');
      expect(badge).toHaveClass('text-emerald-800');
    });

    it('applies rose colors for do_not_act status', () => {
      render(<StatusCell value={STATUS.DO_NOT_ACT} />);

      const badge = screen.getByText('Do not act');
      expect(badge).toHaveClass('bg-rose-100');
      expect(badge).toHaveClass('text-rose-800');
    });

    it('applies red colors for failed status', () => {
      render(<StatusCell value={STATUS.FAILED} />);

      const badge = screen.getByText('Failed');
      expect(badge).toHaveClass('bg-red-100');
      expect(badge).toHaveClass('text-red-800');
    });

    it('applies gray colors for in_progress status', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      const badge = screen.getByText('In progress');
      expect(badge).toHaveClass('bg-gray-100');
      expect(badge).toHaveClass('text-gray-800');
    });
  });

  describe('Version Display - version prop is false', () => {
    it('does not show any version info when version is false', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} version={false} />);

      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
      expect(screen.queryByText('-')).not.toBeInTheDocument();
    });

    it('still shows the status badge when version is false', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} version={false} />);

      expect(screen.getByText('In progress')).toBeInTheDocument();
    });
  });

  describe('Version Display - version is undefined or "unknown"', () => {
    it('does not show version info when version is undefined', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
    });

    it('does not show version info when version is "unknown"', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} version="unknown" />);

      expect(screen.queryByText(/version/i)).not.toBeInTheDocument();
    });

    it('still shows the status badge when version is undefined', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} />);

      expect(screen.getByText('In progress')).toBeInTheDocument();
    });

    it('still shows the status badge when version is "unknown"', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} version="unknown" />);

      expect(screen.getByText('In progress')).toBeInTheDocument();
    });
  });

  describe('Version Display - version is null', () => {
    it('shows "Version: -" when version is null', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} version={null} />);

      expect(screen.getByText('Version:')).toBeInTheDocument();
      expect(screen.getByText('-')).toBeInTheDocument();
    });

    it('applies muted styling to version text', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} version={null} />);

      const versionLabel = screen.getByText('Version:');
      // The class is on the parent span element
      expect(versionLabel.parentElement).toHaveClass('text-muted-foreground');
    });
  });

  describe('Version Display - version has a value', () => {
    it('shows the version value when provided', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} version="1.2.3" />);

      expect(screen.getByText('Version:')).toBeInTheDocument();
      expect(screen.getByText('1.2.3')).toBeInTheDocument();
    });

    it('shows various version formats', () => {
      render(<StatusCell value={STATUS.COMPLETE} version="v2.0.0-beta" />);

      expect(screen.getByText('v2.0.0-beta')).toBeInTheDocument();
    });

    it('applies muted styling to version label', () => {
      render(<StatusCell value={STATUS.IN_PROGRESS} version="1.0.0" />);

      const versionLabel = screen.getByText('Version:');
      // The class is on the parent span element
      expect(versionLabel.parentElement).toHaveClass('text-muted-foreground');
    });
  });

  describe('Container Layout', () => {
    it('uses flex column layout for stacked display', () => {
      const { container } = render(<StatusCell value={STATUS.IN_PROGRESS} version="1.0.0" />);

      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('flex');
      expect(wrapper).toHaveClass('flex-col');
    });

    it('has appropriate gap between status and version', () => {
      const { container } = render(<StatusCell value={STATUS.IN_PROGRESS} version="1.0.0" />);

      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('gap-1');
    });
  });

  describe('STATUS constant', () => {
    it('exports STATUS constant with expected values', () => {
      expect(STATUS.COMPLETE).toBe('complete');
      expect(STATUS.DO_NOT_ACT).toBe('do_not_act');
      expect(STATUS.FAILED).toBe('failed');
      expect(STATUS.IN_PROGRESS).toBe('in_progress');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty version string (shows version with empty value)', () => {
      render(<StatusCell value={STATUS.COMPLETE} version="" />);

      // Empty string is truthy for display, should show Version: with empty value
      expect(screen.getByText('Version:')).toBeInTheDocument();
    });
  });
});
