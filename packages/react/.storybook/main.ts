import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { dirname } from "path"
import { fileURLToPath } from "url"
import tailwindcss from '@tailwindcss/vite'

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [getAbsolutePath("@storybook/addon-vitest")],
  framework: getAbsolutePath('@storybook/react-vite'),
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        tailwindcss(),
      ],
    });
  },
};
export default config;
