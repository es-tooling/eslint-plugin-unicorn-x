// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'expect(foo).toMatchInlineSnapshot(\`\\n…' > Code 1`] = `
"
  1 | expect(foo).toMatchInlineSnapshot(\`
  2 |     one
  3 |       three
  4 |       \`
  5 | )
"
`;

exports[`invalid(0): 'expect(foo).toMatchInlineSnapshot(\`\\n…' > Error 1/1 1`] = `
"
> 1 | expect(foo).toMatchInlineSnapshot(\`
    |                                   ^
> 2 |     one
    | ^^^^^^^
> 3 |       three
    | ^^^^^^^
> 4 |       \`
    | ^^^^^^^^ Templates should be properly indented.
  5 | )
"
`;

exports[`invalid(0): 'expect(foo).toMatchInlineSnapshot(\`\\n…' > Output 1`] = `
"
  1 | expect(foo).toMatchInlineSnapshot(\`
  2 |   one
  3 |     three
  4 | \`
  5 | )
"
`;
