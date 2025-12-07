# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a Turborepo monorepo containing two primary packages:

- **packages/react**: A Vite-based React component library using Tailwind CSS 4
  - Built with React 19, TypeScript, and Vitest for testing
  - Components exported through `src/index.ts` with types
  - Storybook for component documentation and development
  - Utilities (e.g., `cn` for className merging) in `src/utils`
  - Components organized by feature folders (e.g., `src/spinner/`)

- **packages/mcp**: Model Context Protocol server scaffold
  - Uses `@modelcontextprotocol/sdk` for MCP server functionality
  - Server instance defined in `src/server.ts`, re-exported from `src/index.ts`
  - CommonJS module system (`type: "commonjs"`)

Shared configuration lives at the root:
- `pnpm-workspace.yaml`: Workspace package definition
- `turbo.json`: Turborepo task configuration with build, lint, check-types, and dev tasks
- `tsconfig.base.json`: Base TypeScript configuration (ESNext, strict mode, bundler resolution)

## Development Commands

**Prerequisites**: Node >=18, pnpm 9.0.0

```bash
# Install dependencies
pnpm install

# Development (all packages)
pnpm run dev

# Development (specific package)
pnpm turbo run dev --filter=react
pnpm turbo run dev --filter=mcp

# Build
pnpm run build                        # All packages
pnpm turbo run build --filter=react  # Specific package

# Linting and type checking
pnpm run lint                         # Run ESLint
pnpm run check-types                  # Run TypeScript checks
pnpm run format                       # Format with Prettier (ts/tsx/md files)

# React package - Storybook
pnpm --filter react storybook         # Default port 6006
pnpm --filter react build-storybook   # Build static Storybook

# React package - Vitest
pnpm vitest run --dir packages/react  # Run tests
pnpm vitest --dir packages/react --watch  # Watch mode
```

## Code Organization

### React Package Structure
- **Entry point**: `src/index.ts` exports components and types
- **Styles**: `src/globals.css` for global Tailwind styles
- **Components**: Feature-based folders (e.g., `spinner/`) containing:
  - Component implementation
  - Storybook stories (`.stories.tsx`)
  - Tests (`.test.tsx`)
- **Utils**: Shared utilities in `src/utils/`
- **Hooks**: Custom React hooks in `src/hooks/`

### MCP Package Structure
- **Entry point**: `src/index.ts` re-exports server
- **Server definition**: `src/server.ts` creates McpServer instance with package metadata

## Coding Conventions

- **TypeScript-first**: All code uses TypeScript with strict mode enabled
- **React**: Functional components with props types named `*Props` (e.g., `SpinnerProps`)
- **Naming**:
  - Components/files: PascalCase (`Spinner.tsx`)
  - Utilities/functions: camelCase (`cn`)
- **Imports**: Organize logically (external packages, internal utils, styles)
- **Tailwind**: Use `cn` utility from `tailwind-merge` to merge className strings
- **Formatting**: 2-space indentation, enforced by Prettier

## Testing

- **Vitest** for unit tests, colocated with source code as `*.test.ts`/`*.test.tsx`
- **Storybook** for component visual testing and documentation, colocated as `*.stories.tsx`
- Focus on testing exported behaviors and component states
- Use deterministic fixtures and avoid testing implementation details

## Pre-PR Checklist

Before submitting pull requests:
1. Run `pnpm run lint` and fix any issues
2. Run `pnpm run check-types` and resolve type errors
3. Run relevant builds: `pnpm run build` or with `--filter` for specific packages
4. Run tests: `pnpm vitest run --dir packages/react` (if touching React package)
5. Ensure commit messages follow Conventional Commits (`feat:`, `fix:`, `chore:`)

## Important Notes

- **Package manager**: Must use pnpm 9.0.0 (set in `packageManager` field)
- **Build outputs**: Turborepo caches to `dist/**` directories (gitignored)
- **Turborepo filtering**: Use `--filter=<package-name>` to target specific packages (e.g., `--filter=react`)
- **Module systems**: React package uses ESM; MCP package uses CommonJS
- **TypeScript config**: Each package extends `tsconfig.base.json` with package-specific overrides

Refer to AGENTS.md for additional repository guidelines and development practices.
