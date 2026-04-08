import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { EmptyState } from './empty-state';

describe('EmptyState', () => {
  it('renders title and description', () => {
    render(<EmptyState title="No results" description="Adjust filters." />);

    expect(screen.getByText('No results')).toBeInTheDocument();
    expect(screen.getByText('Adjust filters.')).toBeInTheDocument();
  });

  it('renders title only when description is omitted', () => {
    render(<EmptyState title="No data" />);

    expect(screen.getByText('No data')).toBeInTheDocument();
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });

  it('forwards data-testid and default role and aria-live', () => {
    render(<EmptyState title="T" data-testid="empty-panel" />);

    const root = screen.getByTestId('empty-panel');
    expect(root).toHaveAttribute('role', 'status');
    expect(root).toHaveAttribute('aria-live', 'polite');
  });

  it('sets data-slot on the root', () => {
    render(<EmptyState title="Hi" />);
    expect(screen.getByRole('status')).toHaveAttribute('data-slot', 'empty-state');
  });

  it('respects aria-live override', () => {
    render(<EmptyState title="T" aria-live="assertive" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'assertive');
  });

  it('respects aria-live off', () => {
    render(<EmptyState title="T" aria-live="off" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'off');
  });

  it('calls onAction when action button is clicked', async () => {
    const user = userEvent.setup();
    const onAction = vi.fn();
    render(<EmptyState title="Empty" actionLabel="Retry" onAction={onAction} />);

    await user.click(screen.getByRole('button', { name: 'Retry' }));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('does not render action when only actionLabel is provided', () => {
    render(<EmptyState title="T" actionLabel="Go" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('does not render action when only onAction is provided', () => {
    render(<EmptyState title="T" onAction={() => {}} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('merges className onto root', () => {
    const { container } = render(<EmptyState title="X" className="custom-root" />);
    expect(container.firstChild).toHaveClass('custom-root');
  });
});
