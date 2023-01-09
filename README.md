# Requirements

Node.js must be installed

# How to run this tool

Use the command `node index.js "<EXPRESSION TO CALCULATE>"`

# Adding new operators

Operators and their corresponding calculations are located in the file Parser.js. They can be modified directly, or can be passed through the variables operators during the initialization of the parser. Same with groupings.
An operator supports more than 2 arguments, as long as its corresponding function has a matching number of arguments.

# Error Handling

If I were to add error handling, I would introduce some validations when initializing the parser, as well as well checking for the operator when resolving the expression.

# Tests

Tests can be run with `npm run test`
