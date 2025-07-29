// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'new URL("./foo", base)' > Code 1`] = `
"
  1 | new URL("./foo", base)
"
`;

exports[`invalid(0): 'new URL("./foo", base)' > Error 1/1 1`] = `
"
> 1 | new URL("./foo", base)
    |         ^^^^^^^ Remove the \`./\` prefix from the relative URL.
"
`;

exports[`invalid(0): 'new URL("./foo", base)' > Output 1`] = `
"
  1 | new URL("foo", base)
"
`;

exports[`invalid(0): 'new URL("foo", base)' > Code 1`] = `
"
  1 | new URL("foo", base)
"
`;

exports[`invalid(0): 'new URL("foo", base)' > Error 1/1 1`] = `
"
> 1 | new URL("foo", base)
    |         ^^^^^ Add a \`./\` prefix to the relative URL.
"
`;

exports[`invalid(0): 'new URL("foo", base)' > Options 1`] = `
"
[
  "always"
]
"
`;

exports[`invalid(0): 'new URL("foo", base)' > Output 1`] = `
"
  1 | new URL("./foo", base)
"
`;

exports[`invalid(1): 'new URL(\\'./foo\\', base)' > Code 1`] = `
"
  1 | new URL('./foo', base)
"
`;

exports[`invalid(1): 'new URL(\\'./foo\\', base)' > Error 1/1 1`] = `
"
> 1 | new URL('./foo', base)
    |         ^^^^^^^ Remove the \`./\` prefix from the relative URL.
"
`;

exports[`invalid(1): 'new URL(\\'./foo\\', base)' > Output 1`] = `
"
  1 | new URL('foo', base)
"
`;

exports[`invalid(1): 'new URL(\\'foo\\', base)' > Code 1`] = `
"
  1 | new URL('foo', base)
"
`;

exports[`invalid(1): 'new URL(\\'foo\\', base)' > Error 1/1 1`] = `
"
> 1 | new URL('foo', base)
    |         ^^^^^ Add a \`./\` prefix to the relative URL.
"
`;

exports[`invalid(1): 'new URL(\\'foo\\', base)' > Options 1`] = `
"
[
  "always"
]
"
`;

exports[`invalid(1): 'new URL(\\'foo\\', base)' > Output 1`] = `
"
  1 | new URL('./foo', base)
"
`;

exports[`invalid(2): 'new URL("", "https://example.com/a/b/…' > Code 1`] = `
"
  1 | new URL("", "https://example.com/a/b/")
"
`;

exports[`invalid(2): 'new URL("", "https://example.com/a/b/…' > Error 1/1 1`] = `
"
> 1 | new URL("", "https://example.com/a/b/")
    |         ^^ Add a \`./\` prefix to the relative URL.
"
`;

exports[`invalid(2): 'new URL("", "https://example.com/a/b/…' > Options 1`] = `
"
[
  "always"
]
"
`;

exports[`invalid(2): 'new URL("", "https://example.com/a/b/…' > Output 1`] = `
"
  1 | new URL("./", "https://example.com/a/b/")
"
`;

exports[`invalid(2): 'new URL("././a", base)' > Code 1`] = `
"
  1 | new URL("././a", base)
"
`;

exports[`invalid(2): 'new URL("././a", base)' > Error 1/1 1`] = `
"
> 1 | new URL("././a", base)
    |         ^^^^^^^ Remove the \`./\` prefix from the relative URL.
"
`;

exports[`invalid(2): 'new URL("././a", base)' > Output 1`] = `
"
  1 | new URL("a", base)
"
`;

exports[`invalid(3): 'new URL(\`./\${foo}\`, base)' > Code 1`] = `
"
  1 | new URL(\`./\${foo}\`, base)
"
`;

exports[`invalid(3): 'new URL(\`./\${foo}\`, base)' > Error 1/1 1`] = `
"
> 1 | new URL(\`./\${foo}\`, base)
    |         ^^^^^^^^^^ Remove the \`./\` prefix from the relative URL.

--------------------------------------------------------------------------------
Suggestion 1/1: Remove leading \`./\`.
  1 | new URL(\`\${foo}\`, base)
"
`;

exports[`invalid(4): 'new URL("./", "https://example.com/a/…' > Code 1`] = `
"
  1 | new URL("./", "https://example.com/a/b/")
"
`;

exports[`invalid(4): 'new URL("./", "https://example.com/a/…' > Error 1/1 1`] = `
"
> 1 | new URL("./", "https://example.com/a/b/")
    |         ^^^^ Remove the \`./\` prefix from the relative URL.
"
`;

exports[`invalid(4): 'new URL("./", "https://example.com/a/…' > Output 1`] = `
"
  1 | new URL("", "https://example.com/a/b/")
"
`;
