# CLAUDE.md templates

`CLAUDE.md` is Claude Code's project memory — read at the start of every
session. These templates encode the structure taught in
[Course 01](https://vibecodeschool.com/courses/claude-code-vibe-coding):
**stack → commands → house rules → gotchas → working agreement.**

| Template | For |
|----------|-----|
| [`web-app.CLAUDE.md`](./web-app.CLAUDE.md) | Next.js / React web apps |
| [`mobile-expo.CLAUDE.md`](./mobile-expo.CLAUDE.md) | Expo / React Native apps (EAS builds) |
| [`monorepo.CLAUDE.md`](./monorepo.CLAUDE.md) | Turborepo / pnpm-workspace monorepos |

## How to use

1. Copy the closest template to your repo root as `CLAUDE.md`.
2. Delete every line that isn't true for your project. **Deleting is the
   important step** — the agent trusts this file; wrong memory is worse than no
   memory.
3. From then on, maintain it with one habit: *corrected the agent on the same
   thing twice? That correction becomes a line in CLAUDE.md.*

Or generate one from a form: [claude-md generator](https://vibecodeschool.com/demos/claude-md-generator).
