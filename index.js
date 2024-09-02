import Token from "./tokenClass.js";
import analyzer from "./analyze.js";
import fs from "fs";

try {
  const program = fs.readFileSync("./program.txt", "utf8");
  console.log(program[0]);
  const token_set = analyzer(program);
  fs.writeFileSync("output.txt", JSON.stringify(token_set, null, 2));
  console.log(token_set);
} catch (err) {
  console.error(err);
}
