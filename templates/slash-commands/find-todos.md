Inventory the tech-debt markers in this repo.

Steps:
1. Search for TODO, FIXME, HACK, and XXX across the codebase (skip vendored
   code, lockfiles, and build output).
2. For each: file:line, the comment text, and — by reading the surrounding
   code — a one-sentence assessment of what it would actually take to resolve.
3. Rank into three buckets: quick wins (<30 min), real tasks, and "stale —
   probably delete the comment".

Output a markdown table per bucket. End with the top 3 you'd do first and why.
