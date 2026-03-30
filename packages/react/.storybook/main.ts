// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [getAbsolutePath('@storybook/addon-vitest')],
  framework: getAbsolutePath('@storybook/react-vite'),

  // ✅ THIS is where it belongs
  staticDirs: ['./public'],

  async viteFinal(viteConfig, options) {
    return mergeConfig(viteConfig, {
      // Keep local dev at "/" so addon-vitest can connect reliably.
      // Use the deployed subpath only for static Storybook builds.
      base: options.configType === 'PRODUCTION' ? '/product-ui/' : '/',
      optimizeDeps: {
        // Pre-bundle known deep imports once to avoid repeated
        // "new dependencies optimized" reload cycles while browsing stories.
        include: [
          '@base-ui/react/accordion',
          '@base-ui/react/alert-dialog',
          '@base-ui/react/avatar',
          '@base-ui/react/button',
          '@base-ui/react/checkbox-group',
          '@base-ui/react/collapsible',
          '@base-ui/react/combobox',
          '@base-ui/react/context-menu',
          '@base-ui/react/dialog',
          '@base-ui/react/drawer',
          '@base-ui/react/field',
          '@base-ui/react/fieldset',
          '@base-ui/react/form',
          '@base-ui/react/input',
          '@base-ui/react/menu',
          '@base-ui/react/menubar',
          '@base-ui/react/meter',
          '@base-ui/react/navigation-menu',
          '@base-ui/react/number-field',
          '@base-ui/react/popover',
          '@base-ui/react/progress',
          '@base-ui/react/radio',
          '@base-ui/react/radio-group',
          '@base-ui/react/scroll-area',
          '@base-ui/react/select',
          '@base-ui/react/separator',
          '@base-ui/react/slider',
          '@base-ui/react/switch',
          '@base-ui/react/tabs',
          '@base-ui/react/toggle',
          '@base-ui/react/toggle-group',
          '@base-ui/react/toolbar',
          '@base-ui/react/tooltip',
        ],
      },
    });
  },
};

export default config;