Review the current working diff (`git diff` + `git diff --staged`) like a
strict but fair senior engineer.

Steps:
1. Read the full diff. For any changed function, read enough surrounding code
   to judge the change in context — do not review lines in isolation.
2. Look, in order, for: correctness bugs, missing error/edge handling, security
   issues, test gaps, and only then style.
3. For each finding: file:line, one-sentence problem, one-sentence suggested fix,
   severity (blocker / should-fix / nit).

Output format: findings ranked most-severe first, then a one-paragraph overall
verdict: "merge", "merge after blockers", or "needs rework". If there are no
findings, say so plainly — do not invent nits to seem thorough.
