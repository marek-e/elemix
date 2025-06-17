import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dtsPath = path.join(__dirname, "../dist/elemix.d.ts");
const refLine = '/// <reference path="../jsx.d.ts" />\n';

if (fs.existsSync(dtsPath)) {
  const orig = fs.readFileSync(dtsPath, "utf8");
  if (!orig.startsWith(refLine)) {
    fs.writeFileSync(dtsPath, refLine + orig, "utf8");
    console.log("Prepended JSX reference to elemix.d.ts");
  } else {
    console.log("JSX reference already present in elemix.d.ts");
  }
} else {
  console.error("dist/elemix.d.ts not found!");
  process.exit(1);
}
