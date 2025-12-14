import '../styles.css';
import ThemeProvider from '../src/theme/theme-provider';
import type { Decorator } from '@storybook/react';

// Storybook should be deterministic: don't let a previously-saved accent/mode override defaults.
const storybookThemeStorageKey = 'forsyteco-theme-storybook';
if (typeof window !== 'undefined') {
  window.localStorage.removeItem(`${storybookThemeStorageKey}-accent`);
  window.localStorage.removeItem(`${storybookThemeStorageKey}-mode`);
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: Decorator[] = [
  (Story) => (
    <ThemeProvider colourScheme="yellow" defaultMode="light" storageKey={storybookThemeStorageKey}>
      <Story />
    </ThemeProvider>
  ),
];

