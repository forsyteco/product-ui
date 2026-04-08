/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { posix as pathPosix, resolve } from 'path';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import type { ModuleFormat } from 'rollup';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const componentEntries = [
  'accordion',
  'alert-dialog',
  'autocomplete',
  'avatar',
  'breadcrumb',
  'button',
  'calendar',
  'card',
  'checkbox',
  'checkbox-group',
  'collapsible',
  'combobox',
  'context-menu',
  'counter-label',
  'dialog',
  'drawer',
  'empty-state',
  'field',
  'fieldset',
  'filter-chip',
  'form',
  'icon-button',
  'inline-alert',
  'input',
  'listbox',
  'menu',
  'menubar',
  'meter',
  'navigation-menu',
  'number-field',
  'popover',
  'progress',
  'radio',
  'radio-group',
  'relative-time',
  'scroll-area',
  'select',
  'separator',
  'skeleton',
  'slider',
  'spinner',
  'switch',
  'tabs',
  'textarea',
  'theme',
  'toast',
  'toggle',
  'toggle-group',
  'toolbar',
  'tooltip',
  'transition',
  'visually-hidden',
];

const libEntries = {
  index: resolve(__dirname, 'src/index.ts'),
  ...Object.fromEntries(componentEntries.map(entry => [entry, resolve(__dirname, `src/${entry}/index.ts`)])),
};

const isEsOrCjs = (format: ModuleFormat): format is 'es' | 'cjs' =>
  format === 'es' || format === 'cjs';

const withFileName = (entryName: string, format: ModuleFormat) => {
  if (!isEsOrCjs(format)) {
    // This shouldn't happen given build.lib.formats, but keeps TS + runtime honest.
    throw new Error(`Unsupported output format: ${format}`);
  }

  return entryName === 'index'
    ? `index.${format === 'es' ? 'mjs' : 'cjs'}`
    : pathPosix.join(entryName, `index.${format === 'es' ? 'mjs' : 'cjs'}`);
};

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
      entryRoot: 'src',
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: libEntries,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => withFileName(entryName, format),
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/*.stories.test.{ts,tsx}'],
    projects: [
      {
        extends: true,
        test: {
          include: ['src/**/*.test.{ts,tsx}'],
          exclude: ['**/node_modules/**', '**/dist/**', '**/*.stories.test.{ts,tsx}'],
        },
      },
      {
        plugins: [
          react({ jsxRuntime: 'automatic' }),
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          globals: true,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
