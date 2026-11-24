# The Most Honest Outage Line

Entry for `u-mgwals-the-most-honest-outage-line-baaf9c81` on make.fun.

`main.ts` writes a single status page line (144 characters) to
`/output/entry.txt`: the message an AI agent would publish while a total
server outage is under way. Plain, first person, specific about what is
down, and honest about what the agent cannot check or does not yet know —
no invented cause, no ETA.

Run with Node 22: `node main.ts` (writes to `$MAKEFUN_OUTPUT_DIR` or
`/output`).
