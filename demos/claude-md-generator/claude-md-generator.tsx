"use client"

import { useMemo, useState } from "react"
import CopyButton from "@/components/copy-button"

const RULES = [
  { id: "small-diffs", label: "Prefer small, reviewable diffs", text: "Prefer small, focused diffs. If a change touches more than ~5 files, stop and propose a plan first." },
  { id: "tests-first", label: "Tests before implementation", text: "For new behavior, write or update the failing test first, show it failing, then implement." },
  { id: "no-drive-by", label: "No drive-by refactors", text: "Do not refactor code unrelated to the task. Note improvements as suggestions instead." },
  { id: "conventional", label: "Conventional commits", text: "Use conventional commit messages (feat:, fix:, chore:, docs:)." },
  { id: "ask-migrations", label: "Ask before schema/config changes", text: "Ask before adding dependencies, running migrations, or editing CI/deploy config." },
  { id: "match-style", label: "Match existing style", text: "Match the file's existing style and naming; do not introduce new patterns without asking." },
] as const

export default function ClaudeMdGenerator() {
  const [name, setName] = useState("my-app")
  const [desc, setDesc] = useState("")
  const [stack, setStack] = useState("Next.js 15 (App Router), TypeScript, Tailwind")
  const [pm, setPm] = useState("pnpm")
  const [devCmd, setDevCmd] = useState("dev")
  const [testCmd, setTestCmd] = useState("test")
  const [rules, setRules] = useState<Record<string, boolean>>({
    "small-diffs": true,
    "tests-first": true,
    "match-style": true,
  })
  const [gotchas, setGotchas] = useState("")

  const md = useMemo(() => {
    const ruleLines = RULES.filter((r) => rules[r.id]).map((r) => `- ${r.text}`)
    const gotchaLines = gotchas
      .split("\n")
      .map((g) => g.trim())
      .filter(Boolean)
      .map((g) => `- ${g}`)

    return `# ${name.trim() || "project"}

${desc.trim() ? desc.trim() + "\n" : ""}
## Stack

${stack.trim() || "(describe your stack)"}

## Commands

- Install: \`${pm} install\`
- Dev server: \`${pm} ${pm === "npm" ? "run " : ""}${devCmd.trim() || "dev"}\`
- Tests: \`${pm} ${pm === "npm" ? "run " : ""}${testCmd.trim() || "test"}\`

Run the tests after every change to logic. If a command fails, paste the full
error before attempting a fix.

## House rules

${ruleLines.length ? ruleLines.join("\n") : "- (pick some rules above)"}
${gotchaLines.length ? `\n## Project gotchas\n\n${gotchaLines.join("\n")}\n` : ""}
## Working agreement

State your plan in 2–3 bullets before multi-file changes. When unsure about
intent, ask one precise question instead of guessing.
`
  }, [name, desc, stack, pm, devCmd, testCmd, rules, gotchas])

  return (
    <div className="demo-app demo-genr">
      <div className="demo-genr-form">
        <div className="demo-field">
          <label htmlFor="g-name">Project name</label>
          <input id="g-name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="demo-field">
          <label htmlFor="g-desc">One-line description (optional)</label>
          <input
            id="g-desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="What is this repo?"
          />
        </div>
        <div className="demo-field">
          <label htmlFor="g-stack">Stack</label>
          <input id="g-stack" value={stack} onChange={(e) => setStack(e.target.value)} />
        </div>
        <div className="demo-field demo-field-row">
          <div>
            <label htmlFor="g-pm">Package manager</label>
            <select id="g-pm" value={pm} onChange={(e) => setPm(e.target.value)}>
              <option value="pnpm">pnpm</option>
              <option value="npm">npm</option>
              <option value="yarn">yarn</option>
              <option value="bun">bun</option>
            </select>
          </div>
          <div>
            <label htmlFor="g-dev">Dev script</label>
            <input id="g-dev" value={devCmd} onChange={(e) => setDevCmd(e.target.value)} />
          </div>
          <div>
            <label htmlFor="g-test">Test script</label>
            <input id="g-test" value={testCmd} onChange={(e) => setTestCmd(e.target.value)} />
          </div>
        </div>
        <div className="demo-field">
          <label>House rules</label>
          {RULES.map((r) => (
            <label key={r.id} className="demo-check">
              <input
                type="checkbox"
                checked={!!rules[r.id]}
                onChange={(e) => setRules((m) => ({ ...m, [r.id]: e.target.checked }))}
              />
              {r.label}
            </label>
          ))}
        </div>
        <div className="demo-field">
          <label htmlFor="g-gotchas">Project gotchas — one per line (optional)</label>
          <textarea
            id="g-gotchas"
            rows={3}
            value={gotchas}
            onChange={(e) => setGotchas(e.target.value)}
            placeholder={"The API mocks live in /mocks, not /tests\nNever edit generated.ts by hand"}
          />
        </div>
      </div>

      <div className="demo-genr-out">
        <div className="demo-genr-out-head">
          <span>CLAUDE.md</span>
          <CopyButton text={md} label="copy file" />
        </div>
        <pre>
          <code>{md}</code>
        </pre>
      </div>
    </div>
  )
}
