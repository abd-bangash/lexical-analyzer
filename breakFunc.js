const breakers = [
  ";",
  "s",
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
  "+",
  "-",
  "*",
  "/",
  "%",
  "++",
  "--",
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
const breakFunc = (char1, char2) => {
  if (breakers.includes(char1 + char2) || breakers.includes(char1)) {
    return true;
  }
  return false;
};

export default breakFunc;
