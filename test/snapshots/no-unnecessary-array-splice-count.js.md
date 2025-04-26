// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.splice(1, foo.length)' > Code 1`] = `
"
  1 | foo.splice(1, foo.length)
"
`;

exports[`invalid(0): 'foo.splice(1, foo.length)' > Error 1/1 1`] = `
"
> 1 | foo.splice(1, foo.length)
    |               ^^^^^^^^^^ Passing \`foo.length\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(0): 'foo.splice(1, foo.length)' > Output 1`] = `
"
  1 | foo.splice(1)
"
`;

exports[`invalid(0): 'foo.toSpliced(1, foo.length)' > Code 1`] = `
"
  1 | foo.toSpliced(1, foo.length)
"
`;

exports[`invalid(0): 'foo.toSpliced(1, foo.length)' > Error 1/1 1`] = `
"
> 1 | foo.toSpliced(1, foo.length)
    |                  ^^^^^^^^^^ Passing \`foo.length\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(0): 'foo.toSpliced(1, foo.length)' > Output 1`] = `
"
  1 | foo.toSpliced(1)
"
`;

exports[`invalid(1): 'foo?.splice(1, foo.length)' > Code 1`] = `
"
  1 | foo?.splice(1, foo.length)
"
`;

exports[`invalid(1): 'foo?.splice(1, foo.length)' > Error 1/1 1`] = `
"
> 1 | foo?.splice(1, foo.length)
    |                ^^^^^^^^^^ Passing \`foo.length\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(1): 'foo?.splice(1, foo.length)' > Output 1`] = `
"
  1 | foo?.splice(1)
"
`;

exports[`invalid(1): 'foo?.toSpliced(1, foo.length)' > Code 1`] = `
"
  1 | foo?.toSpliced(1, foo.length)
"
`;

exports[`invalid(1): 'foo?.toSpliced(1, foo.length)' > Error 1/1 1`] = `
"
> 1 | foo?.toSpliced(1, foo.length)
    |                   ^^^^^^^^^^ Passing \`foo.length\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(1): 'foo?.toSpliced(1, foo.length)' > Output 1`] = `
"
  1 | foo?.toSpliced(1)
"
`;

exports[`invalid(2): 'foo.splice(1, foo.length,)' > Code 1`] = `
"
  1 | foo.splice(1, foo.length,)
"
`;

exports[`invalid(2): 'foo.splice(1, foo.length,)' > Error 1/1 1`] = `
"
> 1 | foo.splice(1, foo.length,)
    |               ^^^^^^^^^^ Passing \`foo.length\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(2): 'foo.splice(1, foo.length,)' > Output 1`] = `
"
  1 | foo.splice(1,)
"
`;

exports[`invalid(2): 'foo.toSpliced(1, foo.length,)' > Code 1`] = `
"
  1 | foo.toSpliced(1, foo.length,)
"
`;

exports[`invalid(2): 'foo.toSpliced(1, foo.length,)' > Error 1/1 1`] = `
"
> 1 | foo.toSpliced(1, foo.length,)
    |                  ^^^^^^^^^^ Passing \`foo.length\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(2): 'foo.toSpliced(1, foo.length,)' > Output 1`] = `
"
  1 | foo.toSpliced(1,)
"
`;

exports[`invalid(3): 'foo.splice(1, (( foo.length )))' > Code 1`] = `
"
  1 | foo.splice(1, (( foo.length )))
"
`;

exports[`invalid(3): 'foo.splice(1, (( foo.length )))' > Error 1/1 1`] = `
"
> 1 | foo.splice(1, (( foo.length )))
    |                  ^^^^^^^^^^ Passing \`foo.length\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(3): 'foo.splice(1, (( foo.length )))' > Output 1`] = `
"
  1 | foo.splice(1)
"
`;

exports[`invalid(3): 'foo.toSpliced(1, (( foo.length )))' > Code 1`] = `
"
  1 | foo.toSpliced(1, (( foo.length )))
"
`;

exports[`invalid(3): 'foo.toSpliced(1, (( foo.length )))' > Error 1/1 1`] = `
"
> 1 | foo.toSpliced(1, (( foo.length )))
    |                     ^^^^^^^^^^ Passing \`foo.length\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(3): 'foo.toSpliced(1, (( foo.length )))' > Output 1`] = `
"
  1 | foo.toSpliced(1)
"
`;

exports[`invalid(4): 'foo.splice(1, foo?.length)' > Code 1`] = `
"
  1 | foo.splice(1, foo?.length)
"
`;

exports[`invalid(4): 'foo.splice(1, foo?.length)' > Error 1/1 1`] = `
"
> 1 | foo.splice(1, foo?.length)
    |               ^^^^^^^^^^^ Passing \`foo?.length\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(4): 'foo.splice(1, foo?.length)' > Output 1`] = `
"
  1 | foo.splice(1)
"
`;

exports[`invalid(4): 'foo.toSpliced(1, foo?.length)' > Code 1`] = `
"
  1 | foo.toSpliced(1, foo?.length)
"
`;

exports[`invalid(4): 'foo.toSpliced(1, foo?.length)' > Error 1/1 1`] = `
"
> 1 | foo.toSpliced(1, foo?.length)
    |                  ^^^^^^^^^^^ Passing \`foo?.length\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(4): 'foo.toSpliced(1, foo?.length)' > Output 1`] = `
"
  1 | foo.toSpliced(1)
"
`;

exports[`invalid(5): 'foo?.splice(1, foo?.length)' > Code 1`] = `
"
  1 | foo?.splice(1, foo?.length)
"
`;

exports[`invalid(5): 'foo?.splice(1, foo?.length)' > Error 1/1 1`] = `
"
> 1 | foo?.splice(1, foo?.length)
    |                ^^^^^^^^^^^ Passing \`foo?.length\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(5): 'foo?.splice(1, foo?.length)' > Output 1`] = `
"
  1 | foo?.splice(1)
"
`;

exports[`invalid(5): 'foo?.toSpliced(1, foo?.length)' > Code 1`] = `
"
  1 | foo?.toSpliced(1, foo?.length)
"
`;

exports[`invalid(5): 'foo?.toSpliced(1, foo?.length)' > Error 1/1 1`] = `
"
> 1 | foo?.toSpliced(1, foo?.length)
    |                   ^^^^^^^^^^^ Passing \`foo?.length\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(5): 'foo?.toSpliced(1, foo?.length)' > Output 1`] = `
"
  1 | foo?.toSpliced(1)
"
`;

exports[`invalid(6): 'foo?.splice(1, Infinity)' > Code 1`] = `
"
  1 | foo?.splice(1, Infinity)
"
`;

exports[`invalid(6): 'foo?.splice(1, Infinity)' > Error 1/1 1`] = `
"
> 1 | foo?.splice(1, Infinity)
    |                ^^^^^^^^ Passing \`Infinity\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(6): 'foo?.splice(1, Infinity)' > Output 1`] = `
"
  1 | foo?.splice(1)
"
`;

exports[`invalid(6): 'foo?.toSpliced(1, Infinity)' > Code 1`] = `
"
  1 | foo?.toSpliced(1, Infinity)
"
`;

exports[`invalid(6): 'foo?.toSpliced(1, Infinity)' > Error 1/1 1`] = `
"
> 1 | foo?.toSpliced(1, Infinity)
    |                   ^^^^^^^^ Passing \`Infinity\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(6): 'foo?.toSpliced(1, Infinity)' > Output 1`] = `
"
  1 | foo?.toSpliced(1)
"
`;

exports[`invalid(7): 'foo?.splice(1, Number.POSITIVE_INFINI…' > Code 1`] = `
"
  1 | foo?.splice(1, Number.POSITIVE_INFINITY)
"
`;

exports[`invalid(7): 'foo?.splice(1, Number.POSITIVE_INFINI…' > Error 1/1 1`] = `
"
> 1 | foo?.splice(1, Number.POSITIVE_INFINITY)
    |                ^^^^^^^^^^^^^^^^^^^^^^^^ Passing \`Number.POSITIVE_INFINITY\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(7): 'foo?.splice(1, Number.POSITIVE_INFINI…' > Output 1`] = `
"
  1 | foo?.splice(1)
"
`;

exports[`invalid(7): 'foo?.toSpliced(1, Number.POSITIVE_INF…' > Code 1`] = `
"
  1 | foo?.toSpliced(1, Number.POSITIVE_INFINITY)
"
`;

exports[`invalid(7): 'foo?.toSpliced(1, Number.POSITIVE_INF…' > Error 1/1 1`] = `
"
> 1 | foo?.toSpliced(1, Number.POSITIVE_INFINITY)
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^ Passing \`Number.POSITIVE_INFINITY\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(7): 'foo?.toSpliced(1, Number.POSITIVE_INF…' > Output 1`] = `
"
  1 | foo?.toSpliced(1)
"
`;

exports[`invalid(8): 'foo.bar.splice(1, foo.bar.length)' > Code 1`] = `
"
  1 | foo.bar.splice(1, foo.bar.length)
"
`;

exports[`invalid(8): 'foo.bar.splice(1, foo.bar.length)' > Error 1/1 1`] = `
"
> 1 | foo.bar.splice(1, foo.bar.length)
    |                   ^^^^^^^^^^^^^^ Passing \`….length\` as the \`deleteCount\` argument is unnecessary.
"
`;

exports[`invalid(8): 'foo.bar.splice(1, foo.bar.length)' > Output 1`] = `
"
  1 | foo.bar.splice(1)
"
`;

exports[`invalid(8): 'foo.bar.toSpliced(1, foo.bar.length)' > Code 1`] = `
"
  1 | foo.bar.toSpliced(1, foo.bar.length)
"
`;

exports[`invalid(8): 'foo.bar.toSpliced(1, foo.bar.length)' > Error 1/1 1`] = `
"
> 1 | foo.bar.toSpliced(1, foo.bar.length)
    |                      ^^^^^^^^^^^^^^ Passing \`….length\` as the \`skipCount\` argument is unnecessary.
"
`;

exports[`invalid(8): 'foo.bar.toSpliced(1, foo.bar.length)' > Output 1`] = `
"
  1 | foo.bar.toSpliced(1)
"
`;
