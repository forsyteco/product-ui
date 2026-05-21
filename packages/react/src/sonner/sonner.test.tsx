import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '#test-utils';
import { toast } from 'sonner';
import { Sonner } from './sonner';

describe('Sonner', () => {
  describe('when a toast is triggered', () => {
    it('should render the toast message', async () => {
      // Arrange
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
          matches: false,
          media: query,
          onchange: null,
          addEventListener: () => {},
          removeEventListener: () => {},
          addListener: () => {},
          removeListener: () => {},
          dispatchEvent: () => false,
        }),
      });
      render(<Sonner />);

      // Act
      toast('Hello');

      // Assert
      await waitFor(() => {
        expect(screen.getByText('Hello')).toBeInTheDocument();
      });
    });
  });
});
