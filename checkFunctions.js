const stringCheck = (program, current) => {
  let temp = program[current];
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
  return [temp, current];
};

const commentCheck = (program, current) => {
  current++;
  while (current < program.length) {
    if (program[current] === "\n") {
      current++;
      break;
    } else {
      current++;
    }
  }

  return current;
};

const multiLineCommentCheck = (program, current) => {
  current += 2;
  while (current < program.length) {
    if (program[current] === "$" && program[current + 1] === "~") {
      current += 2;
      break;
    } else {
      current++;
    }
  }
  return current;
};

const multiLineStringCheck = (program, current) => {
  let temp = program[current];
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

  return [temp, current];
};

export {
  stringCheck,
  commentCheck,
  multiLineCommentCheck,
  multiLineStringCheck,
};
