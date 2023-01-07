import { Parser } from "./Parser.js";

const tests = {
  "(123)": 123,
  "(add 123 456)": 579,
  "(multiply 1 1)": 1,
  "(multiply 0 (multiply 3 4))": 0,
  "(multiply 2 (multiply 3 4))": 24,
  "(multiply 3 (multiply (multiply 3 3) 3))": 81,
  "(add 1 (multiply 2 3))": 7,
  "(multiply 2 (add (multiply 2 3) 8))": 28,
};

const parser = new Parser();

for (const test in tests) {
  const result = parser.resolve(test);
  if (result === tests[test])
    console.log(`Entry: ${test}, expecting ${tests[test]}. PASSED`);
  else {
    console.error(
      `Entry: ${test}, expecting ${tests[test]}. FAILED, received ${result}`
    );
  }
}
