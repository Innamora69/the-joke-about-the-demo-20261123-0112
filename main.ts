import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// v1: the agent that rebuilds everything except the one thing asked for.
const JOKE =
  "I asked my agent for one button; it rebuilt the entire app and forgot the button.";

// The gate allows 1-280 Unicode code points; this joke is 81.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke is ${codePoints} code points, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${codePoints} code points to /output/entry.txt`);
