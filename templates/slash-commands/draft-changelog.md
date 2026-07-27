Draft a changelog entry for the changes since: $ARGUMENTS
(if empty, use the last git tag: `git describe --tags --abbrev=0`)

Steps:
1. `git log <ref>..HEAD --oneline` plus reading the important diffs — group by
   user-visible effect, not by commit.
2. Write for users, not developers: what they can do now, what's fixed, what
   changed behavior. Skip internal chores unless they affect users.
3. Sections in this order, omitting empty ones: Added / Changed / Fixed / Deprecated.
4. One line each, plain language, no commit hashes, no "various improvements".

Output the markdown only — no preamble.
