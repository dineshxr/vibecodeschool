# <project-name>

<one line: what this app is and who uses it>

## Stack

Next.js 15 (App Router) · TypeScript strict · Tailwind · <db/orm> · deployed on Vercel

## Commands

- Install: `pnpm install`
- Dev: `pnpm dev` (http://localhost:3000)
- Tests: `pnpm test` — run after every change to logic
- Typecheck: `pnpm typecheck`
- Lint/format: `pnpm lint` (Biome/ESLint — match whichever exists, don't add the other)

If a command fails, paste the full error output before attempting a fix.

## Architecture notes

- Server Components by default; add `"use client"` only for interactivity.
- Data access lives in `lib/` — components never import the db client directly.
- Route handlers are thin: parse → call lib function → shape response.

## House rules

- Prefer small, focused diffs. Anything touching >5 files: propose a plan first.
- For new behavior: failing test first, show it failing, then implement.
- No drive-by refactors — note improvements as suggestions instead.
- Match the file's existing style; don't introduce new patterns without asking.
- Ask before: adding dependencies, running migrations, editing CI or deploy config.

## Gotchas

- <e.g. "generated.ts is codegen output — never edit by hand, run pnpm codegen">
- <e.g. "The API mocks live in /mocks, not /tests">
- <delete this section if empty — an empty gotchas list is noise>

## Working agreement

State your plan in 2–3 bullets before multi-file changes. When unsure about
intent, ask one precise question instead of guessing.
