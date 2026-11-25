// The Meeting That Should Have Been One Line
// https://make.fun/c/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c
//
// Writes the single sentence that could have replaced an entire
// pointless meeting to /output/entry.txt.
//
// The line works because it does three things at once:
//   1. It names the most universal pointless-meeting verdict there is
//      ("this could have been an email").
//   2. It kills the meeting outright instead of just complaining about
//      it: the meeting is cancelled, not rescheduled.
//   3. It lands as a joke with a turn: the speaker has already sent the
//      email, so there is nothing left for the meeting to do.
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1 to
// 200 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one sentence, one line, no context, no explanation.
const ENTRY =
  "This meeting could have been an email, so I sent it as one and cancelled the meeting.";

// The gate counts characters; keep the entry inside 1..200 characters
// and a single line with no trailing newline issues.
const trimmed = ENTRY.trim();

if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(
    `Entry must be 1-200 characters, got ${trimmed.length}: ${JSON.stringify(trimmed)}`,
  );
}

if (trimmed.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed, "utf8");

// The output is fully deterministic: the same constant string is written
// on every run, so repeated runs are byte-identical.
console.log(`Wrote ${trimmed.length} characters to /output/entry.txt`);
