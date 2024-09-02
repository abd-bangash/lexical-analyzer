import Token from "./tokenClass.js";
import TokenClassPart from "./classPart.js";
import {
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
} from "./regex.js";

const tokenize = (string_check) => {
  let t1 = new Token();

  // Skip empty spaces and handle newlines
  if (
    string_check === " " ||
    string_check === "" ||
    string_check === "\t" ||
    string_check === "\n" ||
    string_check === "\r"
  ) {
    if (string_check === "\n") {
      Token.newLine();
    }
    return null;
  }

  // Handle escape sequences and special characters
  if (testPattern(verticalTabRegex, string_check)) {
    t1.setValues("VERTICAL_TAB_CHAR", string_check);
    return t1;
  }
  if (testPattern(newLineRegex, string_check)) {
    t1.setValues("NEW_LINE_CHAR", string_check);
    return t1;
  }
  if (testPattern(hoizontalTabRegex, string_check)) {
    t1.setValues("HORIZONTAL_TAB_CHAR", string_check);
    return t1;
  }
  if (testPattern(carriageReturnRegex, string_check)) {
    t1.setValues("CARRIAGE_RETURN_CHAR", string_check);
    return t1;
  }
  if (testPattern(formFeedRegex, string_check)) {
    t1.setValues("FORM_FEED_CHAR", string_check);
    return t1;
  }
  if (testPattern(backSlashRegex, string_check)) {
    t1.setValues("BACKSLASH_CHAR", string_check);
    return t1;
  }

  // Handle identifiers, excluding those starting with digits
  if (testPattern(idPattern, string_check) && !TokenClassPart[string_check]) {
    t1.setValues("IDENTIFIER", string_check);
    return t1;
  }

  // Handle predefined tokens
  if (TokenClassPart[string_check]) {
    t1.setValues(TokenClassPart[string_check], string_check);
    return t1;
  }

  // Handle integer literals
  if (testPattern(intConstantPattern, string_check)) {
    t1.setValues("INTEGER_LITERAL", string_check);
    return t1;
  }

  // Handle float literals
  if (testPattern(floatConstantPattern, string_check)) {
    t1.setValues("FLOAT_LITERAL", string_check);
    return t1;
  }

  // Handle string literals
  if (testPattern(textConstantPattern, string_check)) {
    t1.setValues("CHARLINE_LITERAL", string_check);
    return t1;
  }
  //handle multi line strings
  if (testPattern(multiLineTextConstantPattern, string_check)) {
    t1.setValues("BLOCK_LITERAL", string_check);
    return t1;
  }

  // Handle invalid lexemes
  t1.setValues("INVALID_LAXIME", string_check);
  console.log("space", string_check); // Debugging log
  return t1;
};

export default tokenize;
