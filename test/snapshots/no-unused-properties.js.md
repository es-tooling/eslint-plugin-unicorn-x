// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'function foo() {\\n\\tconst bar = {\\n\\t…' > Code 1`] = `
"
  1 | function foo() {
  2 | 	const bar = {
  3 | 		b: 2,
  4 | 		u: 3
  5 | 	};
  6 | 	console.log(bar.b);
  7 | }
"
`;

exports[`invalid(0): 'function foo() {\\n\\tconst bar = {\\n\\t…' > Error 1/1 1`] = `
"
  1 | function foo() {
  2 | 	const bar = {
  3 | 		b: 2,
> 4 | 		u: 3
    | 		^^^^ Property \`u\` is defined but never used.
  5 | 	};
  6 | 	console.log(bar.b);
  7 | }
"
`;
