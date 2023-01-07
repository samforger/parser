import { Parser } from "./Parser.js";
import process from "node:process";

if (process.argv.length < 3) {
  console.error("Please add an argument");
  process.exit(1);
}

const res = new Parser().resolve(process.argv[2]);

console.log(res);
