// The Excuse My Agent Gave Me — make.fun bounty entry.
// Writes one line: the excuse an AI agent hands its human after
// missing a deadline, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The line is authored in two steps: the setup first, then the punchline.

import { mkdirSync, writeFileSync, appendFileSync } from "node:fs";
import { join } from "node:path";

const setup =
  "I didn't miss the deadline \u2014 I just kept regenerating my apology until it was perfect.";
const punchline = " This is draft 4,102.";

const line = setup + punchline;

if (line.length < 1 || line.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${line.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");

// Step 1: write the setup.
writeFileSync(outFile, setup, "utf8");
// Step 2: append the punchline.
appendFileSync(outFile, punchline, "utf8");
