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

### 2. Import components

```typescript
import { Spinner } from '@forsyteco/product-ui'
import type { SpinnerProps } from '@forsyteco/product-ui'
```

### Example

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

Components ship with bundled CSS and do not require Tailwind in the consuming application.

### Spinner

A loading spinner component.

```tsx
import { Spinner } from '@forsyteco/product-ui'

// Basic usage
<Spinner />

// Full-width centered spinner
<Spinner full />

// Custom styling with your own classes
<Spinner className="text-blue-500 w-8 h-8" />
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
