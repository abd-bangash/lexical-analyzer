import Token from "./tokenClass.js";
import tokenize from "./tokenize.js";
import breakers from "./breakFunc.js";

const analyzer = (program) => {
  let current = 0;
  let temp = "";
  let tokens = [];

  while (current < program.length) {
    let matchedBreaker = null;

    // Handle string literals
    if (program[current] === '"') {
      let temp_token = new Token();
      temp_token = tokenize(temp);
      tokens.push(temp_token);
      temp = "";
      temp += program[current];
      current++;

      while (current < program.length) {
        if (program[current] === '"' && program[current - 1] !== "\\") {
          temp += program[current];
          current++;
          break;
        } else if (program[current] === "\n") {
          current++;
          break;
        } else {
          temp += program[current];
          current++;
        }
      }

      temp_token = tokenize(temp);
      tokens.push(temp_token);
      temp = "";
      continue;
    }

    // handling comments
    if (program[current] === "#") {
      let temp_token = new Token();
      temp_token = tokenize(temp);
      tokens.push(temp_token);
      temp = "";
      current++;

      while (current < program.length) {
        if (program[current] === "\n") {
          current++;
          break;
        } else {
          current++;
        }
      }
      continue;
    }

    //handling multi line comments
    if (program[current] === "/" && program[current + 1] === "*") {
      let temp_token = new Token();
      temp_token = tokenize(temp);
      tokens.push(temp_token);
      temp = "";
      current += 2;

      while (current < program.length) {
        if (program[current] === "*" && program[current + 1] === "/") {
          current += 2;
          break;
        } else {
          current++;
        }
      }
      continue;
    }

    // handling multi line strings
    if (program[current] === "`") {
      let temp_token = new Token();
      temp_token = tokenize(temp);
      tokens.push(temp_token);
      temp = "";
      temp += program[current];
      current++;

      while (current < program.length) {
        if (program[current] === "`" && program[current - 1] !== "\\") {
          temp += program[current];
          current++;
          break;
        } else {
          temp += program[current];
          current++;
        }
      }

      temp_token = tokenize(temp);
      tokens.push(temp_token);
      temp = "";
      continue;
    }

    // Try to match the longest breaker first
    for (let length = 3; length > 0; length--) {
      const subStr = program.substring(current, current + length);
      if (breakers.includes(subStr)) {
        matchedBreaker = subStr;
        break;
      }
    }

    if (matchedBreaker) {
      if (temp) {
        let temp_token = new Token();
        temp_token = tokenize(temp);
        tokens.push(temp_token);
        temp = "";
      }

      // Tokenize the breaker
      let breaker_token = tokenize(matchedBreaker);
      if (breaker_token) {
        tokens.push(breaker_token);
      }

      current += matchedBreaker.length;
    } else {
      temp += program[current];
      current++;
    }
  }

  if (temp) {
    let temp_token = new Token();
    temp_token = tokenize(temp);
    tokens.push(temp_token);
  }

  return tokens;
};

export default analyzer;
