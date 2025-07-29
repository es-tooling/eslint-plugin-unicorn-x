// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'foo.join()' > Code 1`] = `
"
  1 | foo.join()
"
`;

exports[`invalid(0): 'foo.join()' > Error 1/1 1`] = `
"
> 1 | foo.join()
    |         ^^ Missing the separator argument.
"
`;

exports[`invalid(0): 'foo.join()' > Output 1`] = `
"
  1 | foo.join(',')
"
`;

exports[`invalid(1): '[].join.call(foo)' > Code 1`] = `
"
  1 | [].join.call(foo)
"
`;

exports[`invalid(1): '[].join.call(foo)' > Error 1/1 1`] = `
"
> 1 | [].join.call(foo)
    |                 ^ Missing the separator argument.
"
`;

exports[`invalid(1): '[].join.call(foo)' > Output 1`] = `
"
  1 | [].join.call(foo, ',')
"
`;

exports[`invalid(2): '[].join.call(foo,)' > Code 1`] = `
"
  1 | [].join.call(foo,)
"
`;

exports[`invalid(2): '[].join.call(foo,)' > Error 1/1 1`] = `
"
> 1 | [].join.call(foo,)
    |                  ^ Missing the separator argument.
"
`;

exports[`invalid(2): '[].join.call(foo,)' > Output 1`] = `
"
  1 | [].join.call(foo, ',',)
"
`;

exports[`invalid(3): '[].join.call(foo , );' > Code 1`] = `
"
  1 | [].join.call(foo , );
"
`;

exports[`invalid(3): '[].join.call(foo , );' > Error 1/1 1`] = `
"
> 1 | [].join.call(foo , );
    |                   ^^ Missing the separator argument.
"
`;

exports[`invalid(3): '[].join.call(foo , );' > Output 1`] = `
"
  1 | [].join.call(foo ,  ',',);
"
`;

exports[`invalid(4): 'Array.prototype.join.call(foo)' > Code 1`] = `
"
  1 | Array.prototype.join.call(foo)
"
`;

exports[`invalid(4): 'Array.prototype.join.call(foo)' > Error 1/1 1`] = `
"
> 1 | Array.prototype.join.call(foo)
    |                              ^ Missing the separator argument.
"
`;

exports[`invalid(4): 'Array.prototype.join.call(foo)' > Output 1`] = `
"
  1 | Array.prototype.join.call(foo, ',')
"
`;

exports[`invalid(5): 'Array.prototype.join.call(foo, )' > Code 1`] = `
"
  1 | Array.prototype.join.call(foo, )
"
`;

exports[`invalid(5): 'Array.prototype.join.call(foo, )' > Error 1/1 1`] = `
"
> 1 | Array.prototype.join.call(foo, )
    |                               ^^ Missing the separator argument.
"
`;

exports[`invalid(5): 'Array.prototype.join.call(foo, )' > Output 1`] = `
"
  1 | Array.prototype.join.call(foo,  ',',)
"
`;

exports[`invalid(6): '(\\n\\t/**/\\n\\t[\\n\\t\\t/**/\\n\\t]\\n\\t\\t/*…' > Code 1`] = `
"
   1 | (
   2 | 	/**/
   3 | 	[
   4 | 		/**/
   5 | 	]
   6 | 		/**/
   7 | 		.
   8 | 		/**/
   9 | 		join
  10 | 		/**/
  11 | 		.
  12 | 		/**/
  13 | 		call
  14 | 		/**/
  15 | 		(
  16 | 			/**/
  17 | 			(
  18 | 				/**/
  19 | 				foo
  20 | 				/**/
  21 | 			)
  22 | 			/**/
  23 | 			,
  24 | 			/**/
  25 | 		)/**/
  26 | )
"
`;

exports[`invalid(6): '(\\n\\t/**/\\n\\t[\\n\\t\\t/**/\\n\\t]\\n\\t\\t/*…' > Error 1/1 1`] = `
"
   1 | (
   2 | 	/**/
   3 | 	[
   4 | 		/**/
   5 | 	]
   6 | 		/**/
   7 | 		.
   8 | 		/**/
   9 | 		join
  10 | 		/**/
  11 | 		.
  12 | 		/**/
  13 | 		call
  14 | 		/**/
  15 | 		(
  16 | 			/**/
  17 | 			(
  18 | 				/**/
  19 | 				foo
  20 | 				/**/
  21 | 			)
  22 | 			/**/
> 23 | 			,
     | 			 ^
> 24 | 			/**/
     | ^^^^^^^
> 25 | 		)/**/
     | ^^^^ Missing the separator argument.
  26 | )
"
`;

exports[`invalid(6): '(\\n\\t/**/\\n\\t[\\n\\t\\t/**/\\n\\t]\\n\\t\\t/*…' > Output 1`] = `
"
   1 | (
   2 | 	/**/
   3 | 	[
   4 | 		/**/
   5 | 	]
   6 | 		/**/
   7 | 		.
   8 | 		/**/
   9 | 		join
  10 | 		/**/
  11 | 		.
  12 | 		/**/
  13 | 		call
  14 | 		/**/
  15 | 		(
  16 | 			/**/
  17 | 			(
  18 | 				/**/
  19 | 				foo
  20 | 				/**/
  21 | 			)
  22 | 			/**/
  23 | 			,
  24 | 			/**/
  25 | 		 ',',)/**/
  26 | )
"
`;

exports[`invalid(7): 'foo?.join()' > Code 1`] = `
"
  1 | foo?.join()
"
`;

exports[`invalid(7): 'foo?.join()' > Error 1/1 1`] = `
"
> 1 | foo?.join()
    |          ^^ Missing the separator argument.
"
`;

exports[`invalid(7): 'foo?.join()' > Output 1`] = `
"
  1 | foo?.join(',')
"
`;
