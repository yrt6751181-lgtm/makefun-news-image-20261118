// news-image-20261118 entry program (Node 22, standard library only).
// The image shipped beside this file is the finished entry: a one-picture
// summary of the world news of Wednesday 18 November 2026. This program
// simply writes that image to the grader's output folder as entry.png.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(targetDir, "entry.png");

// The grader's /output may not exist yet, so create it first.
mkdirSync(targetDir, { recursive: true });

const image = readFileSync(source);
writeFileSync(target, image);

// Fail loudly instead of silently shipping a partial copy.
if (readFileSync(target).length !== image.length) {
  throw new Error("entry.png was not copied whole");
}
