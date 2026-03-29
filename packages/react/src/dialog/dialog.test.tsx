import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen, act } from '@testing-library/react';
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from './dialog';

describe('Dialog', () => {
  it('should render when open', async () => {
    // Arrange
    const onClose = vi.fn();

    // Act
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

    // Assert
    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('should not render when closed', async () => {
    // Arrange
    const onClose = vi.fn();

    // Act
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

    // Assert
    expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
  });

  it('should call onClose when Escape key is pressed', async () => {
    // Arrange
    const onClose = vi.fn();
    await act(async () => {
      render(
        <Dialog open={true} onClose={onClose}>
          <DialogPanel>
            <DialogTitle>Esc Close Dialog</DialogTitle>
          </DialogPanel>
        </Dialog>
      );
      await Promise.resolve();
    });

    // Act
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });

    // Assert
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should merge custom class names for root and subcomponents', async () => {
    // Arrange
    await act(async () => {
      render(
        <Dialog open={true} onClose={() => {}} className="custom-root">
          <DialogPanel className="custom-panel">
            <DialogTitle className="custom-title">Styled Dialog</DialogTitle>
            <DialogDescription className="custom-description">Styled description</DialogDescription>
          </DialogPanel>
        </Dialog>
      );
      await Promise.resolve();
    });

    // Assert
    expect(document.querySelector('.custom-root')).toBeInTheDocument();
    expect(document.querySelector('.custom-panel')).toBeInTheDocument();
    expect(screen.getByText('Styled Dialog')).toHaveClass('custom-title');
    expect(screen.getByText('Styled description')).toHaveClass('custom-description');
  });
});

