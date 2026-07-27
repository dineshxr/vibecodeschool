# <project-name>

<one line: what this project is>

<!-- AGENTS.md is read by OpenAI Codex and a growing set of agents.
     Same philosophy as CLAUDE.md: commands, constraints, corrections.
     Keep both files if you use both tools; keep them AGREEING. -->

## Setup & commands

- Install: `pnpm install`
- Dev: `pnpm dev`
- Tests: `pnpm test` — run after every change to logic; paste failures verbatim
- Typecheck: `pnpm typecheck`

## Code conventions

- TypeScript strict; no `any` without a comment explaining why.
- Match existing file style and naming — do not introduce new patterns unprompted.
- Small, focused diffs. Multi-file changes: outline the plan first.

## Boundaries

- Never edit: lockfiles by hand, `*/generated/*`, CI config, deploy config.
- Ask before: adding dependencies, schema migrations, changing public API shapes.
- Tests first for new behavior; show the failing test before the implementation.

## Verification

Done means: tests green, typecheck clean, and — for UI — a one-line note on
what to check visually. Say what you verified, not just what you changed.
