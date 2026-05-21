import * as React from 'react';

export type CountryFlagContextValue = {
  getFlagUrl: (isoCode: string) => string | undefined;
};

const CountryFlagContext = React.createContext<CountryFlagContextValue | null>(null);

export type CountryFlagProviderProps = {
  getFlagUrl: (isoCode: string) => string | undefined;
  children: React.ReactNode;
};

export function CountryFlagProvider({ getFlagUrl, children }: CountryFlagProviderProps) {
  const value = React.useMemo(() => ({ getFlagUrl }), [getFlagUrl]);

  return <CountryFlagContext.Provider value={value}>{children}</CountryFlagContext.Provider>;
}

export function useCountryFlagUrl(isoCode: string): string | undefined {
  const context = React.useContext(CountryFlagContext);
  return context?.getFlagUrl(isoCode.toUpperCase());
}
