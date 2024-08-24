import Token from "./tokenClass.js";
import tokenize from "./tokenize.js";

const breakers = [
  ";",
  "\t",
  "\n",
  "\r",
  "\v",
  "\f",
  " ",
  ",",
  "{",
  "}",
  "(",
  ")",
  "[",
  "]",
  "+",
  "-",
  "*",
  "/",
  "%",
  "++",
  "--",
  "=",
  "<",
  ">",
  "<=",
  ">=",
  "!=",
  "==",
  "&&",
  "||",
  "!",
  "+=",
  "-=",
  "*=",
  "/=",
  "%=",
];

const analyzer = (program) => {
  let current = 0;
  let temp = "";
  let tokens = [];

  while (current < program.length) {
    let matchedBreaker = null;

    // Try to match the longest breaker first
    for (let length = 3; length > 0; length--) {
      const subStr = program.substring(current, current + length);
      if (breakers.includes(subStr)) {
        matchedBreaker = subStr;
        break;
      }
    }

    if (matchedBreaker) {
      // Tokenize the collected characters (if any) before the breaker
      if (temp) {
        let temp_token = tokenize(temp);
        tokens.push(temp_token);
        temp = ""; // Clear the temp variable
      }

      // Tokenize the breaker
      let breaker_token = tokenize(matchedBreaker);
      if (breaker_token) {
        tokens.push(breaker_token);
      }

      // Move past the breaker
      current += matchedBreaker.length;
    } else {
      // Collect characters if no breaker is matched
      temp += program[current];
      current++;
    }
  }

  // Tokenize any remaining characters in temp after the loop
  if (temp) {
    let temp_token = tokenize(temp);
    tokens.push(temp_token);
  }

  return tokens;
};

export default analyzer;
