# Forsyte Product UI

Monorepo for Forsyte’s published UI packages: a **React 19** design-system component library and an optional **MCP** server. Built with TypeScript, Turborepo, Vite, Vitest, and Storybook.

## Packages

| Package | NPM name | Description |
|---------|----------|-------------|
| [`packages/react`](./packages/react) | `@forsyteco/product-ui` | React component library (Tailwind CSS 4, Headless UI / Radix patterns) |
| [`packages/mcp`](./packages/mcp) | `@forsyteco/product-mcp` | Model Context Protocol server for product tooling |

Consumer setup (install, CSS imports, peer dependencies) is documented in [`packages/react/README.md`](./packages/react/README.md).

## Prerequisites

- Node.js **18+**
- [pnpm](https://pnpm.io/) **9** (see `packageManager` in root `package.json`)

## Getting started

```bash
pnpm install
```

### Build all packages

```bash
pnpm build
```

Build only the React library:

```bash
pnpm exec turbo run build --filter=@forsyteco/product-ui
```

### Develop

Run Storybook for the component library (primary local dev surface):

```bash
pnpm --filter @forsyteco/product-ui storybook
```

Storybook runs at http://localhost:6006.

### Test

```bash
pnpm test
```

React package only:

```bash
pnpm --filter @forsyteco/product-ui test
pnpm --filter @forsyteco/product-ui test:cov
```

Tests use **Vitest** and **React Testing Library**, colocated as `*.test.ts(x)` next to source under `packages/react/src/`.

### Lint and types

```bash
pnpm lint
pnpm check-types
```

### Format

```bash
pnpm format
```

## Repository layout

```
packages/
  react/          # @forsyteco/product-ui — components, styles, Storybook
  mcp/            # @forsyteco/product-mcp — MCP server
.cursor/rules/    # Agent and editor conventions
.opencode/agent/  # OpenCode agents (e.g. PR code reviewer)
```

## Contributing

- Follow `.cursor/rules/` for coding and testing conventions.
- New exported components: colocated Vitest tests, Storybook stories, and exports in `packages/react/src/index.ts` / `package.json` `exports` when using subpaths.
- Do not overwrite vendor or generated primitives without explicit approval (`development-preferences.mdc`).
- Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `test:`, etc.) and write a PR description that explains what changed and any breaking API or CSS migration steps.

### Automated code review on pull requests

Non-draft PRs that change library code trigger [OpenCode](https://github.com/anomalyco/opencode) using `.opencode/agent/code-reviewer.md`. The agent posts an advisory scorecard and inline comments on critical findings.

**One-time repo setup:** add the `ANTHROPIC_API_KEY` repository secret (same key as other Forsyte repos using OpenCode). The workflow needs `pull-requests: write` to post comments via `gh`.

## License

MIT — see package `package.json` files.
