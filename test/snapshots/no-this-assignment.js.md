// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = this;' > Code 1`] = `
"
  1 | const foo = this;
"
`;

exports[`invalid(0): 'const foo = this;' > Error 1/1 1`] = `
"
> 1 | const foo = this;
    |       ^^^^^^^^^^ Do not assign \`this\` to \`foo\`.
"
`;

exports[`invalid(1): 'let foo;foo = this;' > Code 1`] = `
"
  1 | let foo;foo = this;
"
`;

exports[`invalid(1): 'let foo;foo = this;' > Error 1/1 1`] = `
"
> 1 | let foo;foo = this;
    |         ^^^^^^^^^^ Do not assign \`this\` to \`foo\`.
"
`;

exports[`invalid(2): 'var foo = bar, baz = this;' > Code 1`] = `
"
  1 | var foo = bar, baz = this;
"
`;

exports[`invalid(2): 'var foo = bar, baz = this;' > Error 1/1 1`] = `
"
> 1 | var foo = bar, baz = this;
    |                ^^^^^^^^^^ Do not assign \`this\` to \`baz\`.
"
`;
