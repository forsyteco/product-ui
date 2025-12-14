import { ReactNode } from 'react';
export type ColourScheme = 'yellow' | 'blue';
export type ThemeMode = 'light' | 'dark' | 'system';
export type ThemeContextValue = {
    colourScheme: ColourScheme;
    mode: ThemeMode;
    setColourScheme: (scheme: ColourScheme) => void;
    setMode: (mode: ThemeMode) => void;
    resolvedMode: 'light' | 'dark';
};
export declare const ThemeContext: import('react').Context<ThemeContextValue | undefined>;
export type ThemeProviderProps = {
    children: ReactNode;
    colourScheme?: ColourScheme;
    defaultMode?: ThemeMode;
    storageKey?: string;
};
declare function ThemeProvider({ children, colourScheme, defaultMode, storageKey, }: ThemeProviderProps): import("react").JSX.Element;
export default ThemeProvider;
export declare function useTheme(): ThemeContextValue;
//# sourceMappingURL=theme-provider.d.ts.map