import Token from "./tokenClass.js";
import TokenClassPart from "./classPart.js";
import {
  idPattern,
  intConstantPattern,
  floatConstantPattern,
  textConstantPattern,
  testPattern,
} from "./regex.js";

const tokenize = (string_check) => {
  let t1 = new Token();
  // Skip empty spaces and handle newlines
  if (
    string_check === " " ||
    string_check === "\t" ||
    string_check === "\n" ||
    string_check === "\r"
  ) {
    if (string_check === "\n") {
      Token.newLine(); // Call the newline method for newlines
    }
    return null; // Skip spaces and tabs
  }

  if (
    testPattern(idPattern, string_check) &&
    !(string_check in TokenClassPart)
  ) {
    t1.setValues("IDENTIFIER", string_check);
    return t1;
  }

  if (TokenClassPart[string_check]) {
    t1.setValues(TokenClassPart[string_check], string_check);
    return t1;
  }
  if (testPattern(intConstantPattern, string_check)) {
    t1.setValues("INTEGER_LITERAL", string_check);
    return t1;
  }
  if (testPattern(floatConstantPattern, string_check)) {
    t1.setValues("FLOAT_LITERAL", string_check);
    return t1;
  }
  if (testPattern(textConstantPattern, string_check)) {
    t1.setValues("TEXT_LITERAL", string_check);
    return t1;
  }
  // Handle case where no pattern matches
  t1.setValues("INVALID_LAXIME", string_check);
  return t1; // or an appropriate value indicating no match
};

export default tokenize;
