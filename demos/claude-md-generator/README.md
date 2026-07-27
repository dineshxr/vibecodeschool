<!-- GENERATED FILE — do not edit by hand.
     Source: lib/courses.ts in the Vibe Code School site (scripts/export-oss.mts).
     Content PRs are welcome: edits get applied to the site source and re-exported. -->

# CLAUDE.md Generator

Answer six questions, get a ready-to-commit CLAUDE.md for your repo. The most-requested artifact from Course 01, as a tool.

**[▶ Try it live](https://vibecodeschool.com/demos/claude-md-generator)** · useful tool · 3 prompts · built in ~15 min

## The build log

Condensed from the real build session — every user prompt shown, repetitive
tool turns trimmed. The [live version](https://vibecodeschool.com/demos/claude-md-generator) replays this
turn-by-turn.

> **You:** Build a CLAUDE.md generator: form on the left (name, description, stack, package manager, dev/test scripts, house-rule checkboxes, gotchas textarea), live markdown output on the right with a copy button.

**Claude:** Defining the six house rules as data (id, label, template text), form state per field, and building the markdown in a useMemo so the right panel regenerates on every keystroke.

`Write` → `components/demos/claude-md-generator.tsx` — Created: RULES const, form fields, useMemo template with Stack / Commands / House rules / Working agreement sections, CopyButton on the output.

> **You:** The commands section prints `npm dev` — that's wrong, npm needs `npm run dev`. pnpm, yarn, and bun are fine without run.

**Claude:** Right — inserting `run ` only when the package manager is npm: ${pm} ${pm === "npm" ? "run " : ""}${script}. Applied to both dev and test lines.

`Edit` → `claude-md-generator.tsx · npm run fix` — Command lines now conditional on package manager.

> **You:** Gotchas: one bullet per line from the textarea, skip empty lines, and omit the whole section when there are none. Same for the description.

**Claude:** Splitting on newlines, trimming, filtering falsy, mapping to bullets — and the section header renders only when the list is non-empty. Description gets the same conditional treatment. The generated file now has no empty sections.

## What to notice

- Templates + a form beat a blank page: the generator encodes the CLAUDE.md structure taught in Course 01 (stack → commands → house rules → gotchas → working agreement).
- One real subtlety the agent caught only when told: `npm` needs `npm run dev` while pnpm/yarn/bun accept `pnpm dev` — template logic, not styling, is where review attention pays.
- Live output with useMemo means the document is always in sync — no "generate" button to forget.

## Remix it yourself

Paste this into Claude Code (or Codex, or Cursor), then change one requirement
and compare:

```text
Build a "CLAUDE.md generator" React component (TypeScript). Left side: a form —
project name, one-line description, stack, package manager (pnpm/npm/yarn/bun),
dev and test script names, six house-rule checkboxes (small diffs, tests first,
no drive-by refactors, conventional commits, ask before migrations, match style),
and a multiline "project gotchas" field. Right side: the generated CLAUDE.md,
regenerating live via useMemo, with a copy button. npm needs "run" before script
names; the others don't — get that right.
```

## Source

The exact component running on the live site: [`claude-md-generator.tsx`](./claude-md-generator.tsx)
(React + TypeScript, no dependencies, MIT).

---

⭐ Useful? [Star the repo](https://github.com/dineshxr/vibecodeschool) · [more demos](https://vibecodeschool.com/demos)
