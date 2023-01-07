class Parser {
  DEFAULT_GROUPINGS = {
    left: "(",
    right: ")",
  };

  DEFAULT_OPERATORS = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
  };

  constructor(opts = {}) {
    this.groupings =
      opts.groupings !== undefined ? opts.groupings : this.DEFAULT_GROUPINGS;
    this.operators =
      opts.operators !== undefined ? opts.operators : this.DEFAULT_OPERATORS;
  }

  resolve(expression) {
    // Removes the leading and trailing groupings, if necessary
    if (expression.startsWith(this.groupings.left))
      expression = expression.substring(1, expression.length - 1);

    // If a single number is passed, we simply return it
    if (parseInt(expression) == expression) return parseInt(expression);

    // Base case
    if (expression.indexOf(this.groupings.right) === -1)
      return this.#resolveSingle(expression);

    let nestedRightBound = expression.indexOf(this.groupings.right);
    let nestedLeftBound = expression
      .slice(0, nestedRightBound)
      .lastIndexOf(this.groupings.left);

    const nestedRes = this.#resolveSingle(
      expression.slice(nestedLeftBound + 1, nestedRightBound)
    );

    const resolvedExp =
      expression.slice(0, nestedLeftBound) +
      nestedRes +
      expression.slice(nestedRightBound + 1);

    return this.resolve(resolvedExp);
  }

  #resolveSingle(expression) {
    const array = expression.split(" ");

    const expOp = array[0];
    const args = array.slice(1).map((x) => parseInt(x));

    return this.operators[expOp](...args);
  }
}

export { Parser };
