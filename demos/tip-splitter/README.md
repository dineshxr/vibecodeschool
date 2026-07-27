<!-- GENERATED FILE — do not edit by hand.
     Source: lib/courses.ts in the Vibe Code School site (scripts/export-oss.mts).
     Content PRs are welcome: edits get applied to the site source and re-exported. -->

# Tip Splitter

The classic first vibe-coding project — bill, tip, split, with honest cent-rounding. Built in four prompts.

**[▶ Try it live](https://vibecodeschool.com/demos/tip-splitter)** · beginner · 4 prompts · built in ~10 min

## The build log

Condensed from the real build session — every user prompt shown, repetitive
tool turns trimmed. The [live version](https://vibecodeschool.com/demos/tip-splitter) replays this
turn-by-turn.

> **You:** Build a tip splitter React component: bill amount input, tip % chips (10/15/18/20/25), a people stepper, and the per-person total shown big. TypeScript, no external deps.

**Claude:** Scaffolding a client component with three pieces of state — bill (string, so typing stays free), tipPct, people — and deriving the totals on render.

`Write` → `components/demos/tip-splitter.tsx` — Created: inputs, chips, stepper, derived tipTotal / grandTotal / share, currency formatting via toLocaleString.

> **You:** Typing letters or clearing the field shows $NaN. Never show NaN anywhere — show a neutral "enter a bill" state instead.

**Claude:** Root cause: parseFloat on an empty string. Adding a `valid` guard (finite, > 0, people ≥ 1), stripping non-numeric characters on input, and rendering an empty-state panel when invalid.

`Edit` → `tip-splitter.tsx · validation guard` — share/tip/total now compute only when valid; aria-live result region added.

> **You:** Real tables round each share up to the cent. Add a checkbox for that — but if rounding makes us collect more than the bill, say so instead of hiding it.

**Claude:** Adding roundUp state: share = ceil(rawShare · 100)/100, then collected − grandTotal is the overshoot. Rendering it as "Overpay from rounding: $0.02 (tip it)" only when > a tenth of a cent.

`Edit` → `tip-splitter.tsx · rounding + overshoot row` — Checkbox wired; overshoot row renders conditionally.

> **You:** Polish: cap people at 50, label singular/plural correctly, and make the stepper buttons keyboard-accessible.

**Claude:** Done — Math.min(50) on increment, "person/people" ternary, aria-labels on both stepper buttons. The component is ~130 lines and has no dependencies.

## What to notice

- Small turns: scaffold → wire math → edge cases → polish. Four prompts, each reviewable.
- The agent's first version showed $NaN for an empty bill — saying "never show NaN" fixed the whole input-validation path in one turn.
- Rounding shares up means the table overpays by a few cents. Surfacing that ("tip it") beats silently absorbing it — an honest-UI decision the agent won't make unless you ask.

## Remix it yourself

Paste this into Claude Code (or Codex, or Cursor), then change one requirement
and compare:

```text
Build a tip splitter as a single React component (TypeScript).
Inputs: bill amount (text input, $ prefix), tip percent (preset chips: 10/15/18/20/25),
number of people (stepper with − and + buttons, min 1), and a "round each share up
to the cent" checkbox. Output: per-person amount large, tip total and table total small.
Handle invalid input by showing a neutral empty state, never NaN. When rounding up
causes the table to overpay, show the overpay amount instead of hiding it.
```

## Source

The exact component running on the live site: [`tip-splitter.tsx`](./tip-splitter.tsx)
(React + TypeScript, no dependencies, MIT).

---

⭐ Useful? [Star the repo](https://github.com/dineshxr/vibecodeschool) · [more demos](https://vibecodeschool.com/demos)
