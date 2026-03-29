import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './theme-provider';
import { useTheme } from './use-theme';

function ThemeValueReader() {
  const { colourScheme, mode, resolvedMode } = useTheme();
  return <div data-testid="theme-value">{`${colourScheme}:${mode}:${resolvedMode}`}</div>;
}

describe('useTheme', () => {
  describe('when used outside ThemeProvider', () => {
    it('should throw with a descriptive message', () => {
      // Arrange
      // Act
      const renderOutsideProvider = () => render(<ThemeValueReader />);

      // Assert
      expect(renderOutsideProvider).toThrow('useTheme must be used within a ThemeProvider');
    });
  });

  describe('when used inside ThemeProvider', () => {
    it('should return context values from ThemeProvider', () => {
      // Arrange
      render(
        <ThemeProvider colourScheme="blue" defaultMode="light">
          <ThemeValueReader />
        </ThemeProvider>
      );

      // Act
      const value = screen.getByTestId('theme-value');

      // Assert
      expect(value).toHaveTextContent('blue:light:light');
    });
  });
});
