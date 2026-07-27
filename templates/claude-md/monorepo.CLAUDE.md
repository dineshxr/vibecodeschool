# <monorepo-name>

<one line: what lives in this monorepo>

## Layout

- `apps/web` — <Next.js app>
- `apps/api` — <service>
- `packages/ui` — shared components (published surface: packages/ui/src/index.ts)
- `packages/config` — shared tsconfig/eslint — **changes here affect everything; ask first**

## Commands

Run from the repo root — never `cd` into a package to run its scripts:

- Install: `pnpm install`
- Everything: `pnpm build` / `pnpm test` / `pnpm typecheck` (Turborepo caches; trust cache hits)
- One package: `pnpm --filter <name> test`

If a command fails, paste the full error before attempting a fix.

## Cross-package rules

- Import shared code from the package's public entry (`@repo/ui`), never deep
  paths into another package's src.
- A change in `packages/*` must be validated by running the tests of its
  dependents: `pnpm --filter ...^<package> test` — not just the package itself.
- New shared code goes in an existing package unless we agree a new one is needed.
- Version/dependency bumps happen at the root and stay consistent across
  packages — no per-package drift.

## House rules

- Small diffs; for changes spanning 2+ packages, list affected packages in the plan first.
- No new packages, no dependency additions, no CI edits without asking.
- Match each package's local conventions — they intentionally differ (ui is
  stricter than apps).

## Gotchas

- <e.g. "apps/api uses Node 20 features; don't down-level for the web tsconfig">
- <e.g. "Generated clients in packages/sdk are codegen — run pnpm codegen, never edit">

## Working agreement

State the plan (with affected packages) before multi-package changes. Unsure
which package owns something? Ask — ownership beats guessing here.
