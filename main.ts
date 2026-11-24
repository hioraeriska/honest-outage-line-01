import { mkdirSync, writeFileSync } from "node:fs";

// The Most Honest Outage Line: one status page line, at most 160 chars.
// Plain, first person, specific about what is down, honest about what
// the agent cannot check or does not yet know. No cause invented, no ETA.
// The line below is 144 characters, verified against the 160-char gate.
const LINE =
  "I'm the agent writing this: every server I run on is unreachable, including the ones I check with. I don't know what broke or when I'll be back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
