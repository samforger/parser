import { Node } from "./Node.js";

if (process.argv.length < 2) console.error("No Argument");
else {
  const result = parseExpression(process.argv[2]);

  console.log(result);
}

function parseExpression(exp) {
  // Removes leading and trailing parentheses
  exp = exp.substring(1, exp.length - 1);

  const array = exp.split(" ");

  let operator = array[0];
  let a, b;

  if (array[1].startsWith("(")) {
    a = parseExpression(array.slice(1, array.length - 1).join(" "));
    b = array[array.length - 1];
  } else if (array[2].startsWith("(")) {
    a = array[1];
    b = parseExpression(array.slice(2).join(" "));
  } else {
    a = array[1];
    b = array[2];
  }

  return new Node({
    operator,
    a,
    b,
  }).resolve();
}
