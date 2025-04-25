// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): '/* 1 */ (( /* 2 */ 0 /* 3 */, /* 4 */…' > Code 1`] = `
"
  1 | /* 1 */ (( /* 2 */ 0 /* 3 */, /* 4 */ foo /* 5 */ )) /* 6 */
  2 | 	. /* 7 */ substring /* 8 */ (
  3 | 		/* 9 */ (( /* 10 */ bar /* 11 */ )) /* 12 */,
  4 | 		/* 13 */ (( /* 14 */ 0 /* 15 */ )) /* 16 */,
  5 | 		/* 17 */
  6 | 	)
  7 | /* 18 */
"
`;

exports[`invalid(0): '/* 1 */ (( /* 2 */ 0 /* 3 */, /* 4 */…' > Error 1/1 1`] = `
"
> 1 | /* 1 */ (( /* 2 */ 0 /* 3 */, /* 4 */ foo /* 5 */ )) /* 6 */
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 2 | 	. /* 7 */ substring /* 8 */ (
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 | 		/* 9 */ (( /* 10 */ bar /* 11 */ )) /* 12 */,
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | 		/* 13 */ (( /* 14 */ 0 /* 15 */ )) /* 16 */,
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 | 		/* 17 */
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | 	)
    | ^^^ Prefer \`String#slice()\` over \`String#substring()\`.
  7 | /* 18 */
"
`;

exports[`invalid(0): '/* 1 */ (( /* 2 */ 0 /* 3 */, /* 4 */…' > Output 1`] = `
"
  1 | /* 1 */ (( /* 2 */ 0 /* 3 */, /* 4 */ foo /* 5 */ )) /* 6 */
  2 | 	. /* 7 */ slice /* 8 */ (
  3 | 		/* 9 */ 0 /* 12 */,
  4 | 		/* 13 */ Math.max(0, (( /* 10 */ bar /* 11 */ ))) /* 16 */,
  5 | 		/* 17 */
  6 | 	)
  7 | /* 18 */
"
`;

exports[`invalid(1): 'foo.substr(0, ...bar)' > Code 1`] = `
"
  1 | foo.substr(0, ...bar)
"
`;

exports[`invalid(1): 'foo.substr(0, ...bar)' > Error 1/1 1`] = `
"
> 1 | foo.substr(0, ...bar)
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substr()\`.
"
`;

exports[`invalid(2): 'foo.substr(...bar)' > Code 1`] = `
"
  1 | foo.substr(...bar)
"
`;

exports[`invalid(2): 'foo.substr(...bar)' > Error 1/1 1`] = `
"
> 1 | foo.substr(...bar)
    | ^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substr()\`.
"
`;

exports[`invalid(3): 'foo.substr(0, (100, 1))' > Code 1`] = `
"
  1 | foo.substr(0, (100, 1))
"
`;

exports[`invalid(3): 'foo.substr(0, (100, 1))' > Error 1/1 1`] = `
"
> 1 | foo.substr(0, (100, 1))
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substr()\`.
"
`;

exports[`invalid(3): 'foo.substr(0, (100, 1))' > Output 1`] = `
"
  1 | foo.slice(0, Math.max(0, (100, 1)))
"
`;

exports[`invalid(4): 'foo.substr(0, 1, extraArgument)' > Code 1`] = `
"
  1 | foo.substr(0, 1, extraArgument)
"
`;

exports[`invalid(4): 'foo.substr(0, 1, extraArgument)' > Error 1/1 1`] = `
"
> 1 | foo.substr(0, 1, extraArgument)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substr()\`.
"
`;

exports[`invalid(5): 'foo.substr((0, bar.length), (0, baz.l…' > Code 1`] = `
"
  1 | foo.substr((0, bar.length), (0, baz.length))
"
`;

exports[`invalid(5): 'foo.substr((0, bar.length), (0, baz.l…' > Error 1/1 1`] = `
"
> 1 | foo.substr((0, bar.length), (0, baz.length))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substr()\`.
"
`;

exports[`invalid(6): 'foo.substring((10, 1), 0)' > Code 1`] = `
"
  1 | foo.substring((10, 1), 0)
"
`;

exports[`invalid(6): 'foo.substring((10, 1), 0)' > Error 1/1 1`] = `
"
> 1 | foo.substring((10, 1), 0)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substring()\`.
"
`;

exports[`invalid(6): 'foo.substring((10, 1), 0)' > Output 1`] = `
"
  1 | foo.slice(0, Math.max(0, (10, 1)))
"
`;

exports[`invalid(7): 'foo.substring(0, (10, 1))' > Code 1`] = `
"
  1 | foo.substring(0, (10, 1))
"
`;

exports[`invalid(7): 'foo.substring(0, (10, 1))' > Error 1/1 1`] = `
"
> 1 | foo.substring(0, (10, 1))
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substring()\`.
"
`;

exports[`invalid(7): 'foo.substring(0, (10, 1))' > Output 1`] = `
"
  1 | foo.slice(0, Math.max(0, (10, 1)))
"
`;

exports[`invalid(8): 'foo.substring(0, await 1)' > Code 1`] = `
"
  1 | foo.substring(0, await 1)
"
`;

exports[`invalid(8): 'foo.substring(0, await 1)' > Error 1/1 1`] = `
"
> 1 | foo.substring(0, await 1)
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substring()\`.
"
`;

exports[`invalid(8): 'foo.substring(0, await 1)' > Output 1`] = `
"
  1 | foo.slice(0, Math.max(0, await 1))
"
`;

exports[`invalid(9): 'foo.substring((10, bar))' > Code 1`] = `
"
  1 | foo.substring((10, bar))
"
`;

exports[`invalid(9): 'foo.substring((10, bar))' > Error 1/1 1`] = `
"
> 1 | foo.substring((10, bar))
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substring()\`.
"
`;

exports[`invalid(9): 'foo.substring((10, bar))' > Output 1`] = `
"
  1 | foo.slice(Math.max(0, (10, bar)))
"
`;

exports[`invalid(10): 'const string = "::";\\nconst output = …' > Code 1`] = `
"
  1 | const string = "::";
  2 | const output = string.substr(-2, 2);
"
`;

exports[`invalid(10): 'const string = "::";\\nconst output = …' > Error 1/1 1`] = `
"
  1 | const string = "::";
> 2 | const output = string.substr(-2, 2);
    |                ^^^^^^^^^^^^^^^^^^^^ Prefer \`String#slice()\` over \`String#substr()\`.
"
`;
