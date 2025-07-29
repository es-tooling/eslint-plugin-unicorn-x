// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '[...new Set(array)].length' > Code 1`] = `
"
  1 | [...new Set(array)].length
"
`;

exports[`invalid(0): '[...new Set(array)].length' > Error 1/1 1`] = `
"
> 1 | [...new Set(array)].length
    |                     ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
"
`;

exports[`invalid(0): '[...new Set(array)].length' > Output 1`] = `
"
  1 | new Set(array).size
"
`;

exports[`invalid(1): 'const foo = new Set([]);\\nconsole.log…' > Code 1`] = `
"
  1 | const foo = new Set([]);
  2 | console.log([...foo].length);
"
`;

exports[`invalid(1): 'const foo = new Set([]);\\nconsole.log…' > Error 1/1 1`] = `
"
  1 | const foo = new Set([]);
> 2 | console.log([...foo].length);
    |                      ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
"
`;

exports[`invalid(1): 'const foo = new Set([]);\\nconsole.log…' > Output 1`] = `
"
  1 | const foo = new Set([]);
  2 | console.log(foo.size);
"
`;

exports[`invalid(2): 'function isUnique(array) {\\n\\treturn[…' > Code 1`] = `
"
  1 | function isUnique(array) {
  2 | 	return[...new Set(array)].length === array.length
  3 | }
"
`;

exports[`invalid(2): 'function isUnique(array) {\\n\\treturn[…' > Error 1/1 1`] = `
"
  1 | function isUnique(array) {
> 2 | 	return[...new Set(array)].length === array.length
    | 	                          ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
  3 | }
"
`;

exports[`invalid(2): 'function isUnique(array) {\\n\\treturn[…' > Output 1`] = `
"
  1 | function isUnique(array) {
  2 | 	return new Set(array).size === array.length
  3 | }
"
`;

exports[`invalid(3): '[...new Set(array),].length' > Code 1`] = `
"
  1 | [...new Set(array),].length
"
`;

exports[`invalid(3): '[...new Set(array),].length' > Error 1/1 1`] = `
"
> 1 | [...new Set(array),].length
    |                      ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
"
`;

exports[`invalid(3): '[...new Set(array),].length' > Output 1`] = `
"
  1 | new Set(array).size
"
`;

exports[`invalid(4): '[...(( new Set(array) ))].length' > Code 1`] = `
"
  1 | [...(( new Set(array) ))].length
"
`;

exports[`invalid(4): '[...(( new Set(array) ))].length' > Error 1/1 1`] = `
"
> 1 | [...(( new Set(array) ))].length
    |                           ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
"
`;

exports[`invalid(4): '[...(( new Set(array) ))].length' > Output 1`] = `
"
  1 | new Set(array).size
"
`;

exports[`invalid(5): '(( [...new Set(array)] )).length' > Code 1`] = `
"
  1 | (( [...new Set(array)] )).length
"
`;

exports[`invalid(5): '(( [...new Set(array)] )).length' > Error 1/1 1`] = `
"
> 1 | (( [...new Set(array)] )).length
    |                           ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
"
`;

exports[`invalid(5): '(( [...new Set(array)] )).length' > Output 1`] = `
"
  1 | (( new Set(array) )).size
"
`;

exports[`invalid(6): 'foo\\n;[...new Set(array)].length' > Code 1`] = `
"
  1 | foo
  2 | ;[...new Set(array)].length
"
`;

exports[`invalid(6): 'foo\\n;[...new Set(array)].length' > Error 1/1 1`] = `
"
  1 | foo
> 2 | ;[...new Set(array)].length
    |                      ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
"
`;

exports[`invalid(6): 'foo\\n;[...new Set(array)].length' > Output 1`] = `
"
  1 | foo
  2 | ;new Set(array).size
"
`;

exports[`invalid(7): '[/* comment */...new Set(array)].leng…' > Code 1`] = `
"
  1 | [/* comment */...new Set(array)].length
"
`;

exports[`invalid(7): '[/* comment */...new Set(array)].leng…' > Error 1/1 1`] = `
"
> 1 | [/* comment */...new Set(array)].length
    |                                  ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
"
`;

exports[`invalid(8): '[...new /* comment */ Set(array)].len…' > Code 1`] = `
"
  1 | [...new /* comment */ Set(array)].length
"
`;

exports[`invalid(8): '[...new /* comment */ Set(array)].len…' > Error 1/1 1`] = `
"
> 1 | [...new /* comment */ Set(array)].length
    |                                   ^^^^^^ Prefer using \`Set#size\` instead of \`Array#length\`.
"
`;

exports[`invalid(8): '[...new /* comment */ Set(array)].len…' > Output 1`] = `
"
  1 | new /* comment */ Set(array).size
"
`;
