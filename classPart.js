const TokenClassPart = {
  // Keywords
  whenever: "whenever/otherwise", // Conditional keyword
  otherwise: "whenever/otherwise", // Else if keyword
  elsewise: "elsewise",
  break: "break",
  continue: "continue", // Else keyword
  repeat: "repeat", // Loop keyword
  def: "def", // Function keyword
  blueprint: "blueprint", // Class keyword
  construct: "construct", // Object creation keyword
  return: "return", // Return keyword

  // Data Types
  int: "DATA_TYPE", // Integer data type
  float: "DATA_TYPE", // Float data type
  bool: "DATA_TYPE", // Boolean data type
  text: "DATA_TYPE", // String data type

  // Boolean Literals
  true: "boolean", // Boolean true
  false: "boolean", // Boolean false

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
  "=": "Equals", // Assignment operator
  ".": "MEMBER_ACCESS_OPERATOR", // Member access operator
  "+=": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  "-=": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  "*=": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  "/=": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  "%=": "COMPOUND_ASSIGNMENT_OPERATOR", // Compound assignment operator
  " ": "Empty space",
  "\t": "ESCAPESEQUENCE",
  "\n": "Newline",
  "\r": "ESCAPESEQUENCE",
  "\v": "ESCAPE SEQUENCE",
  "\f": "ESCAPESEQUENCE",

  // Functions
  output: "output", // Built-in output function
  input: "input", // Built-in input function

  // OOP Aspects
  new: "OBJECT_CREATION_KEYWORD", // Object creation keyword (same as construct)
  class: "CLASS_KEYWORD", // Class keyword (same as blueprint)
  method: "METHOD_KEYWORD", // Method declaration within a class
  this: "SELF_REFERENCE_KEYWORD", // This/self reference (same as self)
  inherits: "INHERITANCE_KEYWORD", // Inheritance keyword

  // Literals
  INTEGER_LITERAL: "INTEGER_LITERAL", // Any integer
  FLOAT_LITERAL: "FLOAT_LITERAL", // Any float
  STRING_LITERAL: "STRING_LITERAL", // Any string
  IDENTIFIER: "IDENTIFIER", // Any valid identifier
};

export default TokenClassPart;
