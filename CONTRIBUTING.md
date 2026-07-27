# Contributing

Thanks for helping make the vibe coding curriculum better. Three kinds of
contributions are welcome, in increasing order of effort:

## 1. Fix or improve content (most wanted)

The AI-tool landscape changes monthly, so **factual corrections are the most
valuable PRs** — a renamed flag, a changed pricing tier, a deprecated command,
a stale model name.

- **Curriculum files** (`courses/`, `roadmap/`) are **generated** from the
  site's source of truth (each file says so at the top). Open the PR against
  the generated file anyway — maintainers apply the fix to the site source,
  re-export, and credit you in the merge. Small fix? An issue with a link to
  the wrong line is enough.
- **Awesome list** (`awesome/README.md`) is hand-maintained — edit it directly.

## 2. Add to the awesome list

One PR per addition. A good entry:

- Fits an existing category (or argues briefly for a new one)
- Is something you've actually used — one line on *why it earns the spot*
- Isn't your own product… unless it's genuinely good and you disclose it

## 3. Suggest lessons or translations

Open an issue first with a short outline (what the lesson teaches, which module
it belongs to, why it's missing). Same for translations of the roadmap —
issue first so two people don't translate the same thing.

## Ground rules

- Be accurate over promotional — this list includes competitors on purpose.
- Keep the tone of the existing content: direct, concrete, no hype.
- By contributing you agree your contributions are licensed under the repo's
  licenses (MIT for code, CC BY-SA 4.0 for content).

## Local preview

Markdown only — any editor works. If you're touching the generated files and
want to see the pipeline: the exporter lives in the (currently private) site
repo as `scripts/export-oss.mts`.
