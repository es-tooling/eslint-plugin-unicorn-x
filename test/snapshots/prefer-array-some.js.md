// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`invalid(0): 'array.filter(fn).length > 0' > Code 1`] = `
"
  1 | array.filter(fn).length > 0
"
`;

exports[`invalid(0): 'array.filter(fn).length > 0' > Error 1/1 1`] = `
"
> 1 | array.filter(fn).length > 0
    |       ^^^^^^ Prefer \`.some(…)\` over non-zero length check from \`.filter(…)\`.
"
`;

exports[`invalid(0): 'array.filter(fn).length > 0' > Output 1`] = `
"
  1 | array.some(fn)
"
`;

exports[`invalid(0): 'foo.find(fn) == null' > Code 1`] = `
"
  1 | foo.find(fn) == null
"
`;

exports[`invalid(0): 'foo.find(fn) == null' > Error 1/1 1`] = `
"
> 1 | foo.find(fn) == null
    |     ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | !foo.some(fn)
"
`;

exports[`invalid(0): 'foo.findIndex(bar) !== -1' > Code 1`] = `
"
  1 | foo.findIndex(bar) !== -1
"
`;

exports[`invalid(0): 'foo.findIndex(bar) !== -1' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(bar) !== -1
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(0): 'foo.findIndex(bar) !== -1' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(0): 'if (array.find(element => element ===…' > Code 1`] = `
"
  1 | if (array.find(element => element === "🦄")) {}
"
`;

exports[`invalid(0): 'if (array.find(element => element ===…' > Error 1/1 1`] = `
"
> 1 | if (array.find(element => element === "🦄")) {}
    |           ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | if (array.some(element => element === "🦄")) {}
"
`;

exports[`invalid(1): 'array.filter(fn).length !== 0' > Code 1`] = `
"
  1 | array.filter(fn).length !== 0
"
`;

exports[`invalid(1): 'array.filter(fn).length !== 0' > Error 1/1 1`] = `
"
> 1 | array.filter(fn).length !== 0
    |       ^^^^^^ Prefer \`.some(…)\` over non-zero length check from \`.filter(…)\`.
"
`;

exports[`invalid(1): 'array.filter(fn).length !== 0' > Output 1`] = `
"
  1 | array.some(fn)
"
`;

exports[`invalid(1): 'const foo = array.find(element => ele…' > Code 1`] = `
"
  1 | const foo = array.find(element => element === "🦄") ? bar : baz;
"
`;

exports[`invalid(1): 'const foo = array.find(element => ele…' > Error 1/1 1`] = `
"
> 1 | const foo = array.find(element => element === "🦄") ? bar : baz;
    |                   ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | const foo = array.some(element => element === "🦄") ? bar : baz;
"
`;

exports[`invalid(1): 'foo.find(fn) == undefined' > Code 1`] = `
"
  1 | foo.find(fn) == undefined
"
`;

exports[`invalid(1): 'foo.find(fn) == undefined' > Error 1/1 1`] = `
"
> 1 | foo.find(fn) == undefined
    |     ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | !foo.some(fn)
"
`;

exports[`invalid(1): 'foo.findLastIndex(bar) !== -1' > Code 1`] = `
"
  1 | foo.findLastIndex(bar) !== -1
"
`;

exports[`invalid(1): 'foo.findLastIndex(bar) !== -1' > Error 1/1 1`] = `
"
> 1 | foo.findLastIndex(bar) !== -1
    |     ^^^^^^^^^^^^^ Prefer \`.some(…)\` over \`.findLastIndex(…)\`.
"
`;

exports[`invalid(1): 'foo.findLastIndex(bar) !== -1' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(2): 'foo.find(fn) === undefined' > Code 1`] = `
"
  1 | foo.find(fn) === undefined
"
`;

exports[`invalid(2): 'foo.find(fn) === undefined' > Error 1/1 1`] = `
"
> 1 | foo.find(fn) === undefined
    |     ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | !foo.some(fn)
"
`;

exports[`invalid(2): 'foo.findIndex(bar) != -1' > Code 1`] = `
"
  1 | foo.findIndex(bar) != -1
"
`;

exports[`invalid(2): 'foo.findIndex(bar) != -1' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(bar) != -1
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(2): 'foo.findIndex(bar) != -1' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(2): 'if (\\n\\t((\\n\\t\\t((\\n\\t\\t\\t((\\n\\t\\t\\t\\…' > Code 1`] = `
"
   1 | if (
   2 | 	((
   3 | 		((
   4 | 			((
   5 | 				((
   6 | 					array
   7 | 				))
   8 | 					.filter(what_ever_here)
   9 | 			))
  10 | 				.length
  11 | 		))
  12 | 		>
  13 | 		(( 0 ))
  14 | 	))
  15 | );
"
`;

exports[`invalid(2): 'if (\\n\\t((\\n\\t\\t((\\n\\t\\t\\t((\\n\\t\\t\\t\\…' > Error 1/1 1`] = `
"
   1 | if (
   2 | 	((
   3 | 		((
   4 | 			((
   5 | 				((
   6 | 					array
   7 | 				))
>  8 | 					.filter(what_ever_here)
     | 					 ^^^^^^ Prefer \`.some(…)\` over non-zero length check from \`.filter(…)\`.
   9 | 			))
  10 | 				.length
  11 | 		))
  12 | 		>
  13 | 		(( 0 ))
  14 | 	))
  15 | );
"
`;

exports[`invalid(2): 'if (\\n\\t((\\n\\t\\t((\\n\\t\\t\\t((\\n\\t\\t\\t\\…' > Output 1`] = `
"
   1 | if (
   2 | 	((
   3 | 		((
   4 | 			((
   5 | 				((
   6 | 					array
   7 | 				))
   8 | 					.some(what_ever_here)
   9 | 			))
  10 | 		))
  11 | 	))
  12 | );
"
`;

exports[`invalid(2): 'if (\\n\\tarray\\n\\t\\t.find(element => A…' > Code 1`] = `
"
  1 | if (
  2 | 	array
  3 | 		.find(element => Array.isArray(element))
  4 | 	// ^^^^ This should NOT report
  5 | 		.find(x => x === 0)
  6 | 	// ^^^^ This should report
  7 | ) {
  8 | }
"
`;

exports[`invalid(2): 'if (\\n\\tarray\\n\\t\\t.find(element => A…' > Error 1/1 1`] = `
"
  1 | if (
  2 | 	array
  3 | 		.find(element => Array.isArray(element))
  4 | 	// ^^^^ This should NOT report
> 5 | 		.find(x => x === 0)
    | 		 ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.
  6 | 	// ^^^^ This should report
  7 | ) {
  8 | }

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | if (
  2 | 	array
  3 | 		.find(element => Array.isArray(element))
  4 | 	// ^^^^ This should NOT report
  5 | 		.some(x => x === 0)
  6 | 	// ^^^^ This should report
  7 | ) {
  8 | }
"
`;

exports[`invalid(3): 'foo.find(fn) != null' > Code 1`] = `
"
  1 | foo.find(fn) != null
"
`;

exports[`invalid(3): 'foo.find(fn) != null' > Error 1/1 1`] = `
"
> 1 | foo.find(fn) != null
    |     ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | foo.some(fn)
"
`;

exports[`invalid(3): 'foo.findLastIndex(bar) != -1' > Code 1`] = `
"
  1 | foo.findLastIndex(bar) != -1
"
`;

exports[`invalid(3): 'foo.findLastIndex(bar) != -1' > Error 1/1 1`] = `
"
> 1 | foo.findLastIndex(bar) != -1
    |     ^^^^^^^^^^^^^ Prefer \`.some(…)\` over \`.findLastIndex(…)\`.
"
`;

exports[`invalid(3): 'foo.findLastIndex(bar) != -1' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(4): 'foo.find(fn) != undefined' > Code 1`] = `
"
  1 | foo.find(fn) != undefined
"
`;

exports[`invalid(4): 'foo.find(fn) != undefined' > Error 1/1 1`] = `
"
> 1 | foo.find(fn) != undefined
    |     ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | foo.some(fn)
"
`;

exports[`invalid(4): 'foo.findIndex(bar) > - 1' > Code 1`] = `
"
  1 | foo.findIndex(bar) > - 1
"
`;

exports[`invalid(4): 'foo.findIndex(bar) > - 1' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(bar) > - 1
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(4): 'foo.findIndex(bar) > - 1' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(5): 'foo.find(fn) !== undefined' > Code 1`] = `
"
  1 | foo.find(fn) !== undefined
"
`;

exports[`invalid(5): 'foo.find(fn) !== undefined' > Error 1/1 1`] = `
"
> 1 | foo.find(fn) !== undefined
    |     ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | foo.some(fn)
"
`;

exports[`invalid(5): 'foo.findLastIndex(bar) > - 1' > Code 1`] = `
"
  1 | foo.findLastIndex(bar) > - 1
"
`;

exports[`invalid(5): 'foo.findLastIndex(bar) > - 1' > Error 1/1 1`] = `
"
> 1 | foo.findLastIndex(bar) > - 1
    |     ^^^^^^^^^^^^^ Prefer \`.some(…)\` over \`.findLastIndex(…)\`.
"
`;

exports[`invalid(5): 'foo.findLastIndex(bar) > - 1' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(6): 'a = (( ((foo.find(fn))) == ((null)) )…' > Code 1`] = `
"
  1 | a = (( ((foo.find(fn))) == ((null)) )) ? "no" : "yes";
"
`;

exports[`invalid(6): 'a = (( ((foo.find(fn))) == ((null)) )…' > Error 1/1 1`] = `
"
> 1 | a = (( ((foo.find(fn))) == ((null)) )) ? "no" : "yes";
    |              ^^^^ Prefer \`.some(…)\` over \`.find(…)\`.

--------------------------------------------------------------------------------
Suggestion 1/1: Replace \`.find(…)\` with \`.some(…)\`.
  1 | a = (( !((foo.some(fn))) )) ? "no" : "yes";
"
`;

exports[`invalid(6): 'foo.findIndex(bar) === -1' > Code 1`] = `
"
  1 | foo.findIndex(bar) === -1
"
`;

exports[`invalid(6): 'foo.findIndex(bar) === -1' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(bar) === -1
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(6): 'foo.findIndex(bar) === -1' > Output 1`] = `
"
  1 | !foo.some(bar) 
"
`;

exports[`invalid(7): 'foo.findLastIndex(bar) === -1' > Code 1`] = `
"
  1 | foo.findLastIndex(bar) === -1
"
`;

exports[`invalid(7): 'foo.findLastIndex(bar) === -1' > Error 1/1 1`] = `
"
> 1 | foo.findLastIndex(bar) === -1
    |     ^^^^^^^^^^^^^ Prefer \`.some(…)\` over \`.findLastIndex(…)\`.
"
`;

exports[`invalid(7): 'foo.findLastIndex(bar) === -1' > Output 1`] = `
"
  1 | !foo.some(bar) 
"
`;

exports[`invalid(8): 'foo.findIndex(bar) == - 1' > Code 1`] = `
"
  1 | foo.findIndex(bar) == - 1
"
`;

exports[`invalid(8): 'foo.findIndex(bar) == - 1' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(bar) == - 1
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(8): 'foo.findIndex(bar) == - 1' > Output 1`] = `
"
  1 | !foo.some(bar) 
"
`;

exports[`invalid(9): 'foo.findLastIndex(bar) == - 1' > Code 1`] = `
"
  1 | foo.findLastIndex(bar) == - 1
"
`;

exports[`invalid(9): 'foo.findLastIndex(bar) == - 1' > Error 1/1 1`] = `
"
> 1 | foo.findLastIndex(bar) == - 1
    |     ^^^^^^^^^^^^^ Prefer \`.some(…)\` over \`.findLastIndex(…)\`.
"
`;

exports[`invalid(9): 'foo.findLastIndex(bar) == - 1' > Output 1`] = `
"
  1 | !foo.some(bar) 
"
`;

exports[`invalid(10): 'foo.findIndex(bar) >= 0' > Code 1`] = `
"
  1 | foo.findIndex(bar) >= 0
"
`;

exports[`invalid(10): 'foo.findIndex(bar) >= 0' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(bar) >= 0
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(10): 'foo.findIndex(bar) >= 0' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(11): 'foo.findLastIndex(bar) >= 0' > Code 1`] = `
"
  1 | foo.findLastIndex(bar) >= 0
"
`;

exports[`invalid(11): 'foo.findLastIndex(bar) >= 0' > Error 1/1 1`] = `
"
> 1 | foo.findLastIndex(bar) >= 0
    |     ^^^^^^^^^^^^^ Prefer \`.some(…)\` over \`.findLastIndex(…)\`.
"
`;

exports[`invalid(11): 'foo.findLastIndex(bar) >= 0' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(12): 'foo.findIndex(bar) < 0' > Code 1`] = `
"
  1 | foo.findIndex(bar) < 0
"
`;

exports[`invalid(12): 'foo.findIndex(bar) < 0' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(bar) < 0
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(12): 'foo.findIndex(bar) < 0' > Output 1`] = `
"
  1 | !foo.some(bar) 
"
`;

exports[`invalid(13): 'foo.findLastIndex(bar) < 0' > Code 1`] = `
"
  1 | foo.findLastIndex(bar) < 0
"
`;

exports[`invalid(13): 'foo.findLastIndex(bar) < 0' > Error 1/1 1`] = `
"
> 1 | foo.findLastIndex(bar) < 0
    |     ^^^^^^^^^^^^^ Prefer \`.some(…)\` over \`.findLastIndex(…)\`.
"
`;

exports[`invalid(13): 'foo.findLastIndex(bar) < 0' > Output 1`] = `
"
  1 | !foo.some(bar) 
"
`;

exports[`invalid(14): 'foo.findIndex(bar) !== (( - 1 ))' > Code 1`] = `
"
  1 | foo.findIndex(bar) !== (( - 1 ))
"
`;

exports[`invalid(14): 'foo.findIndex(bar) !== (( - 1 ))' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(bar) !== (( - 1 ))
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(14): 'foo.findIndex(bar) !== (( - 1 ))' > Output 1`] = `
"
  1 | foo.some(bar) 
"
`;

exports[`invalid(15): 'foo.findIndex(element => element.bar …' > Code 1`] = `
"
  1 | foo.findIndex(element => element.bar === 1) !== (( - 1 ))
"
`;

exports[`invalid(15): 'foo.findIndex(element => element.bar …' > Error 1/1 1`] = `
"
> 1 | foo.findIndex(element => element.bar === 1) !== (( - 1 ))
    |     ^^^^^^^^^ Prefer \`.some(…)\` over \`.findIndex(…)\`.
"
`;

exports[`invalid(15): 'foo.findIndex(element => element.bar …' > Output 1`] = `
"
  1 | foo.some(element => element.bar === 1) 
"
`;
