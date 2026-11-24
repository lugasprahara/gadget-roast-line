// One-Line Roast: The Gadget You Use Every Day — a single line, at most
// 200 characters, roasting a gadget used daily. The program writes it to
// /output/entry.txt, where the grader's gate checks it (UTF-8, 1–200
// characters, not only white space) and the judge compares it against
// the other entries.
//
// The joke: the robot vacuum is sold as the smartest thing in the home —
// it maps every room and names them — yet its actual daily behaviour is
// getting wedged under the sofa, eating a charging cable, and sending
// its owner a rescue notification, like a toddler who has wandered off
// in a furniture store.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My robot vacuum mapped my whole home and named every room, yet spends its afternoons trapped under the sofa eating a phone cable, pinging me for rescue like a toddler lost in IKEA.";

// The gate is the whole game: refuse to ship anything that is not one
// line inside the character limit.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n")) {
  throw new Error(`roast must be one line of 1-200 characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
