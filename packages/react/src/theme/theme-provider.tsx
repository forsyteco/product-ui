import { type ReactNode, createContext, useContext, useEffect, useState } from 'react';

export type AccentColor = 'yellow' | 'blue';

export type ThemeMode = 'light' | 'dark' | 'system';

export type ThemeContextValue = {
  accent: AccentColor;
  mode: ThemeMode;
  setAccent: (accent: AccentColor) => void;
  setMode: (mode: ThemeMode) => void;
  resolvedMode: 'light' | 'dark';
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export type ThemeProviderProps = {
  children: ReactNode;
  colourScheme?: AccentColor;
  defaultMode?: ThemeMode;
  storageKey?: string;
};

function ThemeProvider({
  children,
  colourScheme = 'yellow',
  defaultMode = 'system',
  storageKey = 'forsyteco-theme',
}: ThemeProviderProps) {
  const [accent, setAccentState] = useState<AccentColor>(() => {
    if (typeof window === 'undefined') return colourScheme;
    const stored = localStorage.getItem(`${storageKey}-accent`);
    return (stored as AccentColor) || colourScheme;
  });

  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultMode;
    const stored = localStorage.getItem(`${storageKey}-mode`);
    return (stored as ThemeMode) || defaultMode;
  });

  const resolvedMode: 'light' | 'dark' = (() => {
    if (mode === 'system') {
      if (typeof window === 'undefined') return 'light';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return mode;
  })();

  // Set attributes synchronously on mount and when they change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    
    root.setAttribute('data-accent', accent);
    
    if (resolvedMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [accent, resolvedMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(`${storageKey}-accent`, accent);
  }, [accent, storageKey]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(`${storageKey}-mode`, mode);
  }, [mode, storageKey]);

  useEffect(() => {
    if (mode !== 'system' || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const root = document.documentElement;
      if (mediaQuery.matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const setAccent = (newAccent: AccentColor) => {
    setAccentState(newAccent);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  return (
    <ThemeContext.Provider value={{ accent, mode, setAccent, setMode, resolvedMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

