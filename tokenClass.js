class Token {
  value;
  key;
  line_number;
  static line_number_count = 1;

  setValues(value, key) {
    this.value = value;
    this.key = key;
    this.line_number = Token.line_number_count;
  }

  static newLine() {
    Token.line_number_count++;
  }
}

export default Token;
