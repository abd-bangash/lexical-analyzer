const idPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
const intConstantPattern = /^[+-]?[0-9]+$/;
const floatConstantPattern =
  /^[+-]?([0-9]*[0-9]\.[0-9]+|[0-9]+[0-9]*\.[0-9]+)$/;
const textConstantPattern = /^"([^"\\]|\\.)*"$/;

const testPattern = (pattern, string) => {
  return pattern.test(string);
};

console.log(testPattern(textConstantPattern, "9ahh"));

export {
  idPattern,
  intConstantPattern,
  floatConstantPattern,
  textConstantPattern,
  testPattern,
};
