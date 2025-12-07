# @forsyteco/product-ui

React component library for Forsyteco products, built with React 19, TypeScript, and Tailwind CSS 4.

## Installation

```bash
npm install @forsyteco/product-ui
# or
pnpm add @forsyteco/product-ui
# or
yarn add @forsyteco/product-ui
```

## Peer Dependencies

This package requires React 19.2.1 or higher:

```bash
npm install react@^19.2.1 react-dom@^19.2.1
```

## Usage

### Import Components

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

All components are self-contained with their own styles. You can override styles by passing a `className` prop, which will be merged with the component's default styles.

### Spinner

A loading spinner component.

```tsx
import { Spinner } from '@forsyteco/product-ui'

// Basic usage
<Spinner />

// Full-width centered spinner
<Spinner full />

// Custom styling with Tailwind classes
<Spinner className="text-blue-500 w-8 h-8" />
```

Components use Tailwind CSS classes internally. If you have Tailwind configured in your project, you can override styles using the `className` prop.

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

