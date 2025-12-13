import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Dialog, { DialogPanel, DialogTitle, DialogDescription } from './dialog';

describe('Dialog', () => {
  it('renders when open', () => {
    const onClose = vi.fn();
    render(
      <Dialog open={true} onClose={onClose}>
        <DialogPanel>
          <DialogTitle>Test Dialog</DialogTitle>
          <DialogDescription>Test description</DialogDescription>
        </DialogPanel>
      </Dialog>
    );
    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const onClose = vi.fn();
    render(
      <Dialog open={false} onClose={onClose}>
        <DialogPanel>
          <DialogTitle>Test Dialog</DialogTitle>
        </DialogPanel>
      </Dialog>
    );
    expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
  });
});

