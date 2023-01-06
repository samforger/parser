class Node {
  // Supported operators
  OPERATORS = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
  };

  constructor(opts) {
    this.operator = opts.operator.toString().startsWith("(")
      ? opts.operator.toString().substring(1).toLowerCase()
      : opts.operator.toLowerCase();
    this.a = parseInt(opts.a);
    this.b = parseInt(opts.b);
  }

  resolve() {
    return this.OPERATORS[this.operator](parseInt(this.a), parseInt(this.b));
  }
}

export { Node };
