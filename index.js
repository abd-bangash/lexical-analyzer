import Token from "./tokenClass.js";
import analyzer from "./analyze.js";
import fs from "fs";

try {
  const program = fs.readFileSync("./program.txt", "utf8");
  console.log(program[0]);
  const token_set = analyzer(program);
  console.log(token_set);
} catch (err) {
  console.error(err);
}
