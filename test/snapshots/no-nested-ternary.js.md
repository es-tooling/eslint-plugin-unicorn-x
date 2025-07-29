// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'const foo = i > 5 ? i < 100 ? true : …' > Code 1`] = `
"
  1 | const foo = i > 5 ? i < 100 ? true : false : i < 100 ? true : false;
"
`;

exports[`invalid(0): 'const foo = i > 5 ? i < 100 ? true : …' > Error 1/2 1`] = `
"
> 1 | const foo = i > 5 ? i < 100 ? true : false : i < 100 ? true : false;
    |                     ^^^^^^^^^^^^^^^^^^^^^^ Nested ternary expression should be parenthesized.
"
`;

exports[`invalid(0): 'const foo = i > 5 ? i < 100 ? true : …' > Error 2/2 1`] = `
"
> 1 | const foo = i > 5 ? i < 100 ? true : false : i < 100 ? true : false;
    |                                              ^^^^^^^^^^^^^^^^^^^^^^ Nested ternary expression should be parenthesized.
"
`;

exports[`invalid(0): 'const foo = i > 5 ? i < 100 ? true : …' > Output 1`] = `
"
  1 | const foo = i > 5 ? (i < 100 ? true : false) : (i < 100 ? true : false);
"
`;

exports[`invalid(1): 'const foo = i > 5 ? true : (i < 100 ?…' > Code 1`] = `
"
  1 | const foo = i > 5 ? true : (i < 100 ? true : (i < 1000 ? true : false));
"
`;

exports[`invalid(1): 'const foo = i > 5 ? true : (i < 100 ?…' > Error 1/1 1`] = `
"
> 1 | const foo = i > 5 ? true : (i < 100 ? true : (i < 1000 ? true : false));
    |                                               ^^^^^^^^^^^^^^^^^^^^^^^ Do not nest ternary expressions.
"
`;

exports[`invalid(2): 'const foo = a ?\\n\\tb :\\n\\t(\\n\\t\\tc ?\\…' > Code 1`] = `
"
   1 | const foo = a ?
   2 | 	b :
   3 | 	(
   4 | 		c ?
   5 | 			d :
   6 | 			(
   7 | 				e ?
   8 | 					f :
   9 | 					(g ? h : i)
  10 | 			)
  11 | 	)
"
`;

exports[`invalid(2): 'const foo = a ?\\n\\tb :\\n\\t(\\n\\t\\tc ?\\…' > Error 1/1 1`] = `
"
   1 | const foo = a ?
   2 | 	b :
   3 | 	(
   4 | 		c ?
   5 | 			d :
   6 | 			(
>  7 | 				e ?
     | 				^^^
>  8 | 					f :
     | ^^^^^^^^
>  9 | 					(g ? h : i)
     | ^^^^^^^^^^^^^^^^^ Do not nest ternary expressions.
  10 | 			)
  11 | 	)
"
`;
