# Slash-command templates

Custom slash commands are markdown files in `.claude/commands/` — the filename
becomes the command (`review-pr.md` → `/review-pr`). `$ARGUMENTS` is replaced
with whatever you type after the command.

Copy any of these into your repo's `.claude/commands/` and adapt:

| Command | What it does |
|---------|--------------|
| [`/review-pr`](./review-pr.md) | Reviews the current diff like a strict senior engineer |
| [`/add-tests`](./add-tests.md) | Backfills tests for a file, failure cases first |
| [`/fix-issue`](./fix-issue.md) | Takes a GitHub issue number, fixes it end-to-end |
| [`/draft-changelog`](./draft-changelog.md) | Turns recent commits into a human changelog entry |
| [`/find-todos`](./find-todos.md) | Inventories TODO/FIXME/HACK and ranks them |
| [`/explain`](./explain.md) | Explains a file or symbol at your chosen depth |

The pattern that makes commands good: **state the role, the exact steps, and
the output format** — a command is a repeatable prompt, so invest in it like
code. More in [Course 01](https://vibecodeschool.com/courses/claude-code-vibe-coding).
