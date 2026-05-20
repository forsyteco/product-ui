# @forsyteco/product-ui

React component library for Forsyte app, built with React 19, TypeScript, and CSS Modules.

## Installation

```bash
npm install @forsyteco/product-ui
# or
pnpm add @forsyteco/product-ui
# or
yarn add @forsyteco/product-ui
```

## Peer Dependencies

This package requires React 19.x:

```bash
npm install react@^19.2.1 react-dom@^19.2.1
```

## Setup

### 1. Import the design system stylesheet

Pull in the bundled component styles, design tokens, and fonts provided by the library:

```css
/* src/index.css or your main CSS file */
@import '@forsyteco/product-ui/styles.css';
```

### 2. Wrap your app with theme + base styles

```tsx
import type { ReactNode } from 'react'
import { ThemeProvider, BaseStyles } from '@forsyteco/product-ui'

type RootLayoutProps = {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider defaultMode="system" colourScheme="yellow">
      <BaseStyles style={{ backgroundColor: 'rgb(var(--background))', minHeight: '100vh' }}>
        {children}
      </BaseStyles>
    </ThemeProvider>
  )
}
```

### 3. Import components

```tsx
import { Spinner } from '@forsyteco/product-ui'

function App() {
  return (
    <div>
      <Spinner />
    </div>
  )
}
```

## Components

Components ship with CSS Modules and shared design tokens. Tailwind is not required in the consuming application.

### Spinner

A loading spinner component.

```tsx
import { Spinner } from '@forsyteco/product-ui'

// Basic usage
<Spinner />

// Custom sizing with inline style or your own app classes
<Spinner style={{ width: 32, height: 32 }} />
```

## Development

This package is part of a Turborepo monorepo. For local development:

```bash
# Install dependencies
pnpm install

# Build the package
pnpm turbo run build --filter=@forsyteco/product-ui

# Run Storybook
pnpm --filter @forsyteco/product-ui storybook
```

## License

MIT
