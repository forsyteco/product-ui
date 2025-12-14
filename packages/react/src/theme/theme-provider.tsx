import { type ReactNode, createContext, useContext, useEffect, useState } from 'react';

export type ColourScheme = 'yellow' | 'blue';

export type ThemeMode = 'light' | 'dark' | 'system';

export type ThemeContextValue = {
  colourScheme: ColourScheme;
  mode: ThemeMode;
  setColourScheme: (scheme: ColourScheme) => void;
  setMode: (mode: ThemeMode) => void;
  resolvedMode: 'light' | 'dark';
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export type ThemeProviderProps = {
  children: ReactNode;
  colourScheme?: ColourScheme;
  defaultMode?: ThemeMode;
  storageKey?: string;
};

function ThemeProvider({
  children,
  colourScheme = 'yellow',
  defaultMode = 'system',
  storageKey = 'forsyteco-theme',
}: ThemeProviderProps) {
  const [colourSchemeState, setColourSchemeState] = useState<ColourScheme>(() => {
    if (typeof window === 'undefined') return colourScheme;
    const stored = localStorage.getItem(`${storageKey}-colour-scheme`);
    return (stored as ColourScheme) || colourScheme;
  });

  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultMode;
    const stored = localStorage.getItem(`${storageKey}-mode`);
    return (stored as ThemeMode) || defaultMode;
  });

  /**
   * ✅ Sync state when props change.
   * This is required for Storybook toolbar globals to take effect,
   * because the toolbar changes props at runtime.
   */
  useEffect(() => {
    setColourSchemeState(colourScheme);
  }, [colourScheme]);

  useEffect(() => {
    setModeState(defaultMode);
  }, [defaultMode]);

  const resolvedMode: 'light' | 'dark' = (() => {
    if (mode === 'system') {
      if (typeof window === 'undefined') return 'light';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return mode;
  })();

  // Set attributes on mount and when they change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;

    // CSS still uses "accent" as the attribute name
    root.setAttribute('data-accent', colourSchemeState);

    if (resolvedMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [colourSchemeState, resolvedMode]);

  // Persist to storage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(`${storageKey}-colour-scheme`, colourSchemeState);
  }, [colourSchemeState, storageKey]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(`${storageKey}-mode`, mode);
  }, [mode, storageKey]);

  // Track system changes when in system mode
  useEffect(() => {
    if (mode !== 'system' || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      const root = document.documentElement;
      if (mediaQuery.matches) root.classList.add('dark');
      else root.classList.remove('dark');
    };

    // Ensure we’re correct immediately in case system changed while running
    handleChange();

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const setColourScheme = (newScheme: ColourScheme) => {
    setColourSchemeState(newScheme);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        colourScheme: colourSchemeState,
        mode,
        setColourScheme,
        setMode,
        resolvedMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}