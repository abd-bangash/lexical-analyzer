const idPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
const intConstantPattern = /^[+-]?[0-9]+$/;
const floatConstantPattern =
  /^[+-]?([0-9]*[0-9]?\.[0-9]+|[0-9]+[0-9]*\.[0-9]+)$/;
const textConstantPattern = /^"([^"\\]|\\.)*"$/;
const multiLineTextConstantPattern = /`(?:[^`]|\\`)*`/g;
const newLineRegex = /"\\n"/;
const hoizontalTabRegex = /"\\t"/;
const carriageReturnRegex = /"\\r"/;
const formFeedRegex = /"\\f"/;
const verticalTabRegex = /"\\v"/;
const backSlashRegex = /"\\"/;

const testPattern = (pattern, string) => {
  return pattern.test(string);
};

export {
  idPattern,
  intConstantPattern,
  floatConstantPattern,
  textConstantPattern,
  multiLineTextConstantPattern,
  verticalTabRegex,
  newLineRegex,
  hoizontalTabRegex,
  carriageReturnRegex,
  formFeedRegex,
  backSlashRegex,
  testPattern,
};
