// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'array.flat(2)' > Code 1`] = `
"
  1 | array.flat(2)
"
`;

exports[`invalid(0): 'array.flat(2)' > Error 1/1 1`] = `
"
> 1 | array.flat(2)
    |            ^ Magic number as depth is not allowed.
"
`;

exports[`invalid(1): 'array?.flat(2)' > Code 1`] = `
"
  1 | array?.flat(2)
"
`;

exports[`invalid(1): 'array?.flat(2)' > Error 1/1 1`] = `
"
> 1 | array?.flat(2)
    |             ^ Magic number as depth is not allowed.
"
`;

exports[`invalid(2): 'array.flat(99,)' > Code 1`] = `
"
  1 | array.flat(99,)
"
`;

exports[`invalid(2): 'array.flat(99,)' > Error 1/1 1`] = `
"
> 1 | array.flat(99,)
    |            ^^ Magic number as depth is not allowed.
"
`;

exports[`invalid(3): 'array.flat(0b10,)' > Code 1`] = `
"
  1 | array.flat(0b10,)
"
`;

exports[`invalid(3): 'array.flat(0b10,)' > Error 1/1 1`] = `
"
> 1 | array.flat(0b10,)
    |            ^^^^ Magic number as depth is not allowed.
"
`;
