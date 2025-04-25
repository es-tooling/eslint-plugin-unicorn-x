// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'if (!isFinite(foo)) {\\n\\tthrow new Er…' > Code 1`] = `
"
  1 | if (!isFinite(foo)) {
  2 | 	throw new Error();
  3 | }
"
`;

exports[`invalid(0): 'if (!isFinite(foo)) {\\n\\tthrow new Er…' > Error 1/1 1`] = `
"
  1 | if (!isFinite(foo)) {
> 2 | 	throw new Error();
    | 	          ^^^^^ \`new Error()\` is too unspecific for a type check. Use \`new TypeError()\` instead.
  3 | }
"
`;

exports[`invalid(0): 'if (!isFinite(foo)) {\\n\\tthrow new Er…' > Output 1`] = `
"
  1 | if (!isFinite(foo)) {
  2 | 	throw new TypeError();
  3 | }
"
`;
