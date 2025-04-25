// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const index = foo.indexOf(bar); index…' > Code 1`] = `
"
  1 | const index = foo.indexOf(bar); index < 0
"
`;

exports[`invalid(0): 'const index = foo.indexOf(bar); index…' > Error 1/1 1`] = `
"
> 1 | const index = foo.indexOf(bar); index < 0
    |                                       ^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
"
`;

exports[`invalid(0): 'const index = foo.indexOf(bar); index…' > Output 1`] = `
"
  1 | const index = foo.indexOf(bar); index === -1
"
`;

exports[`invalid(1): 'const index = foo.indexOf(bar); index…' > Code 1`] = `
"
  1 | const index = foo.indexOf(bar); index >= 0
"
`;

exports[`invalid(1): 'const index = foo.indexOf(bar); index…' > Error 1/1 1`] = `
"
> 1 | const index = foo.indexOf(bar); index >= 0
    |                                       ^^^^ Prefer \`!== -1\` over \`>= 0\` to check existence.
"
`;

exports[`invalid(1): 'const index = foo.indexOf(bar); index…' > Output 1`] = `
"
  1 | const index = foo.indexOf(bar); index !== -1
"
`;

exports[`invalid(2): 'const index = foo.indexOf(bar); index…' > Code 1`] = `
"
  1 | const index = foo.indexOf(bar); index > -1
"
`;

exports[`invalid(2): 'const index = foo.indexOf(bar); index…' > Error 1/1 1`] = `
"
> 1 | const index = foo.indexOf(bar); index > -1
    |                                       ^^^^ Prefer \`!== -1\` over \`> -1\` to check existence.
"
`;

exports[`invalid(2): 'const index = foo.indexOf(bar); index…' > Output 1`] = `
"
  1 | const index = foo.indexOf(bar); index !== -1
"
`;

exports[`invalid(3): 'const index = foo.indexOf(bar); index…' > Code 1`] = `
"
  1 | const index = foo.indexOf(bar); index < 0
"
`;

exports[`invalid(3): 'const index = foo.indexOf(bar); index…' > Error 1/1 1`] = `
"
> 1 | const index = foo.indexOf(bar); index < 0
    |                                       ^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
"
`;

exports[`invalid(3): 'const index = foo.indexOf(bar); index…' > Output 1`] = `
"
  1 | const index = foo.indexOf(bar); index === -1
"
`;

exports[`invalid(4): 'const index = foo.lastIndexOf(bar); i…' > Code 1`] = `
"
  1 | const index = foo.lastIndexOf(bar); index < 0
"
`;

exports[`invalid(4): 'const index = foo.lastIndexOf(bar); i…' > Error 1/1 1`] = `
"
> 1 | const index = foo.lastIndexOf(bar); index < 0
    |                                           ^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
"
`;

exports[`invalid(4): 'const index = foo.lastIndexOf(bar); i…' > Output 1`] = `
"
  1 | const index = foo.lastIndexOf(bar); index === -1
"
`;

exports[`invalid(5): 'const index = foo.findIndex(bar); ind…' > Code 1`] = `
"
  1 | const index = foo.findIndex(bar); index < 0
"
`;

exports[`invalid(5): 'const index = foo.findIndex(bar); ind…' > Error 1/1 1`] = `
"
> 1 | const index = foo.findIndex(bar); index < 0
    |                                         ^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
"
`;

exports[`invalid(5): 'const index = foo.findIndex(bar); ind…' > Output 1`] = `
"
  1 | const index = foo.findIndex(bar); index === -1
"
`;

exports[`invalid(6): 'const index = foo.findLastIndex(bar);…' > Code 1`] = `
"
  1 | const index = foo.findLastIndex(bar); index < 0
"
`;

exports[`invalid(6): 'const index = foo.findLastIndex(bar);…' > Error 1/1 1`] = `
"
> 1 | const index = foo.findLastIndex(bar); index < 0
    |                                             ^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
"
`;

exports[`invalid(6): 'const index = foo.findLastIndex(bar);…' > Output 1`] = `
"
  1 | const index = foo.findLastIndex(bar); index === -1
"
`;

exports[`invalid(7): 'const index = foo.indexOf(bar);\\n\\nfu…' > Code 1`] = `
"
  1 | const index = foo.indexOf(bar);
  2 |
  3 | function foo () {
  4 | 	if (index < 0) {}
  5 | }
"
`;

exports[`invalid(7): 'const index = foo.indexOf(bar);\\n\\nfu…' > Error 1/1 1`] = `
"
  1 | const index = foo.indexOf(bar);
  2 |
  3 | function foo () {
> 4 | 	if (index < 0) {}
    | 	          ^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
  5 | }
"
`;

exports[`invalid(7): 'const index = foo.indexOf(bar);\\n\\nfu…' > Output 1`] = `
"
  1 | const index = foo.indexOf(bar);
  2 |
  3 | function foo () {
  4 | 	if (index === -1) {}
  5 | }
"
`;

exports[`invalid(8): 'const index1 = foo.indexOf("1"),\\n\\ti…' > Code 1`] = `
"
  1 | const index1 = foo.indexOf("1"),
  2 | 	index2 = foo.indexOf("2");
  3 | index1 < 0;
  4 | index2 >= 0;
"
`;

exports[`invalid(8): 'const index1 = foo.indexOf("1"),\\n\\ti…' > Error 1/2 1`] = `
"
  1 | const index1 = foo.indexOf("1"),
  2 | 	index2 = foo.indexOf("2");
> 3 | index1 < 0;
    |        ^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
  4 | index2 >= 0;
"
`;

exports[`invalid(8): 'const index1 = foo.indexOf("1"),\\n\\ti…' > Error 2/2 1`] = `
"
  1 | const index1 = foo.indexOf("1"),
  2 | 	index2 = foo.indexOf("2");
  3 | index1 < 0;
> 4 | index2 >= 0;
    |        ^^^^ Prefer \`!== -1\` over \`>= 0\` to check existence.
"
`;

exports[`invalid(8): 'const index1 = foo.indexOf("1"),\\n\\ti…' > Output 1`] = `
"
  1 | const index1 = foo.indexOf("1"),
  2 | 	index2 = foo.indexOf("2");
  3 | index1 === -1;
  4 | index2 !== -1;
"
`;

exports[`invalid(9): 'const index = foo.indexOf(\\'1\\');\\n((…' > Code 1`] = `
"
   1 | const index = foo.indexOf('1');
   2 | ((
   3 | 	/* comment 1 */
   4 | 	((
   5 | 		/* comment 2 */
   6 | 		index
   7 | 		/* comment 3 */
   8 | 	))
   9 | 	/* comment 4 */
  10 | 	<
  11 | 	/* comment 5 */
  12 | 	((
  13 | 		/* comment 6 */
  14 | 		0
  15 | 		/* comment 7 */
  16 | 	))
  17 | 	/* comment 8 */
  18 | ));
"
`;

exports[`invalid(9): 'const index = foo.indexOf(\\'1\\');\\n((…' > Error 1/1 1`] = `
"
   1 | const index = foo.indexOf('1');
   2 | ((
   3 | 	/* comment 1 */
   4 | 	((
   5 | 		/* comment 2 */
   6 | 		index
   7 | 		/* comment 3 */
   8 | 	))
   9 | 	/* comment 4 */
> 10 | 	<
     | 	^
> 11 | 	/* comment 5 */
     | ^^^^^^^^^^^^^^^^
> 12 | 	((
     | ^^^^^^^^^^^^^^^^
> 13 | 		/* comment 6 */
     | ^^^^^^^^^^^^^^^^
> 14 | 		0
     | ^^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
  15 | 		/* comment 7 */
  16 | 	))
  17 | 	/* comment 8 */
  18 | ));
"
`;

exports[`invalid(9): 'const index = foo.indexOf(\\'1\\');\\n((…' > Output 1`] = `
"
   1 | const index = foo.indexOf('1');
   2 | ((
   3 | 	/* comment 1 */
   4 | 	((
   5 | 		/* comment 2 */
   6 | 		index
   7 | 		/* comment 3 */
   8 | 	))
   9 | 	/* comment 4 */
  10 | 	===
  11 | 	/* comment 5 */
  12 | 	((
  13 | 		/* comment 6 */
  14 | 		-1
  15 | 		/* comment 7 */
  16 | 	))
  17 | 	/* comment 8 */
  18 | ));
"
`;

exports[`invalid(10): 'const index = foo.indexOf(\\'1\\');\\n((…' > Code 1`] = `
"
   1 | const index = foo.indexOf('1');
   2 | ((
   3 | 	/* comment 1 */
   4 | 	((
   5 | 		/* comment 2 */
   6 | 		index
   7 | 		/* comment 3 */
   8 | 	))
   9 | 	/* comment 4 */
  10 | 	>
  11 | 	((
  12 | 		/* comment 5 */
  13 | 		- /* comment 6 */ (( /* comment 7 */ 1 /* comment 8 */ ))
  14 | 		/* comment 9 */
  15 | 	))
  16 | ));
"
`;

exports[`invalid(10): 'const index = foo.indexOf(\\'1\\');\\n((…' > Error 1/1 1`] = `
"
   1 | const index = foo.indexOf('1');
   2 | ((
   3 | 	/* comment 1 */
   4 | 	((
   5 | 		/* comment 2 */
   6 | 		index
   7 | 		/* comment 3 */
   8 | 	))
   9 | 	/* comment 4 */
> 10 | 	>
     | 	^
> 11 | 	((
     | ^^^
> 12 | 		/* comment 5 */
     | ^^^
> 13 | 		- /* comment 6 */ (( /* comment 7 */ 1 /* comment 8 */ ))
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer \`!== -1\` over \`> -1\` to check existence.
  14 | 		/* comment 9 */
  15 | 	))
  16 | ));
"
`;

exports[`invalid(10): 'const index = foo.indexOf(\\'1\\');\\n((…' > Output 1`] = `
"
   1 | const index = foo.indexOf('1');
   2 | ((
   3 | 	/* comment 1 */
   4 | 	((
   5 | 		/* comment 2 */
   6 | 		index
   7 | 		/* comment 3 */
   8 | 	))
   9 | 	/* comment 4 */
  10 | 	!==
  11 | 	((
  12 | 		/* comment 5 */
  13 | 		- /* comment 6 */ (( /* comment 7 */ 1 /* comment 8 */ ))
  14 | 		/* comment 9 */
  15 | 	))
  16 | ));
"
`;

exports[`invalid(11): 'const index = _.indexOf([1, 2, 1, 2],…' > Code 1`] = `
"
  1 | const index = _.indexOf([1, 2, 1, 2], 2); index < 0;
"
`;

exports[`invalid(11): 'const index = _.indexOf([1, 2, 1, 2],…' > Error 1/1 1`] = `
"
> 1 | const index = _.indexOf([1, 2, 1, 2], 2); index < 0;
    |                                                 ^^^ Prefer \`=== -1\` over \`< 0\` to check non-existence.
"
`;

exports[`invalid(11): 'const index = _.indexOf([1, 2, 1, 2],…' > Output 1`] = `
"
  1 | const index = _.indexOf([1, 2, 1, 2], 2); index === -1;
"
`;
