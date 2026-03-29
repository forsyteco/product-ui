import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './theme-provider';
import { useTheme } from './use-theme';

function ThemeValueReader() {
  const { colourScheme, mode, resolvedMode } = useTheme();
  return <div data-testid="theme-value">{`${colourScheme}:${mode}:${resolvedMode}`}</div>;
}

describe('useTheme', () => {
  it('should throw when used outside ThemeProvider', () => {
    // Arrange + Act + Assert
    expect(() => render(<ThemeValueReader />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
  });

  it('should return context values from ThemeProvider', () => {
    // Arrange
    render(
      <ThemeProvider colourScheme="blue" defaultMode="light">
        <ThemeValueReader />
      </ThemeProvider>
    );

    // Assert
    expect(screen.getByTestId('theme-value')).toHaveTextContent('blue:light:light');
  });
});
