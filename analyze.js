import Token from "./tokenClass.js";
import tokenize from "./tokenize.js";
import breakers from "./breakFunc.js";
import {
  stringCheck,
  commentCheck,
  multiLineCommentCheck,
  multiLineStringCheck,
} from "./checkFunctions.js";

const tokenMaker = (temp, tokenize, tokens) => {
  let temp_token = new Token();
  temp_token = tokenize(temp);
  tokens.push(temp_token);
  temp = "";
  return [temp, tokens];
};

const analyzer = (program) => {
  let current = 0;
  let temp = "";
  let tokens = [];

  while (current < program.length) {
    let matchedBreaker = null;

    // Handle string literals
    if (program[current] === '"') {
      [temp, tokens] = tokenMaker(temp, tokenize, tokens);
      [temp, current] = stringCheck(program, current);
      [temp, tokens] = tokenMaker(temp, tokenize, tokens);
      continue;
    }

    // handling comments
    if (program[current] === "#") {
      [temp, tokens] = tokenMaker(temp, tokenize, tokens);
      current = commentCheck(program, current);
      continue;
    }

    //handling multi line comments
    if (program[current] === "/" && program[current + 1] === "*") {
      [temp, tokens] = tokenMaker(temp, tokenize, tokens);
      current = multiLineCommentCheck(program, current);
      continue;
    }

    // handling multi line strings
    if (program[current] === "`") {
      [temp, tokens] = tokenMaker(temp, tokenize, tokens);
      [temp, current] = multiLineStringCheck(program, current);
      [temp, tokens] = tokenMaker(temp, tokenize, tokens);
      continue;
    }
    // handling the dot operator (still some cases not fulfilled)

    if (program[current] === ".") {
      if (!/^\d$/.test(program[current - 1])) {
        [temp, tokens] = tokenMaker(temp, tokenize, tokens);
      }
      if (/^\d$/.test(program[current + 1])) {
        temp += ".";
        current++;
        while (
          current < program.length &&
          !breakers.includes(program[current])
        ) {
          temp += program[current];
          current++;
        }
        [temp, tokens] = tokenMaker(temp, tokenize, tokens);
      } else {
        if (temp) {
          [temp, tokens] = tokenMaker(temp, tokenize, tokens);
        }
        temp = ".";
        [temp, tokens] = tokenMaker(temp, tokenize, tokens);
        current++;
      }
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
        [temp, tokens] = tokenMaker(temp, tokenize, tokens);
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
    [temp, tokens] = tokenMaker(temp, tokenize, tokens);
  }
  tokens = tokens.filter((token) => token !== null);
  return tokens;
};

export default analyzer;
