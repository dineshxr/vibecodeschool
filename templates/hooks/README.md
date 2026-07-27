# Hook recipes

Hooks run shell commands at lifecycle points in a Claude Code session —
deterministic guardrails that don't depend on the model remembering your
rules. Configure them in `.claude/settings.json`. Docs:
[code.claude.com/docs → hooks](https://code.claude.com/docs/en/hooks-guide).

Three recipes that cover most teams' needs:

## 1. Auto-format every file the agent edits

`PostToolUse` on Edit/Write — the agent never ships unformatted code, and you
never see formatting noise in diffs:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | { read f; [[ \"$f\" == *.ts || \"$f\" == *.tsx ]] && npx prettier --write \"$f\" > /dev/null 2>&1; true; }"
          }
        ]
      }
    ]
  }
}
```

## 2. Protect files the agent must never touch

`PreToolUse` that blocks edits to protected paths (exit code 2 = block, stderr
is shown to the agent as feedback):

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | { read f; case \"$f\" in *generated*|*.lock|*/migrations/*) echo \"BLOCKED: $f is protected — edit the source/codegen instead\" >&2; exit 2;; esac; }"
          }
        ]
      }
    ]
  }
}
```

## 3. Surface test results after every logic change

`PostToolUse` that runs the affected package's quick tests and pipes failures
straight back into the loop (the agent sees stderr and fixes without being
asked):

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | { read f; [[ \"$f\" == src/* ]] && pnpm vitest related \"$f\" --run --reporter=dot 2>&1 | tail -5; true; }"
          }
        ]
      }
    ]
  }
}
```

**Rules of thumb:** hooks must be fast (they run synchronously on every
matching tool call), fail loud (`exit 2` + stderr beats silent skipping), and
enforce only things you'd also enforce in CI. Course 01's
[hooks lesson](https://vibecodeschool.com/courses/claude-code-vibe-coding)
covers the full lifecycle.
