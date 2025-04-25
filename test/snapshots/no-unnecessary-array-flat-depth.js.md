// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.flat(1)' > Code 1`] = `
"
  1 | foo.flat(1)
"
`;

exports[`invalid(0): 'foo.flat(1)' > Error 1/1 1`] = `
"
> 1 | foo.flat(1)
    |          ^ Passing \`1\` as the \`depth\` argument is unnecessary.
"
`;

exports[`invalid(0): 'foo.flat(1)' > Output 1`] = `
"
  1 | foo.flat()
"
`;

exports[`invalid(1): 'foo.flat(1.0)' > Code 1`] = `
"
  1 | foo.flat(1.0)
"
`;

exports[`invalid(1): 'foo.flat(1.0)' > Error 1/1 1`] = `
"
> 1 | foo.flat(1.0)
    |          ^^^ Passing \`1\` as the \`depth\` argument is unnecessary.
"
`;

exports[`invalid(1): 'foo.flat(1.0)' > Output 1`] = `
"
  1 | foo.flat()
"
`;

exports[`invalid(2): 'foo.flat(0b01)' > Code 1`] = `
"
  1 | foo.flat(0b01)
"
`;

exports[`invalid(2): 'foo.flat(0b01)' > Error 1/1 1`] = `
"
> 1 | foo.flat(0b01)
    |          ^^^^ Passing \`1\` as the \`depth\` argument is unnecessary.
"
`;

exports[`invalid(2): 'foo.flat(0b01)' > Output 1`] = `
"
  1 | foo.flat()
"
`;

exports[`invalid(3): 'foo?.flat(1)' > Code 1`] = `
"
  1 | foo?.flat(1)
"
`;

exports[`invalid(3): 'foo?.flat(1)' > Error 1/1 1`] = `
"
> 1 | foo?.flat(1)
    |           ^ Passing \`1\` as the \`depth\` argument is unnecessary.
"
`;

exports[`invalid(3): 'foo?.flat(1)' > Output 1`] = `
"
  1 | foo?.flat()
"
`;
