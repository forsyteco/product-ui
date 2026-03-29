import { describe, expect, it, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from './theme-provider';

function ThemeConsumer() {
  const { colourScheme, mode, resolvedMode, setColourScheme, setMode } = useTheme();

  return (
    <div>
      <p data-testid="theme-values">
        {colourScheme}:{mode}:{resolvedMode}
      </p>
      <button type="button" onClick={() => setColourScheme('blue')}>
        Set blue
      </button>
      <button type="button" onClick={() => setMode('light')}>
        Set light
      </button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    Object.defineProperty(globalThis, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  describe('when mounted with initial colour scheme and system mode', () => {
    it('should apply initial theme attributes from provider state', async () => {
      // Arrange
      render(
        <ThemeProvider storageKey="theme-test-key" defaultMode="system" colourScheme="yellow">
          <ThemeConsumer />
        </ThemeProvider>
      );

      // Act
      // (ThemeProvider applies data attributes on mount)

      // Assert
      await waitFor(() => {
        expect(document.documentElement).toHaveAttribute('data-colour-scheme', 'yellow');
        expect(document.documentElement).toHaveAttribute('data-colour-mode', 'dark');
      });
    });
  });

  describe('when the user updates colour scheme and mode', () => {
    it('should update mode and colour scheme and persist values', async () => {
      // Arrange
      const user = userEvent.setup();
      render(
        <ThemeProvider storageKey="theme-test-key">
          <ThemeConsumer />
        </ThemeProvider>
      );

      // Act
      await user.click(screen.getByRole('button', { name: 'Set blue' }));
      await user.click(screen.getByRole('button', { name: 'Set light' }));

      // Assert
      await waitFor(() => {
        expect(document.documentElement).toHaveAttribute('data-colour-scheme', 'blue');
        expect(document.documentElement).toHaveAttribute('data-colour-mode', 'light');
      });
      expect(localStorage.getItem('theme-test-key-colour-scheme')).toBe('blue');
      expect(localStorage.getItem('theme-test-key-mode')).toBe('light');
      expect(screen.getByTestId('theme-values')).toHaveTextContent('blue:light:light');
    });
  });
});
