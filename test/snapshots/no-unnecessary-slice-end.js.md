// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.slice(1, foo.length)' > Code 1`] = `
"
  1 | foo.slice(1, foo.length)
"
`;

exports[`invalid(0): 'foo.slice(1, foo.length)' > Error 1/1 1`] = `
"
> 1 | foo.slice(1, foo.length)
    |              ^^^^^^^^^^ Passing \`foo.length\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(0): 'foo.slice(1, foo.length)' > Output 1`] = `
"
  1 | foo.slice(1)
"
`;

exports[`invalid(1): 'foo?.slice(1, foo.length)' > Code 1`] = `
"
  1 | foo?.slice(1, foo.length)
"
`;

exports[`invalid(1): 'foo?.slice(1, foo.length)' > Error 1/1 1`] = `
"
> 1 | foo?.slice(1, foo.length)
    |               ^^^^^^^^^^ Passing \`foo.length\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(1): 'foo?.slice(1, foo.length)' > Output 1`] = `
"
  1 | foo?.slice(1)
"
`;

exports[`invalid(2): 'foo.slice(1, foo.length,)' > Code 1`] = `
"
  1 | foo.slice(1, foo.length,)
"
`;

exports[`invalid(2): 'foo.slice(1, foo.length,)' > Error 1/1 1`] = `
"
> 1 | foo.slice(1, foo.length,)
    |              ^^^^^^^^^^ Passing \`foo.length\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(2): 'foo.slice(1, foo.length,)' > Output 1`] = `
"
  1 | foo.slice(1,)
"
`;

exports[`invalid(3): 'foo.slice(1, (( foo.length )))' > Code 1`] = `
"
  1 | foo.slice(1, (( foo.length )))
"
`;

exports[`invalid(3): 'foo.slice(1, (( foo.length )))' > Error 1/1 1`] = `
"
> 1 | foo.slice(1, (( foo.length )))
    |                 ^^^^^^^^^^ Passing \`foo.length\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(3): 'foo.slice(1, (( foo.length )))' > Output 1`] = `
"
  1 | foo.slice(1)
"
`;

exports[`invalid(4): 'foo.slice(1, foo?.length)' > Code 1`] = `
"
  1 | foo.slice(1, foo?.length)
"
`;

exports[`invalid(4): 'foo.slice(1, foo?.length)' > Error 1/1 1`] = `
"
> 1 | foo.slice(1, foo?.length)
    |              ^^^^^^^^^^^ Passing \`foo?.length\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(4): 'foo.slice(1, foo?.length)' > Output 1`] = `
"
  1 | foo.slice(1)
"
`;

exports[`invalid(5): 'foo?.slice(1, foo?.length)' > Code 1`] = `
"
  1 | foo?.slice(1, foo?.length)
"
`;

exports[`invalid(5): 'foo?.slice(1, foo?.length)' > Error 1/1 1`] = `
"
> 1 | foo?.slice(1, foo?.length)
    |               ^^^^^^^^^^^ Passing \`foo?.length\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(5): 'foo?.slice(1, foo?.length)' > Output 1`] = `
"
  1 | foo?.slice(1)
"
`;

exports[`invalid(6): 'foo?.slice(1, Infinity)' > Code 1`] = `
"
  1 | foo?.slice(1, Infinity)
"
`;

exports[`invalid(6): 'foo?.slice(1, Infinity)' > Error 1/1 1`] = `
"
> 1 | foo?.slice(1, Infinity)
    |               ^^^^^^^^ Passing \`Infinity\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(6): 'foo?.slice(1, Infinity)' > Output 1`] = `
"
  1 | foo?.slice(1)
"
`;

exports[`invalid(7): 'foo?.slice(1, Number.POSITIVE_INFINIT…' > Code 1`] = `
"
  1 | foo?.slice(1, Number.POSITIVE_INFINITY)
"
`;

exports[`invalid(7): 'foo?.slice(1, Number.POSITIVE_INFINIT…' > Error 1/1 1`] = `
"
> 1 | foo?.slice(1, Number.POSITIVE_INFINITY)
    |               ^^^^^^^^^^^^^^^^^^^^^^^^ Passing \`Number.POSITIVE_INFINITY\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(7): 'foo?.slice(1, Number.POSITIVE_INFINIT…' > Output 1`] = `
"
  1 | foo?.slice(1)
"
`;

exports[`invalid(8): 'foo.bar.slice(1, foo.bar.length)' > Code 1`] = `
"
  1 | foo.bar.slice(1, foo.bar.length)
"
`;

exports[`invalid(8): 'foo.bar.slice(1, foo.bar.length)' > Error 1/1 1`] = `
"
> 1 | foo.bar.slice(1, foo.bar.length)
    |                  ^^^^^^^^^^^^^^ Passing \`….length\` as the \`end\` argument is unnecessary.
"
`;

exports[`invalid(8): 'foo.bar.slice(1, foo.bar.length)' > Output 1`] = `
"
  1 | foo.bar.slice(1)
"
`;
