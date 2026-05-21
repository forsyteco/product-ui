import * as React from 'react';
import * as TestingLibrary from '@testing-library/react';

import { CountryFlagProvider } from '../country/flag-provider';

function createTestFlagUrl(isoCode: string): string {
  const code = isoCode.toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><text x="0" y="12" font-size="12">${code}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function TestProviders({ children }: { children: React.ReactNode }) {
  return <CountryFlagProvider getFlagUrl={createTestFlagUrl}>{children}</CountryFlagProvider>;
}

type RenderOptions = NonNullable<Parameters<typeof TestingLibrary.render>[1]>;

export function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { wrapper?: React.ComponentType<{ children: React.ReactNode }> }
) {
  const { wrapper: Wrapper, ...rest } = options ?? {};

  return TestingLibrary.render(ui, {
    ...rest,
    wrapper: Wrapper
      ? ({ children }: { children: React.ReactNode }) => (
          <TestProviders>
            <Wrapper>{children}</Wrapper>
          </TestProviders>
        )
      : TestProviders,
  });
}

export const {
  act,
  cleanup,
  configure,
  fireEvent,
  getConfig,
  renderHook,
  screen,
  waitFor,
  within,
  waitForElementToBeRemoved,
  prettyDOM,
} = TestingLibrary;
