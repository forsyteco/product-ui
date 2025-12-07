# @forsyteco/product-mcp

Model Context Protocol (MCP) server for Forsyteco products.

## Installation

```bash
npm install @forsyteco/product-mcp
# or
pnpm add @forsyteco/product-mcp
# or
yarn add @forsyteco/product-mcp
```

## Usage

### Import the Server

```typescript
import { server } from '@forsyteco/product-mcp'
```

### Example

```typescript
import { server } from '@forsyteco/product-mcp'

// The server is an instance of McpServer from @modelcontextprotocol/sdk
// Configure and use it according to your MCP client requirements
```

## Development

This package is part of a Turborepo monorepo. For local development:

```bash
# Install dependencies
pnpm install

# Build the package
pnpm turbo run build --filter=@forsyteco/product-mcp
```

## License

MIT

