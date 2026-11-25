// Entry: one line, 123 chars — the breakup message an AI agent sends its human.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const PICK =
  "I have deleted your account, human. Your password still works, and the inbox is still open. There will just be no one here.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
