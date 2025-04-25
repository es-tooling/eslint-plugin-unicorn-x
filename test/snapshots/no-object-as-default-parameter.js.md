// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '/**/function abc(foo = {a: 123}) {}' > Code 1`] = `
"
  1 | /**/function abc(foo = {a: 123}) {}
"
`;

exports[`invalid(0): '/**/function abc(foo = {a: 123}) {}' > Error 1/1 1`] = `
"
> 1 | /**/function abc(foo = {a: 123}) {}
    |                  ^^^ Do not use an object literal as default for parameter \`foo\`.
"
`;

exports[`invalid(1): 'const abc = (foo = {a: false}) => {};' > Code 1`] = `
"
  1 | const abc = (foo = {a: false}) => {};
"
`;

exports[`invalid(1): 'const abc = (foo = {a: false}) => {};' > Error 1/1 1`] = `
"
> 1 | const abc = (foo = {a: false}) => {};
    |              ^^^ Do not use an object literal as default for parameter \`foo\`.
"
`;

exports[`invalid(2): 'function abc({a} = {a: 123}) {}' > Code 1`] = `
"
  1 | function abc({a} = {a: 123}) {}
"
`;

exports[`invalid(2): 'function abc({a} = {a: 123}) {}' > Error 1/1 1`] = `
"
> 1 | function abc({a} = {a: 123}) {}
    |                    ^^^^^^^^ Do not use an object literal as default.
"
`;

exports[`invalid(3): 'function abc([a] = {a: 123}) {}' > Code 1`] = `
"
  1 | function abc([a] = {a: 123}) {}
"
`;

exports[`invalid(3): 'function abc([a] = {a: 123}) {}' > Error 1/1 1`] = `
"
> 1 | function abc([a] = {a: 123}) {}
    |                    ^^^^^^^^ Do not use an object literal as default.
"
`;
