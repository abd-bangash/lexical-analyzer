const TokenClassPart = {
  // Keywords
  whenever: "whenever/otherwise", // Conditional keyword
  otherwise: "whenever/otherwise", // Else if keyword
  elsewise: "elsewise",
  break: "break",
  continue: "continue", // Else keyword
  dountil: "LOOP", // Loop keyword
  dounless: "LOOP", // Loop keyword
  fn: "FN", // Function keyword
  blueprint: "blueprint", // Class keyword
  construct: "construct", // Object creation keyword
  return: "return", // Return keyword
  var: "VAR", // VARIABLE INITIALIZER
  const: "CONST", //LITERAL CONSTANT
  void: "VOID", //NO RETURN FROM FUNCTION
  list: "LIST",

  // Data Types
  numi: "DATA_TYPE", // Integer data type
  numf: "DATA_TYPE", // Float data type
  flag: "DATA_TYPE", // Boolean data type
  charline: "DATA_TYPE", // String data type
  block: "DATA_TYPE", //Multi line string data type

  // Boolean Literals
  true: "FLAG", // Boolean true
  false: "FLAG", // Boolean false

  // Operators
  "+": "Add/Sub", // Arithmetic operator
  "++": "Inc/Dec",
  "--": "Inc/Dec",
  "-": "Add/Sub", // Arithmetic operator
  "*": "Mul/div/mod", // Arithmetic operator
  "/": "Mul/div/mod", // Arithmetic operator
  "%": "Mul/div/mod", // Arithmetic operator
  "==": "COMPARISON_OPERATOR", // Comparison operator
  "!=": "COMPARISON_OPERATOR", // Comparison operator
  "<": "COMPARISON_OPERATOR", // Comparison operator
  ">": "COMPARISON_OPERATOR", // Comparison operator
  "<=": "COMPARISON_OPERATOR", // Comparison operator
  ">=": "COMPARISON_OPERATOR", // Comparison operator
  "&&": "AND_OPERATOR", // Logical operator
  "||": "OR_OPERATOR", // Logical operator
  "!": "NOT_OPERATOR", // Logical operator

  // Delimiters and Symbols
  "(": "OPEN_PARENTHESIS", // Open parenthesis
  ")": "CLOSE_PARENTHESIS", // Close parenthesis
  "{": "OPEN_BRACE", // Open brace
  "}": "CLOSE_BRACE", // Close brace
  "[": "OPEN_BRACKET", // Open bracket
  "]": "CLOSE_BRACKET", // Close bracket
  ";": "STATEMENT_TERMINATOR", // Statement terminator
  ",": "SEPARATOR", // Separator
  "->": "ASSIGNMENT_OPERATOR", // Assignment operator
  ".": "MEMBER_ACCESS_OPERATOR", // Member access operator
  "+->": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  "-->": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  "*->": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  "/->": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  "%->": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  " ": "Empty space",
  "\t": "ESCAPESEQUENCE",
  "\n": "Newline",
  "\r": "ESCAPESEQUENCE",
  "\v": "ESCAPE SEQUENCE",
  "\f": "ESCAPESEQUENCE",

  // Functions
  disp: "output", // Built-in output function
  read: "input", // Built-in input function

  // OOP Aspects
  construct: "OBJECT_CREATION_KEYWORD", // Object creation keyword (same as construct)
  blueprint: "CLASS_KEYWORD", // Class keyword (same as blueprint)
  fn: "METHOD_KEYWORD", // Method declaration within a class
  self: "SELF_REFERENCE_KEYWORD", // This/self reference (same as self)
  inherits: "INHERITANCE_KEYWORD", // Inheritance keyword
  open: "ACCESS_MODIFIER",
  closed: "ACCESS_MODIFIER",
  sealed: "ACCESS_MODIFIER",
  shared: "ACCESS_MODIFIER",
  general: "ACCESS_MODIFIER",
  initiator: "MAIN_METHOD",
  create: "CONSTRUCTOR",

  // Literals
  INTEGER_LITERAL: "INTEGER_LITERAL", // Any integer
  FLOAT_LITERAL: "FLOAT_LITERAL", // Any float
  STRING_LITERAL: "STRING_LITERAL", // Any string
  IDENTIFIER: "IDENTIFIER", // Any valid identifier
};

export default TokenClassPart;
