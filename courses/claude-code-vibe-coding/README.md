<!-- GENERATED FILE — do not edit by hand.
     Source: lib/courses.ts in the Vibe Code School site (scripts/export-oss.mts).
     Content PRs are welcome: edits get applied to the site source and re-exported. -->

# Vibe Coding using Claude Code

> Ship real software at the speed of conversation.

From your first /init to capstone deploy. Claude Code as your daily driver: every prompt pattern, every workflow, every guardrail.

| | |
|---|---|
| **Level** | Beginner |
| **Lessons** | 28 across 5 modules |
| **Time** | ~14 hours |
| **Cost** | Free · no signup |
| **Take it interactively** | [https://vibecodeschool.com/courses/claude-code-vibe-coding](https://vibecodeschool.com/courses/claude-code-vibe-coding) |

Every lesson below links to its interactive version — steps you run locally,
scrubbable agent-session replays, and a quiz that gates completion.

## Module 1 — Setup & Foundations

Install the CLI, learn the loop, set up project memory. End of this module you're operational.

- **[What Is Claude Code](https://vibecodeschool.com/learn/cc-01-what-is-claude-code)** · Concept · 8 min
  An agentic CLI that reads your repo, edits files, runs tests, and commits — all with permission gates you control.
- **[Install the CLI](https://vibecodeschool.com/learn/cc-02-install-the-cli)** · Walkthrough · 6 min
  Get Claude Code running on your machine and verify the install.
- **[Your First Conversation](https://vibecodeschool.com/learn/cc-03-first-conversation)** · Sandbox replay · 10 min
  Watch the agentic loop in action: a single prompt, a tool call, a result, an answer. This is the heartbeat.
- **[The Agentic Loop](https://vibecodeschool.com/learn/cc-04-the-agentic-loop)** · Concept · 9 min
  Plan → act → observe → adjust. Understanding this loop is the difference between fighting the agent and flowing with it.
- **[CLAUDE.md and Project Memory](https://vibecodeschool.com/learn/cc-05-claude-md-and-memory)** · Walkthrough · 12 min
  Project-level instructions the agent loads automatically. The single highest-leverage file in your repo when you work this way.

## Module 2 — Core Workflows

The day-to-day loops that make agentic coding faster than typing.

- **[Reading and Editing Files](https://vibecodeschool.com/learn/cc-06-reading-and-editing)** · Sandbox replay · 9 min
  The agent navigates, edits, and verifies across multiple files in one turn.
- **[Searching the Codebase](https://vibecodeschool.com/learn/cc-07-searching-the-codebase)** · Sandbox replay · 8 min
  Glob finds files by pattern. Grep finds content inside them. Knowing which to use is half the speed.
- **[Running Tests with Claude](https://vibecodeschool.com/learn/cc-08-running-tests)** · Sandbox replay · 10 min
  Tight feedback loops: run, read failure, fix, run again — without you driving.
- **[Git Operations and Commits](https://vibecodeschool.com/learn/cc-09-git-and-commits)** · Walkthrough · 10 min
  Letting the agent stage, write a real commit message, and stop short of pushing.
- **[Multi-File Refactors](https://vibecodeschool.com/learn/cc-10-multi-file-refactors)** · Sandbox replay · 11 min
  Renames, signature changes, and dependency updates done as one coherent change.
- **[Debugging with Claude](https://vibecodeschool.com/learn/cc-11-debugging)** · Sandbox replay · 12 min
  Hypothesis → instrumentation → evidence → fix. The structured-debug pattern.

## Module 3 — Power Features

Slash commands, skills, subagents, plan mode, hooks, and MCP — the tools that let you bend Claude Code to your workflow.

- **[Slash Commands](https://vibecodeschool.com/learn/cc-12-slash-commands)** · Walkthrough · 8 min
  The built-ins worth memorizing: /init, /clear, /resume, /compact, /rewind, /model.
- **[Writing Your Own Slash Command](https://vibecodeschool.com/learn/cc-13-custom-slash-commands)** · Walkthrough · 11 min
  A markdown file in .claude/commands/ becomes a callable workflow.
- **[Agent Skills](https://vibecodeschool.com/learn/cc-28-agent-skills)** · Walkthrough · 11 min
  Folders of expertise the agent loads on demand. Commands are prompts you fire; skills are capabilities Claude reaches for itself.
- **[Subagents and the Agent Tool](https://vibecodeschool.com/learn/cc-14-subagents)** · Concept · 10 min
  When to delegate to a subagent vs do it inline. Context budgets explained.
- **[Plan Mode](https://vibecodeschool.com/learn/cc-15-plan-mode)** · Sandbox replay · 9 min
  Read-only thinking before any edit. The cure for premature commitment.
- **[Hooks: Pre and Post Tool](https://vibecodeschool.com/learn/cc-16-hooks)** · Walkthrough · 11 min
  Run a script before or after each tool call. Lint on every edit; auto-test on commit.
- **[MCP Servers](https://vibecodeschool.com/learn/cc-17-mcp-servers)** · Concept · 10 min
  Pluggable tools beyond the built-ins. Connecting your database, your Slack, your Linear.

## Module 4 — Vibe Coding Patterns

Prompts and rhythms that compound. The difference between a senior vibe coder and a tourist.

- **[Spec → Tests → Code](https://vibecodeschool.com/learn/cc-18-spec-tests-code)** · Walkthrough · 12 min
  Front-load tests; let the agent fill them in. Why this beats spec → code → tests.
- **[Iterative Refinement](https://vibecodeschool.com/learn/cc-19-iterative-refinement)** · Sandbox replay · 10 min
  Three small turns beat one giant turn. How to size a single ask.
- **[When to Interrupt vs Let It Run](https://vibecodeschool.com/learn/cc-20-when-to-interrupt)** · Concept · 8 min
  Reading the loop. Knowing when re-planning is cheaper than waiting.
- **[Code Review with Claude](https://vibecodeschool.com/learn/cc-21-code-review)** · Sandbox replay · 10 min
  Using the agent as a second pair of eyes on your own diff before you push.
- **[The Pair-Programming Flow](https://vibecodeschool.com/learn/cc-22-pair-programming-flow)** · Concept · 9 min
  How to stay in flow when the agent is your driver and you're the navigator.

## Module 5 — Real Projects

Full-loop case studies. Not toy examples — real shippable work.

- **[Building a Next.js Feature](https://vibecodeschool.com/learn/cc-23-nextjs-feature)** · Sandbox replay · 14 min
  From issue to deployed PR. A complete loop on a realistic Next.js codebase.
- **[Writing Tests-First](https://vibecodeschool.com/learn/cc-24-tests-first)** · Sandbox replay · 12 min
  Red, green, refactor — but the agent does the typing.
- **[Migrating Legacy Code](https://vibecodeschool.com/learn/cc-25-legacy-migration)** · Sandbox replay · 13 min
  TypeScript adoption in a JS codebase, one module at a time, tests stay green.
- **[Shipping to Production](https://vibecodeschool.com/learn/cc-26-shipping-to-production)** · Walkthrough · 12 min
  Pre-deploy checks, the migration script, the rollback plan.
- **[Capstone: Ship a Side Project](https://vibecodeschool.com/learn/cc-27-capstone)** · Walkthrough · 60 min
  Pick a real idea, scope it, build it with Claude Code, deploy it. Course-end project.

---

⭐ Useful? [Star the repo](https://github.com/dineshxr/vibecodeschool) and [start the course free](https://vibecodeschool.com/courses/claude-code-vibe-coding).
