<!-- GENERATED FILE — do not edit by hand.
     Source: lib/courses.ts in the Vibe Code School site (scripts/export-oss.mts).
     Content PRs are welcome: edits get applied to the site source and re-exported. -->

# Focus Timer

A 25/5 pomodoro timer with phase auto-switching and a progress bar — and a React interval bug the agent had to fix properly.

**[▶ Try it live](https://vibecodeschool.com/demos/focus-timer)** · beginner · 4 prompts · built in ~12 min

## The build log

Condensed from the real build session — every user prompt shown, repetitive
tool turns trimmed. The [live version](https://vibecodeschool.com/demos/focus-timer) replays this
turn-by-turn.

> **You:** Build a pomodoro timer component: 25 min focus, 5 min break, auto-switch, MM:SS display, start/pause/reset, session counter. TypeScript React, no deps.

**Claude:** Setting up phase/left/running/sessions state with a setInterval in an effect keyed on `running`, decrementing once per second and flipping phase when the clock hits zero.

`Write` → `components/demos/focus-timer.tsx` — Created: interval effect with cleanup, MM:SS via padStart, phase flip on zero.

> **You:** Bug: in dev, sometimes the break phase gets skipped entirely and sessions count by 2. It flips straight from focus to focus.

**Claude:** That's a StrictMode symptom: the phase flip lives inside the setLeft updater, and React invokes updaters twice in dev to surface exactly this impurity. Fix: the updater only counts down (pure); a separate effect watches for left === 0 and does the flip + session increment once.

`Edit` → `focus-timer.tsx · pure updater + zero-watcher effect` — Updater returns max(s−1, 0); new effect handles focus→break→focus transitions.

> **You:** Add a thin progress bar that fills over the phase, and make the button read Start / Pause / Resume depending on state.

**Claude:** Progress derives from (total − left) / total — no new state. Button label: running → Pause; left === total → Start; otherwise Resume.

`Edit` → `focus-timer.tsx · progress bar + button labels` — role=progressbar with aria values; data-phase attribute for styling.

> **You:** Accessibility pass: the ticking clock shouldn't spam screen readers, but phase changes should be announced.

**Claude:** Set aria-live="off" on the clock (it changes every second) and left the phase label in normal flow — it changes rarely and reads naturally on focus. Done: ~100 lines, cleanup verified, no drift.

## What to notice

- The first version flipped phases *inside* the setLeft updater — React calls updaters twice in StrictMode, so breaks were skipped. The fix: updaters stay pure; the phase flip moved to its own effect watching for zero.
- "Paste the error/behavior verbatim" applies to bugs you can *see* too: describing the exact symptom ("break phase gets skipped sometimes") let the agent name the StrictMode double-invoke immediately.
- Deriving the progress bar from (total − left) / total means no extra state to keep in sync.

## Remix it yourself

Paste this into Claude Code (or Codex, or Cursor), then change one requirement
and compare:

```text
Build a pomodoro focus timer as a single React component (TypeScript).
25-minute focus / 5-minute break phases that switch automatically. Show MM:SS big,
a thin progress bar, Start/Pause/Resume and Reset buttons, and a completed-sessions
counter. The setInterval must be cleaned up correctly (no drift, no double ticks in
StrictMode), and state updater functions must stay pure — no side effects inside them.
```

## Source

The exact component running on the live site: [`focus-timer.tsx`](./focus-timer.tsx)
(React + TypeScript, no dependencies, MIT).

---

⭐ Useful? [Star the repo](https://github.com/dineshxr/vibecodeschool) · [more demos](https://vibecodeschool.com/demos)
