// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = "\\xb1"' > Code 1`] = `
"
  1 | const foo = "\\xb1"
"
`;

exports[`invalid(0): 'const foo = "\\xb1"' > Error 1/1 1`] = `
"
> 1 | const foo = "\\xb1"
    |             ^^^^^^ Use Unicode escapes instead of hexadecimal escapes.
"
`;

exports[`invalid(0): 'const foo = "\\xb1"' > Output 1`] = `
"
  1 | const foo = "\\u00b1"
"
`;
