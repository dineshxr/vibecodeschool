Fix GitHub issue #$ARGUMENTS end-to-end.

Steps:
1. `gh issue view $ARGUMENTS` — read the issue and all comments.
2. Reproduce the problem first: find or write a failing test that captures it.
   If you cannot reproduce, stop and report what you tried.
3. Fix with the smallest change that makes the test pass. No drive-by refactors.
4. Run the full test suite, not just the new test.
5. Summarize: root cause (one sentence), the fix (one sentence), test evidence.

Do not commit or comment on the issue unless asked.
