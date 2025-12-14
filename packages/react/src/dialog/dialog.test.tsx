import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Dialog, { DialogPanel, DialogTitle, DialogDescription } from './dialog';

describe('Dialog', () => {
  it('renders when open', async () => {
    const onClose = vi.fn();
    await act(async () => {
      render(
        <Dialog open={true} onClose={onClose}>
          <DialogPanel>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Test description</DialogDescription>
          </DialogPanel>
        </Dialog>
      );
      await Promise.resolve();
    });
    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('does not render when closed', async () => {
    const onClose = vi.fn();
    await act(async () => {
      render(
        <Dialog open={false} onClose={onClose}>
          <DialogPanel>
            <DialogTitle>Test Dialog</DialogTitle>
          </DialogPanel>
        </Dialog>
      );
      await Promise.resolve();
    });
    expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
  });
});

