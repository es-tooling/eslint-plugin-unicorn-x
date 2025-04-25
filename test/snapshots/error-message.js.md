// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'new AggregateError(errors)' > Code 1`] = `
"
  1 | new AggregateError(errors)
"
`;

exports[`invalid(0): 'new AggregateError(errors)' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Pass a message to the \`AggregateError\` constructor.
"
`;

exports[`invalid(0): 'throw new Error()' > Code 1`] = `
"
  1 | throw new Error()
"
`;

exports[`invalid(0): 'throw new Error()' > Error 1/1 1`] = `
"
> 1 | throw new Error()
    |       ^^^^^^^^^^^ Pass a message to the \`Error\` constructor.
"
`;

exports[`invalid(1): 'AggregateError(errors)' > Code 1`] = `
"
  1 | AggregateError(errors)
"
`;

exports[`invalid(1): 'AggregateError(errors)' > Error 1/1 1`] = `
"
> 1 | AggregateError(errors)
    | ^^^^^^^^^^^^^^^^^^^^^^ Pass a message to the \`AggregateError\` constructor.
"
`;

exports[`invalid(1): 'throw Error()' > Code 1`] = `
"
  1 | throw Error()
"
`;

exports[`invalid(1): 'throw Error()' > Error 1/1 1`] = `
"
> 1 | throw Error()
    |       ^^^^^^^ Pass a message to the \`Error\` constructor.
"
`;

exports[`invalid(2): 'new AggregateError(errors, "")' > Code 1`] = `
"
  1 | new AggregateError(errors, "")
"
`;

exports[`invalid(2): 'new AggregateError(errors, "")' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, "")
    |                            ^^ Error message should not be an empty string.
"
`;

exports[`invalid(2): 'throw new Error(\\'\\')' > Code 1`] = `
"
  1 | throw new Error('')
"
`;

exports[`invalid(2): 'throw new Error(\\'\\')' > Error 1/1 1`] = `
"
> 1 | throw new Error('')
    |                 ^^ Error message should not be an empty string.
"
`;

exports[`invalid(3): 'new AggregateError(errors, \`\`)' > Code 1`] = `
"
  1 | new AggregateError(errors, \`\`)
"
`;

exports[`invalid(3): 'new AggregateError(errors, \`\`)' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, \`\`)
    |                            ^^ Error message should not be an empty string.
"
`;

exports[`invalid(3): 'throw new Error(\`\`)' > Code 1`] = `
"
  1 | throw new Error(\`\`)
"
`;

exports[`invalid(3): 'throw new Error(\`\`)' > Error 1/1 1`] = `
"
> 1 | throw new Error(\`\`)
    |                 ^^ Error message should not be an empty string.
"
`;

exports[`invalid(4): 'const err = new Error();\\nthrow err;' > Code 1`] = `
"
  1 | const err = new Error();
  2 | throw err;
"
`;

exports[`invalid(4): 'const err = new Error();\\nthrow err;' > Error 1/1 1`] = `
"
> 1 | const err = new Error();
    |             ^^^^^^^^^^^ Pass a message to the \`Error\` constructor.
  2 | throw err;
"
`;

exports[`invalid(4): 'new AggregateError(errors, "", extraA…' > Code 1`] = `
"
  1 | new AggregateError(errors, "", extraArgument)
"
`;

exports[`invalid(4): 'new AggregateError(errors, "", extraA…' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, "", extraArgument)
    |                            ^^ Error message should not be an empty string.
"
`;

exports[`invalid(5): 'const errorMessage = Object.freeze({e…' > Code 1`] = `
"
  1 | const errorMessage = Object.freeze({errorMessage: 1}).errorMessage;
  2 | throw new AggregateError(errors, errorMessage)
"
`;

exports[`invalid(5): 'const errorMessage = Object.freeze({e…' > Error 1/1 1`] = `
"
  1 | const errorMessage = Object.freeze({errorMessage: 1}).errorMessage;
> 2 | throw new AggregateError(errors, errorMessage)
    |                                  ^^^^^^^^^^^^ Error message should be a string.
"
`;

exports[`invalid(5): 'let err = 1;\\nerr = new Error();\\nthr…' > Code 1`] = `
"
  1 | let err = 1;
  2 | err = new Error();
  3 | throw err;
"
`;

exports[`invalid(5): 'let err = 1;\\nerr = new Error();\\nthr…' > Error 1/1 1`] = `
"
  1 | let err = 1;
> 2 | err = new Error();
    |       ^^^^^^^^^^^ Pass a message to the \`Error\` constructor.
  3 | throw err;
"
`;

exports[`invalid(6): 'let err = new Error();\\nerr = 1;\\nthr…' > Code 1`] = `
"
  1 | let err = new Error();
  2 | err = 1;
  3 | throw err;
"
`;

exports[`invalid(6): 'let err = new Error();\\nerr = 1;\\nthr…' > Error 1/1 1`] = `
"
> 1 | let err = new Error();
    |           ^^^^^^^^^^^ Pass a message to the \`Error\` constructor.
  2 | err = 1;
  3 | throw err;
"
`;

exports[`invalid(6): 'new AggregateError(errors, [])' > Code 1`] = `
"
  1 | new AggregateError(errors, [])
"
`;

exports[`invalid(6): 'new AggregateError(errors, [])' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, [])
    |                            ^^ Error message should be a string.
"
`;

exports[`invalid(7): 'const foo = new TypeError()' > Code 1`] = `
"
  1 | const foo = new TypeError()
"
`;

exports[`invalid(7): 'const foo = new TypeError()' > Error 1/1 1`] = `
"
> 1 | const foo = new TypeError()
    |             ^^^^^^^^^^^^^^^ Pass a message to the \`TypeError\` constructor.
"
`;

exports[`invalid(7): 'new AggregateError(errors, [foo])' > Code 1`] = `
"
  1 | new AggregateError(errors, [foo])
"
`;

exports[`invalid(7): 'new AggregateError(errors, [foo])' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, [foo])
    |                            ^^^^^ Error message should be a string.
"
`;

exports[`invalid(8): 'const foo = new SyntaxError()' > Code 1`] = `
"
  1 | const foo = new SyntaxError()
"
`;

exports[`invalid(8): 'const foo = new SyntaxError()' > Error 1/1 1`] = `
"
> 1 | const foo = new SyntaxError()
    |             ^^^^^^^^^^^^^^^^^ Pass a message to the \`SyntaxError\` constructor.
"
`;

exports[`invalid(8): 'new AggregateError(errors, [0][0])' > Code 1`] = `
"
  1 | new AggregateError(errors, [0][0])
"
`;

exports[`invalid(8): 'new AggregateError(errors, [0][0])' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, [0][0])
    |                            ^^^^^^ Error message should be a string.
"
`;

exports[`invalid(9): 'const errorMessage = Object.freeze({e…' > Code 1`] = `
"
  1 | const errorMessage = Object.freeze({errorMessage: 1}).errorMessage;
  2 | throw new Error(errorMessage)
"
`;

exports[`invalid(9): 'const errorMessage = Object.freeze({e…' > Error 1/1 1`] = `
"
  1 | const errorMessage = Object.freeze({errorMessage: 1}).errorMessage;
> 2 | throw new Error(errorMessage)
    |                 ^^^^^^^^^^^^ Error message should be a string.
"
`;

exports[`invalid(9): 'new AggregateError(errors, {})' > Code 1`] = `
"
  1 | new AggregateError(errors, {})
"
`;

exports[`invalid(9): 'new AggregateError(errors, {})' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, {})
    |                            ^^ Error message should be a string.
"
`;

exports[`invalid(10): 'new AggregateError(errors, {foo})' > Code 1`] = `
"
  1 | new AggregateError(errors, {foo})
"
`;

exports[`invalid(10): 'new AggregateError(errors, {foo})' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, {foo})
    |                            ^^^^^ Error message should be a string.
"
`;

exports[`invalid(10): 'throw new Error([])' > Code 1`] = `
"
  1 | throw new Error([])
"
`;

exports[`invalid(10): 'throw new Error([])' > Error 1/1 1`] = `
"
> 1 | throw new Error([])
    |                 ^^ Error message should be a string.
"
`;

exports[`invalid(11): 'new AggregateError(errors, {foo: 0}.f…' > Code 1`] = `
"
  1 | new AggregateError(errors, {foo: 0}.foo)
"
`;

exports[`invalid(11): 'new AggregateError(errors, {foo: 0}.f…' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, {foo: 0}.foo)
    |                            ^^^^^^^^^^^^ Error message should be a string.
"
`;

exports[`invalid(11): 'throw new Error([foo])' > Code 1`] = `
"
  1 | throw new Error([foo])
"
`;

exports[`invalid(11): 'throw new Error([foo])' > Error 1/1 1`] = `
"
> 1 | throw new Error([foo])
    |                 ^^^^^ Error message should be a string.
"
`;

exports[`invalid(12): 'new AggregateError(errors, lineNumber…' > Code 1`] = `
"
  1 | new AggregateError(errors, lineNumber=2)
"
`;

exports[`invalid(12): 'new AggregateError(errors, lineNumber…' > Error 1/1 1`] = `
"
> 1 | new AggregateError(errors, lineNumber=2)
    |                            ^^^^^^^^^^^^ Error message should be a string.
"
`;

exports[`invalid(12): 'throw new Error([0][0])' > Code 1`] = `
"
  1 | throw new Error([0][0])
"
`;

exports[`invalid(12): 'throw new Error([0][0])' > Error 1/1 1`] = `
"
> 1 | throw new Error([0][0])
    |                 ^^^^^^ Error message should be a string.
"
`;

exports[`invalid(13): 'const error = new AggregateError;' > Code 1`] = `
"
  1 | const error = new AggregateError;
"
`;

exports[`invalid(13): 'const error = new AggregateError;' > Error 1/1 1`] = `
"
> 1 | const error = new AggregateError;
    |               ^^^^^^^^^^^^^^^^^^ Pass a message to the \`AggregateError\` constructor.
"
`;

exports[`invalid(13): 'throw new Error({})' > Code 1`] = `
"
  1 | throw new Error({})
"
`;

exports[`invalid(13): 'throw new Error({})' > Error 1/1 1`] = `
"
> 1 | throw new Error({})
    |                 ^^ Error message should be a string.
"
`;

exports[`invalid(14): 'throw new Error({foo})' > Code 1`] = `
"
  1 | throw new Error({foo})
"
`;

exports[`invalid(14): 'throw new Error({foo})' > Error 1/1 1`] = `
"
> 1 | throw new Error({foo})
    |                 ^^^^^ Error message should be a string.
"
`;

exports[`invalid(15): 'throw new Error({foo: 0}.foo)' > Code 1`] = `
"
  1 | throw new Error({foo: 0}.foo)
"
`;

exports[`invalid(15): 'throw new Error({foo: 0}.foo)' > Error 1/1 1`] = `
"
> 1 | throw new Error({foo: 0}.foo)
    |                 ^^^^^^^^^^^^ Error message should be a string.
"
`;

exports[`invalid(16): 'throw new Error(lineNumber=2)' > Code 1`] = `
"
  1 | throw new Error(lineNumber=2)
"
`;

exports[`invalid(16): 'throw new Error(lineNumber=2)' > Error 1/1 1`] = `
"
> 1 | throw new Error(lineNumber=2)
    |                 ^^^^^^^^^^^^ Error message should be a string.
"
`;

exports[`invalid(17): 'const error = new RangeError;' > Code 1`] = `
"
  1 | const error = new RangeError;
"
`;

exports[`invalid(17): 'const error = new RangeError;' > Error 1/1 1`] = `
"
> 1 | const error = new RangeError;
    |               ^^^^^^^^^^^^^^ Pass a message to the \`RangeError\` constructor.
"
`;

exports[`invalid(18): 'throw Object.assign(new Error(), {foo…' > Code 1`] = `
"
  1 | throw Object.assign(new Error(), {foo})
"
`;

exports[`invalid(18): 'throw Object.assign(new Error(), {foo…' > Error 1/1 1`] = `
"
> 1 | throw Object.assign(new Error(), {foo})
    |                     ^^^^^^^^^^^ Pass a message to the \`Error\` constructor.
"
`;
