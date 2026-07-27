Backfill tests for: $ARGUMENTS

Steps:
1. Read the target file and its existing tests (if any). Identify the testing
   framework and file conventions already used in this repo — match them exactly.
2. List the behaviors worth testing, split into: happy paths, failure/edge
   cases, and regressions for anything that looks recently fixed.
3. Write the failure and edge cases FIRST — they catch more bugs than happy paths.
4. Run the test suite. Show the output. Fix anything that fails until green.

Do not test implementation details (private helpers, exact call counts) —
test observable behavior. If a behavior is untestable without refactoring,
note it and stop; do not refactor without asking.
