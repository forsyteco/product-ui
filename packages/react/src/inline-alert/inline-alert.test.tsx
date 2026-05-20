import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InlineAlert } from './inline-alert';

describe('InlineAlert', () => {
  it('renders message', () => {
    render(<InlineAlert message="Something went wrong." />);
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });

  it('renders message as node', () => {
    render(
      <InlineAlert message={<span data-testid="rich">Rich</span>} />
    );
    expect(screen.getByTestId('rich')).toHaveTextContent('Rich');
  });

  it('forwards data-testid, default role and aria-live', () => {
    render(<InlineAlert message="M" data-testid="alert-box" />);
    const el = screen.getByTestId('alert-box');
    expect(el).toHaveAttribute('role', 'status');
    expect(el).toHaveAttribute('aria-live', 'polite');
  });

  it('sets data-slot on root', () => {
    render(<InlineAlert message="Hi" />);
    expect(screen.getByRole('status')).toHaveAttribute('data-slot', 'inline-alert');
  });

  it('calls onRetry and onDismiss', async () => {
    const user = userEvent.setup();
    const onRetry = vi.fn();
    const onDismiss = vi.fn();
    render(
      <InlineAlert
        message="Failed to save."
        onRetry={onRetry}
        onDismiss={onDismiss}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Retry' }));
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(onRetry).toHaveBeenCalledTimes(1);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('uses custom labels', async () => {
    const user = userEvent.setup();
    render(
      <InlineAlert
        message="M"
        onRetry={() => {}}
        onDismiss={() => {}}
        retryLabel="Try again"
        dismissLabel="Close"
      />
    );
    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Close' }));
  });

  it('does not render actions when no handlers', () => {
    render(<InlineAlert message="Only message" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders only Retry when onDismiss omitted', () => {
    render(<InlineAlert message="M" onRetry={() => {}} />);
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Dismiss' })).not.toBeInTheDocument();
  });

  it('merges className onto root', () => {
    const { container } = render(
      <InlineAlert message="X" className="my-alert" />
    );
    expect(container.firstChild).toHaveClass('my-alert');
  });
});
